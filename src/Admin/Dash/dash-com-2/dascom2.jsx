import React from "react";
import { Para } from "../../../Common/Para/Para";
import "./dascom2.css";
export const Dascom2 = ({ letter, letter1 }) => {
  return (
    <>
      <div className="dash-com-2box">
        <Para value={letter} />
        <Para className={"dashcom2-num"} value={letter1} />
      </div>
    </>
  );
};