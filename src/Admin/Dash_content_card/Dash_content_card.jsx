import React from "react";
import { Para } from "../../Common/Para/Para";
import "./Dash_content_card.css";

export const Dash_content_card = () => {
  return (
    <>
      <div className="Dash_card_container">
        <div className="Dash_card_box">
          <div className="Dash_card_title">
            <div className="Dash_card_heading">
              <Para value={"TOTAL USER"} />
            </div>
            <div className="Dash_card_value">
              <Para value={"123"} />
            </div>
          </div>
        </div>
        <div className="Dash_card_btn">
          <u>View details</u>
        </div>
      </div>
    </>
  );
};
