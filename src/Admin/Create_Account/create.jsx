import React, { useEffect, useState } from "react";
import { Form } from "../Form/Formuser";
import axios from "axios";
import { Endpoint } from "../../Common/Endpoint/Endpoint";
import CircularIndeterminate from "../../Common/Progress/Progress";
import "./create.css";
export const Create = () => {
  const [inputvalue, setinputvalue] = useState();
  const [popup, setpopup] = useState(false);
  const [placeholder, setplaceholder] = useState("");
  const [Company, setCompany] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [userid, setuserid] = useState("");
  const [incorrect, setincorrect] = useState(false);

  useEffect(() => {
    const Email = localStorage.getItem("Mail");
    var submit = async () => {
      try {
        var valu = await axios.post(
          `${Endpoint}Superadmin/get/admin_company.php`,
          { Mail: Email }
        );
        var userid = await axios.get(
          `${Endpoint}admin/get/getuser_id.php`
        );
        setuserid(userid.data);
        setCompany(valu.data);
        setLoaded(true);
      } catch (err) {
        console.log(err);
      }
    };
    submit();
  }, []);

  const Popup = (e) => {
    e.preventDefault();
    console.log(inputvalue);
    if (
      inputvalue != undefined &&
      inputvalue.Name.length > 1 &&
      inputvalue.Mail.length > 1 &&
      inputvalue.Password.length > 1 &&
      inputvalue.Facebook.length > 1 &&
      inputvalue.Instagram.length > 1
    ) {
      if (inputvalue.Whatsapp.length == 10) {
        var submitval = async () => {
          try {
            var valu = await axios.post(
              `${Endpoint}admin/post/insert_user.php`,
              inputvalue
            );
            console.log(valu.data);
            if (valu.data == "success") {
              setpopup(true);
            } else if (valu.data == "userexist") {
              setpopup("decline");
            }
          } catch (err) {
            console.log(err);
          }
        };
        submitval();
      } else {
        setincorrect(true);
      }
    } else {
      setplaceholder("*Please fill the content");
    }
  };

  return (
    <>
      {loaded ? (
        <Form
          userid={userid}
          setpopup={setpopup}
          popup={popup}
          onclick={Popup}
          sendvalue={setinputvalue}
          value={"Create Account"}
          incorrect={incorrect}
          placeholder={placeholder}
          letter={"Submit"}
          Company={Company}
          text={"You have successfully created the account !"}
        />
      ) : (
        <div className="Progress">
            <CircularIndeterminate />
        </div>
      )}
    </>
  );
};
