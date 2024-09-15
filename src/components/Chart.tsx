import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import { retrieveContributionData } from './github/githubApi';

interface ChartProps {
  userName: string;
}

const Chart: React.FC<ChartProps> = ({ userName }) => {
  const [data, setData] = useState<{ date: string; count: number }[]>([]);
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    async function fetchData() {
      const response = await retrieveContributionData(userName);
      const weeks = response.data.user.contributionsCollection.contributionCalendar.weeks;
      const contributions = weeks.flatMap(week =>
        week.contributionDays.map(day => ({
          date: day.date,
          count: day.contributionCount,
        }))
      );
      setData(contributions);
    }

    fetchData();
  }, [userName]);

  useEffect(() => {
    if (data.length === 0) return;

    const margin = { top: 20, right: 30, bottom: 30, left: 40 };
    const width = 800 - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;

    const svg = d3
      .select(svgRef.current)
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    const x = d3
      .scaleTime()
      .domain(d3.extent(data, d => new Date(d.date)) as [Date, Date])
      .range([0, width]);

    const y = d3
      .scaleLinear()
      .domain([0, d3.max(data, d => d.count) || 0])
      .range([height, 0]);

    const xAxis = d3.axisBottom(x);
    const yAxis = d3.axisLeft(y);

    svg.append('g').attr('transform', `translate(0,${height})`).call(xAxis);
    svg.append('g').call(yAxis);

    svg
      .append('path')
      .datum(data)
      .attr('fill', 'none')
      .attr('stroke', 'steelblue')
      .attr('stroke-width', 1.5)
      .attr(
        'd',
        d3
          .line<{ date: string; count: number }>()
          .x(d => x(new Date(d.date))!)
          .y(d => y(d.count))
      );
  }, [data]);

  return <svg ref={svgRef}></svg>;
};

export default Chart;
