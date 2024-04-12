import React from "react";
import RibbonHead from './RibbonHead.jsx';
import RibbonFoot from './RibbonFoot.jsx';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Homepage.css';

const Homepage = () => {
  const SubCard = ({ text, icon }) => (
    <Card style={{ width: '100%' }} className="homepage-subcard">
      <Card.Body>
        <Card.Text className="container_text">{text}</Card.Text>
        {icon}
      </Card.Body>
    </Card>
  );

  const ReasonList = () => (
    <ol className="raison_text">
      <li>Customer First.</li>
      <li>Reliable Repairs.</li>
      <li>Efficient Service.</li>
      <li>Affordable Costs.</li>
      <li>Quality Service.</li>
      <li>Timely Delivery.</li>
    </ol>
  );

  return (
    <div>
      <RibbonHead />
      <Container fluid className="homepage-container">
        <br/>
        <h1 align="center" className="welcome justify-content-center align-items-center">Welcome to Nitori's Workshop!</h1>
        <Row className="justify-content-center">
          <Col lg={8} md={12} style={{ marginBottom: '20px', paddingRight: '10px' }}>
            <Card className="card-home">
              <br/>
              <Card.Title className="container_text">We repair your Computers!</Card.Title>
              <Card.Body className="container-content-home">
                <div className="sub-cards-grid">
                  <SubCard
                    text="1. Leave your device with us."
                    icon={
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
                    }
                  />

                  <SubCard
                    text="2. We will repair it!"
                    icon={
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
                    
                    <path fill="url(#monitorGradient)" d="M16 4.5a4.5 4.5 0 0 1-1.703 3.526L13 5l2.959-1.11q.04.3.041.61"/>
                    <path fill="url(#monitorGradient)" d="M11.5 9c.653 0 1.273-.139 1.833-.39L12 5.5 11 3l3.826-1.53A4.5 4.5 0 0 0 7.29 6.092l-6.116 5.096a2.583 2.583 0 1 0 3.638 3.638L9.908 8.71A4.5 4.5 0 0 0 11.5 9m-1.292-4.361-.596.893.809-.27a.25.25 0 0 1 .287.377l-.596.893.809-.27.158.475-1.5.5a.25.25 0 0 1-.287-.376l.596-.893-.809.27a.25.25 0 0 1-.287-.377l.596-.893-.809.27-.158-.475 1.5-.5a.25.25 0 0 1 .287.376M3 14a1 1 0 1 1 0-2 1 1 0 0 1 0 2"/>

                    </svg>

                    }
                  />
                  <SubCard
                    text="3. Pick it up at your leisure."
                    icon={
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
                    
                    <path fill="url(#monitorGradient)" d="M8 7.982C9.664 6.309 13.825 9.236 8 13 2.175 9.236 6.336 6.31 8 7.982"/>
                    <path fill="url(#monitorGradient)"  d="M3.75 0a1 1 0 0 0-.8.4L.1 4.2a.5.5 0 0 0-.1.3V15a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V4.5a.5.5 0 0 0-.1-.3L13.05.4a1 1 0 0 0-.8-.4zm0 1H7.5v3h-6zM8.5 4V1h3.75l2.25 3zM15 5v10H1V5z"/>

                      </svg>
                    }
                  />
                </div>
              </Card.Body>
            </Card>
          </Col>





          <Col lg={3} md={12} style={{ marginBottom: '20px', paddingLeft: '10px' }}>
            <Card className="card-home-less-transparent">
              <Card.Title className="container_text">Raison d'etre.</Card.Title>
              <div className="container-content-home">
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <ReasonList />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="5rem"
                    height="5rem"
                    viewBox="0 0 16 16"
                    align="center" 
                    className="svg-display"
                  >
                    <linearGradient id="monitorGradient" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="rgba(0, 123, 255, 0.9)" />
                      <stop offset="100%" stopColor="rgba(60, 179, 113, 0.8)" />
                    </linearGradient>
                    <path fill="url(#monitorGradient)" d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.73 1.73 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.73 1.73 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.73 1.73 0 0 0 3.407 2.31zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z"/>
                  </svg>
                </div>
              </div>
              <br/>

            </Card>

          </Col>
        </Row>
        <br/>
        <Row className="justify-content-center">


          <Col lg={8} md={12} style={{ marginBottom: '20px', paddingRight: '10px' }}>
            <Card className="card-home-less-transparent">
              <Card.Body className="d-flex justify-content-center align-items-center">
                <Card.Title className="container_text">The Workshop.</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={3} md={12} style={{ marginBottom: '20px', paddingLeft: '10px' }}>
            <Card className="card-home">
              <Card.Body className="d-flex justify-content-center align-items-center">
                <Card.Title className="container_text">Raison d'etre.</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <br/>
        <br/>
      </Container>
      <RibbonFoot />
    </div>
  );
};

export default Homepage;
