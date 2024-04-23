import React, { useState } from "react";
import { Para } from "../Para/Para";

import "./Changepopup.css";
import { Button } from "../Button/button";
import { Input } from "../Input/input";
import { FaLock } from "react-icons/fa";
import axios from "axios";
import { Endpoint } from "../Endpoint/Endpoint";
import { Popup } from "../Popup/popup";
export const Changepopup = ({ setchange, Email }) => {
  const [changeAcc, setchangeAcc] = useState({
    Mail: Email,
    currentpass: "",
    newpass: "",
    confirmpass: "",
  });
  const [incorrect, setincorrect] = useState("");
  var inputval = (e) => {
    let temp = { ...changeAcc, [e.target.name]: e.target.value };
    setchangeAcc({ ...changeAcc, [e.target.name]: e.target.value });
    setincorrect("");
  };
  var handlesubmit = () => {
    if (
      changeAcc.newpass != "" &&
      changeAcc.confirmpass != "" &&
      changeAcc.currentpass != ""
    ) {
      if (changeAcc.newpass == changeAcc.confirmpass) {
        var submitval = async () => {
          try {
            var valu = await axios.post(
              `${Endpoint}admin/put/admin_changepass.php`,
              changeAcc
            );
            if (valu.data == "Success") {
              setincorrect("crt");
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
    <>
      <div className="Change_popup">
        <div className="Change_popup_content">
          <div className="change_input_container">
            <div>
              <div className="change_heaging">
                <FaLock />
                <Para value="Current Password" />
              </div>
              <Input
                type={"text"}
                placeholder={
                  incorrect == "Empty"
                    ? " * Please Fill The field"
                    : "Enter your current password"
                }
                className={"change_input"}
                onChange={inputval}
                nam={"currentpass"}
              />
            </div>
            {incorrect == "Decline" && (
              <label className="notmatch">* Password Incorrect</label>
            )}
            <div>
              <div className="change_heaging">
                <FaLock />
                <Para value="New Password" />
              </div>
              <Input
                type={"text"}
                placeholder={
                  incorrect == "Empty"
                    ? " * Please Fill The field"
                    : "Enter your new password"
                }
                className={"change_input"}
                onChange={inputval}
                nam={"newpass"}
              />
            </div>
            <div>
              <div className="change_heaging">
                <FaLock />
                <Para value="Confirm Password" />
              </div>
              <Input
                type={"text"}
                placeholder={
                  incorrect == "Empty"
                    ? "* Please Fill The field"
                    : "Confirm your  password"
                }
                className={"change_input"}
                onChange={inputval}
                nam={"confirmpass"}
              />
            </div>
            {incorrect == "incorrect" && (
              <label className="notmatch">* Confirm Password Not Match</label>
            )}
          </div>
          <div className="change_pass_btn">
            <Button
              onclick={()=>{setchange(false)}}
              className={"change_submit_btn1"}
              letter={"Cancel"}
            />
            <Button
              onclick={handlesubmit}
              className={"change_submit_btn"}
              letter={"Save"}
            />
          </div>
        </div>
        {incorrect === "crt" && (
          <Popup
            text={"Password Changed"}
            value={"ok"}
            className={"pop_form_change"}
            onclick={() => {
              setchange(false);
            }}
          />
        )}
      </div>
    </>
  );
};
