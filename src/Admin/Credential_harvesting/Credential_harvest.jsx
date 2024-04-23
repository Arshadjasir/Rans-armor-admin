import React, { useEffect, useState } from "react";
import "./credential_harvest.css";
import { Campaingn_box } from "../Campaingn_card_box/Campaingn_card_box";
import { Path } from "../../Common/Router/router";
export const Credential_harvest = () => {
  return (
    <>
      <Campaingn_box
        clickpath={"Credental Harvesting"}
        way={Path.admin_harvest_table}
      />
    </>
  );
};
