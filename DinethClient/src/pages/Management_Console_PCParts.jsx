import React, { useEffect, useState } from "react";
import Axios from "axios";
import RibbonHead from './RibbonHead.jsx';
import RibbonFoot from './RibbonFoot.jsx';
import './Management_Console.css';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom'; 

const Management_Console_PCParts = () => {
  const [pcParts, setPcParts] = useState([]);
  const navigate = useNavigate(); 

  useEffect(() => {
    fetchPCParts();
  }, []);

  useEffect(() => {
    if (!global.config.i18n.user.useremail) {
      navigate('/'); 
    }
    if (global.config.i18n.user.user_type !== "Admin") {
      navigate('/'); 
    }
  }, [navigate]);

  useEffect(() => {
    const intervalId = setInterval(fetchPCParts, 1 * 60 * 1000); // Fetch PC parts every 1 minute

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, []);

  const fetchPCParts = async () => {
    try {
      const response = await Axios.get('http://localhost:8080/api/new_pc_item');
      setPcParts(response.data); 
    } catch (error) {
      console.error('Error fetching PC parts:', error);
    }
  };

  const renderPCTable = () => {
    return (
      <div className="table-responsive w-auto">
        <table className="table custom-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Part Name</th>
              <th>Price</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {pcParts.map((part, index) => (
              <tr key={index}>
                <td><b>{index + 1}</b></td>
                <td>{part.newPcPartName}</td>
                <td>{part.newPcPartPrice}</td>
                <td>{part.newPcPartStatus}</td>
                <td>
                  <Button className="schedule-add-button-sec" onClick={() => handleChangeStatus(part.newPcPartId)}>
                    Toggle Status
                  </Button>
                  <br/>
                  {' '}
                  <Button className="schedule-add-button-sec" onClick={() => handleChangePrice(part.newPcPartId)}>
                    Change Price
                  </Button>
                </td>                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  const handleChangeStatus = async (partId) => {
    try {
      const selectedPart = pcParts.find(part => part.newPcPartId === partId);
      if (!selectedPart) {
        console.error(`Part with ID ${partId} not found.`);
        return;
      }
      const newStatus = selectedPart.newPcPartStatus === 'Available' ? 'Out of Stock' : 'Available';
      await Axios.put(`http://localhost:8080/api/new_pc_item/${partId}`, { ...selectedPart, newPcPartStatus: newStatus });
      fetchPCParts(); // Fetch the updated list after modifying
      console.log(`Status changed successfully for part ${partId}`);
    } catch (error) {
      console.error('Error changing status:', error);
    }
  };



const handleChangePrice = async (partId) => {
  const newPrice = window.prompt("Enter the new price:");

  if (newPrice !== null && !isNaN(newPrice) && Number(newPrice) >= 0) {
    try {
      const selectedPart = pcParts.find(part => part.newPcPartId === partId);
      if (!selectedPart) {
        console.error(`Part with ID ${partId} not found.`);
        return;
      }

      await Axios.put(`http://localhost:8080/api/new_pc_item/${partId}`, {
        ...selectedPart,
        newPcPartPrice: newPrice
      });

      setPcParts(currentParts =>
        currentParts.map(part =>
          part.newPcPartId === partId ? { ...part, newPcPartPrice: newPrice } : part
        )
      );

      console.log(`Price changed successfully for part ${partId}`);
    } catch (error) {
      console.error('Error changing price:', error);
    }
  } else {
    console.log('Invalid price or operation cancelled.');
  }
};




const [newPartName, setNewPartName] = useState('');
const [newPartPrice, setNewPartPrice] = useState('');
const [newPartStatus, setNewPartStatus] = useState('Available');
  const [newPartType, setNewPartType] = useState('');

const handleAddNewPart = async (e) => {
  e.preventDefault(); 

  try {
    await Axios.post('http://localhost:8080/api/new_pc_item', {
      newPcPartName: newPartName,
      newPcPartPrice: newPartPrice,
      newPcPartStatus: newPartStatus,
      newPcPartType: newPartType 
    });
    alert('New part added successfully!');
    fetchPCParts(); 
    setNewPartName('');
    setNewPartPrice('');
    setNewPartStatus('Available');
    setNewPartType(''); 
  } catch (error) {
    console.error('Error adding new part:', error);
    alert('Failed to add new part.');
  }
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
              <h1 align="center" className="repair_welcome justify-content-center align-items-center">Manage PC Parts.</h1>
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
                  <path fill="url(#monitorGradient)" d="M8 1a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1zm1 13.5a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0m2 0a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0M9.5 1a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zM9 3.5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 0-1h-5a.5.5 0 0 0-.5.5M1.5 2A1.5 1.5 0 0 0 0 3.5v7A1.5 1.5 0 0 0 1.5 12H6v2h-.5a.5.5 0 0 0 0 1H7v-4H1.5a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5H7V2z"/>
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
               {renderPCTable()}
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Col lg={2.5} md={12} style={{ marginBottom: '20px' }}>
            <Card style={{ width: '100%' }} className="homepage-subcard">
              <br/>
              <h1 align="center" className="repair_welcome justify-content-center align-items-center">Insert New PC Part.</h1>


              <Card.Body>
               

                <form onSubmit={handleAddNewPart} className="text-center">
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Part Name" value={newPartName} onChange={(e) => setNewPartName(e.target.value)} required />
                  </div>
                  <div className="form-group">
                    <input type="number" className="form-control" placeholder="Price" value={newPartPrice} onChange={(e) => setNewPartPrice(e.target.value)} required />
                  </div>
                  <div className="form-group">
                    <select className="form-control" value={newPartType} onChange={(e) => setNewPartType(e.target.value)} required>
                      <option value="">Select Part Type</option>

                      <option value="Mouse">Case</option>

                      <option value="Mouse">Mouse</option>
                      <option value="Speaker">Speaker</option>
                      <option value="Keyboard">Keyboard</option>
                      <option value="Monitor">Monitor</option>
                      <option value="CPU">CPU</option>
                      <option value="GPU">GPU</option>
                      <option value="Motherboard">Motherboard</option>
                      <option value="RAM">RAM</option>
                      <option value="PSU">PSU</option>

                      <option value="Storage">Storage</option>
                      <option value="NIC">NIC</option>
                      <option value="Input">Input</option>
                      <option value="Webcam">Webcam</option>


                    </select>
                  </div>
                  <div className="form-group">
                    <select className="form-control" value={newPartStatus} onChange={(e) => setNewPartStatus(e.target.value)} required>
                      <option value="Available">Available</option>
                      <option value="Out of Stock">Out of Stock</option>
                    </select>
                  </div>
                  <button type="submit" className="login-accept-button">Add New Part</button>
                </form>


              </Card.Body>
            </Card>
          </Col>


      </Container>
      <br />
      <br />

      <RibbonFoot />
    </div>
  );
};

export default Management_Console_PCParts;