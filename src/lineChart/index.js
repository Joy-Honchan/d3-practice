import { scaleBand, scaleLinear, min, max, format } from "d3";
import useData from "./useData";
import DataBand from "./DataBand";
import XBottom from "./XBottom";
import YLeft from "./YLeft";

const csvUrl =
  "https://gist.githubusercontent.com/curran/0ac4077c7fc6390f5dd33bf5c06cb5ff/raw/605c54080c7a93a417a3cea93fd52e7550e76500/UN_Population_2019.csv";

const margin = { top: 10, btm: 50, left: 80, right: 10 };

export default function LineChart({ width, height }) {
  const csvData = useData(csvUrl);
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.btm;

  const yScale = scaleBand()
    .domain(csvData?.map((data) => data.Country) || [])
    .range([0, innerHeight])
    .paddingInner(0.1);

  const xScale = scaleLinear()
    .domain([0, max(csvData || [], (d) => d.Population)])
    .range([0, innerWidth]);

  if (!csvData) {
    return null;
  }
  return (
    <svg width={width} height={height} style={{ border: "1px solid black" }}>
      <g transform={`translate(${margin.left},${margin.top})`}>
        <DataBand csvData={csvData} yScale={yScale} xScale={xScale} />
        <XBottom
          xScale={xScale}
          innerHeight={innerHeight}
          tickFormat={format(".2s")}
        />
        <YLeft yScale={yScale} />
        <text className="x-axis-title" x={innerWidth / 2} y={innerHeight + 38}>
          Population
        </text>
      </g>
    </svg>
  );
}
