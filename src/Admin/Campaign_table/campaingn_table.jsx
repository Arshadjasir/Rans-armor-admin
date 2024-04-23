import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Para } from "../../Common/Para/Para";
import { FiSearch } from "react-icons/fi";
import { Input } from "../../Common/Input/input";
import { Tablecom } from "../../Common/Table/table";
import axios from "axios";
import "./campaign_table.css";
import { Button } from "../../Common/Button/button";
import { Path } from "../../Common/Router/router";
import { Popup } from "../../Common/Popup/popup";
import { Form_Popup } from "../../Common/form_popup/form_popup";
import { File_popup } from "../../Common/File_popup/file_popup";
import { Endpoint } from "../../Common/Endpoint/Endpoint";
import { searchFun } from "../../Common/serarchfunction/searchfunction";

export const Campaingn_table = ({
  page,
  title,
  Back,
  form_title,
  Create,
  Share,
}) => {
  const [show, setshow] = useState(false);
  const [create, setcreate] = useState(false);
  const [share, setshare] = useState(false);
  const [send, setsend] = useState([]);
  const [submitval, setsubmitval] = useState([]);
  const [load, setload] = useState(false);

  var sno = 1;
  const navigate = useNavigate();
  const [tabval, settabval] = useState([]);
  const [Duplicate, setDuplicate] = useState([]);
  // const [popupval, setpopupval] = useState([]);
  const clickid = useParams();
  const Email = localStorage.getItem("Mail");

  useEffect(() => {
    const variable = async () => {
      var value = (
        await axios.post(
          `${Endpoint}admin/get/select_user.php`,
          { Mail: Email }
        )
      ).data;
      
      settabval(value);
      setDuplicate(value);
    };
    variable();
  }, []);



  var aftersubmit = (e,path) => {
    const senddata = async () => {
      var value = (
        await axios.post(
          `${Endpoint}admin/post/Insert_campaingn.php`,
          { send: send, popupval: e, Email: Email, filepath: path }
        )
      ).data;
      console.log(value);
      if (value == "success") {
        setshare(true);
      }
    };
    senddata();
  };

  const valtab = [
    {
      heading: "Name",
      data: "Name",
    },
    {
      heading: "User Id",
      data: "User",
    },
    {
      heading: `${clickid.clickid} Id`,
      data: clickid.clickid,
    },
  ];
  var handlechecked = (e) => {
    const { name, checked } = e.target;
    if (name === "allselect") {
      const checkedvalue = Duplicate.map((data) => {
        return { ...data, isChecked: checked };
      });
      setDuplicate(checkedvalue);
    } else {
      const checkedvalue = Duplicate.map((data) =>
        data.Mail === name ? { ...data, isChecked: checked } : data
      );
      setDuplicate(checkedvalue);
    }
  };

  return (
    <>
      <div className="user_manage">
        <div className="user_manage_top">
          <Para Para={page} className="para" />
          <div className="inp">
            <FiSearch className="icon" />
            <Input
              className="search_input"
              onChange={(e) => searchFun(e, tabval, setDuplicate)}
            />
          </div>
        </div>
        <div className="user_manage_table">
          <div className="table_select">
            <Para value={title} className={"titlee"} />
            <span>
              <Para value={"Select All"} className={"select"} />
              <Input
                type="checkbox"
                nam="allselect"
                checked={!Duplicate.some((val) => val?.isChecked !== true)}
                onChange={handlechecked}
              />
            </span>
          </div>
          <table className="dashcom5-table">
            <thead>
              <tr className="dashcom5-row">
                <th>S.no</th>
                {valtab.map((e, i) => (
                  <th key={i}>{e.heading}</th>
                ))}
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {Duplicate.map((e, i) => (
                <tr
                  // onClick={}
                  key={i}
                  className="dashcom5-row"
                >
                  <td>{sno++}</td>
                  {valtab.map((val, i) => (
                    <td key={i}>{e[val.data]}</td>
                  ))}
                  <td>
                    <Input
                      type="checkbox"
                      nam={e.Mail}
                      checked={e?.isChecked || false}
                      onChange={handlechecked}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="bottom">
          <Button
            value="Back"
            onclick={() => {
              navigate(Back);
            }}
            className="back_btn"
          />
          <Button
            value="Next"
            className="back_btn"
            onclick={() => {
              const senddata = [];
              Duplicate.map((val) => {
                if (val.isChecked == true) {
                  senddata.push(val);
                  setsend(senddata);
                  setshow(true);
                }
              });
            }}
          />
        </div>
      </div>
      {show && (
        <Form_Popup
          form_title={form_title}
          // setpopupval={setpopupval}
          setshare={setshare}
          Type={clickid.clickid}
          Camname={form_title}
          aftersubmit={aftersubmit}
        />
      )}
      {/* {create && (
        <File_popup
          onclick={(e) => {
            e.preventDefault(), setshare(true);
          }}
        />
      )} */}
      {share && (
        <Popup
          value="Done"
          text="Successfully Shared...!"
          className="done_btn"
          onclick={() => {
            setcreate(false), setshow(false), setshare(false);
          }}
        />
      )}
    </>
  );
};
