import React from "react";
import { Para } from "../../../Common/Para/Para";
import { FiSearch } from "react-icons/fi";
import { Input } from "../../../Common/Input/input";
import { Button } from "../../../Common/Button/button";
import "./Training_Campaings.css";
import Nodata from "../../../assets/no_data_found.gif"
import { useNavigate } from "react-router-dom";
import { Path } from "../../../Common/Router/router";

export const Assign_training = () => {
    const navigate = useNavigate()
  return (
    <>
      <div className="Assign_containerr">
        <div className="Assign_manage_top">
          <Para
            Para="Awareness Program > Training Campaigns "
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
        <div className="Assign_filtergrp">
          <div className="Assign_filtergrp_box">
            <Button className={"Assign_filterbtn"} letter={"All"} />
            <Button className={"Assign_filterbtn"} letter={"Active"} />
            <Button className={"Assign_filterbtn"} letter={"Completed"} />
          </div>
        </div>
        <div className="No_data_box">
          <div>
            <img src={Nodata} className="no_data" />
            <Para value={"No Data Found"} className={"Nodata_value"} />
          </div>
          <div style={{ textAlign: "center" }}>
            <Button className={"no_data_btn"} letter={"Assign New Training"} onclick={()=>{navigate(Path.training_campaigns);}} />
          </div>
        </div>
      </div>
    </>
  );
};
