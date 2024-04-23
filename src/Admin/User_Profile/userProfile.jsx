import React, { useState } from "react";
import "./userProfile.css";
import Whatsapp from "../../assets/WhatsApp_1_.png";
import Facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";
import { Para } from "../../Common/Para/Para";
import { RiArrowGoBackLine } from "react-icons/ri";
import { Button } from "../../Common/Button/button";
import { useNavigate } from "react-router-dom";
import { Path } from "../../Common/Router/router";
import { Popup } from "../../Common/Popup/popup";
import axios from "axios";
import { Endpoint } from "../../Common/Endpoint/Endpoint";

export const UserProfile = ({ setProfile, Clickval }) => {
  const [Show, setShow] = useState(false);
  const [Show2, setShow2] = useState(false);
  // const [profile,setprofile]=useState()
  const navigate = useNavigate();


  // console.log(Clickval);
  return (
    <div className="User_profile_Page">
      <div className="user_Profile">
        <div className="top">
          <Para Para="Profile" />
          <RiArrowGoBackLine className="back_arrow"
            onClick={() => {
              setProfile(false);
            }}
          />
        </div>
        <div className="profile_img">
          <div className="img"></div>
          <Para Para={Clickval.Name} />
        </div>
        <div className="social_media">
          <div className="social_id">
            <span className="left">
              <img src={Whatsapp} alt="whatsapp" />
            </span>
            <span className="right">
              <Para Para={Clickval.Whatsapp} />
            </span>
          </div>
          <div className="social_id">
            <span className="left">
              <img src={Facebook} alt="facebook" />
            </span>
            <span className="right">
              <Para Para={Clickval.Facebook} />
            </span>
          </div>
          <div className="social_id">
            <span className="left">
              <img src={instagram} alt="instagram" />
            </span>
            <span className="right">
              <Para Para={Clickval.Instagram} />
            </span>
          </div>
        </div>
        <div className="buttons">
          <Button
            value="Update"
            className="btn1"
            onclick={() => {
              navigate(`${Path.admin_userUpdate}/${Clickval.idd}`);
            }}
          />
          <Button
            value="Remove"
            className="btn1"
            onclick={() => {
              const Del = async () => {
                try {
                  var result = await axios.delete(
                    `${Endpoint}admin/delete/delete_user.php`,{data:{id:Clickval.idd}}
                  );
                  setShow(true);
                } catch (error) {
                  console.error("Error deleting User:", error);
                  throw error;
                }
              };
              Del();
            }}
          />
          <Button value="Block" className="btn2" onclick={() => {
                const Block = async () => {
                  try {
                    var valu = Clickval.idd;
                    var result = await axios.put(
                      `${Endpoint}admin/put/block_user.php`,
                      { id: valu }
                    );
                    setShow2(true);
                  } catch (error) {
                    console.error("Error unblock User:", error);
                    throw error;
                  }
                };
                Block();
              }} />
        </div>
      </div>
      {Show && (
        <Popup
          text="You have removed the account !"
          value="Done"
          className="popup_btn"
          onclick={() => {
            Path.Admin_User_Profile, setShow(false), setProfile(false);
          }}
        />
      )}
      {Show2 && (
        <Popup
          text="You have blocked this account !"
          className="popup_block_btn"
          value="Done"
          onclick={() => {
            Path.Admin_User_Profile, setShow2(false), setProfile(false);
          }}
          style={{ backgroundColor: "#DC350C" }}
        />
      )}
    </div>
  );
};
