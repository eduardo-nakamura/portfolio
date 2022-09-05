import { useTranslation } from 'react-i18next';
import {
    Typography, Box, Container, Stack, Button, Grid,
    Card,
    CardMedia,
    CardContent,
    CardActions
} from '@mui/material';
import {projectsList} from "../assets/data"
import { Link } from "react-router-dom";

export default function Home() {
    const { t } = useTranslation();
 
    return (
        <>
  

            <Box
                sx={{
                    bgcolor: 'background.paper',
                    pt: 8,
                    pb: 6,
                }}
            >
                <Container maxWidth="sm">
                    <Typography
                        component="h1"
                        variant="h2"
                        align="center"
                        color="text.primary"
                        gutterBottom
                    >
                        {t('home.name')}
                    </Typography>
                    <Typography variant="h5" align="center" color="text.secondary" paragraph>
                        {t('home.part1')}
                    </Typography>
                    <Stack
                        sx={{ pt: 4 }}
                        direction="row"
                        spacing={2}
                        justifyContent="center"
                    >
                        <Button href={`https://github.com/eduardo-nakamura/`} target="_blank" variant="contained">{t('home.part2')}</Button>
                    </Stack>
                </Container>
            </Box>
            <Container sx={{ py: 8 }} maxWidth="md">
                <Grid container spacing={4}>
                    {projectsList.map((card) => (
                        <Grid item key={card.git} xs={12} sm={6} md={4}>
                            <Card
                                sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                            >
                                <CardMedia
                                    component="img"
                                    image={card.img} 
                                    // sx={{
                                    //     height: '20vh',
                                    //     backgroundPosition: '0 0'
                                    // }}
                                    alt="random"
                                />
                                <CardContent sx={{ flexGrow: 1 }}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {t(`repository.${card.git}`)}
                                    </Typography>
                                    <Typography>
                                    {t(`repository.${card.git}-desc`)}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button variant="contained" href={`https://eduardo-nakamura.github.io/${card.git}`} target="_blank" size="small">{t("home.page")}</Button>
                                    <Button variant="outlined" href={`https://github.com/eduardo-nakamura/${card.git}`} target="_blank" size="small">{t("home.repository")}</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </>
    );
}