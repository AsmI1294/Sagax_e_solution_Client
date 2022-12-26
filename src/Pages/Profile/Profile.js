import React, { useContext, useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Image,
  Row,
} from "react-bootstrap";
import { authContext } from "../../AuthProvider/AuthProvider";
import { CgProfile } from "react-icons/cg";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";

const Profile = () => {
  const { user, theme, updateDetails } = useContext(authContext);
  const [show, setShow] = useState(false);

  const handleSubmit = (e) => {
    const form = e.target;
    const name = form.name.value;
    const url = form.url.value;
    updateDetails(name, url)
      .then(() => {
        toast("Successfully updated");
      })
      .catch((error) => {
        toast(error.message);
      });

    setShow(false);
  };
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div
      style={{
        backgroundImage: `url(
      "https://static.vecteezy.com/system/resources/previews/006/667/805/large_2x/black-laptop-computer-cup-of-black-coffee-red-book-and-smartphone-on-white-background-and-wallpaper-top-view-with-copy-space-flat-lay-3d-rendering-free-photo.jpg"
    )`,
        width: "100%",
        height: "100vh",
        backgroundSize: "cover",
      }}
      className="d-flex justify-content-center align-items-center"
    >
      <Card
        style={{ width: "80%" }}
        className={theme == "dark" ? "bg-dark" : undefined}
      >
        <Container>
          <Row>
            <Col
              xs={12}
              lg={4}
              className="p-0 d-flex justify-content-center align-items-center"
              style={{
                backgroundImage: `url(
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ6mNnu4ODEe8oD8-Nw4ecgK744TDdtb53_QmxFswXgs0hdAh5sYj4wr4dWcbDobYsGRs&usqp=CAU"
    )`,

                backgroundSize: "cover",
              }}
            >
              {user.photoURL ? (
                <Image
                  src={user.photoURL}
                  style={{ height: "10rem" }}
                  roundedCircle
                  className="my-4"
                ></Image>
              ) : (
                <CgProfile className="display-2" />
              )}
            </Col>
            <Col xs={12} lg={8}>
              <Card.Body>
                <Card.Title className="display-6">User Profile</Card.Title>
                <div className="d-flex align-items-center mb-3">
                  <div className="me-2 h5 mb-0">Name:</div>
                  <Card.Text className="fs-5">
                    {user.displayName == null ? (
                      <span>{user.reloadUserInfo.screenName}</span>
                    ) : (
                      <span>{user.displayName}</span>
                    )}
                  </Card.Text>
                </div>
                <div className="d-flex align-items-center mb-3">
                  <div className="me-2 h5 mb-0">Email:</div>
                  <Card.Text className="fs-5">
                    {user.email == null ? (
                      <span>Email view restricted by github</span>
                    ) : (
                      <span>{user.email}</span>
                    )}
                  </Card.Text>
                </div>
                <div className="d-flex align-items-center mb-3">
                  <div className="me-2 h5 mb-0">Email varified?</div>
                  <Card.Text className="fs-5">
                    {user.emailVerified == false ? (
                      <span>Not Varified</span>
                    ) : (
                      <span>Varified</span>
                    )}
                  </Card.Text>
                </div>
                <Button
                  variant={theme == "dark" ? "secondary" : "dark"}
                  onClick={handleShow}
                >
                  Update profile
                </Button>
              </Card.Body>
            </Col>
          </Row>
        </Container>
      </Card>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit}>
          <Modal.Body>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" name="name" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Photo url</Form.Label>
              <Form.Control type="text" name="url" placeholder="Password" />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  );
};

export default Profile;
