import React from 'react';
import { Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import './NavBar.css';

const NavBar = () => {

    return ( 
            <div className='nav-bar topbar'>
                <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
                    <Navbar.Brand href="#home"><b>VideoPlayer</b></Navbar.Brand>
                              {/* <Navbar.Toggle aria-controls="basic-navbar-nav" />
                             <Navbar.Collapse id="basic-navbar-nav"> */}
                                <Nav className="ml-auto">
                                <Link  to="/"><div className='nav-link'>Home</div></Link>
                                <Link to="/videoplayer"><div className='nav-link'>Video Player</div></Link>
                                </Nav>
                       {/*  </Navbar.Collapse> */}
                </Navbar>
            </div>
    )
}

export default NavBar;