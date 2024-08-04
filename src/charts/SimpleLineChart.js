import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default class SimpleLineChart extends PureComponent {

  render() {
    const { data } = this.props;

    function CustomTooltip({ payload, active }) {
      if (active) {
        return (
          <div className="custom-tooltip-line">
            <p className="label-line">{`${payload[0].value} min`}</p>
          </div>
        );
      }
      return null;
    }

    return (
      <ResponsiveContainer width="100%" height="100%" minWidth={300} minHeight={300} >
        <LineChart width={300} height={300} data={data} margin={{ top: 0, right: 0, left: 0, bottom: 0 }} >
          <CartesianGrid strokeDasharray="3 3" horizontal={false} vertical={false} fill='#FF0000' />
          <XAxis dataKey="day" />
          <YAxis hide={false} />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Line type="natural" dot={false} dataKey="sessionsLength" stroke="#FFFFFF" strokeWidth={2} activeDot={{ r: 6 }} />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}