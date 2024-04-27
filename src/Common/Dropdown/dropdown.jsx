import React, { useState } from "react";
import { Dropdown } from "primereact/dropdown";
import "primereact/resources/themes/lara-light-cyan/theme.css";
export default function CheckmarkDemo({drpvalues}) {
  const [selectedCity, setSelectedCity] = useState(null);

  return (
    <div className="card flex justify-content-center">
      <Dropdown
        value={selectedCity}
        onChange={(e) => setSelectedCity(e.value)}
        options={drpvalues}
        optionLabel="name"
        placeholder="All"
        className="w-full md:w-14rem"
        checkmark={true}
        highlightOnSelect={false}
       style={{paddingLeft:"20px",backgroundColor:"white",height:"40px",display:"flex",justifyContent:"center",alignItems:"center"}}
      />
    </div>
  );
}


