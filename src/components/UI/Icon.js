import React from 'react'
import Box from '@mui/material/Box'

const Icon = ({ component, sx, ...props }) => {
    return (
        <Box component={component}
            sx={{
                height: '20px',
                width: '20px',
                ...sx
            }}
            {...props}
        />
    )
}

export default Icon