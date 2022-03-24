import React from 'react'
import withAnchorAndState from '../helpers/withAnchorAndState';
import { IconButton, Avatar, Typography, Divider, MenuList, MenuItem, Button } from '@mui/material';
import NavPopover from '../components/NavPopover';
import { DEMO_ACCOUNT, MENU_OPTIONS } from '../utils/constants';
import { Box } from '@mui/system';
import Icon from '../components/Icon';
import { CgHome, CgProfile, } from 'react-icons/cg';
import { AiOutlineSetting } from "react-icons/ai";

const ProfilePopover = React.forwardRef(({ open, handleClick, handleClose }, ref) => {
    return (
        <>
            <IconButton
                onClick={handleClick}
                ref={ref}
            >
                <Avatar src={DEMO_ACCOUNT.photoURL} />
            </IconButton>
            <NavPopover
                open={open}
                anchorEl={ref.current}
                onClose={handleClose}
                sx={{width: 225}}
            >
                <Box sx={{ p: 2 }}>
                    <Typography>
                        {DEMO_ACCOUNT.name}
                    </Typography>
                    <Typography variant='body2' color='text.secondary'>
                        {DEMO_ACCOUNT.email}
                    </Typography>
                </Box>
                <Divider />
                <MenuList sx={{mr: 1}}>
                    {MENU_OPTIONS.map((option, idx) => (
                        <MenuItem key={idx}>
                            {option.label === 'Home' && <Icon component={CgHome} sx={{ mr: 1 }} />}
                            {option.label === 'Profile' && <Icon component={CgProfile} sx={{ mr: 1 }} />}
                            {option.label === 'Settings' &&<Icon component={AiOutlineSetting} sx={{ mr: 1 }} />}
                            {option.label}
                        </MenuItem>
                    ))}
                </MenuList>
                <Box sx={{ py: 1, px: 2 }}>
                    <Button fullWidth variant='outlined' color='inherit'>Logout</Button>
                </Box>
            </NavPopover>
        </>
    )
})

export default withAnchorAndState(ProfilePopover)