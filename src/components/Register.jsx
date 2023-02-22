import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";


const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [register, setRegister] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
		const configuration = {
			method: "post",
      url: "https://pokemon-dashboard-server.herokuapp.com/register",
      data: {
				email,
        password,
      },
    };
		axios(configuration)
    .then((result) => {
      setRegister(true)
      console.log(result);})
    .catch((error) => {console.log(error);})

		alert('Submitted')

  };

  const handleEmailChange = (event) => setEmail(event.target.value);
  const handlePasswordChange = (event) => setPassword(event.target.value);


  return (
    <>
      <h2>Register</h2>
      <Form>
        {/* email */}
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={handleEmailChange}
          />
        </Form.Group>

        {/* password */}
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
          />
        </Form.Group>

        {/* submit button */}
        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Register
        </Button>
           {/* display success message */}
           {register ? (
          <p className="text-success">You Are Registered Successfully</p>
        ) : (
          <p className="text-danger">You Are Not Registered</p>
        )}
      </Form>
    </>
  );
};

export default Register;
