"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Button from "@mui/material/Button";
import Image from "next/image";
import style from "@/app/login/page.module.css";

interface GoogleSignInButtonProps {
    className?: string;
    children: React.ReactNode;
}

export function GoogleSignInButton({ className, children }: GoogleSignInButtonProps) {
    const router = useRouter();

    const handleSignIn = async () => {
        try {
            const result = await signIn("credentials", {
                email: "testuser@gmail.com",
                password: "TestUser",
                redirect: false,
            });

            if (result?.ok) {
                router.push("/dashboard");
            } else {
                console.error("Sign in failed:", result?.error);
            }
        } catch (error) {
            console.error("Sign in error:", error);
        }
    };

    return (
        <Button
            onClick={handleSignIn}
            startIcon={<img src="/google-icon.svg" alt="Google Icon" />}
            type="button"
        >
            {children}
        </Button>
    );
}
