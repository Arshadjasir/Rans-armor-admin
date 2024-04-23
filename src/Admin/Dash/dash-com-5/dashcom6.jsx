import React, { useEffect, useState } from "react";
import "./dashcom5.css";
import { Para } from "../../../Common/Para/Para";
import { Tablecom } from "../../../Common/Table/table";
import axios from "axios";
import { Endpoint } from "../../../Common/Endpoint/Endpoint";

export const Dashcom6 = ({ recent }) => {
  const [tdval, settdval] = useState([]);
  useEffect(() => {
    const Email = localStorage.getItem("Mail");
    const variable = async () => {
      var value = (
        await axios.post(
          `${Endpoint}admin/get/select_recent_user.php`,
          { Mail: Email }
        )
      ).data;
      settdval(value);
    };
    variable();
  }, []);

  const valtab = [
    {
      heading: "Name",
      data: "Name",
    },
    {
      heading: "User_Id",
      data: "User",
    },
    {
      heading: "Mail_Id",
      data: "Mail",
    },
    {
      heading: "Whatsapp No",
      data: "Whatsapp",
    },
    {
      heading: "Facebook Id",
      data: "Facebook",
    },
    {
      heading: "Instagram Id",
      data: "Instagram",
    },
  ];
  return (
    <div>
      <div className="dashcom5-taxt">
        <Para value={"Recently Added"} />
      </div>
      <Tablecom valtab={valtab} td={tdval} />
    </div>
  );
};
