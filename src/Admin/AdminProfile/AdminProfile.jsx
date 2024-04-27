import React, { useState } from "react";
import { Para } from "../../Common/Para/Para";
import { Button } from "../../Common/Button/button";
import "./AdminProfile.css";
import Profile from "../../assets/man.png";

export const AdminProfile = () => {
  const [edit, setedit] = useState(false);

  return (
    <>
      <div className="AdminProfile_container">
        <div className="AdminProfile_title">
          <Para value={"Profile"} />
        </div>
        <div className="AdminProfile_box">
          <div className="AdminProfile_toptext">
            <Para value={"My Profile"} />
            <div className="AdminProfile_Btns">
              {edit ? (
                <>
                  <Button letter={"Save"} className={"AdminProfile_btn"} />
                  <Button
                    letter={"Cancel"}
                    className={"AdminProfile_btn_can"}
                    onclick={() => {
                      setedit(false);
                    }}
                  />
                </>
              ) : (
                <Button
                  letter={"Edit"}
                  className={"AdminProfile_btn"}
                  onclick={() => {
                    setedit(true);
                  }}
                />
              )}
            </div>
          </div>
          <div className="AdminProfile_information">
            <img src={Profile} width={"100px"} height={"100px"} />
            <Para value={"Srinivasan"} />
            <Para value={"Example@gmail.com"} />
          </div>
          <div className="AdminProfile_contact">
            <div>
              <Para value={"contact"} />
              <Para value={"N/A"} />
            </div>
            <div>
              <Para value={"contact"} />
              <Para value={"N/A"} />
            </div>
            <div>
              <Para value={"contact"} />
              <Para value={"N/A"} />
            </div>
            <div>
              <Para value={"contact"} />
              <Para value={"N/A"} />
            </div>
          </div>
          <div>
            <Button letter={"Logout"} className={"AdminProfile_logout"} />
          </div>
        </div>
      </div>
    </>
  );
};
