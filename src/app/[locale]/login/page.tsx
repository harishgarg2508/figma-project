import { getDictionary } from "@/lib/dictionary";
import { Locale } from "@/i18n-config";
import styles from "./page.module.css";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import GoogleIcon from '@mui/icons-material/Google';
// import { login } from "./action";

export default async function Login({


  params: { locale },
}: {
  params: { locale: Locale };
}) {
  
  const dict = await getDictionary(locale);

  return (
    <Box className={styles.container}>
      <Stack className={styles.main_outerBox}>
        <Box className={styles.main_innerBox}>

          <Box className={styles.logo_text_container}>
            <Box className={styles.logo}>
            
            </Box>
            <Box className={styles.information_container}>
              <p  className={styles.logo_text}>{dict.loginPage.title}</p>
              <p  className={styles.text_information}>{dict.loginPage.textInformation}</p>
            </Box>
          </Box>
          <Box className={styles.continue_with_google_button_box}>
            <Box>
              <Typography component="h6" variant="h6" className={styles.login_text_in_continue_with_google_button_box}>
                {dict.loginPage.loginText}
              </Typography>
            </Box>
            <Box>
              {/* <form action={login}> */}
              <Button type="submit" startIcon={<img src="/google-icon.svg" alt="Google Icon" />} className={styles.continue_with_google_button}>
                {dict.loginPage.continueWithGoogle}
              </Button>
            {/* </form> */}
            </Box>
          </Box>
        </Box>

        <Box className={styles.footer}>
          <p className={styles.footer_text}>{dict.loginPage.english}</p>
        </Box>
      </Stack>
    </Box>
  )
}
