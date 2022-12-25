import React, { useContext } from "react";
import Carousel from "react-bootstrap/Carousel";
import photo1 from "../../Assets/photo1.jpg";
import photo2 from "../../Assets/photo2.jpg";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { authContext } from "../../AuthProvider/AuthProvider";

const Slider = () => {
  const { user } = useContext(authContext);
  const navigate = useNavigate();

  const handlegetStarted = () => {
    if (user != undefined) {
      toast("Already Joined");
    } else {
      navigate("/register", { replace: true });
    }
  };
  return (
    <div>
      <Carousel fade controls={false} indicators={false}>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100 "
            style={{ height: "75vh", objectFit: "cover" }}
            src={photo1}
            alt="First slide"
          />
          <Carousel.Caption>
            <ButtonGroup
              aria-label="Basic example"
              className=" d-none d-sm-block mb-3"
            >
              <Button variant="light" className="fs-4">
                Courses we are offering currently <AiOutlineArrowRight />
              </Button>
              <Button
                variant="outline-light"
                className="fs-4"
                onClick={() => {
                  navigate("/courses", { replace: true });
                }}
              >
                Explore courses
              </Button>
            </ButtonGroup>
            <p className="display-6">
              “The more that you read, the more things you will know. The more
              that you learn, the more places you’ll go.”
            </p>
            <p>― Dr. Seuss</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src={photo2}
            style={{ height: "75vh", objectFit: "cover" }}
            alt="Second slide"
          />
          <Carousel.Caption className="text-dark">
            <ButtonGroup
              aria-label="Basic example"
              className=" d-none d-sm-block mb-3"
            >
              <Button variant="light" className="fs-4">
                Want to join? <AiOutlineArrowRight />
              </Button>
              <Button
                variant="outline-light"
                className="fs-4"
                onClick={handlegetStarted}
              >
                Get started
              </Button>
            </ButtonGroup>
            <p className="display-6">
              “For the things we have to learn before we can do them, we learn
              by doing them.”
            </p>
            <p>― Aristotle</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <ToastContainer />
    </div>
  );
};

export default Slider;
