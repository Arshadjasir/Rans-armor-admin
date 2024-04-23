import React, { useEffect, useState } from "react";
import "./dashcom5.css";
import { Para } from "../../../Common/Para/Para";
import { Tablecom } from "../../../Common/Table/table";
import axios from "axios";
import { Endpoint } from "../../../Common/Endpoint/Endpoint";

export const Dashcom5 = ({ recent }) => {
  const [tdval, settdval] = useState([]);
  console.log("111111111111");
  useEffect(() => {
    const variable = async () => {
      var value = (
        await axios.get(
          `${Endpoint}Superadmin/get/recent_admin.php`
        )
      ).data;
      settdval(value);
    };
    variable();
  }, []);

  const valtab = [
    { heading: "Name", data: "Name" },
    { heading: "Mail id", data: "Mail" },
    { heading: "Password", data: "Password" },
    { heading: "Expiry Date", data: "Expiry" },
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