import React, { useEffect, useState } from "react";
import { Para } from "../../../Common/Para/Para";
import "./dashcom4.css";
import { Tablecom } from "../../../Common/Table/table";
import axios from "axios";
import { Endpoint } from "../../../Common/Endpoint/Endpoint";

export const Dashcom4 = () => {
  // console.log(tab);
  const [recentdata, setrecentdata] = useState([]);
  const [load, setload] = useState([]);

  const valtab = [
    { heading: "Date And Time", data: "createdate" },
    { heading: "Template", data: "Type" },
    { heading: "No. of Users", data: "No_of_Users" },
  ];
  useEffect(() => {
    const openFun = async () => {
      const Email = localStorage.getItem("Mail");
      const value = (
        await axios.post(
          `${Endpoint}admin/get/select_recent_campaign.php`,
          { Mail: Email }
        )
      ).data;
      setrecentdata(value);
      setload(true);
    };
    openFun();
  }, []);


  return (
    <>
      <div className="com4-table-box ">
        <div className="com4-text">
          <Para value={"Recently Shared Template"} />
        </div>
        <div>
          {load ? (
            <Tablecom valtab={valtab} td={recentdata} />
          ) : (
            <Para value={"Loading"} />
          )}
        </div>
      </div>
    </>
  );
};
