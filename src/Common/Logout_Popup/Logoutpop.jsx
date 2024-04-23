import React from "react";
import { Para } from "../Para/Para";

import "./Logoutpop.css";
import { Button } from "../Button/button";
export const Logoutpop = ({ onclick,onYes,onNo }) => {
  return (
    <>
      <div className="log_popup" onClick={onclick}>
        <div className="log_popup_content">
          <div className="log_text_content">
            <Para Para={"Are you sure want to logout ?"} />
          </div>
          <div className="log_btn_group">
            <Button
              value={"Yes"}
              className={"logout_yes"}
              style={{ width: "fit-content" }}
              onclick={onYes}
            />
            <Button
              value={"Cancel"}
              className={"logout_No"}
              style={{ width: "fit-content" }}
              onclick={onNo}
            />
          </div>
        </div>
      </div>
    </>
  );
};
