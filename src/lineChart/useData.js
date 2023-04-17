import { useState, useEffect } from "react";
import { csv } from "d3";

const row = (data) => {
  return {
    Population: parseFloat(data["2020"]) * 1000,
    Country: data.Country,
    "Country code": data["Country code"],
  };
};

export default function useData(url) {
  const [csvData, setCsvData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const res = await csv(url, row);
      // console.log(res.slice(0, 5));
      setCsvData(res.slice(0, 5));
    };
    fetchData();
  }, []);

  return csvData;
}
