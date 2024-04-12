import React, { useState , useEffect } from "react";
import Axios from "axios";
import RibbonHead from './RibbonHead.jsx';
import RibbonFoot from './RibbonFoot.jsx';
import './Schedule_new_repairs.css'
import { Container, Row, Col, Card, Button, Form, Alert } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom'; 

const RegisterAcc = () => {

  const navigate = useNavigate(); 


  const [formData, setFormData] = useState({
    useremail: "",
    user_name: "",
    user_password: "",
    user_type: "",
    user_verified: "",
  });


  const [error, setError] = useState("");



  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };



  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const dataToSend = {
        ...formData,
        user_type: "User",
        user_verified : "False"
      };

      await Axios.post("http://localhost:8080/api/users", dataToSend);

      setFormData({
        useremail: "",
        user_name: "",
        user_password: "",
      });
      setError("");
      alert("Account created successfully!");

      navigate('/login');

    } catch (error) {
      setError("Error adding Account. Please try again later.");
    }
  };



  const isValidEmail = (email) => {
    const regex = /^\w+@[a-zA-Z_.]+\.[a-zA-Z]+$/;
    return regex.test(email);
  };



  const renderNewRepairCard = () => (
    <Col lg={3} md={12} style={{ marginBottom: '20px', paddingLeft: '10px' }}>
      <Card style={{ width: '100%' }} className="homepage-subcard">
        <br/>  
        <h1 align="center" className="repair_welcome justify-content-center align-items-center">New Account.</h1>
        <Card.Text className="container_text">Creating a new Account.</Card.Text>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10rem"
          height="10rem"
          viewBox="0 0 16 16"
          align="center" 
          className="svg-display"
        >
          <linearGradient id="monitorGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="rgba(0, 123, 255, 0.9)" />
            <stop offset="100%" stopColor="rgba(60, 179, 113, 0.8)" />
          </linearGradient>
          <path 
            fill="url(#monitorGradient)" 
            d="M8 1a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1zm1 13.5a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0m2 0a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0M9.5 1a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zM9 3.5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 0-1h-5a.5.5 0 0 0-.5.5M1.5 2A1.5 1.5 0 0 0 0 3.5v7A1.5 1.5 0 0 0 1.5 12H6v2h-.5a.5.5 0 0 0 0 1H7v-4H1.5a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5H7V2z"/>
        </svg>
        <Card.Body>
          <Link to="/login">
            <Button variant="primary" type="submit" className="schedule-add-button" style={{ textDecoration: "none", outline: "none" }}>
              Return to Log In.
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );




  const renderForm = () => (
    <Col lg={8} md={12} style={{ marginBottom: '20px', paddingRight: '10px' }}>
      <Card style={{ width: '100%' }} className="homepage-subcard">
        <br/>  
        <h1 align="center" className="repair_welcome justify-content-center align-items-center">Please enter your details.</h1>
        <Card.Text className="container_text"></Card.Text>
        <Card.Body>
          <form onSubmit={handleSubmit} className="custom-form">
            {error && <Alert variant="danger">{error}</Alert>}

            <Form.Group>
              <Form.Label className="form-label">Email:</Form.Label>
              <Form.Control type="text" name="useremail" value={formData.useremail} onChange={handleChange} required />
            </Form.Group>

            <Form.Group>
              <Form.Label className="form-label">Name:</Form.Label>
              <Form.Control type="text" name="user_name" value={formData.user_name} onChange={handleChange} required />
            </Form.Group>

            <Form.Group>
              <Form.Label className="form-label">Password:</Form.Label>
              <Form.Control type="text" name="user_password" value={formData.user_password} onChange={handleChange} required />
            </Form.Group>

            <br/>

            <Button type="submit" className="login-accept-button">Submit</Button>
          </form>
        </Card.Body>
      </Card>
    </Col>
  );



  return (
    <div>
      <RibbonHead />
      <Container fluid>
        <br/>
        <br/>
        <Row className="justify-content-center">
          {renderNewRepairCard()}
          {renderForm()}
        </Row>
      </Container>
      <br/>
      <br/>
      <RibbonFoot />
    </div>
  );
};

export default RegisterAcc;
