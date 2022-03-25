import React from 'react'
import { Paper, Typography, Box } from '@mui/material'
import { ResponsiveContainer, PieChart, Pie, Tooltip, Legend, Cell } from 'recharts'

const CHART_DATA = [
    {
        name: 'America',
        data: 22.5,
        color: 'rgb(255,50,0)'
    },
    {
        name: 'Asia',
        data: 27.5,
        color: 'rgb(0, 180, 59)'
    },
    {
        name: 'Africa',
        data: 15,
        color: 'rgb(255,120,0)'
    },
    {
        name: 'Europe',
        data: 35,
        color: 'rgb(0,120,255)'
    },
]

const CurrentVisits = () => {
    return (
        <Paper sx={{ pb: 1 }}>
            <Box sx={{ px: 2, py: 3 }}>
                <Typography variant='h2'>Current Visits</Typography>
            </Box>
            <ResponsiveContainer width='95%' height={350}>
                <PieChart>
                    <Pie data={CHART_DATA} dataKey='data' nameKey='name' label>
                        {
                            CHART_DATA.map((entry, index) => <Cell fill={entry.color} />)
                        }
                    </Pie>
                    <Tooltip />
                    <Legend />
                </PieChart>
            </ResponsiveContainer>
        </Paper >
    )
}

export default CurrentVisits