import React from 'react';
import {
  ResponsiveContainer,
  PieChart as RechartsPieChart,
  Pie,
  Cell,
  Tooltip,
  Legend
} from 'recharts';
import { useTheme } from '../../context/ThemeContext';

const PieChart = (props) => {
  const {
    data,
    colors,
    title,
    height = 300,
    donut = false
  } = props;

  const { theme } = useTheme();
  const textColor = theme === 'dark' ? '#E5E7EB' : '#1F2937';
  const tooltipBg = theme === 'dark' ? '#1E1E1E' : '#FFFFFF';
  const tooltipBorder = theme === 'dark' ? '#4B5563' : '#D1D5DB';

  return (
    <div className={`rounded-xl p-4 ${theme === 'dark' ? 'bg-[#1E1E1E] border-gray-800' : 'bg-white border-gray-100'} border shadow-sm`}>
      {title && <h3 className="text-lg font-medium mb-4">{title}</h3>}
      <ResponsiveContainer width="100%" height={height}>
        <RechartsPieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={height / 3}
            innerRadius={donut ? height / 6 : 0}
            fill="#8884d8"
            dataKey="value"
            label={({ name, percent }) =>
              `${name}: ${(percent * 100).toFixed(0)}%`
            }
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              backgroundColor: tooltipBg,
              borderColor: tooltipBorder,
              color: textColor
            }}
            formatter={(value) => [`${value}`, 'Value']}
          />
          <Legend />
        </RechartsPieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PieChart;
