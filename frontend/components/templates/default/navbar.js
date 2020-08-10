import React, { useContext } from 'react'
import { GlobalContext } from '@/context/globalContext'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'

const _Navbar = () => {
    const { app } = useContext(GlobalContext)

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand className="py-0" href="#home">
                <img src='/images/completo_horizontal_logo.png' className="navbar-logo d-none d-md-block" alt="pixer" style={{ height: 40 }} />
                <img src='/images/small_logo.png' className="navbar-logo d-block d-md-none" alt="pixer" style={{ height: 40 }} />
            </Navbar.Brand>
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
                    <Nav.Link eventKey={2} href="#memes" className="ml-3">
                        Dank memes
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
export default _Navbar