import React, { useEffect, useState } from "react";
import "./userManage.css";
import { Para } from "../../Common/Para/Para";
import { Input } from "../../Common/Input/input";
import { FiSearch } from "react-icons/fi";
import { Tablecom } from "../../Common/Table/table";
import { UserProfile } from "../User_Profile/userProfile";
import { useNavigate } from "react-router-dom";
import { Path } from "../../Common/Router/router";
import axios from "axios";
import { searchFun } from "../../Common/serarchfunction/searchfunction";
import { Endpoint } from "../../Common/Endpoint/Endpoint";
import { Button } from "../../Common/Button/button";

export const UserManage = () => {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [tabval, settabval] = useState([]);
  const [dupli, setDupli] = useState([]);
  const [Profile, setProfile] = useState(false);
  useEffect(() => {
    const Email = localStorage.getItem("Mail");
    const variable = async () => {
      var value = (
        await axios.post(
          `${Endpoint}admin/get/select_user.php`,
          { Mail: Email }
        )
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
    <div className="user_manage">
      <div className="user_manage_top">
        <Para Para="Admin > User " className="para" />
        <div className="inp">
          <FiSearch className="icon" />
          <Input
            className="search_input"
            onChange={(e) => searchFun(e, tabval, setDupli)}
          />
        </div>
      </div>
      <div className="usermanage_btns_box">
        <div className="usermanage_btns">
          <Button letter={"Add User"} className={"Userman_btn"} />
          <Button letter={"Bulk Import"} className={"Userman_btn"} />
        </div>
      </div>
      <div className="user_manage_table">
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
      {Profile == true && <UserProfile setProfile={setProfile} Clickval={id} />}
    </div>
  );
};
