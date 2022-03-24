import React from 'react'
import { Drawer, IconButton, Input, Button } from '@mui/material'
import { DRAWER_WIDTH, APP_BAR, APP_BAR_SMALL } from '../utils/constants'
import Icon from '../components/Icon'
import { CgSearch } from 'react-icons/cg'

const SearchBar = ({ open, handleClose, Toolbar }) => {
    return (
        <Drawer open={open} onClose={handleClose} anchor='top' PaperProps={{
            sx: {
                width: {
                    desktop: `calc(100% - ${DRAWER_WIDTH}px)`, //Taking into account side drawer
                },
                height: {
                    desktop: APP_BAR,
                    mobile: APP_BAR_SMALL
                },
                marginLeft: 'auto',
                opacity: .85
            }
        }} >
            <Toolbar sx={{ justifyContent: 'left' }}>
                <IconButton children={<Icon component={CgSearch} />} variant='secondary' disabled />
                <Input placeholder='Search...' sx={{ flexGrow: 1, mr: 1 }} disableUnderline />
                <Button onClick={handleClose} variant='contained'>Search</Button>
            </Toolbar>
        </Drawer>
    )
}

export default SearchBar