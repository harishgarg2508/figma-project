'use client';

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const COOKIE_NAME = "locale";

function setCookie(name: string, value: string, days: number = 365) {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/`;
}

function getCookie(name: string): string | undefined {
  if (typeof document === "undefined") return undefined; // guard for SSR
  return document.cookie
    .split("; ")
    .find((row) => row.startsWith(`${name}=`))
    ?.split("=")[1];
}

export default function LanguageSwitcher() {
  const router = useRouter();
  
  const [locale, setLocale] = useState("en");
  const [pathname, setPathname] = useState("");

  useEffect(() => {
    // Read the cookie only on the client-side on initial load
    const stored = getCookie(COOKIE_NAME);
    if (stored) {
      setLocale(stored);
    }
    // Set the pathname after the component mounts
    setPathname(window.location.pathname);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value;
    
    // 1. Set the new locale in the cookie
    setCookie(COOKIE_NAME, newLocale);
    setLocale(newLocale);
    
    // 2. Construct the new URL by replacing the current locale segment
    // Using window.location.pathname as a fallback for the path
    const newPathname = pathname.replace(/^\/(en|es)/, `/${newLocale}`);

    // 3. Programmatically navigate to the new URL to trigger a server-side re-render
    router.push(newPathname);
  };

  return (
    <select value={locale} onChange={handleChange}>
      <option value="en">English</option>
      <option value="es">Spanish</option>
    </select>
  );
}
