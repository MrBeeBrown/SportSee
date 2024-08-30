import React, { PureComponent } from 'react';
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';
import { PropTypes } from 'prop-types';


export default class SimpleRadialBarChart extends PureComponent {

  /**
   * Renders a biaxial bar chart with a custom tooltip.
   *
   * @param {object} props - The component's props.
   * @return {JSX.Element} The rendered bar chart.
   */
  render() {
    const { data } = this.props;

    const style = {
      top: "10%",
      left: 0,
      transform: 'translate(-30%, -50%)',
      lineHeight: '18px',
    };

    /**
     * A custom tooltip component for displaying data in a chart.
     *
     * @param {object} payload - The data to be displayed in the tooltip.
     * @param {boolean} active - Whether the tooltip is currently active.
     * @return {JSX.Element|null} The rendered tooltip element, or null if inactive.
     */

    return (
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart cx="50%" cy="50%" innerRadius="70%" outerRadius="90%" barSize={20} data={data} startAngle={90} endAngle={450} >
          <RadialBar minAngle={15} isAnimationActive={false} background clockWise dataKey='score' legendType='none' />
          <Legend iconSize={0} layout="horizontal" verticalAlign="top" wrapperStyle={style} />
        </RadialBarChart>
      </ResponsiveContainer>
    );
  }
}

SimpleRadialBarChart.propTypes = {
  data: PropTypes.array.isRequired
}