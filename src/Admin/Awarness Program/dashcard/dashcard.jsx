import React from 'react'
import "./dashcard.css";

import { TbMailFilled } from "react-icons/tb";
import { Para } from '../../../Common/Para/Para';

export const Dashcard = () => {
  return (
    <>
      <div className="dashcard_container">
        <div className="dashcard_iconbox">
          <TbMailFilled className="dashcard_icon" />
          <Para value={"Email Campaigns"} />
        </div>
        <div className="dashcard_value">
          <Para value={123} />
        </div>
      </div>
    </>
  );
}
