import React, { useState } from "react";
import { Training_card } from "../../Training/Training_card";
import { FiSearch } from "react-icons/fi";
import { Para } from "../../../Common/Para/Para";
import { Input } from "../../../Common/Input/input";
import "./Assign_Training.css";
import { Button } from "../../../Common/Button/button";
import { useNavigate } from "react-router-dom";
import { Path } from "../../../Common/Router/router";

export const Training_Campaigns = () => {
  const [click,setclick]=useState(false)
  const navigate = useNavigate()
  return (
    <>
      <div className="Training_containerr">
        <div className="training_manage_top">
          <Para
            Para="Awareness Program > Training Campaigns"
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
        <div className="Trainig_card_container">
          <div style={{ overflow: "scroll" }} className="Traing_cards" onclick={()=>{setclick(true)}}>
            <Training_card />
            <Training_card />
            <Training_card />
            <Training_card />
          </div>
        </div>
        {
          click&& <div className="float_btnn">
         <Button value={"Assign_Training"} className={"floatbtn_sub"} onclick={()=>{navigate(Path.assign_form)}}/>
        </div>
        }
       
      </div>
    </>
  );
};
