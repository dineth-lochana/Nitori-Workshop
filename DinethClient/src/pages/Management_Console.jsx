import React, { useEffect, useState } from "react";
import Axios from "axios";
import RibbonHead from './RibbonHead.jsx';
import RibbonFoot from './RibbonFoot.jsx';
import './Management_Console.css'
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom'; 



const Management_Console = ({ setItems }) => {
  const navigate = useNavigate(); 
  const [items, setItemsLocal] = useState([]);

  useEffect(() => {
    fetchItems(); // Fetch items initially
  }, []);

  useEffect(() => {
    if (!global.config.i18n.user.useremail || global.config.i18n.user.user_type !== "Admin") {
      navigate('/');
    }
  }, [navigate]);

  useEffect(() => {
    const intervalId = setInterval(fetchItems, 1 * 60 * 1000); // Fetch items every 5 minutes

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, []);

  const fetchItems = async () => {
    try {
      const response = await Axios.get('http://localhost:8080/api/computer_item');
      setItemsLocal(response.data);
    } catch (error) {
      console.error('Error fetching items:', error);
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

  const handleDelete = async (itemId) => {
    console.log("Deleting Item " + itemId);
    try {
      await Axios.delete(`http://localhost:8080/api/computer_item/${itemId}`);
      setItemsLocal(prevItems => prevItems.filter(item => item.item_id !== itemId)); 
      alert("Item scheduled for deletion.");

    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  const handleChangeStatus = async (itemId) => {
    try {
      const newStatus = await showStatusSelection(); 
      
      if (newStatus) {
        const selectedItem = items.find(item => item.item_id === itemId);
        
        if (!selectedItem) {
          console.error(`Item with ID ${itemId} not found.`);
          return;
        }
        
        selectedItem.item_status = newStatus;
        
        await Axios.put(`http://localhost:8080/api/computer_item/${itemId}`, selectedItem);
        
        console.log(`Status changed successfully for item ${itemId}`);
        
        setItemsLocal(prevItems => prevItems.map(item => item.item_id === itemId ? selectedItem : item));
      } else {
        console.log('Status change canceled');
      }
    } catch (error) {
      console.error('Error changing status:', error);
    }
  };

  const showStatusSelection = () => {
    return new Promise((resolve, reject) => {
      const selectedStatus = window.prompt('Select status:\n1. Accepted\n2. Started Repair\n3. Finished Repair');
      
      if (selectedStatus === '1' || selectedStatus.toLowerCase() === 'accepted repair') {
        resolve('Accepted Repair');
      } else if (selectedStatus === '2' || selectedStatus.toLowerCase() === 'started repair') {
        resolve('Started Repair');
      } else if (selectedStatus === '3' || selectedStatus.toLowerCase() === 'finished repair') {
        resolve('Finished Repair');
      } else {
        resolve(null); 
      }
    });
  };

   const renderItems = () => {
    // Sort items array based on item_status
    const sortedItems = [...items].sort((a, b) => {
      const statusOrder = {
        "Not Checked": 0,
        "Started Repair": 1,
        "Accepted Repair": 2,
        "Finished Repair": 3
      };

      // Compare statuses based on their order in statusOrder
      return statusOrder[a.item_status] - statusOrder[b.item_status];
    });

    return sortedItems.map((item, index) => (
      <tr key={index}>
        <td><b>{index + 1}</b></td>
        <td>{`${item.item_name} - ${item.item_type}`}</td>
        <td>{item.item_status}</td>
        <td>{item.submitted_by}</td>
        <td>
          <img src={item.item_image1} alt={item.item_name} style={{ maxWidth: '150px', height: 'auto' }} />
        </td>
        <td>
          <div>
            <br />
            <Button className="schedule-add-button-sec" onClick={() => handleView(item.item_id)}>View Information</Button>
            <br />
            <Button className="schedule-add-button-sec" onClick={() => handleChangeStatus(item.item_id)}>Change Status</Button>
            <br />
            <Button className="schedule-add-button-sec" onClick={() => handleDelete(item.item_id)}>Delete Entry</Button>
            <br />
            <br />
          </div>
        </td>
      </tr>
    ));
    };



  function renderManagementConsoleCard() {
    return (
      <Card style={{ width: '100%' }} className="homepage-subcard">
        <br />
        <h1 align="center" className="repair_welcome justify-content-center align-items-center">Management Console.</h1>
        <Card.Text className="container_text">Welcome Administrator.</Card.Text>
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
          <path
            fill="url(#monitorGradient)"
            d="M8 1a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1zm1 13.5a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0m2 0a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0M9.5 1a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zM9 3.5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 0-1h-5a.5.5 0 0 0-.5.5M1.5 2A1.5 1.5 0 0 0 0 3.5v7A1.5 1.5 0 0 0 1.5 12H6v2h-.5a.5.5 0 0 0 0 1H7v-4H1.5a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5H7V2z" />
        </svg>
        <Card.Body>
                   <Link to="/Admin_Select">
                            <Button className="schedule-add-button">Return</Button>
                   </Link>
        </Card.Body>
      </Card>
    );
  }




  function renderScheduledRepairsCard() {
    return (
      <Card style={{ width: '100%' }} className="homepage-subcard">
        <Card.Body>
          <h1 align="center" className="repair_welcome justify-content-center align-items-center">Currently Scheduled Repairs</h1>
          <div className="table-responsive w-auto">
            <table className="table custom-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th className="item-name-column">Item Name & Type</th>
                  <th>Status</th>
                  <th>Submitted By</th>
                  <th>Image</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {renderItems()}
              </tbody>
            </table>
          </div>
        </Card.Body>
      </Card>
    );
  }


  return (
    <div>
      <RibbonHead />
      <Container fluid>
        <br />
        <br />
        <Row className="justify-content-center">
          <Col lg={2.5} md={12} style={{ marginBottom: '20px', paddingLeft: '10px' }}>
            {renderManagementConsoleCard()}
          </Col>
          
          <Col lg={2.5} md={12} style={{ marginBottom: '20px', paddingRight: '10px' }}>
            {renderScheduledRepairsCard()}
          </Col>
        </Row>
      </Container>
      <br />
      <br />
      <RibbonFoot />
    </div>
  );

};

export default Management_Console;
