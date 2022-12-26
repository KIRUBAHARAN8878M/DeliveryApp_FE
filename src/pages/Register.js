import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../actions/userAction";
import Loader from "../Components/Loader";
import Success from "../Components/Success";
import Error from "../Components/Error";
import '../CSS/login.css';

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const registerState = useSelector((state) => state.registerUserReducer);
  const { error, success, loading } = registerState;

  const dispatch = useDispatch();

  function handleSignup() {

    if (name === "" && email === "" && password === "" && confirmPassword === "") {
      alert("please fill the input field");
    } else if (password !== confirmPassword) {
      alert("password do not match")
    } else if (name === "") {
      alert("please fill the name")
    } else if (email === "") {
      alert("please fill the email")
    }
    else {
      const user = { name, email, password, confirmPassword };
      dispatch(registerUser(user));

    }
  }
  return (
    <>
      <Container>
        <Row >
          <Col md={3}>
         
          </Col>
          <Col
            xs={12} sm={12} md={6}
            className="d-flex align-items-center justify-content-center"
          >
            <Form className="signupform" style={{color:"black"}}>
              <h1>Create your account</h1>
              {loading && <Loader />}

              <Form.Group className="mb-3 " controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </Form.Group>

              <Button variant="danger" onClick={handleSignup}>
                {/* disabled={isLoading} */}
                Register
              </Button>
              {success && <Success success="User Registered Successfully" />}
              {error && <Error error="Something went wrong" />}
              <div className="py-4 text-center">
                <p>
                  Already have an account? <Link to="/login">Login</Link>
                </p>
              </div>
            </Form>
          </Col>
          <Col md={3}>
         

          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Register;
