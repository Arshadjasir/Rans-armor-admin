import React, { useEffect, useState } from "react";
import "./Template.css";
import { Para } from "../../Common/Para/Para";
import { FiSearch } from "react-icons/fi";
import { Input } from "../../Common/Input/input";
import Dropdown_bt from "../../Common/Dropdown/dropdown";
import { Tablecom } from "../../Common/Table/table";
import axios from "axios";
import { Endpoint } from "../../Common/Endpoint/Endpoint";
import { useNavigate } from "react-router-dom";
export const Template = ({ drpvalues, bredcrums }) => {
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
      <div className="Template_container">
        <div className="Template_top">
          <Para Para={bredcrums} className="para" />
          <div className="inp">
            <FiSearch className="icon" />
            <Input
              className="search_input"
              //   onChange={(e) => searchFun(e, tabval, setDupli)}
            />
          </div>
        </div>
        <div className="dropdown_list">
          {drpvalues.map((e, i) => (
            <div className="dropdown_title">
              <Dropdown_bt drpvalues={e} key={i} />
            </div>
          ))}
        </div>
        <div className="template_table">
          <Tablecom
            setId={setId}
            valtab={valtab}
            td={dupli}
            onclick={() => {
              setProfile(true);
            }}
            value={"User Management"}
          />
        </div>
      </div>
    </>
  );
};
