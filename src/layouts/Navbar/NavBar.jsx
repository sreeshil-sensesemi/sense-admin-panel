import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/SS_Logo.png'

function NavBar() {
    return (
        <>
          
            <Navbar bg="white">
                <Container >
                    <Navbar.Brand href="#home">
                        <img
                            src={logo}
                            width="100"
                            height="40"
                            className="d-inline-block align-top"
                            alt="SS logo"
                        />
                    </Navbar.Brand>
                </Container>
            </Navbar>
            
        </>
    )
}

export default NavBar