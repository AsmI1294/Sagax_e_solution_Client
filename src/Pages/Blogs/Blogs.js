import React from "react";
import { Accordion } from "react-bootstrap";
import "./Blogs.css";
const Blogs = () => {
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
      <Accordion className="w-75">
        <Accordion.Item eventKey="0">
          <Accordion.Header>What is cors?</Accordion.Header>
          <Accordion.Body>
            Cross-Origin Resource Sharing (CORS) is an HTTP-header based
            mechanism that allows a server to indicate any origins (domain,
            scheme, or port) other than its own from which a browser should
            permit loading resources.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            Why are you using firebase? What other options do you have to
            implement authentication?
          </Accordion.Header>
          <Accordion.Body>
            Firebase Authentication provides backend services, easy-to-use SDKs,
            and ready-made UI libraries to authenticate users to your app. It
            supports authentication using passwords, phone numbers, popular
            federated identity providers like Google, Facebook and Twitter, and
            more.
            <br /> Top Alternatives are Mongo DB, Octa, Amazon cognito, Auth0,
            Passport etc.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>How does the private route work?</Accordion.Header>
          <Accordion.Body>
            Private route observes user data on authentication changes. It wraps
            the protected component as children and imposes different
            conditions. When the conditions are fullfilled user can access that
            children.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>What is Node? How does Node work?</Accordion.Header>
          <Accordion.Body>
            Node.js is an open-source backend javascript runtime environment. It
            is used as backend service where javascript works on the server-side
            of the application. This way javascript is used on both frontend and
            backend. Node.js runs on chrome v8 engine which converts javascript
            code into machine code, it is highly scalable, lightweight, fast,
            and data-intensive.
            <br />
            Node.js accepts the request from the clients and sends the response,
            while working with the request node.js handles them with a single
            thread. To operate I/O operations or requests node.js use the
            concept of threads. Thread is a sequence of instructions that the
            server needs to perform. It runs parallel on the server to provide
            the information to multiple clients. Node.js is an event loop
            single-threaded language. It can handle concurrent requests with a
            single thread without blocking it for one request.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Blogs;
