import { format } from "d3";
const colors = ["red", "orange", "yello", "green", "blue"];

export default function DataSpots({ csvData, yScale, xScale, xValue, yValue }) {
  return csvData.map((data, index) => (
    <circle
      cx={xScale(xValue(data))}
      cy={yScale(yValue(data))}
      r={10}
      fill={colors[index]}
    >
      <title>{format(",")(data.Population)}</title>
    </circle>
  ));
}
