"use client";


import styles from "./page.module.css";
import { useSession } from "next-auth/react";
import { AppBar, Box } from "@mui/material";
import MenuAppBar from "@/components/appbar/appbar";

export default function Dashboard() {
  const { data: session, status, update } = useSession();

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (session) {
    const userName = session.user?.name || "User";
  }
  return (
    <Box className={styles.mainContainer}>
      <MenuAppBar />

    </Box>
  );
}
