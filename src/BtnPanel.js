const btnData = [
  { value: 0, label: "Smile" },
  { value: 1, label: "Interactive" },
  { value: 2, label: "Pie" },
  { value: 3, label: "LineChart" },
  { value: 4, label: "ScatterPlot" },
];

export default function BtnPanel({ now, setNow }) {
  function changeNow(value) {
    return () => setNow(value);
  }
  return (
    <div className="btn-panel">
      {btnData.map((item) => (
        <button disabled={now === item.value} onClick={changeNow(item.value)}>
          {item.label}
        </button>
      ))}
    </div>
  );
}
