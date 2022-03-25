import React from 'react'
import { Paper, Avatar, Typography, alpha } from '@mui/material'
import Icon from './Icon'
import { styled } from '@mui/system'

const PaperStyle = styled(Paper)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 40,
    paddingBottom: 40,
    borderRadius: 15
}))

const PaperStats = ({ color, icon, main, variant = 'main', subtitle, sx, ...props }) => {
    return (
        <PaperStyle elevation={1} sx={{
            ...sx,
            backgroundColor: (theme) => alpha(theme.palette[color][variant], .25),
            color: `${color}.dark`
        }} {...props}>
            <Avatar sx={{
                width: 64,
                height: 64,
                color: `${color}.dark`,
                mb: 5,
                backgroundColor: (theme) => alpha(theme.palette[color].main, .2)
            }}>
                <Icon component={icon} sx={{ width: 24, height: 24 }} />
            </Avatar>
            <Typography variant='h1'>
                {main}
            </Typography>
            <Typography variant='subtitle2'>
                {subtitle}
            </Typography>
        </PaperStyle>
    )
}

export default PaperStats