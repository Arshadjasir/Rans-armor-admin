import React from "react";
import "./Popup.css";
import { Para } from "../../Common/Para/Para";
import { Button } from "../../Common/Button/button";
export const Pop = ({onclick,value}) => {
  return (
    <>
      <div className="chan">
        <div className="popup-card">
          <Para className={"popup-card-text"} value={value} />
          <Button
            onclick={onclick}
            className={"popup-card-btn"}
            letter={"Ok"}
          />
        </div>
      </div> 
    </>
  );
};
