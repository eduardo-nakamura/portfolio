import { useTranslation, Trans } from 'react-i18next';
import { Typography, Box, Fade, Link } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useState, useEffect } from 'react';
import aboutAvatar from "../assets/picture.png";

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

library.add(faCoffee)
export default function About() {
    const { t } = useTranslation();
    const theme = useTheme();
    const [checked, setChecked] = useState(false);
    const skillList = [
        "HTML5 / CSS / SASS",
        "Javascript / Typescript / React / Angular",
        "Bootstrap",
        "Git"
    ]
    useEffect(() => {
        setChecked(true)
    }, [])

    return (
        <>
            <Box sx={{ textAlign: 'center', pb: 3 }}>
                <img alt="Eduardo Nakamura" src={aboutAvatar}
                    style={{ width: '50%', maxWidth: '200px', borderRadius: '50%' }} />
            </Box>
            <Typography component="h1" variant="h4" align="center" color="text.secondary" paragraph>
                Eduardo Issamu Nakamura
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
                {t('about.part1')}
            </Typography>
          
            <Box sx={{ background: theme.palette.mode === 'dark' ? theme.palette.common.black : `#0000000D`, padding: 3, margin: '30px auto', width: '100%', maxWidth: '500px' }}>
                <Typography variant="h5" color="text.secondary" paragraph>
                    Skills
                </Typography>
                {skillList.map((skill, index) => (
                    <Fade key={index} in={checked} style={{ transitionDelay: checked ? `${index * 700}ms` : '0ms' }}>
                        <Typography sx={{ fontSize: '20px' }}>{skill}</Typography>
                    </Fade>
                ))}
            </Box>
            <Typography align="center">
                <Trans i18nKey="about.part2">
                    Essa pagina foi feita usando ReactJs.
                    Componentes usados:
                </Trans>{' '}
                <Link href="https://mui.com/pt/" color="inherit">MUI</Link>{', '}
                <Link href="https://github.com/remix-run/react-router" color="inherit">React Router DOM</Link>{', '}
                <Link href="https://www.i18next.com/" color="inherit">i18next</Link>.
            </Typography>
            {/* <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                {t('description.part2')}
            </a> */}
        </>
    );
}