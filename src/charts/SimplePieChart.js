import React, { PureComponent } from 'react';
import { PieChart, Pie, Tooltip, ResponsiveContainer } from 'recharts';

export default class SimplePieChart extends PureComponent {

  render() {
    const { data } = this.props;

    return (
      <ResponsiveContainer width="100%" height="100%" minWidth={260} minHeight={260}>
        <PieChart width={400} height={400}>
          <Pie dataKey="score" data={data} cx={500} cy={200} innerRadius={40} outerRadius={80} fill="#82ca9d" />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    );
  }
}
