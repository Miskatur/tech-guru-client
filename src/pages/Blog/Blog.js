import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';


const Blog = () => {
    return (
        <div>
            <Container>
                <h3 className='text-center my-5'>
                    Return To <Link to={'/'}>Home</Link></h3>
                <div>
                    <Card className='my-5'>
                        <Card.Header className='font-bold'><h1>What is cors?</h1></Card.Header>
                        <Card.Body>
                            <blockquote className="blockquote mb-0">
                                <p>
                                    {' '}
                                    Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.{' '}
                                </p>
                            </blockquote>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Header className='font-bold'><h1>Why are you using `firebase`? What other options do you have to implement authentication?</h1></Card.Header>
                        <Card.Body>
                            <blockquote className="blockquote mb-0">
                                <p>
                                    {' '}
                                    Firebase an Authentication system of Google. Hence it is one of the safest and easiest Authentication system. That's the reason I am using it. <br />
                                    Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more. <br />
                                    <strong>Other Options of implementing authentication are :</strong> <br />
                                    <strong>Auth0, MongoDB, Passport, Okta, and Firebase </strong> are the most popular alternatives and competitors to Firebase Authentication.
                                    {' '}
                                </p>
                            </blockquote>
                        </Card.Body>
                    </Card>
                    <Card className='my-5'>
                        <Card.Header className='font-bold'><h1> How does the private route work?</h1></Card.Header>
                        <Card.Body>
                            <blockquote className="blockquote mb-0">
                                <p>
                                    {' '}
                                    The react private route component renders child components ( children ) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property.{' '}
                                </p>
                            </blockquote>
                        </Card.Body>
                    </Card>
                    <Card className='mb-5'>
                        <Card.Header className='font-bold'><h1>What is Node? How does Node work?</h1></Card.Header>
                        <Card.Body>
                            <blockquote className="blockquote mb-0">
                                <p>
                                    {' '}
                                    Node is used as a backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.{' '}
                                </p>
                            </blockquote>
                        </Card.Body>
                    </Card>
                </div>
            </Container>
        </div>
    );
};

export default Blog;