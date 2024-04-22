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
            <br/>
            <Card.Title className="container_text">The Workshop.</Card.Title>

              <Card.Body className="d-flex justify-content-center align-items-center">
                <br/>
                <Card.Body className="container-content-home">
                <p className="container_text2">Welcome to Nitori's Workshop, where technology meets craftsmanship! At Nitori's, we are dedicated to providing top-notch computer solutions tailored to your needs. We have the expertise and products to enhance your digital experience.
                Our skilled technicians are passionate about technology and committed to delivering unparalleled service. From custom-built PCs to expert repairs and upgrades, we handle it all with precision and care. 
                </p>
                </Card.Body>
              </Card.Body>
            </Card>
          </Col>

        </Row >

        <Row className="justify-content-center">











          <Col lg={10} md={12} style={{ marginBottom: '20px', paddingLeft: '10px' }}>
            <Card className="card-home">
              <br/>
              <Card.Title className="container_text">Follow us @ ~!</Card.Title>
              <Card.Body className="container-content-home">
                <div className="sub-cards-grid2">

                  <SubCard
                    text="Twitter"
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
                    d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
                    </svg>
                    }
                  />

                

                  <SubCard
                    text="Twitch"
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
                    
       
                     <path fill="url(#monitorGradient)"  d="M3.857 0 1 2.857v10.286h3.429V16l2.857-2.857H9.57L14.714 8V0zm9.714 7.429-2.285 2.285H9l-2 2v-2H4.429V1.143h9.142z"/>
                      <path fill="url(#monitorGradient)" d="M11.857 3.143h-1.143V6.57h1.143zm-3.143 0H7.571V6.57h1.143z"/>

                    </svg>

                    }
                  />
                 

                  <SubCard
                    text="Youtube"
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
                    
                    <path fill="url(#monitorGradient)" d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"/>
                   

                      </svg>
                    }
                  />



                  <SubCard
                    text="Telegram"
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
                    
                    <path fill="url(#monitorGradient)" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.287 5.906q-1.168.486-4.666 2.01-.567.225-.595.442c-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294q.39.01.868-.32 3.269-2.206 3.374-2.23c.05-.012.12-.026.166.016s.042.12.037.141c-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8 8 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629q.14.092.27.187c.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.4 1.4 0 0 0-.013-.315.34.34 0 0 0-.114-.217.53.53 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09"/>
                   

                      </svg>
                    }
                  />


                  <SubCard
                    text="Facebook"
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
                    
                    <path fill="url(#monitorGradient)" d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
                   

                      </svg>
                    }
                  />


                </div>
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
