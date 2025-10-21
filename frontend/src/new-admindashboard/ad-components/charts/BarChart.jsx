import React from 'react';
import {
  ResponsiveContainer,
  BarChart as RechartsBarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from 'recharts';
import { useTheme } from '../../context/ThemeContext';

const BarChart = (props) => {
  const {
    data,
    xKey,
    yKeys,
    title,
    height = 300,
    stacked = false
  } = props;

  const { theme } = useTheme();
  const textColor = theme === 'dark' ? '#E5E7EB' : '#1F2937';
  const gridColor = theme === 'dark' ? '#374151' : '#E5E7EB';
  const tooltipBg = theme === 'dark' ? '#1E1E1E' : '#FFFFFF';
  const tooltipBorder = theme === 'dark' ? '#4B5563' : '#D1D5DB';

  return (
    <div className={`rounded-xl p-4 ${theme === 'dark' ? 'bg-[#1E1E1E] border-gray-800' : 'bg-white border-gray-100'} border shadow-sm`}>
      {title && <h3 className="text-lg font-medium mb-4">{title}</h3>}
      <ResponsiveContainer width="100%" height={height}>
        <RechartsBarChart
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
          <XAxis
            dataKey={xKey}
            tick={{ fill: textColor }}
            stroke={gridColor}
          />
          <YAxis
            tick={{ fill: textColor }}
            stroke={gridColor}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: tooltipBg,
              borderColor: tooltipBorder,
              color: textColor
            }}
          />
          <Legend />
          {yKeys.map((yKey, index) => (
            <Bar
              key={index}
              dataKey={yKey.key}
              name={yKey.name}
              fill={yKey.color}
              stackId={stacked ? 'stack' : undefined}
              radius={[4, 4, 0, 0]}
            />
          ))}
        </RechartsBarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChart;
