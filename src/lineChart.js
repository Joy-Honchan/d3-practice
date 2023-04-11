import { useState, useEffect } from "react";
import { csv, scaleBand, scaleLinear, min, max } from "d3";

const csvUrl =
  "https://gist.githubusercontent.com/curran/0ac4077c7fc6390f5dd33bf5c06cb5ff/raw/605c54080c7a93a417a3cea93fd52e7550e76500/UN_Population_2019.csv";
const row = (data) => {
  return {
    Population: parseFloat(data["2020"]),
    Country: data.Country,
    "Country code": data["Country code"]
  };
};

const colors = ["red", "orange", "yello", "green", "blue"];
const margin = { top: 20, btm: 20, left: 10, right: 10 };

export default function LineChart({ width, height }) {
  const [csvData, setCsvData] = useState(null);
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.btm;

  useEffect(() => {
    const fetchData = async () => {
      const res = await csv(csvUrl, row);
      // console.log(res.slice(0, 5));
      setCsvData(res.slice(0, 5));
    };
    fetchData();
  }, []);

  const yScale = scaleBand()
    .domain(csvData?.map((data) => data.Country) || [])
    .range([0, innerHeight]);

  // const xAxis = yScale.ticks();

  const xScale = scaleLinear()
    .domain([0, max(csvData || [], (d) => d.Population)])
    .range([0, innerWidth]);
  const yAxis = xScale.ticks();

  return (
    <svg width={width} height={height} style={{ border: "1px solid black" }}>
      <g transform={`translate(${margin.left},${margin.top})`}>
        {csvData?.map((data, index) => (
          <rect
            x={0}
            y={yScale(data.Country)}
            width={xScale(data.Population)}
            height={yScale.bandwidth()}
            fill={colors[index]}
          />
        ))}

        {yAxis.map((data, index) =>
          index === 0 ? (
            <g key={index}>
              <line
                x1={xScale(data)}
                y1={0}
                x2={xScale(data)}
                y2={innerHeight}
                stroke="black"
                strokeWidth={2}
              />
              <text></text>
            </g>
          ) : (
            <g key={index}>
              <line
                x1={xScale(data)}
                y1={0}
                x2={xScale(data)}
                y2={innerHeight}
                stroke="gray"
                strokeWidth={2}
                stroke-dasharray="4 8"
              />
            </g>
          )
        )}
        {}
      </g>
    </svg>
  );
}
