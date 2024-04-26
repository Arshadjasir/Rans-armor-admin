import React, { useEffect, useState } from "react";
import { Report } from "../Report/report";
import { Endpoint } from "../../Common/Endpoint/Endpoint";
import axios from "axios";
import { Tablecom } from "../../Common/Table/table";
import { Para } from "../../Common/Para/Para";
import { FiSearch } from "react-icons/fi";
import { Input } from "@mui/material";
import { searchFun } from "../../Common/serarchfunction/searchfunction";
import "./wise.css";

export const Deptwise_report = () => {
  const [tabval, settabval] = useState([]);
  const [load, setload] = useState(false);
  useEffect(() => {
    const Email = localStorage.getItem("Mail");
    const variable = async () => {
      var value = (
        await axios.post(`${Endpoint}admin/get/select_user.php`, {
          Mail: Email,
        })
      ).data;
      settabval(value);
      setload(true);
      // setDupli(value);
    };
    variable();
  }, []);
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
      <div className="reportlist_container">
        <div className="reportlist_top">
          <Para Para="Report > Department wise " className="para" />
          <div className="inp">
            <FiSearch className="icon" />
            <Input
              className="search_input"
              // onChange={(e) => searchFun(e, tabval, setDupli)}
            />
          </div>
        </div>
        <div className="reportlist_table">
          <Tablecom valtab={valtab} td={tabval} value={"Group Wise"} />
        </div>
      </div>
    </>
  );
};
