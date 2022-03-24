import React from 'react'
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { DRAWER_WIDTH } from '../utils/constants'
import { Drawer } from '@mui/material'


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
                    borderRightStyle: isDesktop ? 'dashed' : 'initial'
                }
            }}>
                test
        </Drawer>
    )
}

export default DashboardSidebar