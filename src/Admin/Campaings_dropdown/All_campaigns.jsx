import React, { useEffect, useState } from "react";
import { Report } from "../Report/report";
import { Endpoint } from "../../Common/Endpoint/Endpoint";
import axios from "axios";

export const All_campaigns = () => {
  const [tabval, settabval] = useState([]);
  const [load,setload]=useState(false)
 useEffect(() => {
   const Email = localStorage.getItem("Mail");
   const variable = async () => {
     var value = (
       await axios.post(`${Endpoint}admin/get/campaingn_report.php`, {
         Mail: Email,
       })
     ).data;
     settabval(value);
     setload(true)
     // setDupli(value);
   };
   variable();
 }, []);
  return (
    <>
      
      <Report
        tabval={tabval}
        load={load}
        breadcrumbs={"Campaign > All Campaigns "}
      />
    </>
  );
};
