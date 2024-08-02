import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default class BiaxialBarChart extends PureComponent {
  render() {
    const { data } = this.props;
    return (
      <ResponsiveContainer width="100%" height="100%" minWidth={900} minHeight={320}>
        <BarChart width={900} height={320} data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis yAxisId="left" orientation="left" stroke="#282D30" />
          <YAxis yAxisId="right" orientation="right" stroke="#E60000" />
          <Tooltip />
          <Legend />
          <Bar yAxisId="left" dataKey="kilogram" fill="#282D30" />
          <Bar yAxisId="right" dataKey="calories" fill="#E60000" />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}