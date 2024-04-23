import React from "react";
import "./dascom3.css";
import { Para } from "../../../Common/Para/Para";
// import Appp from "../../Piechart/pie";
import { Chart } from "react-google-charts";

// import Img3 from "../../../assets/piechart.jpg";

export const datas = [
  ["Pizza", "Popularity"],
  ["Instagram", 18],
  ["Facebook", 45],
  ["Games", 18],
  ["Bank", 68],
  ["Mail Id", 35],
];

export const options = {
  title: "Total No.of Template Used",
};

export const Dascom3 = ({data}) => { 
  return (
    <>
      <div className="dascom3-container">
          <Para Para="Total No.of Template Used" className="piechart_text"/>
            <Chart
            chartType="PieChart"
            data={data}
            width={"360px"}
            height={"240px"}            
          />
      </div>
    </>
  );
};