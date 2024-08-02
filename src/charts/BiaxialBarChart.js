import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default class BiaxialBarChart extends PureComponent {
  render() {
    const { data } = this.props;
    return (
      <ResponsiveContainer width="100%" height="100%" minWidth={900} minHeight={320} >
        <BarChart width={900} height={320} data={data} margin={{ top: 0, right: 0, left: 0, bottom: 0 }} barSize={10}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis yAxisId="left" orientation="left" stroke="#282D30" />
          <YAxis yAxisId="right" orientation="right" stroke="#E60000" />
          <Tooltip />
          <Legend align='right' verticalAlign='top' iconType='circle' iconSize={10} />
          <Bar yAxisId="left" dataKey="Poids (kg)" fill="#282D30" />
          <Bar yAxisId="right" dataKey="Calories brûlées (Kcal)" fill="#E60000" />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}