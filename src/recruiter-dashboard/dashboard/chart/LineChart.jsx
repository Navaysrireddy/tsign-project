 import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import { useTheme } from '../../context/ThemeContext';
import { getLineChartOptions } from '../../utils/chartOptions';

const AreaChart = ({ labels, datasets }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';

  useEffect(() => {
    if (!chartRef.current) return;

    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const ctx = chartRef.current.getContext('2d');

    if (ctx) {
      const updatedDatasets = datasets.map(dataset => {
        // Create gradient fill
        const gradient = ctx.createLinearGradient(0, 0, 0, ctx.canvas.height);
        gradient.addColorStop(0, `${dataset.borderColor}33`); // 20% opacity at top
        gradient.addColorStop(1, `${dataset.borderColor}00`); // transparent at bottom

        return {
          ...dataset,
          tension: 0.4, // smooth curve
          fill: true,
          backgroundColor: gradient,
          borderWidth: 2,
          pointRadius: 3,
          pointHoverRadius: 5,
          pointBackgroundColor: dataset.borderColor,
          pointBorderColor: isDarkMode ? '#1f2937' : '#ffffff'
        };
      });

      chartInstance.current = new Chart(ctx, {
        type: 'line',
        data: {
          labels,
          datasets: updatedDatasets
        },
        options: {
          ...getLineChartOptions(isDarkMode),
          elements: {
            line: {
              tension: 0.4
            }
          }
        }
      });
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
    // eslint-disable-next-line
  }, [labels, datasets, theme]);

  return (
    <canvas
      ref={chartRef}
      style={{ width: '100%', height: '350px' }}
    />
  );
};

export default AreaChart;
