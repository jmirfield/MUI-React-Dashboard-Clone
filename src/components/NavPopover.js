import React from 'react'
import { Popover } from '@mui/material'

const NavPopover = ({ children, sx, ...props }) => {
    return (
        <Popover
            anchorOrigin={{
                horizontal: 'right',
                vertical: 'bottom'
            }}
            transformOrigin={{
                horizontal: 'right',
                vertical: 'top'
            }}
            PaperProps={{
                sx: {
                    mt: 1,
                    width: 200,
                    ...sx
                },
            }}
            {...props}
        >
            {children}
        </Popover>
    )
}

export default NavPopover