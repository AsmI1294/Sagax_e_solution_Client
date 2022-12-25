import React, { useContext, useState } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { BsCurrencyEuro } from "react-icons/bs";
import {
  TiStarFullOutline,
  TiStarHalfOutline,
  TiStarOutline,
} from "react-icons/ti";
import ReactStars from "react-rating-stars-component";
import { useNavigate } from "react-router-dom";
import { authContext } from "../../AuthProvider/AuthProvider";

const Courses = ({ data }) => {
  const navigate = useNavigate();
  const [isHover, setHover] = useState(false);
  const { theme } = useContext(authContext);
  const stars = {
    size: 24,
    value: parseFloat(data.rating.number),
    edit: false,
    isHalf: true,
    filledIcon: <TiStarFullOutline />,
    halfIcon: <TiStarHalfOutline />,
    emptyIcon: <TiStarOutline />,
  };
  function mouseEnter() {
    setHover(true);
  }
  function mouseLeave() {
    setHover(false);
  }
  function mouseClick() {
    navigate(`/courses/eachCourses/${data._id}`);
  }

  const handleHover = {
    transform: isHover ? "scale(1.01)" : "",
    boxShadow: isHover
      ? "0 13px 40px -5px hsla(240, 30.1%, 28%, 0.12), 0 8px 32px -8px hsla(0, 0%, 0%, 0.14), 0 -6px 32px -6px hsla(0, 0%, 0%, 0.02)"
      : "",
  };
  return (
    <div
      className="my-3"
      style={handleHover}
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
      onClick={mouseClick}
    >
      <Card
        style={{
          cursor: "pointer",
          backgroundColor: theme == "dark" ? "#343a40" : undefined,
        }}
      >
        <Container>
          <Row>
            <Col xs={12} lg={3} className="px-0">
              <Card.Img
                variant="top"
                src={data.image_url}
                style={{
                  objectFit: "fill",
                  height: window.screen.width >= 992 ? "100%" : "",
                }}
              />
            </Col>
            <Col xs={12} lg={9}>
              <Card.Body>
                <div className="d-flex justify-content-between">
                  <Card.Title>{data.title} </Card.Title>
                  <Card.Title className="d-flex align-items-center">
                    <span>{data.price}</span>
                    <BsCurrencyEuro />
                  </Card.Title>
                </div>
                <Card.Text>{data.details.slice(0, 250) + " ..."}</Card.Text>
                <div className="d-flex align-items-center">
                  <Image
                    src={data.instructor.img}
                    style={{ height: "2rem" }}
                    roundedCircle
                    className="me-1"
                  ></Image>
                  <Card.Text>
                    <small className="text-muted">{data.instructor.name}</small>
                    <small className="text-muted d-block">
                      {data.instructor.published_date}
                    </small>
                  </Card.Text>
                </div>
                <Card.Text className="mb-0">
                  <small className="text-muted border-end pe-1">
                    {data.hours} hours
                  </small>
                  <small className="text-muted border-end px-1">
                    {data.rating.badge}
                  </small>
                  <small className="text-muted ps-1">
                    {data.Enrolled} students
                  </small>
                </Card.Text>
                <div className="d-flex align-items-center">
                  <small className="fs-5 text-warning fw-bold me-1 pt-1">
                    {data.rating.number}
                  </small>
                  <ReactStars {...stars} />
                </div>
              </Card.Body>
            </Col>
          </Row>
        </Container>
      </Card>
    </div>
  );
};

export default Courses;
