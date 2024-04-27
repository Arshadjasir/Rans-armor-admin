import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Form } from "../Form/Formuser";
import { Endpoint } from "../../Common/Endpoint/Endpoint";
import "./update.css"
import { Para } from "../../Common/Para/Para";
export const UserUpdate = () => {
  const [currentval, setcurrentval] = useState({
    Name: "",
    Mail: "",
    Password: "",
    Expiry: "",
  });
  const [inputvalue, setinputvalue] = useState();
  const paramid = useParams();
  const [popup, setpopup] = useState(false);
  const [placeholder, setplaceholder] = useState("");
  const [Company, setCompany] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [incorrect, setincorrect] = useState(false);

  // console.log(paramid.userid);

  useEffect(() => {
    try {
      const as = async () => {
        const Email = localStorage.getItem("Mail");
        var valu = await axios.post(
          `${Endpoint}Superadmin/get/admin_company.php`,
          { Mail: Email }
        );
        setCompany(valu.data);

        var upcom = (
          await axios.post(
            `${Endpoint}admin/get/select_user.php`,
            { Mail: Email }
          )
        ).data;
        let filtered =
          paramid.userid != ""
            ? upcom.filter((val) => val.id === paramid.userid)
            : [];
        setcurrentval(filtered[0]);
        setLoaded(true);
      };
      as();
    } catch (error) {
      console.log(error);
    }
  }, []);

  var afterupdate = (e) => {
    e.preventDefault();
    if (
      inputvalue != undefined &&
      inputvalue.Name.length > 1 &&
      inputvalue.User.length > 1 &&
      inputvalue.Mail.length > 1 &&
      inputvalue.Password.length > 1 &&
      inputvalue.Whatsapp.length > 1 &&
      inputvalue.Facebook.length > 1 &&
      inputvalue.Instagram.length > 1
    ) {
      if (inputvalue.Whatsapp.length == 10) {
        const as = async () => {
          try {
            var val = currentval.id;
            var upcom = await axios.put(
              `${Endpoint}admin/put/update_user.php`,
              { ...inputvalue, id: val }
            );
            if (upcom.data == "Success") {
              setpopup(true)
            }else if(upcom.data == "decline"){
              setpopup("decline")  
            }
          } catch {
            console.log("data not updated");
          }
        };
        as();
      } else {
        setincorrect(true);
      }
    } else {
      setplaceholder("*Please fill the content");
    }
  };
  return (
    <>
      <div className="Update_user_container">
        <div style={{width:"95%"}}> 
          <Para value={"User > Update user"} className={"update_breadcrumbs"}/>
        </div>
          <div className="updateform_container">

        {loaded ? (
          <Form
            setpopup={setpopup}
            sendvalue={setinputvalue}
            ithanda={true}
            valcoming={currentval}
            value={"User Update"}
            onclick={afterupdate}
            placeholder={placeholder}
            // popupval={"Successfully Updated"}
            popup={popup}
            letter={"Update"}
            text={"You have updated the account !"}
            Company={Company}
            incorrect={incorrect}
          />
        ) : (
          <h1>Loading</h1>
        )}
        </div>
      </div>
    </>
  );
};
