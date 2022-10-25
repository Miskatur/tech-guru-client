import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Course from '../../components/Course/Course';
import CoursesName from '../../components/CoursesName/CoursesName';

const Courses = () => {
    const courses = useLoaderData();
    return (
        <div>
            <Container className='mb-5'>
                <Row>
                    <Col lg="4" className=' bg-danger px-5'>
                        <div className='text-center mx-4 px-2'>
                            <ul className="list-group">
                                {courses.map(name => <CoursesName
                                    key={name.id}
                                    name={name}
                                ></CoursesName>)

                                }
                            </ul>
                        </div>
                    </Col>
                    <Col lg="8">
                        <div className="row row-cols-1 row-cols-md-2 g-4 w-100 mx-auto ">
                            {
                                courses.map(course => <Course
                                    key={course.id}
                                    course={course}
                                ></Course>)
                            }

                        </div>


                    </Col>
                </Row>
            </Container>

        </div>



    );
};

export default Courses;