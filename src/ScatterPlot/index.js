import { scaleLinear, min, max, extent, format } from "d3";
import useData from "./useData";
import DataSpots from "./DataSpots";
import XBottom from "./XBottom";
import YLeft from "./YLeft";

const csvUrl =
  "https://gist.githubusercontent.com/curran/a08a1080b88344b0c8a7/raw/0e7a9b0a5d22642a06d3d5b9bcbad9890c8ee534/iris.csv";
// "https://gist.githubusercontent.com/curran/0ac4077c7fc6390f5dd33bf5c06cb5ff/raw/605c54080c7a93a417a3cea93fd52e7550e76500/UN_Population_2019.csv";

const margin = { top: 10, btm: 50, left: 80, right: 10 };

export default function ScatterPlot({ width, height }) {
  const csvData = useData(csvUrl);
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.btm;

  const xValue = (d) => d.sepal_width;
  const yValue = (d) => d.sepal_length;

  const xScale = scaleLinear()
    .domain(extent(csvData || [], xValue))
    .range([0, innerWidth]);

  const yScale = scaleLinear()
    .domain(extent(csvData || [], yValue))
    .range([0, innerHeight]);

  const tickFormat = (num) => {
    const parsedN = format(".2s")(num);
    if (parsedN.indexOf("00M") !== -1) {
      return parsedN.replace("00M", "億");
    }
    if (parsedN.indexOf("G") !== -1) {
      return parsedN.replace(".", "").replace("G", "億");
    }
    return parsedN.replace(".0", "");
  };

  if (!csvData) {
    return null;
  }
  return (
    <svg width={width} height={height} style={{ border: "1px solid black" }}>
      <g transform={`translate(${margin.left},${margin.top})`}>
        <DataSpots
          csvData={csvData}
          yScale={yScale}
          xScale={xScale}
          xValue={xValue}
          yValue={yValue}
        />
        <XBottom
          xScale={xScale}
          innerHeight={innerHeight}
          tickFormat={tickFormat}
        />
        <YLeft yScale={yScale} />
        <text className="x-axis-title" x={innerWidth / 2} y={innerHeight + 38}>
          Population
        </text>
      </g>
    </svg>
  );
}
