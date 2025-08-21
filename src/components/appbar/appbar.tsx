import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import style from "./page.module.css";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton, Paper, Stack } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useTranslations } from "next-intl";
import ProfileDropdown from "../profiledropdown/profile-dropdown";
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
export default function MenuAppBar() {
  const t = useTranslations("dashboard");

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar className={style.appBar} position="static">
        <Toolbar>
          <Stack direction={'row'} className={style.hamburgerAndTitle}>
            <IconButton className={style.menuIcon}>
              <MenuIcon />
            </IconButton>
            
            <Box component="h6" className={style.appBarTitle}>
              {t("appbarTitle")}
            </Box>
          </Stack>
          <Box className={style.accountIcon}>
            <IconButton color="inherit" className={style.accountButton}>
              <AccountCircleIcon />
            </IconButton>
            <ProfileDropdown />
          </Box>
        </Toolbar>
      </AppBar>

        <Box className={style.sideBarAndMainContent}>
          <Box className={style.sideBar}>
            <Box className={style.personIconContainer}>
              <PersonOutlineOutlinedIcon />
            </Box>
            <Box className={style.personIconContainer}>
              <PersonOutlineOutlinedIcon />
            </Box>
            <Box className={style.personIconContainer}>
              <PersonOutlineOutlinedIcon />
            </Box>
            <Box className={style.personIconContainer}>
              <PersonOutlineOutlinedIcon />
            </Box>
            <Box className={style.personIconContainer}>
              <PersonOutlineOutlinedIcon />
            </Box>
            <Box className={style.personIconContainer}>
              <PersonOutlineOutlinedIcon />
            </Box>
          </Box>
          <Box className={style.mainContent}>
                <Box className={style.mainContentContainer}>
                    <Box className={style.mainContentHeaderContainer}>
                        <Box component='h1' className={style.mainContentTitle}>
                            Requirements list
                        </Box>
                        <Box className={style.createNewButton} component='button'>
                            CREATE NEW

                        </Box>

                    </Box>
                   <Paper className={style.mainContentBody}>


                    </Paper>

                </Box>

          </Box>
        </Box>
    </Box>
  );
}
