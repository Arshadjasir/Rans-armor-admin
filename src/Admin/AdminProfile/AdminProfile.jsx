import React from 'react'
import { Para } from '../../Common/Para/Para'
import { Button } from '../../Common/Button/button'
import "./AdminProfile.css"
import Profile from "../../assets/man.png"

export const AdminProfile = () => {

  return (
    <>
      <div className="AdminProfile_container">
        <div className="AdminProfile_title">
          <Para value={"Profile"} />
        </div>
        <div className="AdminProfile_box">
          <div className="AdminProfile_toptext">
            <Para value={"My Profile"} />
            <div className="AdminProfile_Btns" >
              <Button letter={"Edit"} />
              <Button letter={"Save"} />
              <Button letter={"Cancel"} />
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
            <Button letter={"Logout"} />
          </div>
        </div>
      </div>
    </>
  );
}
