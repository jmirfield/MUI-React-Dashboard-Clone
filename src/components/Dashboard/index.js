import React from 'react'
import { Grid } from '@mui/material'
import WeekySales from './WeekySales'
import NewUsers from './NewUsers'
import ItemOrders from './ItemOrders'
import BugReports from './BugReports'

const Dashboard = () => {
    return (
        <Grid container spacing={4}>
            <Grid item laptop={3} tablet={6} mobile={12}>
                <WeekySales />
            </Grid>
            <Grid item laptop={3} tablet={6} mobile={12}>
                <NewUsers />
            </Grid>
            <Grid item laptop={3} tablet={6} mobile={12}>
                <ItemOrders />
            </Grid>
            <Grid item laptop={3} tablet={6} mobile={12}>
                <BugReports />
            </Grid>
        </Grid>
    )
}

export default Dashboard