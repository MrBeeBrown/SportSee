import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default class SimpleLineChart extends PureComponent {

  render() {
    const { data } = this.props;
    return (
      <ResponsiveContainer width="100%" height="100%" minWidth={260} minHeight={260} >
        <LineChart width={260} height={260} data={data} margin={{ top: 0, right: 0, left: 0, bottom: 0 }} >
          <CartesianGrid strokeDasharray="3 3" horizontal={false} vertical={false} fill='#FF0000' fillOpacity={0.7} />
          <XAxis dataKey="day" />
          <YAxis hide={true} />
          <Tooltip />
          <Legend verticalAlign='top' align='left' />
          <Line type="monotone" dataKey="sessionLength" stroke="#FFFFFF" activeDot={{ r: 6 }} />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}