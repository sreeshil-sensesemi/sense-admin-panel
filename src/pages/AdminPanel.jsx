import React from 'react'
import NavBar from '../layouts/Navbar/NavBar'
import Sidebar from '../layouts/Sidebar/Sidebar'
import AdminDashboard from './AdminDashboard'


function AdminPanel() {
    return (
        <>
            <Sidebar>
                {/* <NavBar/> */}
                <AdminDashboard />
            </Sidebar>

        </>

    )
}

export default AdminPanel