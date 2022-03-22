import React from 'react'
import { styled } from '@mui/system';
import { Container } from '@mui/material'
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
    return (
        <MainContainer sx={{ backgroundColor: 'green' }}>Main</MainContainer>
    )
}

export default Main