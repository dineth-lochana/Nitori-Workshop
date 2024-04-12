import React, { useEffect, useState } from "react";
import Axios from "axios";
import RibbonHead from './RibbonHead.jsx';
import RibbonFoot from './RibbonFoot.jsx';
import './Schedule_repairs.css'
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Import Link from React Router

const Schedule_repairs = ({ setItems }) => {
  const [items, setItemsLocal] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await Axios.get('http://localhost:8080/api/computer_item');
        const filteredItems = response.data.filter(item => item.submitted_by === global.config.i18n.user.useremail);
        setItemsLocal(filteredItems);
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    };

    fetchItems(); // Fetch items initially

    const intervalId = setInterval(fetchItems, 1 * 60 * 1000); 

    return () => clearInterval(intervalId); 
  }, []);

  const handleDelete = async (itemId) => {
    console.log("Deleting Item " + itemId);
    try {
      await Axios.delete(`http://localhost:8080/api/computer_item/${itemId}`);
      setItemsLocal(prevItems => prevItems.filter(item => item.item_id !== itemId)); 
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  const handleView = (itemId) => {
    const selectedItem = items.find(item => item.item_id === itemId);
    
    if (selectedItem) {
      const modalWindow = window.open("", "Item Details", "width=600,height=400");
      const htmlContent = `
              <html>
              <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
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
                <h2>Item Details</h2>
                <div class="item-details">
                    <p><strong>Name:</strong> ${selectedItem.item_name}</p>
                    <p><strong>Type:</strong> ${selectedItem.item_type}</p>
                    <p><strong>Status:</strong> ${selectedItem.item_status}</p>
                    <p><strong>Submitted By:</strong> ${selectedItem.submitted_by}</p>
                    <img src="${selectedItem.item_image1}" alt="${selectedItem.item_name}">
                </div>
              </body>
              </html>
      `;
      
      modalWindow.document.write(htmlContent);
    } else {
      console.log(`Item with ID ${itemId} not found.`);
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
            <h1 align="center" className="repair_welcome justify-content-center align-items-center">Active Repairs.</h1>
            <Card.Text className="container_text">Currently scheduled repairs.</Card.Text>
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
              <path 
                fill="url(#monitorGradient)" 
                d="M8 1a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1zm1 13.5a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0m2 0a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0M9.5 1a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zM9 3.5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 0-1h-5a.5.5 0 0 0-.5.5M1.5 2A1.5 1.5 0 0 0 0 3.5v7A1.5 1.5 0 0 0 1.5 12H6v2h-.5a.5.5 0 0 0 0 1H7v-4H1.5a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5H7V2z"/>
            </svg>

            <Card.Body>
              <Link to="/schedule_new_repairs">
                <Button variant="primary" type="submit" className="schedule-add-button" style={{ textDecoration: "none", outline: "none" }}>
                  Schedule a new Repair!
                </Button>
              </Link>
            </Card.Body>

          </Card>

        </Col>







          {/* The 3/5 Container of Row 1 */}
        <Col lg={8} md={12} style={{ marginBottom: '20px', paddingRight: '10px' }}>
          <Card style={{  width: '100%' }} className="homepage-subcard">
            <br/>  
            <h1 align="center" className="repair_welcome justify-content-center align-items-center">Scheduled Repairs.</h1>
            <Card.Text className="container_text"></Card.Text>
            

            <Card.Body>
              <div className="sub-cards-grid">
                {items.map((item, index) => {
                  const truncatedName = item.item_name.length > 10 ? item.item_name.slice(0, 10) + '...' : item.item_name;
                  return (
                    <Card key={index} style={{ width: '100%' }} className="homepage-subcard">
                      <Card.Text className="container_text">{truncatedName}</Card.Text>
                      <Card.Body>
                        <Card.Img variant="top" src={item.item_image1} alt={item.item_name} style={{ width: '100%', height: 'auto'}} />
                        <Card.Text className="status_text">Status: {item.item_status}</Card.Text>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                          <Button className="schedule-add-button-sec" onClick={() => handleView(item.item_id)}>View</Button>
                          <Button className="schedule-add-button-sec" onClick={() => handleDelete(item.item_id)}>Delete</Button>
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

export default Schedule_repairs;
