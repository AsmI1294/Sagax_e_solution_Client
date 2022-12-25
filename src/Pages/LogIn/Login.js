import React, { useContext } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { BsGoogle, BsGithub } from "react-icons/bs";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { authContext } from "../../AuthProvider/AuthProvider";

const Login = () => {
  const { logIn, googleLogin, gitLogin } = useContext(authContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    logIn(email, password)
      .then((userCredential) => {
        // Signed in
        console.log("Logged In");
        form.reset();
        navigate(from, { replace: true });
        // ...
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  const handleGoogle = () => {
    googleLogin()
      .then((result) => {
        console.log("Successfully Logged In");
        console.log(result);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        // Handle Errors here.

        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  const handleGit = () => {
    gitLogin()
      .then((result) => {
        console.log("Successfully Logged In");
        console.log(result);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        // Handle Errors here.

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
      className="d-flex align-items-center"
    >
      <Container>
        <Row>
          <Col lg={4}>
            <Card className="bg-transparent w-100 shadow">
              <Card.Body>
                <Card.Title className="text-center fs-3">Log In</Card.Title>
                <Form onSubmit={handleSubmit}>
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
                      <Button
                        variant="outline-dark "
                        className="w-100"
                        onClick={handleGoogle}
                      >
                        <BsGoogle /> Log In with Google
                      </Button>
                    </Col>
                    <Col>
                      <Button
                        variant="outline-dark"
                        className="w-100"
                        onClick={handleGit}
                      >
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
