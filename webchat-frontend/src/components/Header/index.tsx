import { Button, Container, Nav, Navbar } from "react-bootstrap"
import { Link } from "react-router-dom"
import { Router } from "../Router"

interface IHeaderProps {
    isLoggedIn?: boolean
}
export const Header: React.FC<IHeaderProps> = ({ isLoggedIn }) => {
    const isLogged = isLoggedIn ? isLoggedIn : true;
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">BraveHub</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    {isLogged ?
                        <>
                            <Nav className="me-auto">
                                <Link to="/chat">
                                    <Nav.Link href="/features">About us</Nav.Link>
                                </Link>
                            </Nav>
                            <Nav>
                                <Nav.Link href="/signin">Sign In</Nav.Link>
                                <Button variant="primary">Sign Up</Button>
                            </Nav>
                        </>
                        :

                        <>
                            <Nav className="me-auto">
                                <Link to="/chat">
                                    <Nav.Link href="/features">About us</Nav.Link>
                                </Link>
                                <Link to="/chat">
                                    <Nav.Link href="/features">Profile</Nav.Link>
                                </Link>
                            </Nav>
                            <Nav>
                                <Nav.Link href="/signin">Logout</Nav.Link>
                            </Nav>
                        </>
                    }
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}