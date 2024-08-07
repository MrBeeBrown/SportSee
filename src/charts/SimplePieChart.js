import React, { PureComponent } from 'react';
import { PieChart, Pie, Tooltip, ResponsiveContainer } from 'recharts';

export default class SimplePieChart extends PureComponent {

  render() {
    const { data } = this.props;

    return (
      <ResponsiveContainer width="100%" height="100%" minWidth={200} minHeight={200}>
        <PieChart width="33%" height="33%">
          <Pie data={data} dataKey="value" startAngle={70}
            endAngle={180} cx={200} cy={200} innerRadius={60} outerRadius={80} fill="#FF0000" />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    );
  }
}
