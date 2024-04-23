import React, { useEffect, useState } from "react";
import { Tablecom } from "../Table/table";
import { useNavigate } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import axios from "axios";
import { Endpoint } from "../Endpoint/Endpoint";
import { Button } from "../Button/button";
import { Para } from "../Para/Para";
import "./table_popup.css";

export const Table_popup = ({ setProfile, Clickval }) => {
  const [tabval, settabval] = useState([]);
  const [load, setload] = useState(false);
  const [date, setdate] = useState([]);

  useEffect(() => {
    const id = Clickval.idd;
    const variable = async () => {
      try {
        var value = (
          await axios.post(
            `${Endpoint}admin/get/report_datas.php`,
            { id: id }
          )
        ).data;
        settabval(value);
        setload(true);
      } catch (error) {
        console.log(error);
      }
    };
    variable();
    var ok = Clickval.Createdate;
    var s = ok.split(" ");
    setdate(s);
  }, []);

  const valtab = [
    {
      heading: "User Id",
      data: "User",
    },
    {
      heading: "User Name",
      data: "Name",
    },
    {
      heading: "Mail",
      data: "Mail",
    },
    {
      heading: "Whatsapp",
      data: "Whatsapp",
    },
    {
      heading: "Facebook",
      data: "Facebook",
    },
    {
      heading: "Instagram",
      data: "Instagram",
    },
    {
      heading: "Status",
      data: "Click",
    },
  ];
  return (
    <div className="table_popup">
      <div className="table_popup_top">
        <Para Para="Report" className="para" />
      </div>
      <div className="popup_table">
        <div className="table_select">
          <Para value={`Campaingn Id : ${Clickval.idd}`} className={"titlee"} />
          <div>
            <div className="popup_head_data">
              <Para Para="Type :" className="type_text1" />
              <Para Para={Clickval.Type} className="type_text" />
            </div>
            <div className="popup_head_data">
              <Para Para="Date :" className="type_text1" />
              <Para Para={date[0]} className="type_text" />
            </div>
            <div className="popup_head_data">
              <Para Para="Time :" className="type_text1" />
              <Para Para={date[1]} className="type_text" />
            </div>
          </div>
        </div>
        {load ? <Tablecom valtab={valtab} td={tabval} /> : <h1>Loading</h1>}
      </div>
      <div className="bottom">
        <Button
          value="Back"
          onclick={() => {
            setProfile(false);
          }}
          className="back_btn"
        />
      </div>
    </div>
  );
};
