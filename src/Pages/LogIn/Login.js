import React from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { BsGoogle, BsGithub } from "react-icons/bs";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div
      style={{
        backgroundImage: `url(
          "https://static.vecteezy.com/system/resources/previews/006/667/805/large_2x/black-laptop-computer-cup-of-black-coffee-red-book-and-smartphone-on-white-background-and-wallpaper-top-view-with-copy-space-flat-lay-3d-rendering-free-photo.jpg"
        )`,
        width: "100%",
        height: "100vh",
        backgroundSize: "cover",
      }}
      className="d-flex align-items-center"
    >
      <Container>
        <Row>
          <Col lg={4}>
            <Card className="bg-transparent w-100 shadow">
              <Card.Body>
                <Card.Title className="text-center fs-3">Log In</Card.Title>
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>
                  <div className="my-2">
                    <Link
                      style={{ textDecoration: "None" }}
                      className="text-dark"
                    >
                      Forgot password?
                    </Link>
                  </div>

                  <Button variant="dark" type="submit" className="w-100">
                    Submit
                  </Button>
                </Form>
                <Container className="my-2 px-0">
                  <Row className="gx-1">
                    <Col>
                      <Button variant="outline-dark " className="w-100">
                        <BsGoogle /> Log In with Google
                      </Button>
                    </Col>
                    <Col>
                      <Button variant="outline-dark" className="w-100">
                        <BsGithub /> Log In Github
                      </Button>
                    </Col>
                  </Row>
                </Container>
              </Card.Body>
            </Card>
          </Col>
          <Col
            lg={8}
            className="display-4 d-flex align-items-center justify-content-center "
          >
            <p className="d-none d-lg-block">Welcome to the Sagax-E-Solution</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
