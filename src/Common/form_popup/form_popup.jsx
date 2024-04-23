import React, { useEffect, useState } from "react";
import { Para } from "../Para/Para";
import "./form_popup.css";
import { Button } from "../Button/button";
import { Input } from "../Input/input";
import axios from "axios";
import { Endpoint } from "../Endpoint/Endpoint";

export const Form_Popup = ({
  form_title,
  setshare,
  Type,
  Camname,
  aftersubmit,
}) => {
  const [id, setid] = useState();
  const [load, setload] = useState();
  const [incorrect, setincorrect] = useState(false);
  const [fileval,setfileval]=useState(null)

  const [inputvalue, setinputvalue] = useState({
    Id: id,
    Type: Type,
    Campaingn: Camname,
    link: "",
    file: null,
  });

  useEffect(() => {
    const variable = async () => {
      var value = (
        await axios.get(
          `${Endpoint}Superadmin/get/campaign_id.php`
        )
      ).data;
      setid(value);
      setload(true);
    };
    variable();
  }, []);
  var inputfileval = (e)=>{
    var File = e.target.files[0];
    setfileval(File)
  }
  var Inputval = (e) => {
    let temp = { ...inputvalue, [e.target.name]: e.target.value };
    setinputvalue(temp);
    setincorrect(false);
  };
  var handlesubmit = async (e) => {
    e.preventDefault();
    if (inputvalue.link.trim() != "" ) {
      if(fileval){
      const formData = new FormData();
      // formData.append("link", inputvalue.link);
      formData.append("file", fileval);
      // Log the FormData object
      // console.log("FormData:", formData);
      try {
          var ok = await axios.post(
            `${Endpoint}admin/post/insert_c.php`,
            formData,
            {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            }
          );
          aftersubmit(inputvalue,ok.data);

      } catch (error) {
        console.error("Error submitting form data:", error);
      }
    }else{
      var dummy = "";
      aftersubmit(inputvalue,dummy);
    }
    } else {
      setincorrect(true);
    }
  };

  return (
    <>
      {load ? (
        <div className="form_popup">
          <div className="form_popup_top">
            <Para Para={form_title} />
          </div>
          <div className="form_popup_content">
            <div className="account">
              {/* <form> */}
              <div className="input_content">
                <div className="label">
                  <Para value={"Id"} />
                  <span>:</span>
                </div>
                <div className="input">
                  <Input
                    nam={"Id"}
                    className={"common_input"}
                    type={"text"}
                    maxLength={"10"}
                    onChange={Inputval}
                    readOnly={true}
                    value={id}
                  />
                </div>
              </div>
              <div className="input_content">
                <div className="label">
                  <Para Para="Type" />
                  <span>:</span>
                </div>
                <div className="input">
                  <Input
                    nam={"Type"}
                    className={"common_input"}
                    type={"text"}
                    maxLength={"10"}
                    onChange={Inputval}
                    value={Type}
                    readOnly={true}
                  />
                </div>
              </div>

              <div className="input_content">
                <div className="label">
                  <Para Para="Campaign Name" />
                  <span>:</span>
                </div>
                <div className="input">
                  <Input
                    nam={"Campaingn"}
                    className={"common_input"}
                    type={"text"}
                    maxLength={"15"}
                    onChange={Inputval}
                    readOnly={true}
                    value={Camname}
                  />
                </div>
              </div>

              <div className="input_content">
                <div className="label">
                  <Para Para="Link" />
                  <span>:</span>
                </div>
                <div className="input">
                  <Input
                    nam={"link"}
                    className={"common_input"}
                    type={"text"}
                    onChange={Inputval}
                  />
                  {incorrect == true && (
                    <label className="incorrect">
                      * Please fill this field
                    </label>
                  )}
                </div>
              </div>

              {location.pathname.includes("/send_attach_table") && (
                <div className="input_content">
                  <div className="label">
                    <Para Para="File" />
                    <span>:</span>
                  </div>
                  <div className="input">
                    <Input
                      nam={"file"}
                      className={"common_input"}
                      type={"file"}
                      // onChange={Inputval}
                      onChange={inputfileval}
                    />
                    {incorrect == "empty" && (
                      <label className="incorrect">
                        * File Field Cannot Be Empty
                      </label>
                    )}
                  </div>
                </div>
              )}

              <div className="input_content">
                <div className="label"></div>
                <div className="input">
                  <Button
                    onclick={handlesubmit}
                    className={"button"}
                    letter="Send"
                  />
                </div>
              </div>
              {/* </form> */}
            </div>
          </div>
        </div>
      ) : (
        <h1>Loading</h1>
      )}
    </>
  );
};
