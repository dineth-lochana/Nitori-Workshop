import React, { useEffect } from "react";
import RibbonHead from './RibbonHead.jsx';
import RibbonFoot from './RibbonFoot.jsx';
import './Management_Console.css';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link,useNavigate } from 'react-router-dom'; 

const Management_Console_Users = () => {

  const navigate = useNavigate(); 

  useEffect(() => {
    if (!global.config.i18n.user.useremail) 
    {
      navigate('/'); 
    }
    if (global.config.i18n.user.user_type !=="Admin")
    {
      navigate('/'); 
    }
  }, [navigate]);




  return (
    <div>
      <RibbonHead />
      <Container fluid>
        <br />
        <br />
        <Row className="justify-content-center">
          





          <Col lg={2.5} md={12} style={{ marginBottom: '20px' }}>
          <Card style={{ width: '100%' }} className="homepage-subcard">
                      <br/>
              <h1 align="center" className="repair_welcome justify-content-center align-items-center">Admin Console.</h1>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="7rem"
            height="7rem"
            viewBox="0 0 16 16"
            align="center"
            className="svg-display"
            >

            <linearGradient id="monitorGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="rgba(0, 123, 255, 0.9)" />
            <stop offset="100%" stopColor="rgba(60, 179, 113, 0.8)" />
            </linearGradient>
     
              <path fill="url(#monitorGradient)" d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m1.679-4.493-1.335 2.226a.75.75 0 0 1-1.174.144l-.774-.773a.5.5 0 0 1 .708-.708l.547.548 1.17-1.951a.5.5 0 1 1 .858.514M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4"/>
              <path fill="url(#monitorGradient)" d="M8.256 14a4.5 4.5 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10q.39 0 .74.025c.226-.341.496-.65.804-.918Q8.844 9.002 8 9c-5 0-6 3-6 4s1 1 1 1z"/>
            
            </svg>
            <Card.Body></Card.Body>
            </Card>
          </Col>





          <Col lg={2.5} md={12} style={{ marginBottom: '20px' }}>
            <Card style={{ width: '100%' }} className="homepage-subcard">
            <br/>
              <Card.Text className="container_text">Select a Task.</Card.Text>
              <Card.Body>


                       <Link to="/Management_Console">
                            <Button className="schedule-add-button">Manage Repairs</Button>
                        </Link>
                        <br/>

                       <Link to="/Management_Console_Users">
                            <Button className="schedule-add-button">Manage Users</Button>
                        </Link>
                        <br/>

                       <Link to="/Management_Messages">
                            <Button className="schedule-add-button">Manage Messages</Button>
                       </Link>
                        <br/>

                       <Link to="/Management_PCParts">
                            <Button className="schedule-add-button">Manage PC Parts</Button>
                       </Link>
                        <br/>

                       <Link to="/Manage_Orders">
                            <Button className="schedule-add-button">Manage PC Orders</Button>
                       </Link>
                        <br/>

              </Card.Body>
            <br/>
            </Card>
          </Col>


        </Row>
      </Container>
      <br />
      <br />
      <RibbonFoot />
    </div>
  );
};

export default Management_Console_Users;
