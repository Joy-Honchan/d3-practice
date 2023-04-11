import { csv, arc, pie } from "d3";
import { useState, useEffect } from "react";

const csvUrl =
  "https://gist.githubusercontent.com/curran/b236990081a24761f7000567094914e0/raw/acd2b8cecfe51c520622fbaf407ee88b8796bfc6/cssNamedColors.csv";
// const arcAdd = (Math.PI * 2) / 150;

export default function Pie({ width }) {
  const [csvData, setCsvData] = useState(null);

  const arcFunc = arc()
    .innerRadius(0)
    .outerRadius(width / 2);

  useEffect(() => {
    csv(csvUrl)
      .then((res) => {
        setCsvData(pie().value((e) => (e.Keyword === "red" ? 10 : 1))(res));
      })
      .catch((err) => {
        setCsvData(null);
      });
  }, []);

  return csvData ? (
    <svg width={width} height={width} style={{ border: "1px solid black" }}>
      <g transform={`translate(${width / 2},${width / 2})`}>
        {csvData.map((item) => {
          return (
            <path
              d={arcFunc({
                startAngle: item.startAngle,
                endAngle: item.endAngle
              })}
              fill={item.data["RGB hex value"]}
            />
          );
        })}
        {/* {csvData.map((item, index) => {
          return (
            <path
              d={arcFunc({
                startAngle: 0 + arcAdd * index,
                endAngle: arcAdd * (index + 1)
              })}
              fill={item["RGB hex value"]}
            />
          );
        })} */}
      </g>
    </svg>
  ) : (
    <div>No Data</div>
  );
}
