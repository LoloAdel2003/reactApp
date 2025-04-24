import React, { useState } from 'react';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";
import { useNavigate, Link } from "react-router-dom";
import { Container, Form, Button, Card, Row, Col } from 'react-bootstrap';
import "./App.css"
const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const navigate = useNavigate();

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        navigate("/");
        setEmail("");
        setPass("");
      })
      .catch((error) => {
        console.log(error);
        alert("You must register before logging in.");
        setEmail("");
        setPass("");
        navigate("/RegisterPage");
      });
  };

  return (
    <Container style={{ marginTop: '78px', height:'calc(100vh - 78px)' }}>
      <Row className="justify-content-center align-items-center h-100">
        <Col xs={12} sm={8} md={6} lg={5}>
          <Card className="shadow p-4">
            <h3 className="text-center mb-4">Log in to your account</h3>
            <Form onSubmit={signIn}>
              <Form.Group controlId="formBasicEmail" className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword" className="mb-4">
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
                  Sign In
                </Button>
              </div>
            </Form>

            <div className="text-center mt-3">
              <Link to="/ResetPassword" className="d-block mb-2 text-decoration-none fw-bold"  style={{ color: "#f6b31a"}}>
                Forgot your password?
              </Link>
              <span>Don't have an account? </span>
              <Link to="/RegisterPage" className="text-decoration-none fw-bold"  style={{ color: "#f6b31a" }}>
                Register here
              </Link>
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
