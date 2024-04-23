import React, { useEffect, useState } from "react";
import "./Campaingn_card_box.css";
import { Para } from "../../Common/Para/Para";
import Insta from "../../assets/Instagram1.png";
import Mail from "../../assets/TEXTS.png";
import Facebook from "../../assets/OBJECTS.png";
import Bank from "../../assets/bank.png";
import Games from "../../assets/game.png";
import { Card_template } from "../../Common/Card_template/Card_template";
import { Input } from "../../Common/Input/input";
import { FiSearch } from "react-icons/fi";
import { Button } from "../../Common/Button/button";
import { Path } from "../../Common/Router/router";
import { useNavigate } from "react-router-dom";
import { searchFun } from "../../Common/serarchfunction/searchfunction";
import { Popup } from "../../Common/Popup/popup";
export const Campaingn_box = ({ clickpath,way }) => {
  const navigate = useNavigate();
  const [dupli, setDupli] = useState([]);
  const [popup, setpopup] = useState(false);
  const data = [
    {
      img: Insta,
      text: "Instagram",
      click: "false",
    },
    {
      img: Mail,
      text: "Mail",
      click: "true",
    },
    {
      img: Facebook,
      text: "Facebook",
      click: "false",
    },
    {
      img: Bank,
      text: "Bank",
      click: "false",
    },
    {
      img: Games,
      text: "Games",
      click: "false",
    },
  ];
  useEffect(() => {
    setDupli(data);
  }, []);

  return (
    <div className="content_box">
      <div className="entich_top">
        <Para Para={clickpath} />
        <div className="inp">
          <FiSearch className="icon" />
          <Input
            className="search_input"
            onChange={(e) => {
              searchFun(e, data, setDupli);
            }}
          />
        </div>
      </div>
      <div className="heading">
        <Para Para="Select Template" />
      </div>
      <div className="Template_boxx">
        {dupli.map((res, i) => (
          <Card_template
            key={i}
            Img={res.img}
            text={res.text}
            onclick={() => {
              console.log(way);
              res.click == "true"
                ? navigate(`${way}/${res.text}`)
                : setpopup(true);
            }}
          />
        ))}
      </div>
      <div className="bottom">
        <Button
          value="Back"
          onclick={() => {
            navigate(Path.Campaign);
          }}
          className="back_btn"
        />
      </div>
      {popup == true && (
        <Popup
          text={"Currently Mail only Available"}
          className="popup_btn"
          value="Done"
          onclick={() => {
            setpopup(false);
          }}
        />
      )}
    </div>
  );
};
