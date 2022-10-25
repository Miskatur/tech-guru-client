import React from 'react';
import { Button } from 'react-bootstrap';
import { FaBookOpen, FaStopwatch } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const Course = ({ course }) => {
    const { classes, course_name, hours, id, image, instructor } = course
    return (
        <div className="col">
            <div className="card h-100">
                <img src={image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h4 className="card-title">{course_name}</h4>
                    <h6 className="card-text">Instructor : {instructor} </h6>
                    <div className='d-flex justify-content-between mt-4'>
                        <h6><FaBookOpen /> Classes : {classes}</h6>
                        <h6 className='me-5 pe-2'><FaStopwatch /> Hours : {hours} </h6>
                    </div>
                </div>
                <div className="text-center">
                    <Link to={`/course/${id}`}><Button variant='danger' className=' w-100'>Enroll Now</Button></Link>
                </div>
            </div>
        </div>

    );
};

export default Course;