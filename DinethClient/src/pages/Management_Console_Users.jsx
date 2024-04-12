import React, { useEffect, useState } from "react";
import Axios from "axios";
import RibbonHead from './RibbonHead.jsx';
import RibbonFoot from './RibbonFoot.jsx';
import './Management_Console.css';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom'; 

const Management_Console_Users = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate(); 

  useEffect(() => {
    fetchUsers();
  }, []);

  useEffect(() => {
    if (!global.config.i18n.user.useremail) {
      navigate('/'); 
    }
    if (global.config.i18n.user.user_type !=="Admin") {
      navigate('/'); 
    }
  }, [navigate]);

  useEffect(() => {
    const intervalId = setInterval(fetchUsers, 1 * 60 * 1000); // Fetch users every 5 minutes

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await Axios.get('http://localhost:8080/api/users');
      const filteredUsers = response.data.filter(user => user.user_type === "User");
      setUsers(filteredUsers);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  

  const renderUserTable = () => {
    return (
      <div className="table-responsive w-auto">
        <table className="table custom-table">
          <thead>
            <tr>
              <th>#</th>
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
                <td>{user.user_name}</td>
                <td>{user.useremail}</td>
                <td>{user.user_verified}</td>
                <td>
                  <div>
                    <Button className="schedule-add-button-sec" onClick={() => handleChangeStatus(user.user_id)}>Verify</Button>
                    <br />
                    <Button className="schedule-add-button-sec" onClick={() => handleDelete(user.user_id)}>Delete</Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  const handleDelete = async (userId) => {
    console.log("Deleting User " + userId);
    try {
      await Axios.delete(`http://localhost:8080/api/users/${userId}`);
      fetchUsers(); // Fetch the updated list after deleting
      alert("User scheduled for deletion.");
    } catch (error) {
      console.error('Error deleting user:', error);
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
              <h1 align="center" className="repair_welcome justify-content-center align-items-center">User Management Console.</h1>
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

export default Management_Console_Users;