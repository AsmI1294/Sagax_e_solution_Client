import React, { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import { authContext } from "../AuthProvider/AuthProvider";

import CoursesLeftNav from "../Pages/Shared/CoursesLeftNav/CoursesLeftNav";

const SubMain = () => {
  const { theme } = useContext(authContext);
  return (
    <div style={{ backgroundColor: theme == "dark" ? "#343a40" : undefined }}>
      <Container fluid>
        <Row>
          <Col lg={2} className="px-0 d-none d-lg-block">
            <CoursesLeftNav></CoursesLeftNav>
          </Col>
          <Col lg={10} xs={12}>
            <Outlet></Outlet>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SubMain;
