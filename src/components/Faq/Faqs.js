import React, { Fragment } from "react";
import { Container } from "react-bootstrap";
import Faq from "react-faq-component";

const Faqs = () => {
  const data = {
    title: "Some Questions About React",
    rows: [
      {
        title: "What does React works ?",
        content: `While building client-side apps, a team of Facebook developers realized that the DOM is slow (The Document Object Model (DOM) is an application programming interface (API) for HTML and XML documents. It defines the logical structure of documents and the way a document is accessed and manipulated.). So, to make it faster, React implements a virtual DOM that is basically a DOM tree representation in JavaScript. So when it needs to read or write to the DOM, it will use the virtual representation of it. 
        Then the virtual DOM will try to find the most efficient way to update the browser’s DOM.
        Unlike browser DOM elements, React elements are plain objects and are cheap to create. React DOM takes care of updating the DOM to match the React elements. The reason for this is that JavaScript is very fast and it’s worth keeping a DOM tree in it to speed up its manipulation.
        Although React was conceived to be used in the browser, because of its design it can also be used in the server with Node.js. `,
      },
      {
        title: "Difference between props and state?",
        content: `React is an opensource JavaScript library that offers a visual overview of the JavaScript architecture for conventional MVC. React promises programmers a model in which substrates cannot directly influence enclosing components—data are downstream, data changes in HTML are efficiently modified, and the DOM is abstracted to boost performance using Virtual DOM. How can we access data from the previous component if the data is just being flowed from components to components? The answer is props. React uses data transmission props that we need to transfer to various components. The difference comes in which component the data are owned. State is owned locally and the component itself updates it. Props are owned and read-only by a parent. Props can be changed only if an upstream shift is caused by a callback function passed on to the child. A prop can be passed on to the child in the state of a parent. They apply to the same value but can only be updated by the parent variable.`,
      },
      {
        title: "How useState hook works?",
        content: `useState is a Hook that allows you to have state variables in functional components. You pass the initial state to this function and it returns a variable with the current state value (not necessarily the initial state) and another function to update this value.`,
      },
    ],
  };
  return (
    <Container>
      <Fragment>
        <Faq
          data={data}
          styles={{
            bgColor: "white",
            titleTextColor: "#48482a",
            rowTitleColor: "#78789a",
            rowTitleTextSize: "large",
            rowContentColor: "#48484a",
            rowContentTextSize: "16px",
            rowContentPaddingTop: "10px",
            rowContentPaddingBottom: "10px",
            rowContentPaddingLeft: "50px",
            rowContentPaddingRight: "150px",
            arrowColor: "red",
          }}
          config={{
            animate: true,
          }}
        />
      </Fragment>
    </Container>
  );
};

export default Faqs;
