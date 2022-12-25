import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { BsFillCartCheckFill } from "react-icons/bs";
import { FaGooglePay, FaCcMastercard, FaCcVisa } from "react-icons/fa";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { authContext } from "../../AuthProvider/AuthProvider";

const CheckOut = () => {
  const data = useLoaderData();
  const { user, theme } = useContext(authContext);

  return (
    <div className="d-flex align-items-center justify-content-center vh-100">
      <Card
        className=" mb-3 shadow"
        style={{
          maxWidth: "576px",
          backgroundColor: theme == "dark" ? "#343a40" : undefined,
        }}
      >
        <Container>
          <Row>
            <Col
              sm={4}
              className=" d-flex align-items-center justify-content-center"
            >
              <BsFillCartCheckFill className="display-1 text-warning" />
            </Col>
            <Col sm={8}>
              <Card.Body>
                <Card.Title className="h-5">
                  Course Name: {data.title}
                </Card.Title>
                <Card.Text>
                  User Name:{" "}
                  {user.displayName == null ? (
                    <span>{user.reloadUserInfo.screenName}</span>
                  ) : (
                    <span>{user.displayName}</span>
                  )}
                </Card.Text>
                <Card.Text>How do you want to pay?</Card.Text>
                <div>
                  <Button className="me-2 fs-4" variant="outline-success">
                    <FaGooglePay />
                  </Button>
                  <Button className="mx-2 fs-4" variant="outline-success">
                    <FaCcMastercard />
                  </Button>
                  <Button className="mx-2 fs-4" variant="outline-success">
                    <FaCcVisa />
                  </Button>
                </div>
              </Card.Body>
            </Col>
          </Row>
        </Container>
      </Card>
    </div>
  );
};

export default CheckOut;
