import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceArea } from 'recharts';
import { PropTypes } from 'prop-types';

export default class SimpleLineChart extends PureComponent {

  /**
   * Render a simple line chart with a custom tooltip.
   *
   * This function takes the chart data from the component's props and renders a line chart
   * with a custom tooltip that displays the session length in minutes.
   *
   * @param {object} props - The component's props.
   * @param {array} props.data - The chart data.
   * @return {JSX.Element} The rendered line chart.
   */
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
      <ResponsiveContainer width="100%" height="100%" >
        <LineChart data={data} padding={{ top: 0, right: 0, left: 0, bottom: 0 }} >
          <CartesianGrid strokeDasharray="3 3" horizontal={false} vertical={false} fill='#FF0000' />
          <XAxis dataKey="day" stroke='#FFFFFF' opacity={0.7} tickLine={false} axisLine={false} />
          <YAxis hide={true} />
          <Tooltip content={<CustomTooltip />} />
          <Line type="bump" dot={false} dataKey="sessionsLength" stroke="#FFFFFF" opacity={0.8} strokeWidth={2} activeDot={{ r: 6 }} />
          <ReferenceArea x1={"S"} x2={"D"} y1={0} y2={60} fill="000000" />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}

SimpleLineChart.propTypes = {
  data: PropTypes.array.isRequired
}