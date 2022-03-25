import React from 'react'
import { Paper, Typography, Box } from '@mui/material'
import { ResponsiveContainer, ComposedChart, Line, Bar, Area, Tooltip, YAxis, XAxis, CartesianGrid } from 'recharts'

const CHART_DATA = [
    {
        name: 'Jan',
        teamA: 7,
        teamB: 80,
        teamC: 45
    },
    {
        name: 'Feb',
        teamA: 20,
        teamB: 75,
        teamC: 40
    },
    {
        name: 'Mar',
        teamA: 23,
        teamB: 65,
        teamC: 55
    },
    {
        name: 'Apr',
        teamA: 50,
        teamB: 55,
        teamC: 65
    },
    {
        name: 'May',
        teamA: 45,
        teamB: 45,
        teamC: 25
    },
    {
        name: 'Jun',
        teamA: 78,
        teamB: 40,
        teamC: 35
    },
    {
        name: 'Jul',
        teamA: 62,
        teamB: 35,
        teamC: 10
    },
    {
        name: 'Aug',
        teamA: 33,
        teamB: 20,
        teamC: 70
    },
    {
        name: 'Sep',
        teamA: 15,
        teamB: 15,
        teamC: 30
    },
    {
        name: 'Oct',
        teamA: 10,
        teamB: 12,
        teamC: 20
    },
    {
        name: 'Nov',
        teamA: 20,
        teamB: 5,
        teamC: 10
    },
    {
        name: 'Dec',
        teamA: 30,
        teamB: 2,
        teamC: 15
    }
];

const WebsiteVisits = () => {

    return (
        <Paper >
            <Box sx={{ px: 2, py: 3 }}>
                <Typography variant='h2'>Website Visits</Typography>
                <Typography variant='subtitle2' color='text.secondary'>(+10%) than last year</Typography>
            </Box>
            <ResponsiveContainer width='95%' height={400}>
                <ComposedChart data={CHART_DATA}>
                    <CartesianGrid stroke="#e0dada" />
                    <Area dataKey="teamC" type='natural' stroke="#d9c666" fill='#eaf5b5'/>
                    <Bar dataKey="teamB" barSize={3} fill='#32bf34'/>
                    <Line dataKey="teamA" strokeWidth={3} type='natural' />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                </ComposedChart>
            </ResponsiveContainer>
        </Paper>
    )
}

export default WebsiteVisits