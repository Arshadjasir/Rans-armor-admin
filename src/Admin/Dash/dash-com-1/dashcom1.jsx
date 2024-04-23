import React from "react";
import { Para } from "../../../Common/Para/Para";
// import Img1 from "../../assets/Online learning-rafiki.png";
// import Img2 from "../../assets/Teaching-rafiki.png";
import "./dascom1.css";
export const Dashcom1 = ({ com1img, com1val ,onClick}) => {
  return (
    <>
      <div className="dashcom1-card" onClick={onClick}>
        <Para value={com1val} />
        <img src={com1img} height="67px" width="68px" />
      </div>
    </>
  );
};
