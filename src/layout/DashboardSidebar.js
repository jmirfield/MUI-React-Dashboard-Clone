import React from 'react'
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Box, Paper, Avatar, Typography, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom'
import Logo from '../components/UI/Logo'
import { DRAWER_WIDTH, DEMO_ACCOUNT } from '../utils/constants'
import { Drawer } from '@mui/material'
import SidebarItems from './SidebarItems';


const DashboardSidebar = ({ open, onCloseSidebar }) => {
    const theme = useTheme()
    const isDesktop = useMediaQuery(theme.breakpoints.up('desktop'))
    return (
        <Drawer
            anchor='left'
            open={isDesktop || open}
            variant={isDesktop ? 'permanent' : 'temporary'}
            onClose={onCloseSidebar}
            PaperProps={{
                sx: {
                    width: DRAWER_WIDTH,
                    borderRightStyle: isDesktop ? 'dashed' : 'initial',
                    scrollbarWidth: 'thin'
                }
            }}>
            <Box sx={{ display: 'inline-flex', px: 2.5, py: 3 }}>
                <Logo />
            </Box>
            <Box sx={{ mx: 2, mb: 5 }}>
                <Link component={RouterLink} to='/dashboard/app' underline='none'>
                    <Paper sx={{
                        px: 2,
                        py: 2,
                        display: 'flex',
                        alignItems: 'center',
                        bgcolor: (theme) => theme.palette.grey[200]
                    }}>
                        <Avatar src={DEMO_ACCOUNT.photoURL} alt={DEMO_ACCOUNT.label} />
                        <Typography sx={{ ml: 2 }}>{DEMO_ACCOUNT.name}</Typography>
                    </Paper>
                </Link>
            </Box>
            <SidebarItems />
        </Drawer>
    )
}

export default DashboardSidebar