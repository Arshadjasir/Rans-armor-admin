import React from "react";
import "./top_nav.css";
// import H3 from '../Heading/h3'
import { FaCircle } from "react-icons/fa";
import { Para } from "../Para/Para";
import { useLocation } from "react-router-dom";
import Logo from "../../assets/ransarmorlogo.png";

export default function Top_Nav() {
  const location = useLocation();
  if (
    !location.pathname.includes("/forget_password") &&
    location.pathname != "/" &&
    !location.pathname.includes("/change_pass") &&
    !location.pathname.includes("/otp_page")
  ) {
    return (
      <div className="top_navbar">
        <div className="titlee">
          {/* <img src={Logo} height="50px" width="100px" /> */}
          <Para Para="RANSARMOR" className="title_name" />
        </div>
      </div>
    );
  }
}
