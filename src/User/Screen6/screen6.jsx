import React, { useEffect } from 'react'
import "./screen6.css"
import { SwitchCom } from '../../Common/Switch/switch'
import { useNavigate } from 'react-router-dom'
import { Para } from '../../Common/Para/Para'
import { Button } from '../../Common/Button/button'
import { Path } from '../../Common/Router/router'
export default function Screen6() {
  const navigate=useNavigate();
  return (
    <div className="content_box">
      <div className="settings">
          <Para Para="Settings"/>
      </div>
      <div className="menu">
        <Button className="menu_btn" value="App Settings"/>
        <Button className="menu_btn" value="View Profile" onclick={()=>{navigate(Path.user_viewprofile)}}/>
      </div>
      <div className="setting_box"> 
        <div className="notification">
          <Para Para="Notification"/>
          <SwitchCom/>
        </div>
      </div>
    </div> 
  )      
}