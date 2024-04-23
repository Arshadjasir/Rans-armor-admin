import React, { useEffect, useState } from "react";
import { Button } from "../../Common/Button/button";
import { Para } from "../../Common/Para/Para";
import "./settings.css";
import { Switch } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { Path } from "../../Common/Router/router";
import { SwitchCom } from "../../Common/Switch/switch";
import { Input } from "../../Common/Input/input";
import { RiFileUserFill } from "react-icons/ri";
import { IoNotifications } from "react-icons/io5";
import { TbInfoSquareRoundedFilled } from "react-icons/tb";
import { TbHelpSquareRoundedFilled } from "react-icons/tb";
import { IoIosArrowForward } from "react-icons/io";
import { Popup } from "../../Common/Popup/popup";
import { Changepopup } from "../../Common/change_pass_popup/Changepopup";
import axios from "axios";
import { Endpoint } from "../../Common/Endpoint/Endpoint";

// import { Path } from "../Router/router";
export const Settings = () => {
  const Navigate = useNavigate();
  const [Mail, setMail] = useState([]);
  const [Account, setAccount] = useState([]);
  const [change, setchange] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const Email = localStorage.getItem("Mail");
    setMail(Email);
    const variable = async () => {
      var value = (
        await axios.post(
          `${Endpoint}admin/get/admin_mail_view.php`,
          { Mail: Email }
        )
      ).data;
      setAccount(value);
    };
    variable();
  }, []);
  return (
    <div className="settings-cotainer">
      <Para value={"Settings"} className={"settings-top-text"} />
      <div className="Settings-btn-grp">
        <div className="Settings-btn-box">
          <Button
            letter={"App Settings"}
            onclick={() => {
              setchange(false);
            }}
            className={"Setting-in-btn"}
          />
            <Button
              letter={"View Blocked List"}
              onclick={() => {
                Navigate(Path.admin_blocklist);
              }}
              className={"Setting-in-btn"}
            />
          
        </div>
      </div>
      {/* <div> */}
      <div className="settings-box-container">
        <div className="settings-box">
          <div className="in_settings_box">
            <div>
              <div className="setting-headings">
                <RiFileUserFill />
                <Para value={"Account Information"} />
              </div>
              <div className="settings-input">
                <label className="label">Email </label>
                <Input
                  type={"text"}
                  value={Account.Mail}
                  readOnly={true}
                  className={"settings_input_box"}
                />
              </div>
              <div className="settings-input">
                <label className="label">Password </label>
                <Input
                  type={"password"}
                  value={Account.Password}
                  readOnly={true}
                  className={"settings_input_box"}
                />
                <Button
                  onclick={() => {
                    setchange(true);
                  }}
                  value={"change"}
                  className={"settings_change_btn"}
                />
              </div>
            </div>
            <div>
              <div className="setting-headings">
                <IoNotifications />
                <Para
                  // className={"inside-notification"}
                  value={"Notifications"}
                />
                <div className="btn-switch">
                  <SwitchCom />
                </div>
              </div>
            </div>
            <div>
              <div className="setting-headings">
                <TbInfoSquareRoundedFilled />
                <Para value={"About"} />
              </div>
              <div className="settings_About">
                <Para value=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam obcaecati voluptas nisi, aspernatur provident debitis accusantium optio incidunt deserunt eveniet tempore harum numquam quidem quam labore nam, ad id repellat non. Tempore saepe ullam sequi corrupti voluptas molestiae eligendi adipisci. Unde est dolorem deserunt nisi molestiae dolores omnis laborum consectetur.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus officia vitae nulla in non eveniet iste incidunt eligendi accusamus sed, cupiditate cum magni placeat soluta natus minus dolorum veritatis a corporis? Doloremque, perspiciatis ullam. Fugit in perspiciatis dolorem, minima molestias totam veritatis aperiam error veniam. Iure harum nostrum voluptate repudiandae?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium sint quae asperiores assumenda delectus nulla, quod ducimus reiciendis iste similique excepturi eius beatae maxime atque pariatur laboriosam voluptatibus cupiditate illo? Pariatur ullam laborum aspernatur perferendis animi esse quo maxime nostrum consequuntur quasi eaque neque, itaque perspiciatis quaerat. Asperiores, doloribus veniam." />
              </div>
            </div>
            <div>
              <div className="setting-headings">
                <TbHelpSquareRoundedFilled />
                <Para value={"FAQ"} />
              </div>
              <div className="settings_fAQ">
                <Para
                  value={
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident illo ut nemo quaerat"
                  }
                />
                <IoIosArrowForward />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* </div> */}
      {change && <Changepopup Email={Mail} setchange={setchange} />}
    </div>
  );
};
