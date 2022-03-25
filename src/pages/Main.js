import React from 'react'
import useTitle from '../hooks/useTitle';
import { styled } from '@mui/system';
import { Container, Typography, Box } from '@mui/material'
import Dashboard from '../components/Dashboard/index';
import { APP_BAR, APP_BAR_SMALL } from '../utils/constants';

const MainContainer = styled(Container)(({ theme }) => ({
    [theme.breakpoints.up('desktop')]: {
        minHeight: `calc(100vh - ${APP_BAR}px)`
    },
    [theme.breakpoints.down('desktop')]: {
        minHeight: `calc(100vh - ${APP_BAR_SMALL}px)`
    }

}))

const Main = () => {
    useTitle('Dashboard')
    return (
        <>
            <MainContainer sx={{ px: 5, py: 5, flexDirection: 'column' }}>
                <Box sx={{ display: 'flex', pb: 5 }}>
                    <Typography variant='h2'>
                        Hi, Welcome back
                    </Typography>
                </Box>
                <Dashboard />
            </MainContainer>
        </>
    )
}

export default Main