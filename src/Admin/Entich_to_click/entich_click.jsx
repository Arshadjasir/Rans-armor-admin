import "./entich_click.css";
import { useNavigate } from "react-router-dom";
import { Campaingn_box } from "../Campaingn_card_box/Campaingn_card_box";
import { Path } from "../../Common/Router/router";
export const Entich_click = () => {
  const navigate = useNavigate();
  return (
    <>
      <Campaingn_box clickpath={"Entich to click"} way={Path.admin_entich_table}/>
    </>
  );
};
 