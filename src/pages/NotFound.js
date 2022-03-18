import React from 'react'
import { Helmet } from 'react-helmet'
import AppBar from '@mui/material/AppBar'
import Logo from '../components/Logo'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Zoom from '@mui/material/Zoom'
import notFound from '../images/404.svg'
import { Box } from '@mui/system'

const NotFound = () => {
    return (
        <>
            <Helmet>
                <title>404 Page Not Found</title>
            </Helmet>
            <AppBar sx={{
                pl: {
                    desktop: 5,
                    mobile: 3
                },
                pt: {
                    desktop: 5,
                    mobile: 3
                },
            }}>
                <Logo />
            </AppBar>
            <Container sx={{
                minHeight: '100vh',
                pt: 15,
                pb: 10,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Box sx={{
                    width: 480,
                    maxWidth: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}>
                    <Zoom in={true}>
                        <Typography
                            paragraph
                            variant='h4'
                            align='center'
                        >
                            Sorry, page not found!
                        </Typography>
                    </Zoom>
                    <Typography
                        align='center'
                        sx={{ color: 'text.secondary' }}
                    >
                        Sorry, we couldn’t find the page you’re looking for. Perhaps you’ve mistyped the URL? Be sure to check your spelling.
                    </Typography>
                    <Zoom in={true}>
                        <Box
                            component='img'
                            src={notFound}
                            alt='404 image'
                            loading='lazy'
                            sx={{
                                width: 350,
                                ml: 'auto',
                                mr: 'auto',
                                mt: 10,
                                mb: 10
                            }}
                        />
                    </Zoom>
                </Box>
            </Container>
        </>
    )
}

export default NotFound