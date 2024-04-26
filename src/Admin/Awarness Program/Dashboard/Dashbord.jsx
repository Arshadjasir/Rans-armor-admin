import React, { useEffect, useState } from "react";
import { searchFun } from "../../../Common/serarchfunction/searchfunction";
import { Para } from "../../../Common/Para/Para";
import { FiSearch } from "react-icons/fi";
import { Button } from "../../../Common/Button/button";
import { Tablecom } from "../../../Common/Table/table";
import { useNavigate } from "react-router-dom";
import { Input } from "../../../Common/Input/input";
import axios from "axios";
import { Endpoint } from "../../../Common/Endpoint/Endpoint";
import { Dash_Emailcard } from "../../Dash_emailcard/Dash_Emailcard";
import "./Dashboard.css";
import { Dashcard } from "../dashcard/dashcard";

export const Awarness_Dashbord = () => {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [tabval, settabval] = useState([]);
  const [dupli, setDupli] = useState([]);
  const [Profile, setProfile] = useState(false);
  const [page, setpage] = useState("table");
  useEffect(() => {
    const Email = localStorage.getItem("Mail");
    const variable = async () => {
      var value = (
        await axios.post(`${Endpoint}admin/get/select_user.php`, {
          Mail: Email,
        })
      ).data;
      settabval(value.reverse());
      setDupli(value);
    };
    variable();
  }, [id, Profile]);

  const valtab = [
    {
      heading: "Name",
      data: "Name",
    },
    {
      heading: "User_Id",
      data: "User",
    },
    {
      heading: "Mail_Id",
      data: "Mail",
    },
    {
      heading: "Whatsapp No",
      data: "Whatsapp",
    },
    {
      heading: "Facebook Id",
      data: "Facebook",
    },
    {
      heading: "Instagram Id",
      data: "Instagram",
    },
  ];
  return (
    <>
      <div className="Awar_dash">
        <div className="Awar_dash_top">
          <Para Para="Awarness Program > Dashboard " className="para" />
          <div className="inp">
            <FiSearch className="icon" />
            <Input
              className="search_input"
              onChange={(e) => searchFun(e, tabval, setDupli)}
            />
          </div>
        </div>
        <div className="Awar_dash_btns_box">
          <div className="Awar_dash_btns">
            <Dashcard />
            <Dashcard />
            <Dashcard />
            <Dashcard />
          </div>
        </div>
        <div className="Awar_dash_table">
          <Tablecom
            setId={setId}
            valtab={valtab}
            td={dupli}
            value={"User List"}
          />
        </div>
      </div>
    </>
  );
};
