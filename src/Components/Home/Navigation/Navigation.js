import React, { useContext } from "react";
// import { useContext } from "react";
import { Container, Nav } from "react-bootstrap";
import Navbar from 'react-bootstrap/Navbar'
import { Link } from "react-router-dom";
import { UserContext } from "../../../App";
import logo from '../../../images/logo.jpg'

import './Navigation.css'

const Navigation = () => {
    const [user] = useContext(UserContext)
    return (
      <Container fluid className="custom-color">
        <div className="container">
      <Navbar collapseOnSelect expand="lg" variant="light"  >
        <Navbar.Brand as={Link} to="/" className="logo d-flex">
          <img src={logo} className="img-fluid" alt=""/>
          
          <h4 className="ml-1 mt-2">Fell Fresh</h4>
         
       
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end" >
          <Nav>
            <Nav.Link as={Link} to="/home" className="mx-2 text-white">
                Home
            </Nav.Link>
            <Nav.Link as={Link} to="/dashboard" className="mx-2 text-white">
            Dashboard
            </Nav.Link>      

            {/* <Nav.Link as={Link} to="/dashboard/admin" className="mx-2 text-white">
            Admin
            </Nav.Link>      */}
 

            <Nav.Link as={Link} to={user.email ? `/dashboard/admin` : `/login`} className="mx-2 text-white">
            {user.email ? `${user.name}` : 'Login' }
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
    </Container>
    );
};

export default Navigation;