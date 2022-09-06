import { Box, Typography, Link } from "@mui/material"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useTheme } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';

const Footer = (props: any) => {
    const theme = useTheme();
    const { t } = useTranslation();

    return (
        <Box sx={{ bgcolor: theme.palette.background.paper, p: 6 }} component="footer">
            {/* <Typography variant="h6" align="center" gutterBottom>
                Footer
            </Typography> */}
            <Typography
                variant="subtitle1"
                align="center"
                color="text.secondary"
                component="p"
            >
                {t("footer.part1")} <Link href="mailto:edu-nakamura@hotmail.com">edu-nakamura@hotmail.com</Link>
            </Typography>
            <Typography variant="body2" color="text.secondary" align="center">
                {'Copyright © '}
                <Link color="inherit" href="https://eduardo-nakamura.github.io/portfolio/">
                    Eduardo Issamu Nakamura
                </Link>
                {` ${new Date().getFullYear()}.`}
            </Typography>
            <Box display="flex" justifyContent="center" alignItems="center" sx={{ p: 2 }}>
                <Link href="https://github.com/eduardo-nakamura/">
                    <LinkedInIcon sx={{
                        color: theme.palette.text.primary,
                        m: 0.5,
                        fontSize: '43px',
                        transition: 'all 0.5s',
                        opacity: 0.8,
                        "&:hover": {
                            opacity: 1,
                        },
                    }} />
                </Link>
                <Link href="https://www.linkedin.com/in/eduardo-nakamura-6771898">
                    <GitHubIcon sx={{
                        color: theme.palette.text.primary,
                        m: 0.5,
                        fontSize: '35px',
                        transition: 'all 0.5s',
                        opacity: 0.8,
                        "&:hover": {
                            opacity: 1,
                        },
                    }} />
                </Link>


            </Box>
        </Box>
    );
};
export default Footer;
