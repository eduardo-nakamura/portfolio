import { useState, useEffect } from 'react';

import { Typography, Box, Fade, Grid, Collapse } from '@mui/material';
import { useTranslation, Trans } from 'react-i18next';
import { useTheme } from '@mui/material/styles';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'


library.add(fas, far, fab)

export default function Skills() {
    const { t } = useTranslation();
    const theme = useTheme();
    const [state, setState] = useState(``);

    function selectSkill(e: string) { 
        setState(e)
    }
    const checked = true
    const skillList = [
        { name: "html5", icone: <FontAwesomeIcon icon={['fab', 'html5']} /> },
        { name: "css3", icone: <FontAwesomeIcon icon={['fab', 'css3-alt']} /> },
        { name: "sass", icone: <FontAwesomeIcon icon={['fab', 'sass']} /> },
        { name: "jsTs", icone: <FontAwesomeIcon icon={['fab', 'square-js']} /> },
        { name: "react", icone: <FontAwesomeIcon icon={['fab', 'react']} /> },
        { name: "angular", icone: <FontAwesomeIcon icon={['fab', 'angular']} /> },
        { name: "bootstrap", icone: <FontAwesomeIcon icon={['fab', 'bootstrap']} /> },
        { name: "github", icone: <FontAwesomeIcon icon={['fab', 'github']} /> }
    ]
    return (
        <>
            <Typography component="h1" variant="h4" align="center" color="text.secondary" paragraph>
                {t('skills.name')}
            </Typography>
            <Box>
                <Grid container spacing={1}>
                    <Grid item xs={state === "" ? 12 : 6} md={state === "" ? 12 : 8}>
                        <Grid container spacing={1}>
                            {skillList.map((skill, index) => (
                                <Fade key={index} in={checked} style={{ transitionDelay: checked ? `${index * 400}ms` : '0ms' }}>
                                    <Grid item xs={state === "" ? 6 : 12} md={3} sx={{ 
                                        textAlign: 'center', 
                                        transition: 'all 2s', 
                                        filter: state === skill.name ? 'saturate(2)' : 'saturate(1)',
                                        '&:hover': { 
                                            filter: 'saturate(1.5)',
                                            cursor: 'pointer'
                                        } 
                                        }}>
                                        <Box onClick={() => selectSkill(skill.name)} display="flex" flexDirection="column" justifyContent="space-between" sx={{ color: theme.palette.primary.contrastText, background: theme.palette.primary.dark, height: '100%' }}>
                                            <Box sx={{
                                                    background: theme.palette.primary.main,
                                                    fontSize: '80px',
                                                    textAlign: 'center'
                                                    
                                                }}>
                                                {skill.icone}
                                            </Box>
                                            <Typography sx={{padding: '5px 0'}} >{t(`skills.${skill.name}`)}</Typography>
                                        </Box>

                                    </Grid>
                                </Fade>
                            ))}
                        </Grid>
                    </Grid>
                    <Grid item xs={6} md={4}>
                        <Fade in={state !== ""} style={{ transitionDelay: '100ms' }}>
                            <Box sx={{ background: theme.palette.primary.main, color: theme.palette.primary.contrastText,position: 'relative', height: '100%', padding: '20px 35px 20px 20px', display: state !== "" ? "auto" : "none" }}> 
                                <FontAwesomeIcon style={{position: 'absolute', top:10, right:10, fontSize: 25}} onClick={() => selectSkill("")} icon={['fas', 'xmark']} />                               
                                <Typography variant="h6">{t(`skills.${state}Desc`)}</Typography>
                            </Box>
                        </Fade>
                    </Grid>
                </Grid>

            </Box>
        </>
    )
}