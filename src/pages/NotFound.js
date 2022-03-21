import React from 'react'
import { Helmet } from 'react-helmet'
import { keyframes } from '@mui/styled-engine'
import Logo from '../components/Logo'
import { AppBar, Container, Typography, Button } from '@mui/material'
import Box from '@mui/system/Box'
import notFound from '../images/404.svg'

const bounce = keyframes`
    from {
        transform: scale(0)
    }
    5%, 40% {
        transform: scale(110%)
    }
    20%, 70% {
        transform: scale(90%)
    }
    to {
        transform: scale(100%)
    }
`

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
                    <Typography
                        paragraph
                        variant='h4'
                        align='center'
                        sx={{
                            animation: `${bounce} .75s ease-out`,
                            fontWeight: 'bold'
                        }}
                    >
                        Sorry, page not found!
                    </Typography>
                    <Typography
                        align='center'
                        sx={{ color: 'text.secondary' }}
                    >
                        Sorry, we couldn’t find the page you’re looking for. Perhaps you’ve mistyped the URL? Be sure to check your spelling.
                    </Typography>
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
                            mb: 10,
                            animation: `${bounce} .75s ease-out`
                        }}
                    />
                    <Button
                        variant='contained'
                        href='/'
                        size='large'
                        sx={{ p: 1.5 }}
                    >Go To Home</Button>
                </Box>
            </Container>
        </>
    )
}

export default NotFound