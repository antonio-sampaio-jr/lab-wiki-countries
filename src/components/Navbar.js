import { Button, Container, Form, Nav, Navbar } from "react-bootstrap"
import { Link } from "react-router-dom"

function NavBar() {
    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand>LAB - WikiCountries</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px',backgroundColor:'blue' }}
                        navbarScroll
                    >
                    </Nav>
                    
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar;