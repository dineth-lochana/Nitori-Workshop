import React, { useEffect, useState } from "react";
import Axios from "axios";
import RibbonHead from './RibbonHead.jsx';
import RibbonFoot from './RibbonFoot.jsx';
import './Schedule_repairs.css'
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Import Link from React Router

const Custom_PC = ({ setItems }) => {
  const [items, setItemsLocal] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await Axios.get('http://localhost:8080/api/pc_orders');
        const filteredItems = response.data.filter(item => item.order_user === global.config.i18n.user.useremail);
        setItemsLocal(filteredItems);
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    };

    fetchItems(); // Fetch items initially

    const intervalId = setInterval(fetchItems, 1 * 60 * 1000); 

    return () => clearInterval(intervalId); 
  }, []);


  const handleDelete = async (orderId) => {
    console.log("Deleting Item " + orderId);
    try {
      await Axios.delete(`http://localhost:8080/api/pc_orders/${orderId}`);
      setItemsLocal(prevItems => prevItems.filter(item => item.order_id !== orderId)); 
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };


const handleView = (orderId) => {
  const selectedItem = items.find(item => item.order_id === orderId);

  if (selectedItem) {
    const modalWindow = window.open("", "Item Details", "width=600,height=400");

    const htmlContent = `
      <html>
        <head>
          <title>Item Details</title>
          <style>
            body {
              font-family: Arial, sans-serif;
              margin: 0;
              padding: 20px;
            }
            h2 {
              color: #333;
            }
            .item-details {
              background-color: #f9f9f9;
              padding: 20px;
              border-radius: 10px;
              box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            }
            .item-details p {
              margin: 10px 0;
            }
            .item-details img {
              max-width: 100%;
              height: auto;
              margin-top: 10px;
              border-radius: 5px;
            }
          </style>
        </head>
        <body>
          <h2>PC Details</h2>
          <div class="item-details">
            <p><strong>Order ID:</strong> ${selectedItem.order_id}</p>
            <p><strong>Case:</strong> ${selectedItem.order_case}</p>
            <p><strong>Mouse:</strong> ${selectedItem.order_mouse}</p>
            <p><strong>Speaker:</strong> ${selectedItem.order_speaker}</p>
            <p><strong>Keyboard:</strong> ${selectedItem.order_keyboard}</p>
            <p><strong>Monitor:</strong> ${selectedItem.order_monitor}</p>
            <p><strong>CPU:</strong> ${selectedItem.order_cpu}</p>
            <p><strong>GPU:</strong> ${selectedItem.order_gpu}</p>
            <p><strong>Motherboard:</strong> ${selectedItem.order_motherboard}</p>
            <p><strong>RAM:</strong> ${selectedItem.order_ram}</p>
            <p><strong>PSU:</strong> ${selectedItem.order_psu}</p>
            <p><strong>Storage:</strong> ${selectedItem.order_storage}</p>
            <p><strong>NIC:</strong> ${selectedItem.order_nic}</p>
            <p><strong>Input:</strong> ${selectedItem.order_input}</p>
            <p><strong>Webcam:</strong> ${selectedItem.order_webcam}</p>
            <p><strong>User:</strong> ${selectedItem.order_user}</p>
            <p><strong>Status:</strong> ${selectedItem.order_status}</p>
          </div>
        </body>
      </html>
    `;

    modalWindow.document.write(htmlContent);
  } else {
    console.log(`Item with ID ${orderId} not found.`);
  }
};




  return (

    <div>

      <RibbonHead />

      <Container fluid>

       <br/>
       <br/>
      
      <Row className="justify-content-center">



          {/* The 2/5 Container of Row 1 */}
        <Col lg={3} md={12} style={{ marginBottom: '20px', paddingLeft: '10px' }}>

          <Card style={{  width: '100%' }} className="homepage-subcard">
            <br/>  
            <h1 align="center" className="repair_welcome justify-content-center align-items-center">Order Station.</h1>
            <Card.Text className="container_text">Current PC Orders.</Card.Text>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="7rem"
              height="7rem"
              viewBox="0 0 16 16"
              align="center" 
              className="svg-display" // Add a class for potential CSS styling
            >
              <linearGradient id="monitorGradient" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="rgba(0, 123, 255, 0.9)" />
                <stop offset="100%" stopColor="rgba(60, 179, 113, 0.8)" />
              </linearGradient>
              
                <path  fill="url(#monitorGradient)" fill-rule="evenodd" d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0M14 14V5H2v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1M8 7.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132"/>
  
            </svg>



            <Card.Body>
              <Link to="/Custom_PC_New">
                <Button variant="primary" type="submit" className="schedule-add-button" style={{ textDecoration: "none", outline: "none" }}>
                  Order a custom PC!
                </Button>
              </Link>
            </Card.Body>

          </Card>

        </Col>







          {/* The 3/5 Container of Row 1 */}
        <Col lg={8} md={12} style={{ marginBottom: '20px', paddingRight: '10px' }}>
          <Card style={{  width: '100%' }} className="homepage-subcard">
            <br/>  
            <h1 align="center" className="repair_welcome justify-content-center align-items-center">Custom PC Orders.</h1>
            <Card.Text className="container_text"></Card.Text>
            

            <Card.Body>
              <div className="sub-cards-grid">
                {items.map((item, index) => {
                  return (
                    <Card key={index} style={{ width: '100%' }} className="homepage-subcard">
                      <Card.Body>
                        <Card.Text className="container_text">Order {item.order_id}</Card.Text>
                        <Card.Text className="status_text">Status: {item.order_status}</Card.Text>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Button className="schedule-add-button-sec" onClick={() => handleView(item.order_id)}>View</Button>
                          <Button className="schedule-add-button-sec" onClick={() => handleDelete(item.order_id)}>Delete</Button>
                        </div>
                      </Card.Body>
                    </Card>
                  );
                })}
              </div>
            </Card.Body>


          </Card>
        </Col>


      </Row>
      
      </Container>
      

      <br/>
      <br/>
      <RibbonFoot />
    </div>
  );
};

export default Custom_PC;
