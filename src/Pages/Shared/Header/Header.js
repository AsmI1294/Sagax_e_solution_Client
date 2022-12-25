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
  const { user, logOut, setTheme } = useContext(authContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        console.log("SuccessFully Logged out");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  const handleTheme = (e) => {
    if (e.target.checked == true) {
      document.getElementById("label").innerHTML = "Dark";
      setTheme("dark");
    } else {
      document.getElementById("label").innerHTML = "White";
      setTheme("white");
    }
  };

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
            <Nav>
              <div class="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                  onClick={handleTheme}
                />
                <label
                  class="form-check-label me-2 text-light "
                  for="flexSwitchCheckDefault"
                  id="label"
                >
                  White
                </label>
              </div>
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
                <Nav.Link className="border-end">
                  {user.displayName == null ? (
                    <span className="me-1">
                      {user.reloadUserInfo.screenName}
                    </span>
                  ) : (
                    <span className="me-1">{user.displayName}</span>
                  )}

                  {user.photoURL ? (
                    <Image
                      src={user.photoURL}
                      style={{ height: "1.7rem" }}
                      roundedCircle
                      className="me-1"
                    ></Image>
                  ) : (
                    <CgProfile className="fs-5" />
                  )}
                </Nav.Link>
                <Nav.Link onClick={handleLogOut}>Logout</Nav.Link>
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
