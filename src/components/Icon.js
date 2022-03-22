import React from 'react'
import Box from '@mui/material/Box'

const Icon = ({ component }) => {
    return (
        <Box component={component} sx={{ 
            height: '20px', 
            width: '20px', 
         }} />
    )
}

export default Icon