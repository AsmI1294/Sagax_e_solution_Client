import React from "react";
import { Accordion } from "react-bootstrap";

const Faq = () => {
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
          <Accordion.Header>What are the features of React?</Accordion.Header>
          <Accordion.Body>
            <ul>
              <li>
                JSX: JSX is a syntax extension to JavaScript. It is used with
                React to describe what the user interface should look like. By
                using JSX, we can write HTML structures in the same file that
                contains JavaScript code.
              </li>
              <li>
                Components: Components are the building blocks of any React
                application, and a single app usually consists of multiple
                components. It splits the user interface into independent,
                reusable parts that can be processed separately.
              </li>
              <li>
                Virtual DOM: React keeps a lightweight representation of the
                real DOM in the memory, and that is known as the virtual DOM.
                When the state of an object changes, virtual DOM changes only
                that object in the real DOM, rather than updating all the
                objects.
              </li>
              <li>
                One-way data-binding: React’s one-way data binding keeps
                everything modular and fast. A unidirectional data flow means
                that when designing a React app, you often nest child components
                within parent components.
              </li>
              <li>
                High performance: React updates only those components that have
                changed, rather than updating all the components at once. This
                results in much faster web applications.
              </li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>What is JSX?</Accordion.Header>
          <Accordion.Body>
            JSX is a syntax extension of JavaScript. It is used with React to
            describe what the user interface should look like. By using JSX, we
            can write HTML structures in the same file that contains JavaScript
            code.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            Can web browsers read JSX directly?{" "}
          </Accordion.Header>
          <Accordion.Body>
            <ul>
              <li>
                Web browsers cannot read JSX directly. This is because they are
                built to only read regular JS objects and JSX is not a regular
                JavaScript object
              </li>
              <li>
                For a web browser to read a JSX file, the file needs to be
                transformed into a regular JavaScript object. For this, we use
                Babel
              </li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>What are the components in React?</Accordion.Header>
          <Accordion.Body>
            Components are the building blocks of any React application, and a
            single app usually consists of multiple components. A component is
            essentially a piece of the user interface. It splits the user
            interface into independent, reusable parts that can be processed
            separately.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>What is a state in React?</Accordion.Header>
          <Accordion.Body>
            <ul>
              <li>
                The state is a built-in React object that is used to contain
                data or information about the component. The state in a
                component can change over time, and whenever it changes, the
                component re-renders.
              </li>
              <li>
                The change in state can happen as a response to user action or
                system-generated events. It determines the behavior of the
                component and how it will render.
              </li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Faq;
