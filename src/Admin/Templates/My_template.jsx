import React from "react";
import { Template } from "./Template";

export const My_template = () => {
  const cities = [
    [
      { name: "Rome", code: "RM" },
      { name: "London", code: "LDN" },
      { name: "Istanbul", code: "IST" },
      { name: "Paris", code: "PRS" },
      { name: "New York", code: "NY" },
    ],
    [
      { name: "Rome", code: "RM" },
      { name: "London", code: "LDN" },
      { name: "Istanbul", code: "IST" },
      { name: "Paris", code: "PRS" },
      { name: "New York", code: "NY" },
    ],
  ];

  return (
    <>
      <Template drpvalues={cities} bredcrums={"Template > My Template "} />
    </>
  );
};
