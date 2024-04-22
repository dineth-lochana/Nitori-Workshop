import React, { useEffect, useState, useRef } from "react";
import Axios from "axios";
import RibbonHead from './RibbonHead.jsx';
import RibbonFoot from './RibbonFoot.jsx';
import './Workshop_Forum.css';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom'; 

const WorkshopForum = () => {
  const navigate = useNavigate();
  const intervalRef = useRef(null);

  useEffect(() => {
    if (!global.config.i18n.user.useremail || global.config.i18n.user.user_verified !== "True") {
      navigate('/');
    }
  }, [navigate]);

  const [messages, setMessages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [messagesPerPage] = useState(5);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await Axios.get('http://localhost:8080/api/messages');
        setMessages(response.data);
      } catch (error) {
        console.error('Error fetching messages:', error);
      }
    };

    fetchMessages();
    intervalRef.current = setInterval(fetchMessages, 10000);

    return () => clearInterval(intervalRef.current);
  }, []);

  const handleDelete = async (message_id) => {
    console.log("Deleting Item " + message_id);
    try {
      await Axios.delete(`http://localhost:8080/api/messages/${message_id}`);
      setMessages(prevMessages => prevMessages.filter(message => message.message_id !== message_id));
    } catch (error) {
      console.error('Error deleting Message:', error);
    }
  };

  const isGif = (imageUrl) => {
    return imageUrl.toLowerCase().endsWith('.gif');
  };

  const openGifInNewWindow = (imageUrl) => {
    window.open(imageUrl, '_blank');
  };

  const indexOfLastMessage = currentPage * messagesPerPage;
  const indexOfFirstMessage = indexOfLastMessage - messagesPerPage;
  const currentMessages = messages.slice(indexOfFirstMessage, indexOfLastMessage);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber); // Update currentPage state
  };



  const renderPagination = () => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(messages.length / messagesPerPage); i++) {
      pageNumbers.push(i);
    }

    return (
      <Row className="justify-content-center">
        <ul className="pagination row-centered">
          {pageNumbers.map(number => (
            <li key={number} className="page-item">
              <button onClick={() => paginate(number)} className="page-link">
                {number}
              </button>
            </li>
          ))}
        </ul>
      </Row>
    );
  };

    useEffect(() => {
    return () => setCurrentPage(1);
  }, []);





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
            <h1 align="center" className="repair_welcome justify-content-center align-items-center">Message Board.</h1>

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
   
            <path fill="url(#monitorGradient)" d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2.5a2 2 0 0 0-1.6.8L8 14.333 6.1 11.8a2 2 0 0 0-1.6-.8H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
            <path fill="url(#monitorGradient)" d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
          </svg>
          <Card.Body>
            <Link to="/Add_new_Comment">
              <Button variant="primary" type="submit" className="schedule-add-button" style={{ textDecoration: "none", outline: "none" }}>
                Add Comment
              </Button>
            </Link>
          </Card.Body>
          </Card>
      </Col>



    <Col lg={2.5} md={12} style={{ marginBottom: '20px' }}>
      <Card style={{ width: '100%' }} className="homepage-subcard">
        <br/>
        <Card.Text className="container_text">Messages.</Card.Text>
        <Card.Body>

        {currentMessages.map((message, index) => {
          return (
         <Col lg={2.5} md={12} style={{ marginBottom: '20px' }}>
            <div key={index} style={{ width: '80%', margin: '0 auto' }}>
              <Card style={{ width: '100%' }} className="homepage-subcard">
                <Row>
                    <Col xs={5} className="d-flex justify-content-center align-items-center">
                      {message.message_image && (
                        <div className="message-image-container">
                          {isGif(message.message_image) ? (
                            <>
                              <p>This is a GIF image. Click the button to open in a new window.</p>
                              <Button variant="primary" onClick={() => openGifInNewWindow(message.message_image)}>Open GIF</Button>
                            </>
                          ) : (
                            <img src={message.message_image} alt="Message Image" className="message-image img-fluid" />
                          )}
                        </div>
                      )}
                    </Col>


                <Col xs={7}>
                    <Card.Body>
                      <Card.Text className="container_text">Message: {message.msgtext}</Card.Text>
                      <Card.Text className="status_text">{message.submittedby}</Card.Text>
                        <div className="d-flex justify-content-center align-items-center">
                          {global.config.i18n.user.user_type === "Admin" && (
                            <Button className="schedule-add-button-sec" onClick={() => handleDelete(message.message_id)}>Delete</Button>
                          )}
                        </div>
                    </Card.Body>
                  </Col>
                </Row>


          </Card>
          </div>
          </Col>

      );

      })}

    </Card.Body>


    {renderPagination()}
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

export default WorkshopForum;

