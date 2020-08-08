import React, { useContext } from 'react'
import { GlobalContext } from '@/context/globalContext'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import LanguageSelector from "@/components/templates/languageSelector"

const _Navbar = () => {
    const { app } = useContext(GlobalContext)

    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Navbar.Brand className="py-0" href="#home">
                <img src='/images/logo.png' className="navbar-logo d-none d-md-block" alt="rocketer" />
                <img src='/images/small_logo.png' className="navbar-logo d-block d-md-none" alt="rocketer" />
            </Navbar.Brand>
            <div className="d-block d-md-none"><LanguageSelector /></div>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <NavDropdown title={app.translate.navbar.why} id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#pricing">{app.translate.navbar.pricing}</Nav.Link>
                </Nav>
                <Nav>
                    <div className="d-none d-md-block"><LanguageSelector /></div>
                    <Nav.Link eventKey={2} href="#memes" className="ml-3">
                        Dank memes
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
export default _Navbar