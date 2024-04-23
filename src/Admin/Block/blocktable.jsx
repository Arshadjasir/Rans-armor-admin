import React, { useEffect, useState } from "react";
import "./blocktable.css";
import { IoMdSearch } from "react-icons/io";
import { Para } from "../../Common/Para/Para";
import { Input } from "../../Common/Input/input";
import { Button } from "../../Common/Button/button";
// import { Pop } from "../Popup/Popup";
// import { Tablecom } from "../../Common/Table/table";
import { Popup } from "../../Common/Popup/popup";
import axios from "axios";
import { Endpoint } from "../../Common/Endpoint/Endpoint";
import { Tablecom } from "../../Common/Table/table";
import { Path } from "../../Common/Router/router";
import { useNavigate } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { searchFun } from "../../Common/serarchfunction/searchfunction";
export const blocktable = () => {
  const Navigate = useNavigate();
  const [change, setchange] = useState(false);
  const [tabval, settabval] = useState([]);
  const [dupli, setDupli] = useState([]);

  const valtab = [
    { heading: "Name", data: "Name" },
    { heading: "Mail", data: "Mail" },
    { heading: "Password", data: "Password" },
    { heading: "Whatsapp", data: "Whatsapp" },
    { heading: "Facebook", data: "Facebook" },
    { heading: "Instagram", data: "Instagram" },
  ];

  const variable = async () => {
    var value = (
      await axios.get(
        `${Endpoint}admin/get/blocked_user.php`
      )
    ).data;
    settabval(value);
    setDupli(value);
  };

  const onclickHandler = (i) => {
    const varia = async () => {
      try {
        var value = await axios.put(
          `${Endpoint}admin/put/unblock_user.php`,
          { id: i }
        );
        variable();
      } catch (err) {
        console.log(err);
      }
    };
    varia();
    setchange(true);
  };

  useEffect(() => {
    variable();
  }, []);

  return (
    <>
      <div className="userman-container">
        <div className="userman-top-box">
          <div>
            <Para
              className={"userman-top-text"}
              value={"Settings > Block List"}
            />
          </div>
          <div className="inp">
            <FiSearch className="icon" />
            <Input
              className="search_input"
              onChange={(e) => searchFun(e, tabval, setDupli)}
            />
          </div>
        </div>
        <div className="userman-table-contaner">
          <Tablecom
            // setblockbtn={setblockbtn}
            unBlockHandler={onclickHandler}
            block={true}
            value={"User Management"}
            td={dupli}
            valtab={valtab}
          />
        </div>
        <div className="heading">
          <Button
            value="Back"
            className="back_btn"
            onclick={() => {
              Navigate(Path.admin_settings);
            }}
          />
        </div>
      </div>
      {change == true && (
        // <div className={"chan"}>
        <Popup
          text={" User Unblocked !"}
          value={"ok"}
          className={"block_popup"}
          onclick={() => {
            setchange(false);
            // Navigate(Path.Admin_Usermanage);
          }}
        />
        // </div>
      )}
    </>
  );
};
