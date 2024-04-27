import React, { Component, useEffect, useState } from "react";
import { Path } from "./router.js";
import { Route, Routes } from "react-router-dom";
// import { Indexpage } from "../../Super-Admin/super index/indexpage.jsx";
// import { Update } from "../../Super-Admin/Screen/createbox/Usermanagement/userman-update/Update.jsx";
import { Settings } from "../../Admin/Settings/settings.jsx";
import { Campaign } from "../../Admin/Campaign/campaign.jsx";
import Screen1 from "../Screen1/screen1.jsx";
import Screen2 from "../Screen2/screen2.jsx";
import Screen3 from "../Screen3/screen3.jsx";
import { Entich_click } from "../../Admin/Entich_to_click/entich_click.jsx";
import { Credential_harvest } from "../../Admin/Credential_harvesting/Credential_harvest.jsx";
import { Send_Attach } from "../../Admin/Send_attachment/send_attach.jsx";
import { Create } from "../../Admin/Create_Account/create.jsx";
import { UserManage } from "../../Admin/User_Management/userManage.jsx";
import { Index_screen } from "../../Admin/Index_Screen/Index_screen.jsx";
import { UserProfile } from "../../Admin/User_Profile/userProfile.jsx";
import { UserUpdate } from "../../Admin/Update_Account/update.jsx";
import Screen7 from "../../User/Screen7/screen7.jsx";
import Screen4 from "../../User/Screen4/screen4.jsx";
import Screen5 from "../../Admin/Training/screen5.jsx";
import { Report } from "../../Admin/Report/report.jsx";
import Otp from "../OTP_Page/otp.jsx";
// import { Campaingn_table } from "../../Admin/Campaign_table/campaingn_table.jsx";
import { Entich_table } from "../../Admin/Entich_to_click/entich_table.jsx";
import { Credential_table } from "../../Admin/Credential_harvesting/credential_table.jsx";
import { Send_attach_table } from "../../Admin/Send_attachment/send_attach_table.jsx";
import { blocktable } from "../../Admin/Block/blocktable.jsx";
import { Form_Popup } from "../form_popup/form_popup.jsx";
import { AdminProfile } from "../../Admin/AdminProfile/AdminProfile.jsx";
import { Manage_group } from "../../Admin/User_Management/Manage_group.jsx";
import { All_campaigns } from "../../Admin/Campaings_dropdown/All_campaigns.jsx";
import { Active_campaigns } from "../../Admin/Campaings_dropdown/Active_campaigns.jsx";
import { Completed_campaigns } from "../../Admin/Campaings_dropdown/completed_campaigns.jsx";
import { Training_Campaigns } from "../../Admin/Awarness Program/Assign_Trainings/Assign_Training.jsx";
import { Awarness_Dashbord } from "../../Admin/Awarness Program/Dashboard/Dashbord.jsx";
import { Deptwise_report } from "../../Admin/Reports_list/Deptwise_report.jsx";
import { Desigwise_report } from "../../Admin/Reports_list/Desigwise_report.jsx";
import { Groupwise_report } from "../../Admin/Reports_list/Groupwise_report.jsx";
import { Assign_form } from "../../Admin/Awarness Program/Assign_training_form/Assign_form.jsx";
import { Assign_training } from "../../Admin/Awarness Program/Training_Campaings/Training_Campaings.jsx";
import { My_template } from "../../Admin/Templates/My_template.jsx";
import { System_template } from "../../Admin/Templates/System_Template.jsx";
import { Aware } from "../../Admin/Templates/Aware.jsx";

export const Routercomponent = () => {
  const routes = [
    {
      path: Path.home,
      Component: Index_screen,
    },

    {
      path: Path.Admin_CreateAcc,
      Component: Create,
    },
    // {
    //   path: Path.userupdate,
    //   Component: Update,
    // },
    // {
    //   path: Path.user,
    //   Component: Update,
    // },
    {
      path: Path.admin_userUpdate,
      Component: UserUpdate,
    },
    {
      path: Path.Admin_Usermanage,
      Component: UserManage,
    },
    {
      path: Path.admin_userUpdate,
      Component: UserUpdate,
    },
    {
      path: Path.admin_userUp,
      Component: UserUpdate,
    },
    {
      path: Path.admin_settings,
      Component: Settings,
    },
    {
      path: Path.user_settings,
      Component: Settings,
    },
    {
      path: Path.admin_blocklist,
      Component: blocktable,
    },
    {
      path: Path.Campaign,
      Component: Campaign,
    },
    {
      path: Path.entich_click,
      Component: Entich_click,
    },
    {
      path: Path.admin_entich_table,
      Component: Entich_table,
    },
    {
      path: Path.admin_entich_table_id,
      Component: Entich_table,
    },
    {
      path: Path.admin_harvest_table,
      Component: Credential_table,
    },
    {
      path: Path.admin_harvest_table_id,
      Component: Credential_table,
    },
    {
      path: Path.credential_harvest,
      Component: Credential_harvest,
    },
    {
      path: Path.send_attach,
      Component: Send_Attach,
    },
    {
      path: Path.admin_send_table,
      Component: Send_attach_table,
    },
    {
      path: Path.admin_send_table_id,
      Component: Send_attach_table,
    },
    {
      path: Path.Admin_User_Profile,
      Component: UserProfile,
    },
    {
      path: Path.admin_Report,
      Component: Report,
    },
    //////////////////////user_router////////////////////
    {
      path: Path.userlogin,
      Component: Screen1,
    },
    {
      path: Path.forget_pass,
      Component: Screen2,
    },
    {
      path: Path.change_pass,
      Component: Screen3,
    },
    {
      path: Path.otp_page,
      Component: Otp,
    },
    // {
    //   path: Path.user_dash,
    //   Component: Indexpage,
    // },
    {
      path: Path.user_profile,
      Component: Screen7,
    },
    {
      path: Path.admin_Traning,
      Component: Screen5,
    },
    {
      path: Path.Usertraining,
      Component: Screen4,
    },
    {
      path: Path.admin_instagram,
      Component: Screen5,
    },
    {
      path: Path.admin_form_popup,
      Component: Form_Popup,
    },
    {
      path: Path.admin_Profile,
      Component: AdminProfile,
    },
    {
      path: Path.Manage_Group,
      Component: Manage_group,
    },
    {
      path: Path.all_campaigns,
      Component: All_campaigns,
    },
    {
      path: Path.active_campaigns,
      Component: Active_campaigns,
    },
    {
      path: Path.completed_campaigns,
      Component: Completed_campaigns,
    },
    {
      path: Path.training_campaigns,
      Component: Training_Campaigns,
    },
    {
      path: Path.awarness_dashboard,
      Component: Awarness_Dashbord,
    },
    {
      path: Path.report_dept,
      Component: Deptwise_report,
    },
    {
      path: Path.report_desig,
      Component: Desigwise_report,
    },
    {
      path: Path.report_group,
      Component: Groupwise_report,
    },
    {
      path: Path.assign_form,
      Component: Assign_form,
    },
    {
      path: Path.assign_traing,
      Component: Assign_training,
    },
    {
      path: Path.my_template,
      Component: My_template,
    },
    {
      path: Path.system_template,
      Component: System_template,
    },
    {
      path: Path.aware_template,
      Component: Aware,
    },
  ];
  return (
    <>
      <Routes>
        {routes.map((val, i) =>
          true ? (
            <Route path={val.path} key={i} element={<val.Component />} />
          ) : (
            <Route path={Path.userlogin} key={i} element={<Screen1 />} />
          )
        )}
      </Routes>
    </>
  );
};
