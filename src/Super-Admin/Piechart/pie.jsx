import React from "react";
import PieChart from "./Piechart";
// import PieChart from "./PieChart";

const Appp = ({ data }) => {
  const colors = ["#ffa523", "#00a0cf", "#9f49a3", "#ff3169", "#00b4b0"];
  console.log(data);
  return (
    <div>
      <PieChart data={data} colors={colors} />
    </div>
  );
};

export default Appp;
