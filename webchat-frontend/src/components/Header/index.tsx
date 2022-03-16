import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap"

export const Header: React.FC = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">BraveHub</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features">About us</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#signin">Sign In</Nav.Link>
                        <Nav.Link eventKey={2} href="#signup">
                            Sign Up
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}