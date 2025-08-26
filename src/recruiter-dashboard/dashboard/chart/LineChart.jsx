 import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import { useTheme } from '../../context/ThemeContext';
import { getLineChartOptions } from '../../utils/chartOptions';

const LineChart = ({ labels, datasets }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';

  useEffect(() => {
    if (!chartRef.current) return;
    // Destroy existing chart
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }
    // Create new chart
    const ctx = chartRef.current.getContext('2d');
    if (ctx) {
      chartInstance.current = new Chart(ctx, {
        type: 'line',
        data: {
          labels,
          datasets: datasets.map(dataset => ({
            ...dataset,
            tension: 0.3,
            fill: true,
            pointBackgroundColor: dataset.borderColor,
            pointBorderColor: isDarkMode ? '#1f2937' : '#ffffff',
            pointBorderWidth: 2,
            pointRadius: 4,
            pointHoverRadius: 6
          }))
        },
        options: getLineChartOptions(isDarkMode)
      });
    }
    // Cleanup
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [labels, datasets, theme]);

  return <canvas ref={chartRef} />;
};

export default LineChart;
