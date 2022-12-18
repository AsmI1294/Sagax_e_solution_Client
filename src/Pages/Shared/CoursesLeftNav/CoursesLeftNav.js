import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaNetworkWired } from "react-icons/fa";
import { MdWeb } from "react-icons/md";
import { FaLanguage } from "react-icons/fa";
import { RiAndroidFill } from "react-icons/ri";
import { IoLogoGameControllerB } from "react-icons/io";
import { FiShoppingBag } from "react-icons/fi";
import { SiAdobephotoshop } from "react-icons/si";
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
          <Nav
            className={
              "d-flex flex-column " +
              (window.screen.width <= 992 ? "" : "min-vh-100")
            }
          >
            {data.map((d) => (
              <Nav.Link
                as={Link}
                to={`/courses/${d.id}`}
                className="my-3 border-bottom"
              >
                {d.name === "Web Development" ? <MdWeb /> : ""}
                {d.name === "Language" ? <FaLanguage /> : ""}
                {d.name === "Networking" ? <FaNetworkWired /> : ""}
                {d.name === "Android App Development" ? <RiAndroidFill /> : ""}
                {d.name === "Game Development" ? <IoLogoGameControllerB /> : ""}
                {d.name === "Digital Marketing" ? <FiShoppingBag /> : ""}
                {d.name === "Graphics Design" ? <SiAdobephotoshop /> : ""}
                <span className="ms-1">{d.name}</span>
              </Nav.Link>
            ))}
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default CoursesLeftNav;
