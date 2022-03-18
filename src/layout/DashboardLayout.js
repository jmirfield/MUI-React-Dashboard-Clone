import React from 'react'
import { Outlet } from 'react-router-dom'

const DashboardLayout = ({ children }) => {
    return (
        <div>
            <Outlet />
        </div>
    )
}

export default DashboardLayout