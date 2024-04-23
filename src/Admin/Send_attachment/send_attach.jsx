import { Path } from "../../Common/Router/router";
import { Campaingn_box } from "../Campaingn_card_box/Campaingn_card_box";
import "./send_attach.css";

export const Send_Attach = () => {
  return (
    <>
      <Campaingn_box
        clickpath={"Send Attachment"}
        way={Path.admin_send_table}
      />
    </>
  );
};
