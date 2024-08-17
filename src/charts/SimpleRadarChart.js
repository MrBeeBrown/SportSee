import React, { PureComponent } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

export default class SimpleRadarChart extends PureComponent {
  /**
   * Renders a SimpleRadarChart component based on the provided data.
   *
   * @param {object} props - The component's props.
   * @param {array} props.data - The data to be rendered in the chart.
   * @return {JSX.Element} The JSX element representing the chart.
   */
  render() {
    const { data } = this.props;
    return (
      <ResponsiveContainer width="100%" height="100%" >
        <RadarChart cx="50%" cy="50%" outerRadius="60%" data={data} >
          <PolarGrid stroke='#FFFFFF' />
          <PolarAngleAxis dataKey="kind" axisLine={false} tickLine={false} stroke='#FFFFFF' fontSize={12} fontWeight={'bold'} />
          <PolarRadiusAxis axisLine={false} tick={false} />
          <Radar dataKey="value" stroke="#FF0000" fill="#FF0000" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
    );
  }
}