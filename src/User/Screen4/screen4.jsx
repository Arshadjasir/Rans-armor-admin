import React, { useContext, useEffect, useState } from "react";
import "./screen4.css";
import Insta from "../../assets/Instagram1.png";
import Mail from "../../assets/TEXTS.png";
import Facebook from "../../assets/OBJECTS.png";
import Bank from "../../assets/bank.png";
import Games from "../../assets/game.png";
import { FaEyeSlash } from "react-icons/fa6";
import { useLocation, useNavigate } from "react-router-dom";
import { Para } from "../../Common/Para/Para";
import { Card_template } from "../../Common/Card_template/Card_template";
import { Path } from "../../Common/Router/router";
import { FaPhoneAlt } from "react-icons/fa";
import { RiArrowGoBackLine } from "react-icons/ri";
import { Button } from "../../Common/Button/button";

export default function Screen4() {
  const [Show, setShow] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const Data = [
    {
      id: 1,
      text: "Mail",
      img: Mail,
    },
    {
      id: 2,
      text: "Facebook",
      img: Facebook,
    },
    {
      id: 3,
      text: "Bank",
      img: Bank,
    },
    {
      id: 4,
      text: "Games",
      img: Games,
    },
  ];
  return (
    <div className="content_box ">
      <div className="Training">
        <Para Para="Training" />
      </div>
      <div className="Template_box">
        <Card_template
          Img={Insta}
          text="Instagram"
          onclick={() => {
            location.pathname.includes("/admin") &&
              navigate(Path.admin_instagram);
            location.pathname.includes("/_user") &&
              navigate(Path.user_instagram);
          }}
        />
        {Data.map((data, index) => {
          return (
            <div
              className="box2"
              key={index}
              onClick={() => {
                setShow(true);
              }}
            >
              <div className="img">
                <img
                  src={data.img}
                  alt="insta"
                  height="auto"
                  width="fit-content"
                />
                <FaEyeSlash className="eye" />
              </div>
              <div className="text1">
                <Para Para={data.text} />
              </div>
            </div>
          );
        })}
      </div>
      {Show && (
        <div className="popup">
          <div className="popup_content">
            <div className="back_icon">
              <RiArrowGoBackLine
                onClick={() => {
                  setShow(false);
                }}
              />
            </div>
            <div className="text_content">
              <Para Para="This content is disabled if you want to see this please content...!" />
            </div>
            <span className="admin_contact">
              <Para Para="Admin" />
              <span>
                <FaPhoneAlt />
                <Para Para="+91 9789545258" />
              </span>
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
