import React from "react";
import { useLoaderData } from "react-router-dom";
import { BsFillCartCheckFill } from "react-icons/bs";
import { FaGooglePay, FaCcMastercard, FaCcVisa } from "react-icons/fa";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

const CheckOut = () => {
  const data = useLoaderData();
  return (
    <div className="d-flex align-items-center justify-content-center vh-100">
      <Card className=" mb-3 shadow" style={{ maxWidth: "576px" }}>
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
