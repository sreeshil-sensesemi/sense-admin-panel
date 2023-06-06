import React, { useEffect } from 'react'
import NavBar from '../layouts/Navbar/NavBar'
import Sidebar from '../layouts/Sidebar/Sidebar'
import AdminDashboard from './AdminDashboard'
import {useNavigate } from 'react-router-dom'

function AdminPanel() {

    const navigate = useNavigate();

    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem('logged'));
        if (!userData) {
            navigate('/');
        }
    }, []);

    return (
        <>
            <Sidebar>
                <NavBar />
                <AdminDashboard />
            </Sidebar>

        </>

    )
}

export default AdminPanel