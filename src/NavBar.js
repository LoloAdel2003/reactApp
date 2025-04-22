import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Cart from './Cart'
import RegisterPage from './RegisterPage'
import LoginPage from './LoginPage'
import { HashLink } from 'react-router-hash-link'
import {Container} from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./App.css"
import { FaShoppingCart } from "react-icons/fa";
import { ProductContext } from './productContext'

const NavBar = () => {
  const {cart}=useContext(ProductContext);
  const ln=cart.length;
  return (
     <Navbar expand="md" className="navbar navbar-dark  pt-3 pb-3 fixed-top">
          {/* <Container> */}
          <div className="container-fluid">
          <Navbar.Brand href="/#landing" className="navbar-brand text-light">Fashoin</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mx-auto x">
              <Link to="/" className="a   position-relative px-4 py-2">Home</Link>
              <HashLink to="/#Category" className="a  position-relative px-4 py-2">Category</HashLink>

            <HashLink to="/#Menu" className="a  position-relative px-4 py-2">Menu</HashLink>
            <HashLink to="/#Contact" className="a  position-relative px-4 py-2" me-4>Contact us</HashLink>

              </Nav>
              <Link to="/cart" className="cartIcon btn btn-outline-warning fw-bold xx mt-sm-2 me-3">

              <FaShoppingCart className="cartIcon fs-5 me-3 " />
              <span> {ln}</span>

              </Link>
              <Link to="/LoginPage" >
              <button type="button" className="btn btn-outline-warning fw-bold xx mt-sm-2 me-3" >Login</button>

              </Link>
              <Link to="/RegisterPage" >
              <button type="button" className="btn btn-outline-warning fw-bold xx mt-sm-2">Register</button>

              </Link>


            </Navbar.Collapse>
    
         
          </div>
             {/* </Container> */}
        </Navbar>
    // <div>
    //     <Link to="/" >home</Link>
    //     <Link to="/cart" >Cart</Link>
    //     <Link to="/RegisterPage" >Register</Link>
    //     <Link to="/LoginPage" >Login</Link>
    // </div>
  )
}

export default NavBar
