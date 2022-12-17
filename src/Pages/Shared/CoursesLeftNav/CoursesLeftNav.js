import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const CoursesLeftNav = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://sagax-e-solution.vercel.app/categories")
      .then((response) => response.json())
      .then((result) => setData(result));
  }, []);

  return (
    <div>
      <Navbar expand="lg" bg="dark" variant="dark">
        <Container>
          <Nav className="d-flex flex-column vh-100">
            {data.map((d) => (
              <Nav.Link href="#features" className="my-3 border-bottom">
                {d.name}
              </Nav.Link>
            ))}
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default CoursesLeftNav;
