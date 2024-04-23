import React from "react";
import "./screen7.css";
import { RiArrowGoBackFill } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import profile from "../../assets/profile.png";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { Para } from "../../Common/Para/Para";
import InstaPng from "../../assets/instagram.png";
import WhatsappPng from "../../assets/WhatsApp_1_.png";
import FacebookPng from "../../assets/facebook.png";
import mailPng from "../../assets/mail.png";
import { useNavigate } from "react-router-dom";
import { Path } from "../../Common/Router/router";

export default function Screen7() {
  const Navigate = useNavigate();
  const User = [
    {
      socialMardia: FaWhatsapp,
      details: "9042748516",
    },
    {
      socialMardia: FaFacebook,
      details: "fayas.ahamed123@gmail.com",
    },
  ];
  return (
    <div className="screen7">
      <div className="profile">
        <div className="top">
          <Para Para="Profile" />
          <RiArrowGoBackFill
            onClick={() => {
              Navigate(Path.Usertraining);
            }}
          />
        </div>
        <div className="details">
          <div className="img">
            <img src={profile} alt="profile" height={77} width={77} />
          </div>
          <Para Para="Fayas" className="name" />
          <div className="detail">
            <div className="contact">
              <div className="contact_det">
                <div className="social_icon">
                  <img src={WhatsappPng} alt="whatsapp" />
                </div>
                <div className="id">
                  <Para Para="fayasahamed" className="mailId" />
                </div>
              </div>
              <FaRegEdit />
            </div>
            <div className="contact">
              <div className="contact_det">
                <div className="social_icon">
                  <img src={FacebookPng} alt="facebook" />
                </div>
                <div className="id">
                  <Para Para="fayasahamed" className="mailId" />
                </div>
              </div>
              <FaRegEdit />
            </div>
            <div className="contact">
              <div className="contact_det">
                <div className="social_icon">
                  <img src={InstaPng} alt="instagram" />
                </div>
                <div className="id">
                  <Para Para="fayasahamed" className="mailId" />
                </div>
              </div>
              <FaRegEdit />
            </div>
            <div className="contact">
              <div className="contact_det">
                <div className="social_icon">
                  <img src={mailPng} alt="mail" />
                </div>
                <div className="id">
                  <Para Para="fayasahamed@2gmail.com" className="mailId" />
                </div>
              </div>
              <FaRegEdit />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}