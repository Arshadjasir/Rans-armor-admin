import React from 'react'
import "./Dash_Emailcard.css"
import { Para } from '../../Common/Para/Para'
import { TbMailFilled } from "react-icons/tb";

export const Dash_Emailcard = () => {
  return (
    <>
      <div className="Dashemail_container">
        <div className="Dashemail_iconbox">
          <TbMailFilled className="Dashemail_icon" />
          <Para value={"Email Campaigns"} />
        </div>
        <div className="Dashemail_value">
          <Para value={123} />
        </div>
      </div>
    </>
  );
}
