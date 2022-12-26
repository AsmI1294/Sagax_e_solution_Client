import React, { useContext } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { authContext } from "../../AuthProvider/AuthProvider";

const Register = () => {
  const { emailRegister } = useContext(authContext);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    emailRegister(email, password)
      .then((result) => {
        console.log(result);
        navigate("/", { replace: true });
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

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
      className="d-flex align-items-center text-dark"
    >
      <Container>
        <Row>
          <Col lg={{ span: "4" }}>
            <Card className="bg-transparent w-100 shadow">
              <Card.Body>
                <Card.Title className="text-center fs-3">Register</Card.Title>
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3" controlId="formName">
                    <Form.Label>User name</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      placeholder="Enter Name"
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="Enter email"
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      name="password"
                      placeholder="Password"
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formUrl">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control
                      type="text"
                      name="url"
                      placeholder=" Enter URL"
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check
                      type="checkbox"
                      label="Accept Terms and Conditions"
                      name="checkbox"
                      required
                    />
                  </Form.Group>

                  <Button variant="dark" type="submit" className="w-100">
                    Submit
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
          <Col
            lg={{ span: "8", order: "last" }}
            xs={{ order: "first" }}
            className="display-4 d-flex align-items-center justify-content-center "
          >
            <p>Welcome to the Sagax-E-Solution</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Register;
