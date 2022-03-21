import React from 'react'
import { AppBar } from '@mui/material'
import styled from '@mui/system/styled'

const AppBarStyle = styled(AppBar)(({ theme }) => ({
    [theme.breakpoints.up('desktop')]: {
        width: `calc(100% - 240px)` //Taking into account side drawer
    },
    backgroundColor: 'green'
}))

const DashboardNavbar = () => {

    return (
        <AppBarStyle>
            test
        </AppBarStyle>
    )
}

export default DashboardNavbar