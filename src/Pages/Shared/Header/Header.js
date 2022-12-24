import React, { useContext } from "react";
import { Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { authContext } from "../../../AuthProvider/AuthProvider";
import CoursesLeftNav from "../CoursesLeftNav/CoursesLeftNav";
import { CgProfile } from "react-icons/cg";

const Header = () => {
  const { user } = useContext(authContext);

  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container fluid>
          <Navbar.Brand as={Link} to="/" className="mx-3">
            Sagax-E-Solution
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/courses">
                Courses
              </Nav.Link>
              <Nav.Link as={Link} to="/">
                Blog
              </Nav.Link>
              <Nav.Link as={Link} to="/">
                FAQ
              </Nav.Link>
            </Nav>
            {user == undefined ? (
              <Nav>
                <Nav.Link as={Link} to="/login" className="border-end">
                  Log In
                </Nav.Link>
                <Nav.Link as={Link} to="/register">
                  Register
                </Nav.Link>
              </Nav>
            ) : (
              <Nav>
                <Nav.Link className="border-end">{user.email}</Nav.Link>
                <Nav.Link>
                  {user.photoURL ? (
                    <Image
                      src={user.photoURL}
                      style={{ height: "2rem" }}
                      roundedCircle
                      className="me-1"
                    ></Image>
                  ) : (
                    <CgProfile className="fs-5" />
                  )}
                </Nav.Link>
              </Nav>
            )}

            <Nav className="d-lg-none">
              <CoursesLeftNav></CoursesLeftNav>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
