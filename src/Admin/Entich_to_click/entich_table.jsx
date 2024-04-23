import React, { useState } from "react";
import { Campaingn_table } from "../Campaign_table/campaingn_table";
import { Path } from "../../Common/Router/router";

export const Entich_table = () => {
  return (
    <Campaingn_table
      page="Campaingn > Entich to click"
      title="Entich to click"
      popup_heading="Entich to click"
      success="Link Successfully Created...!"
      div="hide"
      Back={Path.entich_click}
      form_title="Entich to Click"
      Create={false}
      Share={true}
    />
  );
};
