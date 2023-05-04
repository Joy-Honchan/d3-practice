import { useState, useEffect } from "react";
import { csv } from "d3";

const row = (data) => {
  return {
    sepal_length: +data["sepal_length"],
    sepal_width: +data["sepal_width"],
    petal_length: +data["petal_length"],
    petal_width: +data["petal_width"],
    species,
  };
};

export default function useData(url) {
  const [csvData, setCsvData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const res = await csv(url, row);
      // console.log(res.slice(0, 5));
      setCsvData(res);
    };
    fetchData();
  }, []);

  return csvData;
}
