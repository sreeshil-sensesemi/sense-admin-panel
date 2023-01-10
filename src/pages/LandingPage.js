import React from 'react'
import Login from '../components/Login/Login'
import Banner from '../layouts/Banner/Banner'
import Navbar from '../layouts/Navbar/NavBar'

function LandingPage() {
    return (
        <>
            <Navbar />
            <Banner/>
            <Login/>

        </>
    )
}

export default LandingPage