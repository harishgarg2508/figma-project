"use client";

import React from "react";
import {  AppBar,  Toolbar,  Box,  Paper,  IconButton,  Typography, Button,  Stack,} from "@mui/material";
import {
  Menu as MenuIcon,
  PersonOutlineOutlined as PersonIcon,
} from "@mui/icons-material";
import styles from "./page.module.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useSession } from "next-auth/react";
import BasicMenu from "@/components/menuItems/menu-item";

export default function Dashboard() {
  let userName = "";
  const { data: session, status } = useSession();
  if (status === "loading") {
    return <div>Loading...</div>;
  }
  if (session) {
    userName = session.user?.name || "Guest";
  }



  return (
    <Box className={styles.mainContainer}>
      <AppBar position="static" className={styles.appBar}>
        <Toolbar className={styles.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            className={styles.hamburgerButton}
          >
            <MenuIcon />
          </IconButton>
          <Box
            
            component="span"
            className={styles.appBarTitle}
          >
            Requirements prioritization
          </Box>
          <Stack direction="row" alignItems="center" gap={1}>
            <AccountCircleIcon />
            <Typography  className={styles.userName}>
              {userName}
            </Typography>
          </Stack>
          <Box className={styles.userMenuButton}>

            <BasicMenu />
          </Box>
        </Toolbar>
      </AppBar>

      <Box className={styles.sideBarAndMainContent}>
        <Box className={styles.sideBar}>
          <Box className={styles.personIconContainer}>
            <PersonIcon />
          </Box>
          <Box className={styles.personIconContainer}>
            <PersonIcon />
          </Box>
          <Box className={styles.personIconContainer}>
            <PersonIcon />
          </Box>
          <Box className={styles.personIconContainer}>
            <PersonIcon />
          </Box>
          <Box className={styles.personIconContainer}>
            <PersonIcon />
          </Box>
          <Box className={styles.personIconContainer}>
            <PersonIcon />
          </Box>
        </Box>

        <Box className={styles.mainContent}>
          <Box className={styles.mainContentContainer}>
            <Box className={styles.mainContentHeaderContainer}>
              <Box component="h1" className={styles.mainContentTitle}>
                Requirements list
              </Box>

              <Button variant="contained" className={styles.createNewButton}>
                CREATE NEW
              </Button>
            </Box>

            <Paper elevation={1} className={styles.mainContentBody}>
            </Paper>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
