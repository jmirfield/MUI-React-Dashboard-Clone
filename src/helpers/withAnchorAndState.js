import React, { useState, useRef } from 'react'

const withAnchorAndState = Component => ({ ...props }) => {
    const anchorRef = useRef(null)
    const [open, setOpen] = useState(false)
    const handleClick = () => setOpen(true)
    const handleClose = () => setOpen(false)

    return (
        <Component {...props} ref={anchorRef} open={open} handleClose={handleClose} handleClick={handleClick} />
    )
}

export default withAnchorAndState