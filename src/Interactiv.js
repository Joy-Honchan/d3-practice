import { useState, useEffect, useRef } from "react";

const Interactive = ({ width, height }) => {
  const svgRef = useRef();
  const [mp, setMp] = useState({ x: width / 2, y: height / 2 });
  const [svgP, setSvgP] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const { x, y } = svgRef.current.getClientRects()[0];
    setSvgP({ x, y });
  }, []);

  function handleCircle(e) {
    const { clientX, clientY } = e;
    setMp({ x: clientX - svgP.x, y: clientY - svgP.y });
  }
  return (
    <svg
      ref={svgRef}
      style={{ border: "1px solid black" }}
      width={width}
      height={height}
      onMouseMove={handleCircle}
    >
      <circle cx={mp.x} cy={mp.y} r={10} />
    </svg>
  );
};

export default Interactive;
