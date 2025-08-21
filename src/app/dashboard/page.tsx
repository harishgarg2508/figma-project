'use client';

import Button from "@mui/material/Button";
import { signOut } from "next-auth/react";
import styles from "./page.module.css";
import { useSession } from "next-auth/react";

export default function Dashboard() {
  const { data: session,status,update} = useSession();

    if (status === "loading") {
        return <div>Loading...</div>;
    }

     if (session) {
      const userName = session.user?.name || "User";
     }
  return (
    <div className={styles.dashboard}>
      <h1>Dashboard</h1>
      <h2>Welcome, {session?.user?.name || "User"}!</h2>
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
