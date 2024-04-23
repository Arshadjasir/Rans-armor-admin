import React, { createContext, useEffect, useState } from "react";
import "./side_nav.css";
import Training from "../../assets/chart_user.png";
import { Para } from "../../Common/Para/Para";
import { IoMdSettings } from "react-icons/io";
import { MdOutlineLogout } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { HiSpeakerphone } from "react-icons/hi";
import train from "../../assets/chart_user.png";
import { BiSolidReport } from "react-icons/bi";
import { FaUserCheck } from "react-icons/fa6";
// import { Router } from '../Router/router';
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "../Button/button";
import { Path } from "../Router/router";
import { Logoutpop } from "../Logout_Popup/Logoutpop";

export default function Side_nav() {
  const location = useLocation();
  const [Logout, setLogout] = useState(false);
  const navigate = useNavigate();
  if (
    !location.pathname.includes("/forget_password") &&
    location.pathname != "/" &&
    !location.pathname.includes("/change_pass") &&
    !location.pathname.includes("/otp_page")
  ) {
    return (
      <div className="side_nav">
        <div className="train">
          <Button
            icon={<FaUser />}
            onclick={() => {
              setLogout(false);
              navigate(Path.home);
            }}
            value="Dashboard"
            className="dash_btn"
          />
          <Button
            icon={<HiSpeakerphone />}
            value="Campaign"
            className="dash_btn"
            onclick={() => {
              setLogout(false);
              navigate(Path.Campaign);
            }}
          />
          <Button
            icon={<BiSolidReport />}
            value="Report"
            className="dash_btn"
            onclick={() => {
              setLogout(false);
              navigate(Path.admin_Report);
            }}
          />
          <Button
            icon={<FaUserCheck />}
            value="Training"
            className="dash_btn"
            onclick={() => {
              setLogout(false);
              navigate(Path.admin_Traning);
            }}
          />
        </div>
        <div className="sett">
          <div
            className="setting"
            onClick={() => {
              setLogout(false);
              navigate(Path.admin_settings);
            }}
          >
            <IoMdSettings />
            <Para Para="Settings" />
          </div>

          <div
            className="logout"
            onClick={() => {
              setLogout(true);
            }}
          >
            <MdOutlineLogout />
            <Para Para="Logout" />
          </div>
        </div>
        {Logout && (
          <Logoutpop
            onNo={() => {
              setLogout(false);
            }}
            onYes={() => {
              localStorage.setItem("Mail", "");
              navigate(Path.userlogin);
              setLogout(false);
            }}
          />
        )}
      </div>
    );
  }
}
