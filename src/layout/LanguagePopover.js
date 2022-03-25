import React from 'react'
import withAnchorAndState from '../helpers/withAnchorAndState'
import NavPopover from '../components/UI/NavPopover'
import { IconButton, ListItemIcon, ListItemText, MenuItem, MenuList } from '@mui/material'
import { FLAGS } from '../utils/constants'

const LanguagePopover = React.forwardRef(({ open, handleClick, handleClose }, ref) => {
    return (
        <>
            <IconButton
                onClick={handleClick}
                ref={ref}
                sx={{
                    ...(open && {
                        bgcolor: (theme) => theme.palette.grey[300]
                    })
                }}
            >
                <img src={FLAGS[0].path} alt={FLAGS[0].label} />
            </IconButton>
            <NavPopover open={open} anchorEl={ref.current} onClose={handleClose}>
                <MenuList>
                    {FLAGS.map((flag, idx) => (
                        <MenuItem
                            key={idx}
                            onClick={handleClose}
                            selected={flag.label === 'English'}
                        >
                            <ListItemIcon>
                                <img src={flag.path} alt={flag.label} />
                            </ListItemIcon>
                            <ListItemText>
                                {flag.label}
                            </ListItemText>
                        </MenuItem>
                    ))}
                </MenuList>
            </NavPopover>
        </>
    )
})

export default withAnchorAndState(LanguagePopover)