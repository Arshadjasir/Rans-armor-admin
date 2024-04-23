import React, { useEffect, useRef, useState } from "react";
import "../Screen2/screen2.jsx";
import "./otp.css";
import { Para } from "../Para/Para";
import { Button } from "../Button/button";
import { Input } from "../Input/input";
import Person from "../../assets/login_img.png";
import { useNavigate } from "react-router-dom";
import { Path } from "../Router/router";
import axios from "axios";
import { Endpoint } from "../Endpoint/Endpoint.jsx";

export default function Otp({ length = 6, setPage }) {
  const navigate = useNavigate();
  const [incorrect, setincorrect] = useState();
  const [otpval, setotpval] = useState("");
  const [otp, setotp] = useState(new Array(length).fill(""));
  const inputref = useRef([]);
  // console.log(inputref);
  useEffect(() => {
    if (inputref.current[0]) {
      inputref.current[0].focus();
    }
  }, []);
  var handlechangeotp = (index, e) => {
    setincorrect("");
    const value = e.target.value;
    if (isNaN(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value.substring(value.length - 1);
    setotp(newOtp);
    var combainotp = newOtp.join("");
    setotpval(combainotp);
    //send for backend
    if (value && index < length - 1 && inputref.current[index + 1])
      inputref.current[index + 1].focus();
  };
  var handlekeydownotp = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && inputref.current[index - 1]) {
      inputref.current[index - 1].focus();
    }
  };
  var handleclickotp = (index) => {
    inputref.current[index].setSelectionRange(1, 1);
    if (index >= 0) {
      inputref.current[otp.indexOf("")].focus();
    }
  };

  var verifyotp = (e) => {
    e.preventDefault();
    var submitval = async () => {
      try {
        var valu = await axios.post(
          `${Endpoint}admin/get/admin_otp.php`,
          { otp: otpval }
        );
        if (valu.data == "Success") {
          setPage("Forgot");
        } else if (valu.data == "Decline") {
          setincorrect("incorrect");
        }
      } catch (err) {
        console.log(err);
      }
    };
    submitval();
  };
  return (
    <div className="content">
      <div className="left">
        <span className="top">
          <h2>Enter Your OTP</h2>
        </span>
        <form action="">
          <div className="otp_section">
            {otp.map((value, index) => (
              <input
                type={"text"}
                key={index}
                ref={(input) => (inputref.current[index] = input)}
                onChange={(e) => handlechangeotp(index, e)}
                value={value}
                className="input2"
                onClick={() => {
                  handleclickotp(index);
                }}
                onKeyDown={(e) => {
                  handlekeydownotp(index, e);
                }}
              />
            ))}
          </div>
          {incorrect == "incorrect" && (
            <div className="error_section_otp">
              <label className="incorr_otp">* Otp is Incorrect</label>
            </div>
          )}
          <div className="button_box">
            <Button value="Send" className="otp_button" onclick={verifyotp} />
          </div>

          <div className="resend_otp">
            <Para Para="Resend the OTP" className="anchor" />
            <Para
              Para="Back"
              className="anchor"
              onclick={() => {
                navigate(Path.userlogin);
              }}
            />
          </div>
        </form>
      </div>
    </div>
  );
}
