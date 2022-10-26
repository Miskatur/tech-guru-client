import React from 'react';
import { Accordion, Container } from 'react-bootstrap';

const FAQ = () => {
    return (
        <Container>
            <div className='m-5'>
                <h2 className='text-center my-5'>There are some FAQ by our clients.</h2>
                <div>
                    <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>
                                <h3>
                                    What is the purpose of react router?
                                </h3>
                            </Accordion.Header>
                            <Accordion.Body>
                                <p>
                                    React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.
                                </p>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>
                                <h3>
                                    How does Context API work?
                                </h3>
                            </Accordion.Header>
                            <Accordion.Body>
                                <p>
                                    The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.
                                </p>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>
                                <h3>
                                    What is useref in react?
                                </h3>
                            </Accordion.Header>
                            <Accordion.Body>
                                <p>
                                    Essentially, useRef is like a “box” that can hold a mutable value in its .current property. You might be familiar with refs primarily as a way to access the DOM. React will set its .current property to the corresponding DOM node whenever that node changes.
                                </p>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>
                                <h3>
                                    Why we use useRef in React?
                                </h3>
                            </Accordion.Header>
                            <Accordion.Body>
                                <p>
                                    The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.
                                </p>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4">
                            <Accordion.Header>
                                <h3>
                                    What is the purpose of context API in react?
                                </h3>
                            </Accordion.Header>
                            <Accordion.Body>
                                <p>
                                    The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.
                                </p>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="5">
                            <Accordion.Header>
                                <h3>
                                    How many ways we can implement conditional rendering in React?
                                </h3>
                            </Accordion.Header>
                            <Accordion.Body>
                                <p>
                                    7 Ways to Implement Conditional Rendering in React Applications:
                                </p>
                                <ol>
                                    <li>Using an if…else Statement</li>
                                    <li>Using a switch Statement</li>
                                    <li>Using Element Variables</li>
                                    <li>Using Ternary Operators</li>
                                    <li>Using Logical && (Short Circuit Evaluation)</li>
                                    <li>Using Immediately Invoked Function Expressions </li>
                                    <li>Using Enhanced JSX Libraries</li>
                                </ol>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            </div>
        </Container>
    );
};

export default FAQ;