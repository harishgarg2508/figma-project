'use client';

import Button from "@mui/material/Button";
import { signOut } from "next-auth/react";
import styles from "./page.module.css";

export default function Dashboard() {
  return (
    <div className={styles.dashboard}>
      <h1>Dashboard</h1>
      <Button
        onClick={() => signOut({ callbackUrl: "/login" })}
        variant="outlined"
        color="primary"
        className={styles.signOutButton}
      >
        Sign Out
      </Button>
    </div>
  );
}
