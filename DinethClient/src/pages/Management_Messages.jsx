import React, { useEffect, useState } from "react";
import Axios from "axios";
import RibbonHead from './RibbonHead.jsx';
import RibbonFoot from './RibbonFoot.jsx';
import './Management_Console.css';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom'; 


const Management_Messages = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate(); 

  useEffect(() => {
    fetchUsers();

    // Set up interval for periodic refresh (every 5 minutes)
    const refreshInterval = setInterval(() => {
      fetchUsers();
    }, 300000/5); 

    // Clean up interval on component unmount
    return () => clearInterval(refreshInterval);
  }, []);

  useEffect(() => {
    if (!global.config.i18n.user.useremail) {
      navigate('/'); 
    }
    if (global.config.i18n.user.user_type !=="Admin") {
      navigate('/'); 
    }
  }, [navigate]);

  const fetchUsers = async () => {
    try {
      const response = await Axios.get('http://localhost:8080/api/users');
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };



  const handleDelete2 = async (useremail) => {
    console.log("Deleting all Messages from User " + useremail);
    try {
      const response2 = await Axios.get(`http://localhost:8080/api/messages/email/${useremail}`);
      alert("User Messages retrieved.");


      for (let i = 0; i < response2.data.length; i++) 
      {
        if (response2.data[i].message_id != 'Error Code') 
        {
        console.log("Deleting " + response2.data[i].message_id);

          try{
            await Axios.delete(`http://localhost:8080/api/messages/${response2.data[i].message_id}`);
          } catch (error)
          {
            console.log("Error Deleting "+response2.data[i].message_id);
          }

        }
      }


    } catch (error) {
      console.error('Error deleting Messages:', error);
    }
  };




  const handleDeleteAll = async (useremail) => {
    console.log("Deleting all Messages.");
    try {
      const response3 = await Axios.get(`http://localhost:8080/api/messages`);
      alert("User Messages retrieved.");


      for (let i = 0; i < response3.data.length; i++) 
      {
        if (response3.data[i].message_id != 'Error Code') 
        {
        console.log("Deleting " + response3.data[i].message_id);

          try{
            await Axios.delete(`http://localhost:8080/api/messages/${response3.data[i].message_id}`);
          } catch (error)
          {
            console.log("Error Deleting "+response3.data[i].message_id);
          }

        }
      }


    } catch (error) {
      console.error('Error deleting Messages:', error);
    }
  };




  const handleChangeStatus = async (userId) => {
    try {
      const newStatus = await showStatusSelection();
      if (newStatus !== null) {
        const selectedUser = users.find(user => user.user_id === userId);
        if (!selectedUser) {
          console.error(`User with ID ${userId} not found.`);
          return;
        }
        selectedUser.user_verified = newStatus;
        await Axios.put(`http://localhost:8080/api/users/${userId}`, selectedUser);
        fetchUsers(); // Fetch the updated list after modifying
        console.log(`Status changed successfully for user ${userId}`);
      } else {
        console.log('Status change canceled');
      }
    } catch (error) {
      console.error('Error changing status:', error);
    }
  };




  const showStatusSelection = () => {
    return new Promise((resolve, reject) => {
      const selectedStatus = window.prompt('Select status:\n1. True\n2. False');
      if (selectedStatus === '1') {
        resolve('True');
      } else if (selectedStatus === '2') {
        resolve('False');
      } else {
        resolve(null);
      }
    });
  };



  const renderUserTable = () => {
    return (
      <div className="table-responsive w-auto">
        <table className="table custom-table">
          <thead>
            <tr>
              <th>#</th>
              <th>User Role</th>
              <th>User Name</th>
              <th>Email</th>
              <th>Verified</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td><b>{index + 1}</b></td>
                <td>{user.user_type}</td>
                <td>{user.user_name}</td>
                <td>{user.useremail}</td>
                <td>{user.user_verified}</td>
                <td>
                  <div>
                    <Button className="schedule-add-button-sec" onClick={() => handleDelete2(user.useremail)}>Delete Messages</Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
         <Button className="schedule-add-button-sec" onclick={() => handleDeleteAll("test")} >Delete all Messages!</Button>
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
          <Col lg={2.5} md={12} style={{ marginBottom: '20px' }}>
            <Card style={{ width: '100%' }} className="homepage-subcard">
              <br/>
              <h1 align="center" className="repair_welcome justify-content-center align-items-center">Message Management Console.</h1>
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

                <path fill="url(#monitorGradient)" d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2zm3.708 6.208L1 11.105V5.383zM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2z"/>
                <path fill="url(#monitorGradient)" d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0m-1.993-1.679a.5.5 0 0 0-.686.172l-1.17 1.95-.547-.547a.5.5 0 0 0-.708.708l.774.773a.75.75 0 0 0 1.174-.144l1.335-2.226a.5.5 0 0 0-.172-.686"/>
              
              </svg>
              <Card.Body>
                   <Link to="/Admin_Select">
                            <Button className="schedule-add-button">Return</Button>
                   </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={2.5} md={12} style={{ marginBottom: '20px' }}>
            <Card style={{ width: '100%' }} className="homepage-subcard">
              <Card.Body>
                {renderUserTable()}
              </Card.Body>
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

export default Management_Messages;