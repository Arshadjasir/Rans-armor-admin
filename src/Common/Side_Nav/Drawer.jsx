import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import MailIcon from "@mui/icons-material/Mail";
import { Routercomponent } from "../Router/Routercomponent";
import { useLocation, useNavigate } from "react-router-dom";
import Collapse from "@mui/material/Collapse";
import StarBorder from "@mui/icons-material/StarBorder";
import { Btndropitems, Btnitems } from "./Drawerbuttons";
import { GiPlainCircle } from "react-icons/gi";
import Profileimg from "../../assets/man.png";
import AccountMenu from "../../Admin/Profileclick/Profileclick";
import { AdminProfile } from "../../Admin/AdminProfile/AdminProfile";
import { Form } from "../../Admin/Form/Formuser";
import { Training_card } from "../../Admin/Training/Training_card";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const [openDropdownIndex, setOpenDropdownIndex] = React.useState(null);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleDropdownClick = (index) => {
    setOpenDropdownIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const navigate = useNavigate();
  const location = useLocation();

  if (
    !location.pathname.includes("/forget_password") &&
    location.pathname !== "/" &&
    !location.pathname.includes("/change_pass") &&
    !location.pathname.includes("/otp_page")
  ) {
    return (
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="fixed" open={open} >
          <Toolbar sx={{ backgroundColor: "#205295" }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                marginRight: 5,
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ display: "flex", alignItems: "center" }}
              >
                RANSARMOR
              </Typography>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{
                  width: "auto",
                  display: "flex",
                  alignItems: "center",
                  gap: "20px",
                  paddingRight: "5px",
                }}
              >
                {/* <img src={Profileimg} width={"42px"} height={"42px"} />
                <b>Username</b> */}
                <AccountMenu />

              </Typography>
            </div>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "rtl" ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButton>
          </DrawerHeader>
          <Divider />

          <Divider />
          <List>
            {Btnitems.map((text, index) => (
              <ListItem key={index} disablePadding sx={{ display: "block" }}>
                <ListItemButton
                  sx={{
                    minHeight: 52,
                    justifyContent: open ? "initial" : "center",
                    px: 2.0,
                    fontSize: 22,
                  }}
                  onClick={() => {
                    text.isdrop
                      ? handleDropdownClick(index)
                      : navigate(text.path);
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                      // color: "black",
                    }}
                  >
                    {<text.Icon />}
                  </ListItemIcon>
                  <ListItemText
                    primary={text.Btnname}
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                  {text.isdrop == true &&
                    (openDropdownIndex === index ? (
                      <ExpandLess />
                    ) : (
                      <ExpandMore />
                    ))}
                </ListItemButton>

                {text.isdrop && openDropdownIndex === index && (
                  <Collapse
                    in={openDropdownIndex === index}
                    timeout="auto"
                    unmountOnExit
                  >
                    <List component="div" disablePadding>
                      {Btndropitems.map(
                        (e, i) =>
                          e.parentname === text.Btnname && (
                            <ListItemButton
                              key={i}
                              sx={{ pl: 4.2 }}
                              onClick={() => {
                                navigate(e.path);
                              }}
                            >
                              <div style={{ width: "15%" }}>
                                <ListItemIcon>
                                  <GiPlainCircle
                                    style={{
                                      color: "rgb(112, 112, 90)",
                                      fontSize: "small",
                                    }}
                                  />
                                </ListItemIcon>
                              </div>

                              <ListItemText primary={e.Btnname} />
                            </ListItemButton>
                          )
                      )}
                    </List>
                  </Collapse>
                )}
              </ListItem>
            ))}
          </List>
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, p: 0 }}>
          <DrawerHeader />
          {/* <Routercomponent /> */}
        {/* <Form/> */}
        <Training_card/>

        </Box>
      </Box>
    );
  } else {
    return (
      <>
        <Routercomponent />
      </>
    );
  }
}
