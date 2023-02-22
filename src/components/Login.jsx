import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import Cookies from "universal-cookie";

const cookies = new Cookies();

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const configuration = {
      method: "post",
      url: "https://learn-auth-mongodb.herokuapp.com/login",
      data: {
        email,
        password,
      },
    };
    axios(configuration)
      .then((result) => {
        setLogin(true);
        console.log(result);

        // redirect user to the auth page
        window.location.href = "/auth";

        // set the cookies
        cookies.set("TOKEN", result.data.token, {
          path: "/",
        });
      })
      .catch((error) => {
        console.log(error.message);
      });

    alert("Submitted");
  };

  const handleEmailChange = (event) => setEmail(event.target.value);
  const handlePasswordChange = (event) => setPassword(event.target.value);

  return (
    <>
      <h2>Login</h2>
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
          Login
        </Button>
        {/* display success message */}
        {login ? (
          <p className="text-success">You Are Login Successfully</p>
        ) : (
          <p className="text-danger">Nope</p>
        )}
      </Form>
    </>
  );
};

export default Login;
