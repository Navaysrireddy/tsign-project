import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import { useTheme } from '../../context/ThemeContext';
import { getPieChartOptions } from '../../utils/chartOptions';


const PieChart = ({ labels, datasets }) => {
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
        type: 'pie',
        data: {
          labels,
          datasets: datasets.map(dataset => ({
            ...dataset,
            borderWidth: 2,
            borderColor: isDarkMode ? '#1f2937' : '#ffffff',
            hoverOffset: 15
          }))
        },
        options: getPieChartOptions(isDarkMode)
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

export default PieChart;
