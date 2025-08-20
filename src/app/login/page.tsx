import { Locale } from "@/i18n-config";
import styles from "./page.module.css";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { GoogleSignInButton } from "@/components/google-signin-button";
import LanguageSwitcher from "@/components/language-switcher";
import { useTranslations } from "next-intl";

export default function Login() {
  const t = useTranslations("loginPage");

  return (
    <Box className={styles.container}>
      <Stack className={styles.main_outerBox}>
        <Box className={styles.main_innerBox}>
          <Box className={styles.logo_text_container}>
            <Box className={styles.logo}>
            </Box>
            <Box className={styles.information_container}>
              <p className={styles.logo_text}>{t("title")}</p>
              <p className={styles.text_information}>
                {t("textInformation")}
              </p>
            </Box>
          </Box>
          <Box className={styles.continue_with_google_button_box}>
            <Box>
              <Typography
                component="h6"
                variant="h6"
                className={styles.login_text_in_continue_with_google_button_box}
              >
                {t("loginText")}
              </Typography>
            </Box>
            <Box>
              <GoogleSignInButton className={styles.continue_with_google_button}>
                {t("continueWithGoogle")}
              </GoogleSignInButton>
            </Box>
          </Box>
        </Box>

        <Box className={styles.footer}>
          <LanguageSwitcher />
        </Box>
      </Stack>
    </Box>
  );
}
