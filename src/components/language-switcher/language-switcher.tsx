"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Select, MenuItem } from "@mui/material";
import style from "./page.module.css";
import { useTranslations } from "next-intl";

const COOKIE_NAME = "locale";

function setCookie(name: string, value: string, days = 365) {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${encodeURIComponent(
    value
  )}; expires=${expires}; path=/`;
}

function getCookie(name: string) {
  if (typeof document === "undefined") return undefined;
  return document.cookie
    .split("; ")
    .find((row) => row.startsWith(`${name}=`))
    ?.split("=")[1];
}

export default function LanguageSwitcher() {
  const router = useRouter();
  const [locale, setLocale] = useState("en");
  const [pathname, setPathname] = useState("");

  const t = useTranslations("loginPage");

  useEffect(() => {
    const stored = getCookie(COOKIE_NAME);
    if (stored) {
      setLocale(stored);
    }
    setPathname(window.location.pathname);
  }, []);

  const handleChange = (e: any) => {
    const newLocale = e.target.value;
    setCookie(COOKIE_NAME, newLocale);
    setLocale(newLocale);
    const newPathname = pathname.replace(/^\/(en|es)/, `/${newLocale}`);
    router.push(newPathname);
    router.refresh();
  };

  return (
    <Select
      value={locale}
      onChange={handleChange}
      variant="standard"
      disableUnderline
      className={style.languageSwitcher}
      sx={{ backgroundColor: "transparent",
        fontFamily: "Open Sans",
        color:'#424242',
        fontSize:'14px',
        lineHeight:'20px',
        letterSpacing:'0%',
        verticalAlign:'middle',
        


       }}
    >
      <MenuItem className={style.menuItem} value="en">
        {t("english")}
      </MenuItem>
      <MenuItem className={style.menuItem} value="es">
        {t("spanish")}
      </MenuItem>
    </Select>
  );
}
