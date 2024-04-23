import React, { useContext, useEffect, useState } from "react";
import "./indexscreen.css";
import Img1 from "../../assets/create.png";
import Img2 from "../../assets/user_manage.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Path } from "../../Common/Router/router";
// import { context } from "../../App";
import { Dashcom1 } from "../Dash/dash-com-1/dashcom1";
import { Dascom2 } from "../Dash/dash-com-2/dascom2";
import { Dascom3 } from "../Dash/dash-com-3/dascom3";
import { Dashcom4 } from "../Dash/dash-com-4/dashcom4";
import { Endpoint } from "../../Common/Endpoint/Endpoint";
import { Dashcom6 } from "../Dash/dash-com-5/dashcom6";
import { Dash_Emailcard } from "../Dash_emailcard/Dash_Emailcard";
import { Para } from "../../Common/Para/Para";
import { Dash_content_card } from "../Dash_content_card/Dash_content_card";

export const Index_screen = () => {
  const Navigate = useNavigate();
  const [data, setdata] = useState([]);
  const [loded, setloded] = useState(false);
  const [shareddata, setshareddata] = useState([]);
  const [Recent, SetRecent] = useState([]);
  const [Pie, SetPie] = useState([]);

  useEffect(() => {
    const openFun = async () => {
      const Email = localStorage.getItem("Mail");

      const value = (
        await axios.post(`${Endpoint}admin/get/select_countfor_admin.php`, {
          Mail: Email,
        })
      ).data;
      setdata(value);
      setloded(true);
      SetPie({
        Facebook: 10,
        Instagram: 50,
        Youtube: 49,
        Friends: 30,
        Games: 30,
      });
    };
    openFun();
  }, []);

  const da = [
    ["Template", "Used"],
    ["Instagram", 58],
    ["Facebook", 55],
    ["Games", 28],
    ["Bank", 68],
    ["Mail Id", 35],
  ];

  const dashval = [
    {
      title: "TOTAL USERS",
      value: "124",
    },
    {
      title: "VULNERABLE USERS",
      value: "124",
    },
    {
      title: "AWARNESS TRAINING",
      value: "124",
    },
    {
      title: "TOTAL GROUPS",
      value: "124",
    },
    {
      title: "TEMPLATES",
      value: "124",
    },
  ];
  return (
    <>
      <div className="index-screen-container">
        <div className="contain">
          <div className="top-text">
            <Para value={"Dashboard"} />
          </div>
          <div className="index-screen-1">
            {/* <Dashcom1
              com1img={Img1}
              com1val={"Create Account"}
              onClick={() => {
                Navigate(Path.Admin_CreateAcc);
              }}
            />
            <Dashcom1
              com1img={Img2}
              onClick={() => {
                Navigate(Path.Admin_Usermanage);
              }}
              com1val={"User Management"}
            /> */}

            <Dash_Emailcard />
          </div>
          <div className="index_heading">
            <Para value={"Quick Links"} />
          </div>
          <div className="index-screen-2box">
            {dashval.map(() => (
              <Dash_content_card />
            ))}
          </div>
          <div className="index_heading1">
            <Para value={"Details"} />
          </div>
          <div className="index-screen-box3">
            {/* <Dascom3 data={da} /> */}
            <Dashcom4 />
            <Dashcom4 />
          </div>
          <div className="index_heading">
            <Para value={"Details"} />
          </div>
          <div className="index-screen-4">
            <div className="index-screen-4box">
              <Dashcom6 />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
