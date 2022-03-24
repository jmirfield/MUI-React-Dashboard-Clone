import React from 'react'
import { Outlet } from 'react-router-dom'
import withAnchorAndState from '../helpers/withAnchorAndState'
import styled from '@mui/system/styled'
import { Container } from '@mui/material'
import DashboardNavbar from './DashboardNavbar'
import DashboardSidebar from './DashboardSidebar'
import { DRAWER_WIDTH } from '../utils/constants'

const DashboardContainer = styled(Container)(({ theme }) => ({
    flexDirection: 'column',
    [theme.breakpoints.up('desktop')]: {
        width: `calc(100% - ${DRAWER_WIDTH}px)` //Taking into account side drawer
    },
    marginRight: 0
}))

const DashboardLayout = React.forwardRef(({ open, handleClick, handleClose }, ref) => {
    return (
        <>
            <DashboardSidebar open={open} onCloseSidebar={handleClose} />
            <DashboardContainer>
                <DashboardNavbar onOpenSidebar={handleClick} />
                <Outlet />
            </DashboardContainer>
        </>
    )
})

export default withAnchorAndState(DashboardLayout)