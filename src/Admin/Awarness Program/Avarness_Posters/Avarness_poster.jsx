import React, { useState } from 'react'
import { FiSearch } from 'react-icons/fi';
import { Para } from '../../../Common/Para/Para';
import { Input } from '../../../Common/Input/input';
import "./Avarness_poster.css";
import poster from "../../../assets/design.png"
import poster2 from "../../../assets/design_1.png"
import { Button } from '../../../Common/Button/button';
import { Poster_popup } from './Poster_popup';

export const Avarness_poster = () => {

    const [Popup,setPopup]= useState(false);
    const posters=[
        {
            image:poster,
        },
        {
            image:poster,
        }, 
        {
            image:poster,
        }, 
        {
            image:poster,
        },
        {
            image:poster,
        }, 
        {
            image:poster,
        }, 
        {
            image:poster,
        },
        {
            image:poster,
        }, 
        {
            image:poster,
        }, 
        {
            image:poster,
        },
    ]
  return (
    <div className="Avarness">
        <div className="Avareness_fulltop">
            <div className="Avarness_top">
             <Para Para="Avareness Program > Avareness Posters " className="para" />
             <div className="inp">
                 <FiSearch className="icon" />
                 <Input
                 className="search_input"
                 // onChange={(e) => searchFun(e, tabval, setDupli)}
                  />
               </div>
          </div>
          <Para value={"Avareness Posters"} className={"para"}/>
        </div>
      

      <div className="posters">
        {
            posters.map((img,index)=>(
                <img src={img.image} alt="poster" key={index} className='poster_img' onClick={()=>{setPopup(true)}}/>
            ))
        }
      </div>
      {
        Popup&&(
            <div className="Popup">
            <div className="popup_image">
                 <img src={poster2} alt="poster" />
                 <div className="popup_buttons">
                     <Button value={"Cancel"} className={"poster_bbtn"} onclick={()=>{setPopup(false)}}/>
                     <Button value={"Download"} className={"poster_bbtn"}/>
                 </div>
             </div>
         </div>
        )
      }
    </div>
  )
}
