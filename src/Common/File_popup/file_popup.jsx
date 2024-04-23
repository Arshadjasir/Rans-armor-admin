import React from 'react'
import { Para } from '../Para/Para'
import { Input } from '../Input/input'
import { Button } from '../Button/button'


export const File_popup = ({onclick}) => {
  return (
    <div className="form_popup" >
      <div className="form_popup_top">
        <Para Para="Entich To Click"/>
      </div>
      <div className="form_popup_content">
         <div className="account">
             {/* <form> */}
                 <div className="input_content">
                     <div className="label">
                         <Para value={"File"} />
                         <span>:</span>
                     </div>
                     <div className="input">
                         <Input
                         nam={"file"}
                         // onChange={inpval}
                         className={"common_input"}
                         type={"file"}
                         // value={inputvalue.Name}
                        //  maxLength={"10"}
                         // placeholder={placeholder}
                         />
                     </div>
                  </div>
                  <div className="input_content">
                     <div className="label"></div>
                         <div className="input">
                             <Button
                              onclick={onclick}
                              className={"button"}
                              letter="Send"
                             />
                         </div>
                     </div>
             {/* </form> */}
         </div>
      </div>
 </div>
  )
}
