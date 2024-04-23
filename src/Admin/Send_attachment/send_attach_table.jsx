import React from 'react'
import { Campaingn_table } from '../Campaign_table/campaingn_table'
import { Path } from '../../Common/Router/router'
export const Send_attach_table = () => {
  return (
    <Campaingn_table
    page="Campaingn > Send Attachments" 
    title="Send Attachments" 
    popup_heading="Send Attachments"
    success="Document Successfully Attached...!"
    document_type="Document Type"
    sharee="Share"
    div="checkbox_content"
    form_title="Send Attachments"
    Back={Path.send_attach}
    Create={true}
    Share={false}
    
    /> 
  )
}