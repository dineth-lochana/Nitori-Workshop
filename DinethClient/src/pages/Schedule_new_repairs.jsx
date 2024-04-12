import React, { useState , useEffect } from "react";
import Axios from "axios";
import RibbonHead from './RibbonHead.jsx';
import RibbonFoot from './RibbonFoot.jsx';
import './Schedule_new_repairs.css'
import { Container, Row, Col, Card, Button, Form, Alert } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom'; 

const Schedule_new_repairs = () => {
  const navigate = useNavigate(); 
  const [formData, setFormData] = useState({
    item_name: "",
    item_type: "",
    item_image1: "",
    item_image2: "",
    item_image3: "",
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

    if (!global.config.i18n.user.useremail || !isValidEmail(global.config.i18n.user.useremail)) {
      setError("Invalid or missing email address. Please check and try again.");
      return; 
    }

    if (global.config.i18n.user.user_verified === "False") {
      setError("User not Verified.");
      return; 
    }


    try {
      const dataToSend = {
        ...formData,
        submitted_by: global.config.i18n.user.useremail,
        date: new Date().toISOString(), 
        item_status: "Not Checked", 
      };

      await Axios.post("http://localhost:8080/api/computer_item", dataToSend);

      setFormData({
        item_name: "",
        item_type: "",
        item_image1: "",
        item_image2: "",
        item_image3: "",
      });
      setError("");
      alert("Computer item added successfully!");
    } catch (error) {
      setError("Error adding computer item. Please try again later.");
    }
  };

  const isValidEmail = (email) => {
    const regex = /^\w+@[a-zA-Z_.]+\.[a-zA-Z]+$/;
    return regex.test(email);
  };

  useEffect(() => {
    if (!global.config.i18n.user.useremail || !isValidEmail(global.config.i18n.user.useremail)) {
      navigate('/'); 
    }
  }, [navigate]);

  const renderNewRepairCard = () => (
    <Col lg={3} md={12} style={{ marginBottom: '20px', paddingLeft: '10px' }}>
      <Card style={{ width: '100%' }} className="homepage-subcard">
        <br/>  
        <h1 align="center" className="repair_welcome justify-content-center align-items-center">New Repair.</h1>
        <Card.Text className="container_text">Adding a new Repair.</Card.Text>
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
          <Link to="/schedule_repairs">
            <Button variant="primary" type="submit" className="schedule-add-button" style={{ textDecoration: "none", outline: "none" }}>
              Return to Repair Repository.
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
        <h1 align="center" className="repair_welcome justify-content-center align-items-center">Adding a new Scheduled Repair.</h1>
        <Card.Text className="container_text"></Card.Text>
        <Card.Body>
          <form onSubmit={handleSubmit} className="custom-form">
            {error && <Alert variant="danger">{error}</Alert>}

            <Form.Group>
              <Form.Label className="form-label">Item Name:</Form.Label>
              <Form.Control type="text" name="item_name" value={formData.item_name} onChange={handleChange} required />
            </Form.Group>

            <Form.Group>
              <Form.Label className="form-label">Item Type:</Form.Label>
              <Form.Control type="text" name="item_type" value={formData.item_type} onChange={handleChange} required />
            </Form.Group>

            <Form.Group>
              <Form.Label className="form-label">Item Image 1:</Form.Label>
              <Form.Control type="text" name="item_image1" value={formData.item_image1} onChange={handleChange} required />
            </Form.Group>

            <Form.Group>
              <Form.Label className="form-label">Item Image 2:</Form.Label>
              <Form.Control type="text" name="item_image2" value={formData.item_image2} onChange={handleChange} />
            </Form.Group>

            <Form.Group>
              <Form.Label className="form-label">Item Image 3:</Form.Label>
              <Form.Control type="text" name="item_image3" value={formData.item_image3} onChange={handleChange} />
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

export default Schedule_new_repairs;
