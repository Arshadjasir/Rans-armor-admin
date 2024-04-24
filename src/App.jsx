import "./App.css";

import Side_nav from "./Common/Side_Nav/side_nav";
import { BrowserRouter } from "react-router-dom";
import { Routercomponent } from "./Common/Router/Routercomponent";
import Top_Nav from "./Common/Top_Nav/top_nav";

import { createContext, useContext, useEffect, useState } from "react";
import MiniDrawer from "./Common/Side_Nav/Drawer";

export const context = createContext();
function App() {
  // const [login, setlogin] = useState();
  // const [BtnDashboard, setBtnDashboard] = useState(true);
  // const [Btngroup, setBtngroup] = useState(true);
  // const [Btntraining, setBtntraining] = useState(true);
  return (
    <>
      <BrowserRouter>
        {/* <Top_Nav /> */}
        {/* <div className="page"> */}
        {/* <Side_nav /> */}
        <MiniDrawer />
        {/* </div> */}
      </BrowserRouter>
    </>
  );
}
export default App;
