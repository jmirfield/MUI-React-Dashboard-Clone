import React from 'react'
import { Grid } from '@mui/material'
import WeekySales from './WeekySales'
import NewUsers from './NewUsers'
import ItemOrders from './ItemOrders'
import BugReports from './BugReports'
import WebsiteVisits from './WebsiteVisits'
import CurrentVisits from './CurrentVisits'

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
            <Grid item desktop={8} laptop={6} tablet={12} mobile={12}>
                <WebsiteVisits />
            </Grid>
            <Grid item desktop={4} laptop={6} tablet={12} mobile={12}>
                <CurrentVisits />
            </Grid>
        </Grid>
    )
}

export default Dashboard