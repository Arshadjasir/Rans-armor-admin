import React from 'react'
import "./popup.css";
import { Para } from '../../Common/Para/Para';
import { Button } from '../../Common/Button/button';

export const Popup = ({onclick,value,text,className}) => {
  return (
       <div className="popup" onClick={onclick}>
        <div className="popup_content">
          <div className="text_content">
            <Para Para={text}/> 
          </div>
          <Button value={value} className={className} style={{width:"fit-content"}}  />
        </div>
      </div> 
  )
}