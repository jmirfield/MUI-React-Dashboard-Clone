import React from 'react'
import {alpha, styled} from '@mui/system'
import { AppBar, Toolbar, IconButton, Stack } from '@mui/material'
import Icon from '../components/Icon'
import { CgSearch } from 'react-icons/cg'
import { APP_BAR_SMALL, DRAWER_WIDTH } from '../utils/constants';
import LanguagePopover from './LanguagePopover'
import NotificationPopover from './NotificationPopover'

const DashboardAppBar = styled(AppBar)(({ theme }) => ({
    [theme.breakpoints.up('desktop')]: {
        width: `calc(100% - ${DRAWER_WIDTH}px)` //Taking into account side drawer
    },
    backdropFilter: 'blur(6px)',
    WebkitBackdropFilter: 'blur(6px)',
    backgroundColor: alpha(theme.palette.background.default, 0.72),
}))

const DashboardToolbar = styled(Toolbar)(({ theme }) => ({
    [theme.breakpoints.down('desktop')]: {
        height: APP_BAR_SMALL
    }
}))

const DashboardNavbar = () => {

    return (
        <>
            <DashboardAppBar>
                <DashboardToolbar>
                    <IconButton children={<Icon component={CgSearch} />} variant='secondary' />
                    <Stack direction="row" alignItems="center" spacing={{ mobile: 1, laptop: 2, }}>
                        {/* PLACEHOLDERS */}
                        <LanguagePopover />
                        <NotificationPopover />
                        <IconButton children={<Icon component={CgSearch} />} variant='secondary' />
                    </Stack>
                </DashboardToolbar>
            </DashboardAppBar>
            <DashboardToolbar />
        </>
    )
}

export default DashboardNavbar