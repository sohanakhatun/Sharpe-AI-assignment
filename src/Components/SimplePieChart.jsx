import React from 'react';
import { PieChart, Pie, Cell, Legend, Tooltip } from 'recharts';



const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

const SimplePieChart = ({data}) => {
  return (
    <PieChart width={400} height={400}>
      <Pie
        data={data}
        dataKey="value"
        cx={200}
        cy={200}
        outerRadius={80}
        fill="#8884d8"
        label
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  );
};

export default SimplePieChart;
