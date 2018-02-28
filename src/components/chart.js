import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from 'recharts';

import './chart.css';

export default function Chart(props) {
  function makeChart() {
    return props.displayArray.map((item, index) => {
      return (
        <li key={index}>
          {item.name}: {item.value}
        </li>
      );
    });
  }
  return <div>
      <ul className="chart">{makeChart()}</ul>
      <ResponsiveContainer width="80%" height={250}>
        <BarChart data={props.displayArray}>
          <Bar type="monotone" dataKey="value" fill={props.color} />
          <CartesianGrid stroke="#ccc" vertical={false} />
          <Tooltip />
          <XAxis dataKey="name" />
          <YAxis dataKey="value" />
        </BarChart>
      </ResponsiveContainer>
    </div>;
}
