import React, { createContext, useContext, useEffect, useState } from "react";
// import Input from '../../Common/Input/input'
import { Para } from "../../Common/Para/Para";
// import Button from '../../Common/Button/button'
// import Anchor from '../Common/Anchor/anchor'
import "./screen1.css";
import { TbMailFilled } from "react-icons/tb";
import { FaLock } from "react-icons/fa";
import { Button } from "../../Common/Button/button";
import { Input } from "../../Common/Input/input";
import Person from "../../assets/login_img.png";
import { useNavigate } from "react-router-dom";
import { Path } from "../Router/router";
import axios from "axios";
import { Endpoint } from "../Endpoint/Endpoint";

export default function Screen1() {
  const navigate = useNavigate();
  const [Mailval, setMailval] = useState("");
  const [incorrect, setincorrect] = useState(false);
  const [Empty, setEmpty] = useState(false);

  const [loginval, setloginval] = useState({
    Mail: " ",
    Password: "",
  });

  var inputval = (e) => {
    setloginval({ ...loginval, [e.target.name]: e.target.value });
    setincorrect(false);
    setEmpty(false);
  };

  var helo = (e) => {
    e.preventDefault();
    if (loginval.Mail == "" || loginval.Password == "") {
      setEmpty(true);
      setincorrect(false);
    } else {
      var submitval = async () => {
        try {
          var valu = await axios.post(
            `${Endpoint}admin/get/admin_login.php`,
            loginval
          );
          if (valu.data == "Success") {
            localStorage.setItem("Mail", loginval.Mail);
            const Email = localStorage.getItem("Mail");
            if (Email == loginval.Mail) {
              navigate(Path.home);
            }
          } else if (valu.data == "Decline") {
            setincorrect(true);
          } else if (valu.data == "Expired") {
            setincorrect("Expired");
          } else if (valu.data == "Blocked") {
            setincorrect("Blocked");
          }
        } catch (err) {
          console.log(err);
        }
      };

      submitval();
    }
  };

  return (
    <div className="signIn">
      <div className="content">
        <div className="left">
          <span className="top">
            <h2>Welcome Admin</h2>
            <Para
              Para="Enter Your Email And Password to Login Your Account"
              className="top_text"
            />
          </span>
          <form>
            <div className="input">
              <span className="ic_box">
                <TbMailFilled className="ic" />
                <Para Para="Email" />
              </span>
              <Input
                type="text"
                placeholder="Enter Your Email Address Here"
                className="input_common"
                onChange={inputval}
                nam="Mail"
                required={true}
              />
            </div>
            <div className="input">
              <span className="ic_box">
                <FaLock className="ic" />
                <Para Para="Password" />
              </span>
              <Input
                type="password"
                placeholder="Enter Password"
                className="input_common"
                onChange={inputval}
                nam="Password"
                required={true}
              />
            </div>
            {incorrect == true && (
              <div className="incorrect">
                <label>* Incorrect Email Or Password</label>
              </div>
            )}

            {incorrect == "Expired" && (
              <div className="incorrect">
                <label>* Your Account is Expired..!</label>
              </div>
            )}
            {incorrect == "Blocked" && (
              <div className="incorrect">
                <label>* Your Account is Blocked..!</label>
              </div>
            )}

            {Empty == true && (
              <div className="incorrect">
                <label>* Please Fill The Field</label>
              </div>
            )}

            <div className="forget_pass">
              <Para
                Para="Forget Password"
                className="anchor"
                onclick={() => {
                  navigate(Path.forget_pass);
                }}
              />
            </div>
            <div className="button_box">
              <Button value="Sign In" className="signIn_btn" onclick={helo} />
            </div>
          </form>
        </div>
      </div>
      <div className="right">
        <img src={Person} alt="person" />
      </div>
    </div>
  );
}
