import React from 'react';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './RibbonHead.css'; // Import custom CSS for additional styling
import { Link } from 'react-router-dom'; // Import Link from React Router
import { useNavigate} from 'react-router-dom';

const RibbonHead = () => {
    
    const navigate = useNavigate();

    // Function to handle logout
    const handleLogout = () => {


        console.log("We are logging out.")

        global.config.i18n.user.user_id = "";
        console.log("The logged in user no is "+global.config.i18n.user.user_id);

        global.config.i18n.user.useremail = "";
        console.log("The logged in useremail is "+global.config.i18n.user.useremail);

        global.config.i18n.user.user_type = "";
        console.log("The logged in user email is "+global.config.i18n.user.user_type);

        navigate('/');
    };

    return (
        <Navbar className="ribbon-navbar" expand="lg">
            <Container>
                <Link to="/" className="navbar-brand ribbon-brand">
                     Nitori's<br/>Workshop!
                </Link>                
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    Toggle Menu
                </Navbar.Toggle>
                
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                       
                        <Link to="/">
                            <Button variant="outline-light" className="login-button">Home Page </Button>
                        </Link>

                    {/* Separate conditional rendering for Schedule Repair and Dashboard buttons */}
                    {global.config.i18n.user.useremail && global.config.i18n.user.user_id && global.config.i18n.user.user_verified === "True" && (
                        <Link to="/Workshop_Forum">
                            <Button variant="outline-light" className="login-button">Forum</Button>
                        </Link>
                    )}

                    {/* Separate conditional rendering for Schedule Repair and Dashboard buttons */}
                    {global.config.i18n.user.useremail && global.config.i18n.user.user_id && global.config.i18n.user.user_type === "User" && (
                        <Link to="/schedule_repairs">
                            <Button variant="outline-light" className="login-button">Schedule Repair</Button>
                        </Link>
                    )}

                    {global.config.i18n.user.useremail && global.config.i18n.user.user_id && global.config.i18n.user.user_type === "User" && (
                        <Link to="/Custom_PC">
                            <Button variant="outline-light" className="login-button">Custom PC</Button>
                        </Link>
                    )}

                    {global.config.i18n.user.useremail && global.config.i18n.user.user_id && global.config.i18n.user.user_type === "Admin" && (
                       <Link to="/Admin_Select">
                            <Button variant="outline-light" className="login-button">Admin System</Button>
                        </Link>
                    )}


                    {/* Conditional rendering based on user login status */}
                    {global.config.i18n.user.useremail ? (
                        <Button variant="outline-light" className="login-button" onClick={handleLogout}>Logout</Button>
                    ) : (
                        <Link to="/login">
                            <Button variant="outline-light" className="login-button">Login</Button>
                        </Link>
                    )}

                    </Nav>


                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default RibbonHead;
