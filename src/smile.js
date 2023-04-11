import { arc } from "d3";

export default function Smile() {
  const length = 200;
  const mouthArc = arc()
    .innerRadius(45)
    .outerRadius(55)
    .startAngle(Math.PI / 2)
    .endAngle((Math.PI / 2) * 3)
    .padAngle(0.4);
  // console.log("arc", arc);
  // console.log("arc()", mouthArc);
  // console.log("arc()()", mouthArc());
  return (
    <svg width={length} height={length}>
      <g transform={`translate(${length / 2} ${length / 2 + 10})`}>
        {/* <g> */}
        <g transform={`translate(-${length / 2} -${length / 2 + 5})`}>
          <circle
            cx={length / 2}
            cy={length / 2}
            r={length / 2 - 10}
            fill="yellow"
            stroke="black"
            strokeWidth={8}
          />
          <circle cx={length / 3} cy={length / 4 + 30} r={length / 15} />
          <circle cx={(length / 3) * 2} cy={length / 4 + 30} r={length / 15} />
        </g>
        {/* <rect width={200} height={length/3} rx='20' ry="20" /> */}
        <path d={mouthArc()} />
      </g>
    </svg>
  );
}
