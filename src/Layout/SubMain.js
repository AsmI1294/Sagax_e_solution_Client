import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";

import CoursesLeftNav from "../Pages/Shared/CoursesLeftNav/CoursesLeftNav";

const SubMain = () => {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col xs={2} className="px-0">
            <CoursesLeftNav></CoursesLeftNav>
          </Col>
          <Col xs={10}>
            <Outlet></Outlet>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SubMain;
