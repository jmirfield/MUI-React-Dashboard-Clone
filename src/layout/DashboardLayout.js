import React from 'react'
import { Outlet } from 'react-router-dom'
import { Container } from '@mui/material'
import DashboardNavbar from './DashboardNavbar'

const DashboardLayout = () => {
    return (
        <Container>
            <DashboardNavbar />
            <Outlet />
        </Container>
    )
}

export default DashboardLayout