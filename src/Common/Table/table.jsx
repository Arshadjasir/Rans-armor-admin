import React, { useState } from "react";
import "./table.css";
import { Para } from "../Para/Para";
import { Button } from "../Button/button";

export const Tablecom = ({
  value,
  td,
  onclick,
  setId,
  valtab,
  block,
  unBlockHandler,
}) => {
  var sno = 1;
  const handle = (e) => {
    var idd = e.id;
    var Mail = e.Mail;
    var Expiry = e.Expiry;
    var Name = e.Name;
    var Whatsapp = e.Whatsapp;
    var Instagram = e.Instagram;
    var Facebook = e.Facebook;
    var Type = e.Type;
    var date = e.createdate;

    var step = {
      idd: idd,
      Mail: Mail,
      Expiry: Expiry,
      Name: Name,
      Whatsapp: Whatsapp,
      Instagram: Instagram,
      Facebook: Facebook,
      Type : Type,
      Createdate : date
    };
    setId(step);
    onclick();
  };

  return (
    <div>
      <div className="dashcom5-taxt">
        <Para value={value} />
      </div>
      <table className="dashcom5-table">
        <thead>
          <tr className="dashcom5-row">
            <th>S.no</th>
            {valtab.map((e, i) => (
              <th key={i}>{e.heading}</th>
            ))}
            {block && <th>Action</th>}
          </tr>
        </thead>
        <tbody>
          {td != "" ? (
            td.map((e, i) => (
              <tr
                onClick={() => {
                  handle(e);
                }}
                key={i}
                className="dashcom5-row"
              >
                <td>{sno++}</td>
                {valtab.map((val, i) => ( 
                  <td key={i}>
                    {val.data === "Click"
                      ? e[val.data] === "0"
                        ? "Not Clicked"
                        : e[val.data] === "1"
                        ? "Clicked"
                        : e[val.data]
                      : e[val.data]}
                  </td>
                ))}
                {block && (
                  <td>
                    <Button
                      className={"sam-btn"}
                      letter={"Unblock"}
                      onclick={() => unBlockHandler(e.id)}
                    />
                  </td>
                )}
              </tr>
            ))
          ) : (
            <tr className="dashcom5-row">
              {block ? (
                <td colSpan={valtab.length + 2}>No Data Found</td>
              ) : (
                <td colSpan={valtab.length + 1}>No Data Found</td>
              )}
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
