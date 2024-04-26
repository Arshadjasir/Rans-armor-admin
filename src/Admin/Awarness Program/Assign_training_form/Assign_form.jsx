import React from "react";
import { Para } from "../../../Common/Para/Para";
import { FiSearch } from "react-icons/fi";
import { Input } from "../../../Common/Input/input";
import "./Assign_form.css";
import { Button } from "../../../Common/Button/button";

export const Assign_form = () => {
  return (
    <>
      <div className="Assign_containerr">
        <div className="Assign_manage_top">
          <Para
            Para="Awareness Program > Training Campaigns > Assign Training > Fill Your details"
            className="traing_para"
          />
          <div className="inp">
            <FiSearch className="icon" />
            <Input
              className="search_input"
              //   onChange={(e) => searchFun(e, tabval, setDupli)}
            />
          </div>
        </div>
        <div className="Assign_form">
          <Para value={"Fill your details "} className={"Assign_title"} />
          <div className="Field_box">
            <div className="Assign_input_box">
              <Para value={"Campaign Name"} />
              <Input className={"Assign_inputt"} />
            </div>
            <div className="Assign_input_box">
              <Para value={"Import Users"} />
              <Input className={"Assign_inputt"} />
            </div>
            <div className="Assign_input_box">
              <Para value={"Expiry Date"} />
              <Input className={"Assign_inputt"} />
            </div>
          </div>
          <div className={"Assign_btn_box"}>
            <Button letter={"Assign Training"} className={"Assign_btn"} />
          </div>
        </div>
        <div className="Assign_form">
          <Para value={"Training Preview"} className={"Training_prebox"}/>
        </div>
      </div>
    </>
  );
};
