import React, { useEffect, useState } from "react";
import Axios from "axios";
import RibbonHead from './RibbonHead.jsx';
import RibbonFoot from './RibbonFoot.jsx';
import './Management_Console.css';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Manage_Orders = () => {
  const [pcParts, setPcParts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchPCParts();
  }, []);

  const fetchPCParts = async () => {
    try {
      const response = await Axios.get('http://localhost:8080/api/pc_orders');
      setPcParts(response.data);
    } catch (error) {
      console.error('Error fetching PC Orders:', error);
    }
  };

  
  const showStatusSelection = () => {
    return new Promise((resolve, reject) => {
      const selectedStatus = window.prompt('Select status:\n1. Accepted Order\n2. Order Progressing\n3. Order Completed');
      
      if (selectedStatus === '1' || selectedStatus.toLowerCase() === 'accepted order') {
        resolve('Accepted Order');
      } else if (selectedStatus === '2' || selectedStatus.toLowerCase() === 'order progressing') {
        resolve('Order Progressing');
      } else if (selectedStatus === '3' || selectedStatus.toLowerCase() === 'order completed') {
        resolve('Order Completed');
      } else {
        resolve(null); // Cancelled or invalid input
      }
    });
  };


  const handleChangeStatus = async (orderId) => {
    try {
      const newStatus = await showStatusSelection(); 
      
      if (newStatus) {
        const selectedOrder = pcParts.find(order => order.order_id === orderId);
        
        if (!selectedOrder) {
          console.error(`Order with ID ${orderId} not found.`);
          return;
        }
        
        selectedOrder.order_status = newStatus;
        
        await Axios.put(`http://localhost:8080/api/pc_orders/${orderId}`, selectedOrder);
        
        console.log(`Status changed successfully for order ${orderId}`);
        
        fetchPCParts(); // Fetch the updated list after modifying
      } else {
        console.log('Status change canceled');
      }
    } catch (error) {
      console.error('Error changing status:', error);
    }
  };

  const renderPCTable = () => {
    return (
      <div className="table-responsive w-auto">
        <table className="table custom-table">
          <thead>
            <tr>
              <th>Order #</th>
              <th>User</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {pcParts.map((order, index) => (
              <tr key={index}>
                <td><b>{order.order_id}</b></td>
                <td>{order.order_user}</td>
                <td>{order.order_status}</td>
                <td>
                    <Button className="schedule-add-button-sec" onClick={() => handleChangeStatus(order.order_id)}>
                      Change Status
                    </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div>
      <RibbonHead />
      <Container fluid>
        <br />
        <br />
        <Row className="justify-content-center">
          <Col lg={4} md={12} style={{ marginBottom: '20px' }}>
            <Card style={{ width: '100%' }} className="homepage-subcard">
              <Card.Body>
                <h1 align="center" className="repair_welcome justify-content-center align-items-center">Manage PC Orders.</h1>
                <Link to="/Admin_Select">
                  <Button className="schedule-add-button">Return</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={8} md={12} style={{ marginBottom: '20px' }}>
            <Card style={{ width: '100%' }} className="homepage-subcard">
              <Card.Body>
                {renderPCTable()}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <br />
      <br />

      <br />
      <br />

      <br />
      <br />
      <RibbonFoot />
    </div>
  );
};

export default Manage_Orders;
