import { IoHomeSharp } from "react-icons/io5";
import { FaUsers } from "react-icons/fa";
import { HiSpeakerphone } from "react-icons/hi";
import { BiSolidReport } from "react-icons/bi";
import { RiGraduationCapFill } from "react-icons/ri";
import { HiTemplate } from "react-icons/hi";
import { Path } from "../Router/router";

export const Btnitems = [
  {
    Btnname: "Home",
    Icon: IoHomeSharp,
    isdrop: false,
    path: Path.home,
  },
  {
    Btnname: "User Management",
    Icon: FaUsers,
    isdrop: true,
    path: Path.home,
  },
  {
    Btnname: "Campaigns",
    Icon: HiSpeakerphone,
    isdrop: true,
    path: Path.Campaign,
  },
  {
    Btnname: "Reports",
    Icon: BiSolidReport,
    isdrop: true,
    path: Path.home,
  },
  {
    Btnname: "Awarness Program",
    Icon: RiGraduationCapFill,
    isdrop: true,
    path: Path.home,
  },

  {
    Btnname: "Templates",
    Icon: HiTemplate,
    isdrop: true,
    path: Path.home,
  },
];

export const Btndropitems = [
  {
    parentname: "User Management",
    Btnname: "User",
    Icon: FaUsers,
    path: Path.Admin_Usermanage,
  },
  {
    parentname: "User Management",
    Btnname: "Group",
    Icon: FaUsers,
    path: Path.Manage_Group,
  },
  {
    parentname: "Campaigns",
    Btnname: "Campaigns Menu",
    Icon: HiSpeakerphone,
    path: Path.Campaign,
  },
  {
    parentname: "Campaigns",
    Btnname: "All Campaigns",
    Icon: HiSpeakerphone,
    path: Path.all_campaigns,
  },
  {
    parentname: "Campaigns",
    Btnname: "Active Campaigns",
    Icon: HiSpeakerphone,
    path: Path.active_campaigns,
  },
  {
    parentname: "Campaigns",
    Btnname: "Completed Campaigns",
    Icon: HiSpeakerphone,
    path: Path.completed_campaigns,
  },
  {
    parentname: "Campaigns",
    Btnname: "Campaigns Summary",
    Icon: HiSpeakerphone,
    path: Path.admin_Report,
  },
  {
    parentname: "Reports",
    Btnname: "Department Wise Report",
    Icon: HiSpeakerphone,
    path: Path.report_dept,
  },
  {
    parentname: "Reports",
    Btnname: "Designation Wise Report",
    Icon: HiSpeakerphone,
    path: Path.report_desig,
  },
  {
    parentname: "Reports",
    Btnname: "Group Wise Report",
    Icon: HiSpeakerphone,
    path: Path.report_group,
  },
  {
    parentname: "Awarness Program",
    Btnname: "Dashboard",
    Icon: HiSpeakerphone,
    path: Path.awarness_dashboard,
  },
  {
    parentname: "Awarness Program",
    Btnname: "Training Campaings",
    Icon: HiSpeakerphone,
    path: Path.assign_traing,
  },
  {
    parentname: "Awarness Program",
    Btnname: "Assign Training",
    Icon: HiSpeakerphone,
    path: Path.training_campaigns,
  },
  {
    parentname: "Awarness Program",
    Btnname: "Awarness Posters",
    Icon: HiSpeakerphone,
    path: Path.Campaign,
  },
  {
    parentname: "Templates",
    Btnname: "Awarness Template",
    Icon: HiSpeakerphone,
    path: Path.Campaign,
  },
  {
    parentname: "Templates",
    Btnname: "My Template",
    Icon: HiSpeakerphone,
    path: Path.Campaign,
  },
  {
    parentname: "Templates",
    Btnname: "System Template",
    Icon: HiSpeakerphone,
    path: Path.Campaign,
  },
];
