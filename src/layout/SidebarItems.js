import React from 'react'
import { NavLink, useMatch, useResolvedPath } from 'react-router-dom';
import { MenuItem, MenuList, Typography } from '@mui/material';
import { alpha } from '@mui/material';
import { SIDEBAR_OPTIONS } from '../utils/constants';
import Icon from '../components/UI/Icon'

const SidebarItem = ({ to, icon, label }) => {
    const resolved = useResolvedPath(to);
    const match = useMatch({ path: resolved.pathname, end: true });
    return (<MenuItem
        component={NavLink}
        to={to}
        sx={{
            color: (theme) => match ? theme.palette.primary.main : theme.palette.grey[700],
            pl: 5,
            pr: 2.5,
            borderRight: match && 'solid',
            bgcolor: (theme) => match && alpha(theme.palette.primary.main, theme.palette.action.focusOpacity),
            borderRadius: .5
        }}
    >
        <Icon component={icon} sx={{ mr: 1.5 }} />
        <Typography variant='body2'>{label}</Typography>
    </MenuItem >)
}

const SidebarItems = () => {
    return (
        <MenuList>
            {SIDEBAR_OPTIONS.map((option, idx) => (
                <SidebarItem to={option.path} key={idx} icon={option.icon} label={option.label} />
            ))}
        </MenuList>
    )
}

export default SidebarItems