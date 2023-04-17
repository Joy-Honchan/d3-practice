import { format } from "d3";
const colors = ["red", "orange", "yello", "green", "blue"];

export default function DataBand({ csvData, yScale, xScale }) {
  return csvData.map((data, index) => (
    <rect
      x={0}
      y={yScale(data.Country)}
      width={xScale(data.Population)}
      height={yScale.bandwidth()}
      fill={colors[index]}
    >
      <title>{format(",")(data.Population)}</title>
    </rect>
  ));
}
