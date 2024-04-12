import React, { useState, useEffect } from "react";
import Axios from "axios";
import RibbonHead from './RibbonHead.jsx';
import RibbonFoot from './RibbonFoot.jsx';
import './Schedule_new_repairs.css'
import { Container, Row, Col, Card, Button, Form, Alert } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom'; 

const Custom_PC_New = () => {
  const navigate = useNavigate(); 
  const [formData, setFormData] = useState({
    order_case: "",
    order_mouse: "",
    order_speaker: "",
    order_keyboard: "",
    order_monitor: "",
    order_cpu: "",
    order_gpu: "",
    order_motherboard: "",
    order_ram: "",
    order_psu: "",
    order_storage: "",
    order_nic: "",
    order_input: "",
    order_webcam: "",
  });
  const [error, setError] = useState("");
  const [pcParts, setPcParts] = useState({});

  useEffect(() => {
    // Fetch PC parts data from your backend API
    Axios.get("http://localhost:8080/api/new_pc_item")
      .then(response => {
        // Group PC parts by type
        const groupedParts = {};
        response.data.forEach(part => {
          if (!groupedParts[part.newPcPartType]) {
            groupedParts[part.newPcPartType] = [];
          }
          groupedParts[part.newPcPartType].push(part);
        });
        setPcParts(groupedParts);
      })
      .catch(error => {
        console.error("Error fetching PC parts:", error);
      });
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if user is verified
    if (global.config.i18n.user.user_verified === "False") {
      setError("User not Verified.");
      return; 
    }

    try {
      const dataToSend = {
        ...formData,
        order_user: global.config.i18n.user.useremail,
        order_status: "Not Checked", 
      };

      await Axios.post("http://localhost:8080/api/pc_orders", dataToSend);

      setFormData({
        order_case: "",
        order_mouse: "",
        order_speaker: "",
        order_keyboard: "",
        order_monitor: "",
        order_cpu: "",
        order_gpu: "",
        order_motherboard: "",
        order_ram: "",
        order_psu: "",
        order_storage: "",
        order_nic: "",
        order_input: "",
        order_webcam: "",
      });

      setError("");
      alert("Order added successfully!");
    } catch (error) {
      setError("Error adding Order. Please try again later.");
    }
  };

  useEffect(() => {
    if (!global.config.i18n.user.useremail) {
      navigate('/'); 
    }
  }, [navigate]);

  const renderNewRepairCard = () => (
    <Col lg={3} md={12} style={{ marginBottom: '20px', paddingLeft: '10px' }}>
      <Card style={{ width: '100%' }} className="homepage-subcard">
        <br/>  
        <h1 align="center" className="repair_welcome justify-content-center align-items-center">New Repair.</h1>
        <Card.Text className="container_text">Ordering a new PC~</Card.Text>
        {/* Add your SVG here */}
        <Card.Body>
          <Link to="/Custom_PC">
            <Button variant="primary" type="submit" className="schedule-add-button" style={{ textDecoration: "none", outline: "none" }}>
              Return to Orders.
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
        <h1 align="center" className="repair_welcome justify-content-center align-items-center">Order for a new PC.</h1>
        <Card.Text className="container_text"></Card.Text>
        <Card.Body>
          <form onSubmit={handleSubmit} className="custom-form">
            {error && <Alert variant="danger">{error}</Alert>}

            {/* Render dropdowns for each type of PC part */}
            {Object.keys(pcParts).map(type => (
              <Form.Group key={type}>
                <Form.Label className="form-label">{type}:</Form.Label>
                <Form.Control as="select" name={`order_${type.toLowerCase()}`} onChange={handleChange} required>
                  <option value="">Select {type}</option>
                  {pcParts[type].map(part => (
                    <option key={part.newPcPartId} value={part.newPcPartName}>{part.newPcPartName}</option>
                  ))}
                </Form.Control>
              </Form.Group>
            ))}

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

export default Custom_PC_New;
