import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import axios from 'axios'; // Import Axios for making HTTP requests
import './Login.css'; // Import the provided CSS file

import RibbonHead from './RibbonHead.jsx';
import RibbonFoot from './RibbonFoot.jsx';

import { Link, useNavigate} from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.get(`http://localhost:8080/api/users/email/${email}`);
      
      if (response.status === 200) {
        const userData = response.data;
        
        if (userData.user_password === password) {
          // Login successful
          alert('Correct password!');

          console.log("The logged in user_no is "+global.config.i18n.user.user_id);
          global.config.i18n.user.user_id = userData.user_id;
          console.log("The logged in user no is "+global.config.i18n.user.user_id);

          console.log("The logged in useremail is "+global.config.i18n.user.useremail);
          global.config.i18n.user.useremail = userData.useremail;
          console.log("The logged in useremail is "+global.config.i18n.user.useremail);

          console.log("The logged in user_type is "+global.config.i18n.user.user_type);
          global.config.i18n.user.user_type = userData.user_type;
          console.log("The logged in user email is "+global.config.i18n.user.user_type);

          console.log("The logged in user_verification is "+global.config.i18n.user.user_verified);
          global.config.i18n.user.user_verified = userData.user_verified;
          console.log("The logged in user email is "+global.config.i18n.user.user_verified);


          navigate('/');



        } else {
          alert('Incorrect password!');
        }
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div className="login-page">

    <RibbonHead/>
          <br/>
          <br/>
          <br/>


      <Container>
        <h1 className="welcome">Welcome back!</h1>
        <br/>          
   

        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formEmail">
            <Form.Control
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>
          <br/>

          <Form.Group controlId="formPassword">
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Form.Group>

          
          <br/>
          <br/>
          <br/>

          <Button variant="primary" type="submit" className="login-accept-button">
           Log In!
          </Button>

          <br/>

          <Link to="/RegisterAcc">
            <Button className="schedule-add-button">Register</Button>
          </Link>

        </Form>


      </Container>

          
          <br/>
          <br/>
      <RibbonFoot/>
    </div>
  );
};

export default Login;
