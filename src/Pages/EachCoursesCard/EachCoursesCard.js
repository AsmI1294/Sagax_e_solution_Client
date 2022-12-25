import React, { useContext, useRef } from "react";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";
import { BsCurrencyEuro } from "react-icons/bs";
import {
  TiStarFullOutline,
  TiStarHalfOutline,
  TiStarOutline,
} from "react-icons/ti";
import ReactStars from "react-rating-stars-component";
import { authContext } from "../../AuthProvider/AuthProvider";
import { useReactToPrint } from "react-to-print";
import { toast } from "react-toastify";

const EachCoursesCard = () => {
  const data = useLoaderData();
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
  //print to pdf
  const compoRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => compoRef.current,
    documentTitle: data.title,
    onAfterPrint: () => toast("Printed"),
  });

  return (
    <div className="my-3" ref={compoRef}>
      <Card
        style={{
          cursor: "pointer",
          backgroundColor: theme == "dark" ? "#343a40" : undefined,
        }}
      >
        <Container>
          <Row>
            <Col xs={12} className="px-0">
              <Row className="gy-4">
                <Col
                  lg={4}
                  className="d-flex flex-column justify-content-center "
                >
                  <div className="d-flex flex-column align-items-center fs-4">
                    <Image
                      src={data.instructor.img}
                      style={{ width: "7rem" }}
                      roundedCircle
                      className="me-1"
                    ></Image>
                    <Card.Text className="d-flex flex-column align-items-center">
                      <small className="text-muted">
                        {data.instructor.name}
                      </small>
                      <small className="text-muted d-block">
                        {data.instructor.published_date}
                      </small>
                    </Card.Text>
                  </div>
                  <Card.Text className="mb-0 d-flex justify-content-center fs-5">
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
                  <div className="d-flex align-items-center justify-content-center ">
                    <small className="fs-5 text-warning fw-bold me-1 pt-1">
                      {data.rating.number}
                    </small>
                    <ReactStars {...stars} />
                  </div>
                  <Button
                    className="w-50 mx-auto mt-3"
                    variant="outline-secondary"
                    onClick={handlePrint}
                  >
                    Print to pdf
                  </Button>
                </Col>
                <Col lg={8}>
                  <Card.Img
                    variant="top"
                    src={data.image_url}
                    style={{ objectFit: "fill", width: "100%" }}
                  />
                </Col>
              </Row>
            </Col>
            <Col xs={12}>
              <Card.Body>
                <div className="d-flex justify-content-between">
                  <Card.Title>{data.title} </Card.Title>
                  <Card.Title className="d-flex align-items-center">
                    <span>{data.price}</span>
                    <BsCurrencyEuro />
                  </Card.Title>
                </div>
                <Card.Text>{data.details}</Card.Text>
              </Card.Body>
            </Col>
          </Row>
          <Button
            variant="dark"
            as={Link}
            to={`/courses/eachCourses/checkOut/${data._id}`}
            className="w-100 mb-2"
          >
            Get premium access
          </Button>
        </Container>
      </Card>
    </div>
  );
};

export default EachCoursesCard;
