import React from 'react'
import { Link } from 'react-router-dom'
import Box from '@mui/system/Box'
import logo from '../../images/logo.svg'

const Logo = () => {
    return (
        <Link to='/dashboard/app'>
            <Box
                component='img'
                src={logo}
                alt='App logo'
                loading='lazy'
                sx={{
                    width: 40,
                    height: 40
                }}
            />
        </Link>
    )
}

export default Logo