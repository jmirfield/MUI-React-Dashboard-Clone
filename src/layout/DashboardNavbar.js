import React from 'react'
import { alpha, styled } from '@mui/system'
import { AppBar, Toolbar, IconButton, Stack, Box } from '@mui/material'
import withAnchorAndState from '../helpers/withAnchorAndState'
import Icon from '../components/Icon'
import { CgSearch } from 'react-icons/cg'
import { AiOutlineMenu } from 'react-icons/ai'
import LanguagePopover from './LanguagePopover'
import NotificationPopover from './NotificationPopover'
import ProfilePopover from './ProfilePopover'
import SearchBar from './SearchBar'
import { APP_BAR_SMALL, DRAWER_WIDTH } from '../utils/constants';

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

const DashboardNavbar = React.forwardRef(({ open, handleClick, handleClose, onOpenSidebar }, ref) => {

    return (
        <>
            <DashboardAppBar>
                <DashboardToolbar>
                    <Box>
                        <IconButton
                            children={<Icon component={AiOutlineMenu} />}
                            variant='secondary' onClick={onOpenSidebar}
                            sx={{
                                display: {
                                    desktop: 'none'
                                }
                            }} />
                        <IconButton children={<Icon component={CgSearch} />} variant='secondary' onClick={handleClick} />
                    </Box>
                    <Stack direction="row" alignItems="center" spacing={{ mobile: 1, laptop: 2, }}>
                        <LanguagePopover />
                        <NotificationPopover />
                        <ProfilePopover />
                    </Stack>
                </DashboardToolbar>
            </DashboardAppBar>
            <DashboardToolbar />
            <SearchBar Toolbar={DashboardToolbar} open={open} handleClose={handleClose} />
        </>
    )
})

export default withAnchorAndState(DashboardNavbar)