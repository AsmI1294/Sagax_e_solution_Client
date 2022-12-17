import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { HiOutlineLightBulb } from "react-icons/hi";
import { GiRunningNinja } from "react-icons/gi";
import { FaDraftingCompass } from "react-icons/fa";
import { GrCertificate } from "react-icons/gr";

const Goal = () => {
  return (
    <div>
      <Container className="my-4 shadow rounded px-4 px-sm-0">
        <Row className="px-sm-2">
          <Col sm={12} lg={5} className="px-0">
            <Image
              src="https://images.unsplash.com/photo-1577100078279-b3445eae827c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              rounded
              style={{ objectFit: "cover", height: "100%" }}
              className="w-100"
            />
          </Col>
          <Col sm={12} lg={7} className="py-2">
            <p className="display-6 border-bottom pb-2">
              The Prodigious eLearning Courses for you
            </p>
            <p className="fs-5">
              Start your Coursera Plus subscription and get unlimited access to
              many courses. Invest in your professional goals with
              Sagax-E-Solution premium. Move between multiple courses. Learn the
              Latest Skills. Flexible Online Learning. Achieve Your Goals.
            </p>
            <div className="fs-5">
              <p>
                <HiOutlineLightBulb className="fs-4 me-2" /> Creative Study
                Pattern
              </p>
              <p>
                <GiRunningNinja className="fs-4 me-2" /> Quick Crash Courses
              </p>
              <p>
                <FaDraftingCompass className="fs-4 me-2" /> Provided with
                Experimental Examples
              </p>
              <p>
                <GrCertificate className="fs-4 me-2" /> Certification Awarded
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Goal;
