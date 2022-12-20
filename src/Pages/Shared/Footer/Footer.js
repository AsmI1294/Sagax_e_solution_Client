import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BsTelephoneInbound } from "react-icons/bs";
import { SlEnvolopeLetter } from "react-icons/sl";
import { FiFacebook } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { BsInstagram } from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <Container className="border-top ">
        <Row>
          <Col xs={12} md={6}>
            <p className="fs-5 mb-2">Contact us</p>
            <div className="d-flex align-items-center mb-2 ">
              <HiOutlineLocationMarker />
              <p className="mb-0 ms-2 fw-bold fs-6">Address:</p>
              <p className="mb-0 ms-2">Frankfurter Strasse 3</p>
            </div>
            <div className="d-flex align-items-center mb-2">
              <BsTelephoneInbound />
              <p className="mb-0 ms-2 fw-bold fs-6">Phone:</p>
              <p className="mb-0 ms-2">+4901700000000</p>
            </div>
            <div className="d-flex align-items-center mb-2">
              <SlEnvolopeLetter />
              <p className="mb-0 ms-2 fw-bold fs-6">Email:</p>
              <p className="mb-0 ms-2">ittehad.akash@gmail.com</p>
            </div>
          </Col>
          <Col
            xs={12}
            md={6}
            className="mb-4 d-flex justify-content-center align-items-center"
          >
            <div>
              <p className="fs-5 mb-2">Follow us on</p>
              <Button
                variant="outline-secondary"
                className="rounded-circle p-1 me-2"
              >
                <FiFacebook className="fs-4" />
              </Button>
              <Button
                variant="outline-secondary"
                className="rounded-circle p-1 me-2"
              >
                <FiTwitter className="fs-4" />
              </Button>
              <Button
                variant="outline-secondary"
                className="rounded-circle p-1 me-2"
              >
                <BsInstagram className="fs-4" />
              </Button>
              <Button
                variant="outline-secondary"
                className="rounded-circle p-1 me-2"
              >
                <FiLinkedin className="fs-4" />
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="border-top mb-4">
        <Row className="mt-4">
          <Col className="mt-1 text-center" xs={12} md={6}>
            Copyright © 2022 Asm Themes. All Rights Reserved
          </Col>
          <Col className="d-flex justify-content-center" xs={12} md={6}>
            <Link className="border-end ">
              <Button variant="outline-dark border-0">
                Terms And Conditions
              </Button>
            </Link>
            <Link className="border-end ">
              <Button variant="outline-dark border-0">Privacy Policy</Button>
            </Link>
            <Link>
              <Button variant="outline-dark border-0">Refund Policy</Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
