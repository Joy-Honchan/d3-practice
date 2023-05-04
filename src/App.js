import "./styles.css";
import Smile from "./smile";
import Interactive from "./Interactiv";
import Pie from "./Pie";
import LineChart from "./lineChart";
import { useState } from "react";
import BtnPanel from "./BtnPanel";
import ScatterPlot from "./ScatterPlot";

export default function App() {
  const [now, setNow] = useState(0);
  return (
    <div className="App">
      <h1>My D3 practice</h1>
      <BtnPanel now={now} setNow={setNow} />
      {now === 1 ? (
        <Interactive width={165} height={165} />
      ) : now === 2 ? (
        <Pie width="200" />
      ) : now === 3 ? (
        <LineChart width="350" height="200" />
      ) : now === 4 ? (
        <ScatterPlot width="350" height="200" />
      ) : (
        <Smile />
      )}
    </div>
  );
}
