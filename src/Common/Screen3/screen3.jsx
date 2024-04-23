import React, { useContext, useEffect, useState } from "react";
import "./screen3.css";
import { FaLock } from "react-icons/fa";
import { Para } from "../Para/Para";
import { Button } from "../Button/button";
import { Input } from "../Input/input";
import Person from "../../assets/login_img.png";
import { useNavigate } from "react-router-dom";
import { Path } from "../Router/router";
import axios from "axios";
import { Endpoint } from "../Endpoint/Endpoint";

export default function Screen3({ Email }) {
  const navigate = useNavigate();
  const [changepass, setchangepass] = useState({
    Email: Email,
    Newpass: "",
    confirmpass: "",
  });
  const [incorrect, setincorrect] = useState("");
  var inputval = (e) => {
    // let temp = { ...changepass, [e.target.name]: e.target.value };
    setchangepass({ ...changepass, [e.target.name]: e.target.value });
    setincorrect("");
  };
  var handlesubmit = () => {
    if (changepass.Newpass != "" && changepass.confirmpass != "") {
      if (changepass.Newpass == changepass.confirmpass) {
        var submitval = async () => {
          try {
            var valu = await axios.post(
              `${Endpoint}admin/put/admin_forgot.php `,
              changepass
            );
            if (valu.data == "Success") {
              setincorrect("crt");
              navigate(Path.userlogin);
            } else if (valu.data == "Decline") {
              setincorrect("Decline");
            }
          } catch (err) {
            console.log(err);
          }
        };
        submitval();
      } else {
        setincorrect("incorrect");
      }
    } else {
      setincorrect("Empty");
    }
  };
  return (
    <div className="content">
      <div className="left">
        <span className="top">
          <h2>Reset Password</h2>
          <Para
            Para="Enter Your New Password Below,We are just being extra safe"
            className="top_text"
          />
        </span>
        <div className="input">
          <span className="ic_box">
            <FaLock className="Icon" />
            <Para Para="Password" />
          </span>
          <Input
            type="password"
            placeholder="Enter New Password"
            className="input_common"
            nam={"Newpass"}
            onChange={inputval}
          />
        </div>
        <div className="input">
          <span className="ic_box">
            <FaLock className="Icon" />
            <Para Para="Confirm Password" />
          </span>
          <Input
            type="password"
            placeholder="Confirm Password"
            className="input_common"
            nam={"confirmpass"}
            onChange={inputval}
          />
          {incorrect == "Empty" && (
            <div className="error_sect">
              <label className="inc">* Please Fill The Field</label>
            </div>
          )}
          {incorrect == "incorrect" && (
            <div className="error_sect">
              <label className="inc">* Password doesn't match</label>
            </div>
          )}
        </div>

        <div className="button_box">
          <Button
            value="Done"
            className="signIn_button"
            onclick={handlesubmit}
          />
        </div>
      </div>
    </div>
  );
}
