import React from 'react'
import "./Training_card.css";
import Image from "../../../src/assets/6071868_3078021.png"
import { Para } from '../../Common/Para/Para';
import { Button } from '../../Common/Button/button';
import { HiOutlinePlay } from "react-icons/hi2";
export const Training_card = () => {
  return (
    <div className="Training_card">
        <div className="Training_image">
            <img src={Image} alt="img" />
        </div>
        <div className="text">
            <Para value={"Privacy and data protection"} className={"card_title"}/>
            <Para value={" Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores illo recusandae, maiores itaque beatae enim saepe cumque ipsam officiis aut! Enim?"} className={"card_text"}/>
        </div>
        <div className="card_button">
            <Button value={<HiOutlinePlay/>} className={"play_btn"}/>
            <Button value={"Select Training"} className={"select_training_btn"}/>
        </div>
    </div>
  )
}
