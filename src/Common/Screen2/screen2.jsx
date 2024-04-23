import React, { useContext, useEffect, useState } from "react";
import { TbMailFilled } from "react-icons/tb";
import "./screen2.css";
import { FaLock } from "react-icons/fa";
import { Para } from "../Para/Para";
import { Button } from "../Button/button";
import { Input } from "../Input/input";
import Person from "../../assets/login_img.png";
import { useNavigate } from "react-router-dom";
import { Path } from "../Router/router";
import { GoArrowLeft } from "react-icons/go";
import axios from "axios";
import { Endpoint } from "../Endpoint/Endpoint";
import Otp from "../OTP_Page/otp";
import Screen3 from "../Screen3/screen3";

export default function Screen2() {
  const [Emailval, setEmailval] = useState("");
  const [incorrect, setincorrect] = useState("");
  const [Page, setPage] = useState("Email");
  const navigate = useNavigate();

  var inputval = (e) => {
    setEmailval(e.target.value);
    setincorrect("");
  };
  var handlesubmit = (e) => {
    e.preventDefault();
    if (Emailval != "") {
      var submitval = async () => {
        try {
          var valu = await axios.post(
            `${Endpoint}admin/put/admin_forgot_pass.php`,
            { Mail: Emailval }
          );
          if (valu.data == "Success") {
            setPage("Otp");
          } else if (valu.data == "Decline") {
            setincorrect("incorrect");
          }
        } catch (err) {
          console.log(err);
        }
      };
      submitval();
    } else {
      setincorrect("empty");
    }
    console.log(Emailval);
  };
  return (
    <div className="signIn">
      {Page == "Email" && (
        <div className="content">
          <div className="left">
            <span className="top">
              <h2>Forgot Your Password ?</h2>
              <Para
                Para="Enter Your Email to receive your OTP"
                className="top_text"
              />
            </span>
            <form>
              <div className="input">
                <span className="ic_box">
                  <TbMailFilled className="Icon" />
                  <Para Para="Email" />
                </span>
                <Input
                  type="text"
                  placeholder="Enter Your Email Address Here"
                  className="input_common"
                  onChange={inputval}
                />
                {incorrect == "empty" && (
                  <div className="error_section">
                    <label className="incorr">* Please Fill The Field</label>
                  </div>
                )}
                {incorrect == "incorrect" && (
                  <div className="error_section">
                    <label className="incorr">* Mail is Incorrect</label>
                  </div>
                )}
              </div>
              <div className="button_box">
                <Button
                  value="Send"
                  className="otp_button"
                  onclick={handlesubmit}
                />
              </div>
              {/* <div className="otp_section">
              <Input className="input2" />
              <Input className="input2" />
              <Input className="input2" />
              <Input className="input2" />
            </div> */}
              <div className="pre_next">
                <GoArrowLeft />
                <Para
                  Para="Back to Login"
                  className="anchor"
                  onclick={() => {
                    navigate(Path.userlogin);
                  }}
                />
              </div>
            </form>
          </div>
        </div>
      )}
      {Page == "Otp" && <Otp setPage={setPage} />}
      {Page == "Forgot" && <Screen3 Email={Emailval} />}

      <div className="right">
        <img src={Person} alt="person" />
      </div>
    </div>
  );
}
