import React, { useState } from 'react';
import {
    FaBars,
    FaUserAlt,
    FaUserMd,
    FaHospital,
    FaHospitalUser
} from "react-icons/fa";
import { MdSpaceDashboard } from "react-icons/md";
import { IoMdLogOut } from "react-icons/io";
import { NavLink } from 'react-router-dom';
import './Sidebar.css'
import logo from '.././../assets/SS_Logo.png'
import { useNavigate } from 'react-router-dom'

function Sidebar({ children }) {

    const navigate = useNavigate();

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const menuItem = [
        {
            path: "/admin-panel",
            name: "Dashboard",
            icon: <MdSpaceDashboard size={18} />
        },
        {
            path: "/enterprises",
            name: "Enterprise",
            icon: <FaHospital size={18} />
        },
        {
            path: "/patients",
            name: "Patients",
            icon: <FaHospitalUser size={18} />
        },
        {
            path: "/doctors",
            name: "Doctors",
            icon: <FaUserMd size={18} />
        }
    ]

    const bottomItem = [
        {
            //path: "/",
            name: "Logout",
            icon: <IoMdLogOut size={18} />
        }
    ]


    //logout
    const handleLogout = () => {
        console.log('logout');
        localStorage.clear('logged');
        window.location.reload();
        //navigate('/');
    }



    return (
        <div className="sidebar-container" style={{ display: "flex", flexDirection: '' }}>
            <div style={{ width: isOpen ? "200px" : "50px" }} className="sidebar">
                <div className="top_section" style={{ borderBottom: '1px solid #00A8CA', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '' }}>
                    <img src={logo} width='100' height='40' alt="SS Logo" style={{ display: isOpen ? "block" : "none" }} className="logo" />
                    <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
                        <FaBars onClick={toggle} />
                    </div>
                </div>
                <div className='item_section' style={{ paddingTop: '10px' }}>
                    {
                        menuItem.map((item, index) => (
                            <NavLink to={item.path} key={index} className="link" activeclassName="active" style={{ margin: '2px', borderRadius: '10px', height: '35px', display: 'flex', alignItems: 'center' }}>
                                <div className="icon">{item.icon}</div>
                                <div style={{ display: isOpen ? "block" : "none", fontSize: '14px', fontFamily: 'Poppins', marginTop: '8px' }} className="link_text">{item.name}</div>
                            </NavLink>
                        ))
                    }

                    {
                        bottomItem.map((item, idx) => (
                            <NavLink key={'00'} onClick={handleLogout} className="link" activeclassName="active" style={{ marginTop: '280px', borderRadius: '10px', height: '35px', display: 'flex', alignItems: 'center' }}>
                                <div className="icon" style={{}}>{item.icon}</div>
                                <div style={{ display: isOpen ? "block" : "none", fontSize: '14px', fontFamily: 'Poppins', marginTop: '5px' }} className="link_text">{item.name}</div>
                            </NavLink>
                        ))
                    }

                </div>

            </div>
            <main>{children}</main>
        </div>
    );
}

export default Sidebar