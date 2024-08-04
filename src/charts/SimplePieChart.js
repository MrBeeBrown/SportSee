import React, { PureComponent } from 'react';
import { PieChart, Pie, Tooltip, ResponsiveContainer } from 'recharts';

export default class SimplePieChart extends PureComponent {

  render() {
    const { data } = this.props;

    return (
      <ResponsiveContainer width="100%" height="100%" minWidth={260} minHeight={260}>
        <PieChart width={260} height={260}>
          <Pie dataKey="value" data={data} cx={500} cy={200} innerRadius={60} outerRadius={80} fill="#82ca9d" />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    );
  }
}
