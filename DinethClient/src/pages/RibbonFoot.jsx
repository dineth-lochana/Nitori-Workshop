import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './RibbonFoot.css'; // Import custom CSS for additional styling
const RibbonFoot = () => {
    return (
        <Navbar className="ribbon-footer" bg="transparent" variant="light">
            <Container>
                <div className="footer">
                    <Navbar.Text className="footer-text">
                        © {new Date().getFullYear()} Dineth Mallawarachchi
                    </Navbar.Text>
                    <br/>
                    <Nav className="footer-links">
                        <Nav.Link className="footer-link" href="#privacy">Privacy Policy</Nav.Link>
                        <Nav.Link className="footer-link" href="#terms">Terms of Service</Nav.Link>
                        <Nav.Link className="footer-link" href="#contact">Contact Us</Nav.Link>
                        <Nav.Link className="footer-link" href="#contact">Neko Neko</Nav.Link>
                    </Nav>
                </div>
            </Container>
        </Navbar>
    );
};

export default RibbonFoot;
