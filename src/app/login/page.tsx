import styles from "./page.module.css";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { GoogleSignInButton } from "@/components/signin-button/google-signin-button";
import LanguageSwitcher from "@/components/language-switcher/language-switcher";
import { useTranslations } from "next-intl";

export default function Login() {
  const t = useTranslations("loginPage");

  return (
    <Box className={styles.container}>
      <Stack className={styles.main_outerBox}>
        <Box className={styles.main_innerBox}>
          <Box className={styles.logo_text_container}>
            <Box className={styles.logo}></Box>
            <Box className={styles.information_container}>
              <Box className={styles.logo_text}>{t("title")}</Box>
              <Box className={styles.text_information}>{t("textInformation")}</Box>
            </Box>
          </Box>
          <Box className={styles.continue_with_google_button_box}>
            <Box>
              <Box
                component="h6"
               
                className={styles.login_text_in_continue_with_google_button_box}
              >
                {t("loginText")}
              </Box>
            </Box>
            <GoogleSignInButton  />
          </Box>
        </Box>

        <Box className={styles.languageSwitcher}>
          <LanguageSwitcher />
        </Box>
      </Stack>
    </Box>
  );
}
