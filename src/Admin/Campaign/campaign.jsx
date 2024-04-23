import React from 'react'
import "./campaign.css";
import { Button } from '../../Common/Button/button';
import { useNavigate } from 'react-router-dom';
import { Path } from '../../Common/Router/router';
// import Button from '../../Common/Button'
export const Campaign = () => {
  const navigate=useNavigate();
  return (
    <div className="campaign">
        <Button value="Entich to Click" onclick={()=>{navigate(Path.entich_click)}} className="button"/>
        <Button value="Credential Harvesting" onclick={()=>{navigate(Path.credential_harvest)}} className="button"/>
        <Button value="Send Attachment" onclick={()=>{navigate(Path.send_attach)}} className="button"/> 
    </div>
  )
}