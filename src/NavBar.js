import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import {NavLink} from 'react-router-dom'
import './NavBar.css'
class NavBar extends Component {
    render() {
        return (
            <div className='NavBar'>
                <Navbar fixed="top" bg="dark" variant="dark" expand='sm'>
                    <Navbar.Brand style={{fontWeight: '600'}}>SBIBLE</Navbar.Brand>
                    <Navbar.Toggle className='custom-toggler navbar-toggler' aria-controls="basic-navbar-nav" aria-expanded={true} />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav>
                                <NavLink exact activeClassName='NavLink-Active' className='NavLink' to='/'>Home</NavLink>
                                <NavLink exact activeClassName='NavLink-Active' className='NavLink' to='/bibles'>Choose a bible</NavLink>
                            </Nav>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}
export default NavBar