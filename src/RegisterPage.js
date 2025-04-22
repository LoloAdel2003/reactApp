import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";
import { useNavigate, Link } from "react-router-dom";
import { Container, Form, Button, Card, Row, Col } from 'react-bootstrap';

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const navigate = useNavigate();

  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        navigate("/LoginPage");
        setEmail("");
        setPass("");
      })
      .catch((error) => {
        console.log(error);
        alert("Registration failed. Please try again.");
      });
  };

  return (
    <Container style={{ marginTop: '78px', height: 'calc(100vh - 87px)' }}>
      <Row className="justify-content-center align-items-center h-100">
        <Col xs={12} sm={8} md={6} lg={5}>
          <Card className="shadow p-4">
            <h3 className="text-center mb-4">Create an Account</h3>
            <Form onSubmit={signUp}>
              <Form.Group controlId="formRegisterEmail" className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formRegisterPassword" className="mb-4">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPass(e.target.value)}
                  required
                />
              </Form.Group>

              <div className="d-grid mb-3">
                <Button
                  type="submit"
                  style={{ backgroundColor: "#120d09", borderColor: "#120d09" }}
                >
                  Sign Up
                </Button>
              </div>
            </Form>

            <div className="text-center mt-3">
              <span>Already have an account? </span>
              <Link to="/LoginPage" className="text-decoration-none fw-bold"  style={{ color: "#f6b31a" }}>
                Log in here
              </Link>
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default RegisterPage;
