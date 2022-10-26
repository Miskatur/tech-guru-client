import React from 'react';
import { useRef } from 'react';
import { Button, Container, Image, ListGroup } from 'react-bootstrap';
import { FaArrowAltCircleRight, FaHeadset, FaUserClock, FaUserTie } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import Pdf from "react-to-pdf";


const CourseDetails = () => {
    const courseDetails = useLoaderData()
    const ref = useRef()

    const { id, classes, details, course_name, hours, image, instructor, instructorImg
    } = courseDetails;
    return (
        <div >
            <Container >
                <div className='border border-2 border-danger m-5 py-3'>
                    <div className='d-block d-md-flex justify-content-center align-items-center'>
                        <h1 className='text-center'>Introducing <span className='text-warning'>{course_name}</span></h1>
                        <Pdf targetRef={ref} filename="course-details.pdf">
                            {({ toPdf }) => <Button variant='primary' className='ms-4' onClick={toPdf}>Download Pdf</Button>}
                        </Pdf>
                    </div>

                    <div ref={ref}>
                        <div className='d-flex flex-column justify-content-center align-items-center my-5'>
                            <Image src={image} width={600} className='card-header' fluid></Image>
                            <div className='d-flex align-items-center my-3' >
                                <Image src={instructorImg} width={120} height={120} roundedCircle></Image>
                                <div className='ms-3'>
                                    <h3>Instructor : <span className='text-warning'>{instructor}</span></h3>
                                    <h4>Total Classes : {classes}</h4>
                                    <h4>Total Hours : {hours}</h4>
                                </div>
                            </div>
                            <div className='my-3' >
                                <h5 className='text-center'>About {course_name} Course : </h5>
                                <h6 className='px-5  mx-lg-5 card-body'>{details}</h6>
                            </div>
                            <div >
                                <ListGroup>
                                    <ListGroup.Item>What You Get From Us?</ListGroup.Item>
                                    <ListGroup.Item variant="primary">1. Expert Instructor. <FaUserTie /> </ListGroup.Item>
                                    <ListGroup.Item variant="secondary">2. 24/7 Customer Support. <FaHeadset />  </ListGroup.Item>
                                    <ListGroup.Item variant="success">3. Life Time Access . <FaUserClock /> </ListGroup.Item>
                                    <ListGroup.Item variant="danger">4. Live Video Support. <FaUserTie /> </ListGroup.Item>
                                </ListGroup>
                            </div>
                        </div>

                        <div className='d-flex justify-content-center my-3'>
                            <Link to={`/course/${id}/premium`}>
                                <Button variant='warning' className='fw-bold font-monospace'>Get Premium Access <FaArrowAltCircleRight /></Button>
                            </Link>
                        </div>
                    </div>
                </div>


            </Container>
        </div>
    );
};

export default CourseDetails;