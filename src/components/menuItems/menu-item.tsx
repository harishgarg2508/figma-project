"use client";
import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { signOut } from "next-auth/react";
import { Box, ListItemIcon, ListItemText, Paper, Tooltip } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import { useSession } from "next-auth/react";
import style from './page.module.css'

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };



  let userName = "";
  let email = "";
  const { data: session, status } = useSession();
  if (status === "loading") {
    return <div>Loading...</div>;
  }
  if (session) {
    userName = session.user?.name || "Guest";
    email = session.user?.email || "guest@example.com";
  }



  return (
    <Box  >
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <KeyboardArrowDownIcon sx={{ color: "white" }} />
      </Button>

      <Menu
        className={style.profileDropdown}
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          list: {
            "aria-labelledby": "basic-button",
          },
        }}
      >
        <MenuItem className={style.mainContainer} onClick={handleClose}>

           <Box  className={style.userData}>
              <Box className={style.listItemInnerBox}>
              
             <Box component='p' className={style.primaryText}>{userName}</Box>
                      <Tooltip className={style.tooltip} title={email} placement="bottom-start">

             <Box component='p' className={style.secondaryText}>{email}</Box>
          </Tooltip>
            </Box>
           </Box>
        </MenuItem>
        <MenuItem className={style.logoutButton} onClick={() => signOut({ callbackUrl: "/login" })}>
        <Box className={style.logoutBox}>
          <ListItemIcon className={style.logoutIcon}>
            <LogoutIcon  sx={{ color: "#424242",height:'20px', width:'20px' }} />
          </ListItemIcon>
          <Box className={style.logoutText}>
            Logout
          </Box>
        </Box>
        </MenuItem>
      </Menu>

    </Box>
  );
}
