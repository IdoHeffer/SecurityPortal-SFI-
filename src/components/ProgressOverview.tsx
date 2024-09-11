import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Legend } from 'recharts';
import { Developer } from '../types';
import '../styles/ProgressOverview.css';

interface ProgressOverviewProps {
  developer: Developer;
}

const ProgressOverview: React.FC<ProgressOverviewProps> = ({ developer }) => {
  // Example data for the bar chart
  const data = [
    { name: 'last month completed challenges', value: developer.progress },
    { name: 'current month completed challenges', value: 100 - developer.progress },
    { name: 'Future projection', value: 65 }
  ];

  return (
    <div className="progress-overview mb-4">
      <h2>Completed challenges Overview</h2>
      <BarChart
        width={900}
        height={300}
        data={data}
        margin={{ top: 20, right: 10, left: 10, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="value" fill="#4caf50" />
      </BarChart>
    </div>
  );
};

export default ProgressOverview;
