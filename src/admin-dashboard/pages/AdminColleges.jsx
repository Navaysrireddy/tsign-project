import React from 'react';
import {
  RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
  RadialBarChart, RadialBar,
  ComposedChart, Line, Area, Bar,
  ScatterChart, Scatter, ZAxis,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  Legend
} from 'recharts';

const Admin_Colleges = () => {
  const collegeStats = {
    verified: 25,
    pending: 10,
    rejected: 8,
    hold: 7,
  };

  const radarData = Object.entries(collegeStats).map(([key, value]) => ({
    status: key.charAt(0).toUpperCase() + key.slice(1),
    value,
  }));

  const COLORS = ['#10b981', '#fbbf24', '#ef4444', '#6366f1'];

  const radialBarData = radarData.map((item, index) => ({
    name: item.status,
    value: item.value,
    fill: COLORS[index],
  }));

  const composedData = [
    { month: 'Jan', colleges: 5, new: 2 },
    { month: 'Feb', colleges: 6, new: 3 },
    { month: 'Mar', colleges: 8, new: 4 },
    { month: 'Apr', colleges: 10, new: 5 },
    { month: 'May', colleges: 12, new: 6 },
    { month: 'Jun', colleges: 9, new: 4 },
  ];

  const scatterData = [
    { x: 5, y: 25 },
    { x: 10, y: 30 },
    { x: 15, y: 45 },
    { x: 20, y: 35 },
    { x: 25, y: 50 },
  ];

  const styles = {
    container: { padding: '2rem', backgroundColor: '#f9fafb' },
    header: { fontSize: '1.5rem', fontWeight: '600', marginBottom: '1.5rem' },
    charts: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', flexWrap: 'wrap' },
    chartBox: {
      backgroundColor: '#fff',
      borderRadius: '8px',
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
      padding: '1rem',
      height: '320px',
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>College Analytics</h2>

      <div style={styles.charts}>
        {/* Radar Chart */}
        <div style={styles.chartBox}>
          <h4>Status Comparison (Radar)</h4>
          <ResponsiveContainer width="100%" height="90%">
            <RadarChart data={radarData}>
              <PolarGrid />
              <PolarAngleAxis dataKey="status" />
              <PolarRadiusAxis />
              <Radar name="Colleges" dataKey="value" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.6} />
              <Tooltip />
            </RadarChart>
          </ResponsiveContainer>
        </div>

        {/* Radial Bar Chart */}
        <div style={styles.chartBox}>
          <h4>Status Distribution (RadialBar)</h4>
          <ResponsiveContainer width="100%" height="90%">
            <RadialBarChart
              innerRadius="20%"
              outerRadius="90%"
              data={radialBarData}
              startAngle={180}
              endAngle={0}
            >
              <RadialBar minAngle={15} background clockWise dataKey="value" />
              <Legend iconSize={10} layout="vertical" verticalAlign="middle" align="right" />
              <Tooltip />
            </RadialBarChart>
          </ResponsiveContainer>
        </div>

        {/* Composed Chart */}
        <div style={styles.chartBox}>
          <h4>Composed Analytics</h4>
          <ResponsiveContainer width="100%" height="90%">
            <ComposedChart data={composedData}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <CartesianGrid stroke="#f5f5f5" />
              <Area type="monotone" dataKey="colleges" fill="#8884d8" stroke="#8884d8" />
              <Bar dataKey="new" barSize={20} fill="#413ea0" />
              <Line type="monotone" dataKey="new" stroke="#ff7300" />
            </ComposedChart>
          </ResponsiveContainer>
        </div>

        {/* Scatter Chart */}
        <div style={styles.chartBox}>
          <h4>Scatter Analysis</h4>
          <ResponsiveContainer width="100%" height="90%">
            <ScatterChart>
              <CartesianGrid />
              <XAxis type="number" dataKey="x" name="Applications" unit="K" />
              <YAxis type="number" dataKey="y" name="Verifications" unit="%" />
              <ZAxis range={[60, 400]} />
              <Tooltip cursor={{ strokeDasharray: '3 3' }} />
              <Scatter name="Colleges" data={scatterData} fill="#3b82f6" />
            </ScatterChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Admin_Colleges;