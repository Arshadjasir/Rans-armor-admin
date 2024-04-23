import React, { useEffect, useState } from "react";
import "./report.css";
import { Tablecom } from "../../Common/Table/table";
import { UserProfile } from "../User_Profile/userProfile";
import { useNavigate } from "react-router-dom";
import { Path } from "../../Common/Router/router";
import { Button } from "../../Common/Button/button";
import { Table_popup } from "../../Common/table_popup/table_popup";
import { Endpoint } from "../../Common/Endpoint/Endpoint";
import axios from "axios";
import { FiSearch } from "react-icons/fi";
import { Input } from "../../Common/Input/input";
import { searchFun } from "../../Common/serarchfunction/searchfunction";
export const Report = () => {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [tabval, settabval] = useState([]);
  const [Profile, setProfile] = useState(false);
  const [tdval, settdval] = useState([]);
  const [dupli, setDupli] = useState([]);

  const UserData = () => {
    setProfile(true);
  };
  useEffect(() => {
    const Email = localStorage.getItem("Mail");
    
    const variable = async () => {
      var value = (
        await axios.post(
          `${Endpoint}admin/get/campaingn_report.php`,
          { Mail: Email }
        )
      ).data;
      settabval(value);
      // setDupli(value);

    };
    variable();
  }, [id]);
  const valtab = [
    { heading: "Campaingn_Id", data: "id" },
    { heading: "No.of Users", data: "No_of_Users" },
    { heading: "Campaingn Name", data: "Campaingn_Name" },
    { heading: "Type", data: "Type" },
    { heading: "createdate", data: "createdate" },
    { heading: "Admin", data: "Name" },
  ];
  return (
    <div className="content_box">
      <div className="report_top">
        <Button value="Instagram" className="report_btn" disabled={true} />
        <Button value="Facebook" className="report_btn" disabled={true} />
        <Button value="Mail Id" className="report_btn" />
        <Button value="Bank" className="report_btn" disabled={true} />
        <Button value="Games" className="report_btn" disabled={true} />
      </div>
      <div className="user_manage_table">
      {/* <div className="inp">
          <FiSearch className="icon" />
          <Input
            className="search_input"
            onChange={(e) => searchFun(e, tabval, setDupli)}
          />
        </div> */}
        <Tablecom
          value={"Campaingn"}
          setId={setId}
          valtab={valtab}
          td={tabval}
          onclick={UserData}
        />
      </div>
      <div className="bottom">
        <Button
          value="Back"
          onclick={() => {
            navigate(Path.home);
          }}
          className="back_btn"
        />
      </div>
      {Profile == true && <Table_popup setProfile={setProfile} Clickval={id} />}
    </div>
  );
};
