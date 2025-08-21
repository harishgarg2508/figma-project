"use client";

import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import style from "./page.module.css";
import { Box, Typography } from "@mui/material";
import { useTranslations } from "next-intl";


export function GoogleSignInButton() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const t = useTranslations('loginPage')

  const handleSignIn = async () => {
    try {
      const callbackUrl = searchParams.get("callbackUrl") || "/dashboard";

      const result = await signIn("credentials", {
        name: "Harish Garg",
        email: "testuserppppppppppppppppp@gmail.com",
        password: "TestUser",
        redirect: false,
      });

      if (result?.ok) {
        router.push(callbackUrl);
        router.refresh();
      } else {
        console.error("Sign in failed:", result?.error);
      }
    } catch (error) {
      console.error("Sign in error:", error);
    }
  };
return (
    <button
      className={style.googleSignInButton}
      onClick={handleSignIn}
      type="button"
    >
      <img src="/google-icon.svg" alt="Google Icon" className={style.icon} />
      <span className={style.text}>{t("continueWithGoogle")}</span>
    </button>
  );
}