export default function XBottom({ xScale, innerHeight, tickFormat }) {
  return xScale.ticks().map((data, index) => (
    <g key={index} transform={`translate(${xScale(data)},0)`}>
      <line
        y2={innerHeight}
        style={index === 0 ? { stroke: "black" } : { stroke: "gray" }}
      />
      <text
        y={innerHeight + 15}
        style={{ fontSize: ".5rem", textAnchor: "middle" }}
      >
        {tickFormat(data)}
      </text>
    </g>
  ));
}
