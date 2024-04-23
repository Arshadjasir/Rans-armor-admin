import React, { useEffect } from 'react'
import { Campaingn_table } from '../Campaign_table/campaingn_table'
import { Path } from '../../Common/Router/router'
import axios from "axios";
import { Endpoint } from '../../Common/Endpoint/Endpoint';

export const Credential_table = () => {
   useEffect(() => {
     const urlParams = new URLSearchParams(window.location.search);
     const idParam = urlParams.get("id");
     const campaignIdParam = urlParams.get("campaingn_id");
     console.log(idParam);
     console.log(campaignIdParam);

     const senddata = async () => {
       var value = (
         await axios.post(
           `${Endpoint}admin/put/clicked_user.php`,
           { user_id: idParam, campaingn_id: campaignIdParam }
         )
       ).data;
       console.log(value);
     };
     senddata();
   }, []);

  return (
    <Campaingn_table 
    page="Campaingn > Credential Harvesting" 
    title="Credential Harvesting" 
    popup_heading="Credential Harvesting"
    success="Link Successfully Created...!"
    div="hide"
    Back={Path.credential_harvest}
    form_title="Credential Harvesting"
    Create={false}
    Share={true}
    /> 
  )
}