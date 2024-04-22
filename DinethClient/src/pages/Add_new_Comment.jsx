import React, { useState , useEffect } from "react";
import Axios from "axios";
import RibbonHead from './RibbonHead.jsx';
import RibbonFoot from './RibbonFoot.jsx';
import './Add_new_Comment.css'
import { Container, Row, Col, Card, Button, Form, Alert } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom'; 

const NewComment = () => {


  const navigate = useNavigate(); 


  const [formData, setFormData] = useState({
    message_id: "",
    message_image: "",
    date :"",
    message_status: "",
    msgtext: "",
    submittedby: "",
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

    try {
      let messageImage = formData.message_image; 
      if (!formData.message_image) {
        messageImage = "https://placehold.co/600x400.png";
      }

      const dataToSend = {
        ...formData,
        submittedby: global.config.i18n.user.useremail,
        date: new Date().toISOString(),
        message_status: "Not Verified",
        message_image: messageImage, 
      };

      await Axios.post("http://localhost:8080/api/messages", dataToSend);

      setFormData({
        message_image: "",
        msgtext: ""
      });

      setError("");
      alert("Message added successfully!");
    } catch (error) {
      setError("Error adding Message. Please try again later.");
    }
  };



  const isValidEmail = (email) => {
    const regex = /^\w+@[a-zA-Z_.]+\.[a-zA-Z]+$/;
    return regex.test(email);
  };


  useEffect(() => {
    if (!global.config.i18n.user.useremail || !isValidEmail(global.config.i18n.user.useremail) || !global.config.i18n.user.user_verified === "False") {
      navigate('/'); 
    }
  }, [navigate]);



  const renderNewRepairCard = () => (
    <Col lg={3} md={12} style={{ marginBottom: '20px', paddingLeft: '10px' }}>
      <Card style={{ width: '100%' }} className="homepage-subcard">
        <br/>  
        <h1 align="center" className="repair_welcome justify-content-center align-items-center">New Comment.</h1>
        <Card.Text className="container_text">Adding a new Message.</Card.Text>
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
          <Link to="/Workshop_Forum">
            <Button variant="primary" type="submit" className="schedule-add-button" style={{ textDecoration: "none", outline: "none" }}>
              Return to Forum.
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
        <h1 align="center" className="repair_welcome justify-content-center align-items-center">Add a new Forum Post.</h1>
        <Card.Text className="container_text"></Card.Text>
        <Card.Body>
          <form onSubmit={handleSubmit} className="custom-form">
            {error && <Alert variant="danger">{error}</Alert>}

            <Form.Group>
              <Form.Label className="form-label">Message Image:</Form.Label>
              <Form.Control type="text" name="message_image" value={formData.message_image} onChange={handleChange} />
            </Form.Group>

            <Form.Group>
              <Form.Label className="form-label">Message Text:</Form.Label>
              <Form.Control type="text" name="msgtext" value={formData.msgtext} onChange={handleChange} required />
              <br/>

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

export default NewComment;
