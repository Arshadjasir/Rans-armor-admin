import React, { useEffect, useState } from "react";
import "./Form.css";
import { Button } from "../../Common/Button/button";
import { useNavigate } from "react-router-dom";
import { Popup } from "../../Common/Popup/popup";
import { Input } from "../../Common/Input/input";
import { Para } from "../../Common/Para/Para";
import { Path } from "../../Common/Router/router";

export const Form = ({
  popup,
  sendvalue,
  value,
  onclick,
  valcoming,
  ithanda,
  placeholder,
  letter,
  text,
  Company,
  incorrect,
  setpopup,
  userid,
}) => {
  if (ithanda == true) {
    var empty = {
      Name: "",
      User: "",
      Mail: "",
      Password: "",
      Whatsapp: "",
      Facebook: "",
      Instagram: "",
      isActive: 1,
    };
  } else {
    var empty = {
      Name: "",
      User: "",
      Mail: "",
      // Adminid: Company.id,
      Password: "",
      Whatsapp: "",
      Facebook: "",
      Instagram: "",
      isActive: 1,
      // Companyname: Company,
    };
  }
  const [inputvalue, setinputvalue] = useState(empty);
  // console.log(inputvalue.Companyname);
  // console.log(inputvalue);
  //   useEffect(() => {
  //     setBtnDashboard(false);
  //     setBtngroup(false);
  //     setBtntraining(false);
  //   }, []);

  //
  //
  //
  //
  ithanda == true &&
    useEffect(() => {
      setinputvalue(valcoming);
    }, [valcoming]);

  const Navigate = useNavigate();
  var inpval = (e) => {
    let temp = { ...inputvalue, [e.target.name]: e.target.value };
    setinputvalue({ ...inputvalue, [e.target.name]: e.target.value });
    sendvalue(temp);
    setpopup(false);
  };
  const [show, setshow] = useState(false);

  return (
    <div className="create_Account">
      <div className="heading">
        <Para value={"Create New User"}/>
      </div>
      <form >
      <div className="input_Content">
        <div className="input_Box">
          <span>
             <Para value={"Name"}/>
             <Input type={"text"} className={"form_input"} placeholder={"Enter your name"} nam={"Name"} onChange={inpval}  
             value={inputvalue.Name} maxLength={"10"}/>
           </span>
        </div>
        <div className="input_Box">
          <span>
           <Para value={"Email"}/>
           <Input type={"text"} className={"form_input"}  placeholder={"Enter your email"}  nam={"Mail"} onChange={inpval}
           maxLength={"30"} value={inputvalue.Mail}/>
           </span>
        </div>
        <div className="input_Box">
          <span>
           <Para value={"Employee Id"}/>
           <Input type={"text"} className={"form_input"}  placeholder={"Enter your employee id"}/>
           </span>
        </div>
        <div className="input_Box">
          <span>
           <Para value={"Cadre"}/>
           <Input type={"text"} className={"form_input"}  placeholder={"Enter cadre"}/>
           </span>
        </div>
        <div className="input_Box">
          <span>
           <Para value={"Contact"}/>
             <div className="contact">
               <select name="" id="" className="dropdown">
                <option value="">India-91</option>
               </select>
               <Input type={"number"} className={"form_input2"}  placeholder={"Enter your contact number"} maxLength={"10"}
               value={inputvalue.Whatsapp}/>
             </div>
           </span>
        </div>
        <div className="input_Box">
          <span>
           <Para value={"Designation"}/>
           <Input type={"text"} className={"form_input"}  placeholder={"e.g.Software Developer"}/>
           </span>
        </div>
        <div className="input_Box">
          <span>
           <Para value={"Department"}/>
           <Input type={"text"} className={"form_input"}  placeholder={"Development"}/>
           </span>
        </div>
        <div className="input_Box">
          <span>
           <Para value={"Reporting Manager Email"}/>
           <Input type={"text"} className={"form_input"}  placeholder={"Enter reporting manager"}/>
           </span>
        </div>
        <div className="input_Box">
          <span>
           <Para value={"Branch"}/>
           <Input type={"text"} className={"form_input"}  placeholder={"e.g.India"}/>
           </span>
        </div>
        <div className="input_Box">
          <span>
           <Para value={"Company"}/>
           <Input type={"text"} className={"form_input"}  placeholder={"Enter your company"}/>
           </span>
        </div>
        <div className="input_Box">
          <span>
           <Para value={"Country"}/>
           <Input type={"text"} className={"form_input"}  placeholder={"e.g.India"}/>
           </span>
        </div>
        <div className="input_Box">
          <div className="form_button">
            <Button value={"Cancel"} className={"cancel_btn"}/>
            <Button value={"Save"} className={"save_btn"}/>
          </div>
        </div>
      </div>
      </form>
    </div>
    // <div className="create_acc">
    //   <div className="account">
    //     <Para value={value} className="title" />
    //     <form>
    //       <div className="input_content">
    //         <div className="label">
    //           <Para value={"Name"} />
    //           <span>:</span>
    //         </div>
    //         <div className="input">
    //           <Input
    //             nam={"Name"}
    //             onChange={inpval}
    //             className={"common_input"}
    //             type={"text"}
    //             value={inputvalue.Name}
    //             maxLength={"10"}
    //             placeholder={placeholder}
    //           />
    //         </div>
    //       </div>
    //       <div className="input_content">
    //         <div className="label">
    //           <Para Para="User Id" />
    //           <span>:</span>
    //         </div>
    //         <div className="input">
    //           <Input
    //             nam={"User"}
    //             onChange={inpval}
    //             className={"common_input"}
    //             type={"text"}
    //             value={userid||inputvalue.User}
    //             maxLength={"10"}
    //             placeholder={placeholder}
    //             readOnly={true}
    //           />
    //         </div>
    //       </div>
    //       <div className="input_content">
    //         <div className="label">
    //           <Para Para="Password" />
    //           <span>:</span>
    //         </div>
    //         <div className="input">
    //           <Input
    //             nam={"Password"}
    //             onChange={inpval}
    //             className={"common_input"}
    //             type={"text"}
    //             value={inputvalue.Password}
    //             maxLength={"15"}
    //             placeholder={placeholder}
    //           />
    //         </div>
    //       </div>
    //       <div className="input_content">
    //         <div className="label">
    //           <Para Para="Company Name" />
    //           <span>:</span>
    //         </div>
    //         <div className="input">
    //           <Input
    //             nam={"Companyname"}
    //             onChange={inpval}
    //             className={"common_input"}
    //             type={"text"}
    //             // value={Company.Companyname}
    //             maxLength={"15"}
    //             placeholder={placeholder}
    //             readOnly={true}
    //           />
    //         </div>
    //       </div>
    //       <div className="input_content">
    //         <div className="label">
    //           <Para Para="Whatsapp No" />
    //           <span>:</span>
    //         </div>
    //         <div className="input">
    //           <Input
    //             nam={"Whatsapp"}
    //             onChange={inpval}
    //             className={"common_input"}
    //             type={"number"}
    //             maxLength={"10"}
    //             value={inputvalue.Whatsapp}
    //             placeholder={placeholder}
    //           />
    //           <br />
    //           {incorrect && (
    //             <label className="incorrect">* Field must be 10 numbers </label>
    //           )}
    //         </div>
    //       </div>

    //       <div className="input_content">
    //         <div className="label">
    //           <Para Para="Mail I'd " />
    //           <span>:</span>
    //         </div>
    //         <div className="input">
    //           <Input
    //             nam={"Mail"}
    //             onChange={inpval}
    //             className={"common_input"}
    //             type={"text"}
    //             maxLength={"30"}
    //             value={inputvalue.Mail}
    //             placeholder={placeholder}
    //           />
    //           {popup == "decline" && (
    //             <Para
    //               Para="*Email already exist...!"
    //               className="already_exist"
    //             />
    //           )}
    //         </div>
    //       </div>
    //       <div className="input_content">
    //         <div className="label">
    //           <Para Para="Instagram I'd" />
    //           <span>:</span>
    //         </div>
    //         <div className="input">
    //           <Input
    //             nam={"Instagram"}
    //             onChange={inpval}
    //             className={"common_input"}
    //             type={"text"}
    //             maxLength={"15"}
    //             value={inputvalue.Instagram}
    //             placeholder={placeholder}
    //           />
    //         </div>
    //       </div>
    //       <div className="input_content">
    //         <div className="label">
    //           <Para Para="Facebook I'd" />
    //           <span>:</span>
    //         </div>
    //         <div className="input">
    //           <Input
    //             nam={"Facebook"}
    //             onChange={inpval}
    //             className={"common_input"}
    //             type={"text"}
    //             maxLength={"15"}
    //             value={inputvalue.Facebook}
    //             placeholder={placeholder}
    //           />
    //         </div>
    //       </div>
    //       <div className="input_content">
    //         <div className="label"></div>
    //         <div className="input">
    //           <Button onclick={onclick} className={"button"} letter={letter} />
    //         </div>
    //       </div>
    //     </form>
    //   </div>
    
    //   {popup == true && (
    //     <Popup
    //       text={text}
    //       className="popup_btn"
    //       value="Done"
    //       onclick={() => {
    //         Navigate(Path.Admin_Usermanage, setshow(false));
    //       }}
    //     />
    //   )}
    // </div>
  );
};
