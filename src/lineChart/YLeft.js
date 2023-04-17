export default function YLeft({ yScale }) {
  return yScale.domain().map((data) => (
    <text
      key={data}
      style={{ fontSize: ".6rem", textAnchor: "end" }}
      x={-3}
      y={yScale(data) + yScale.bandwidth() / 2}
    >
      {data}
    </text>
  ));
}
