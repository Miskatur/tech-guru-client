import React from 'react';
import { Image } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

const Premium = () => {
    const course = useLoaderData()
    console.log(course)
    return (
        <div className='d-flex flex-column align-items-center justify-content-center'>
            <h1 className='text-center'>Thank You Purchasing The
                <span className='text-danger'> {course.course_name} </span> Course</h1>
            <Image src='https://i.pinimg.com/originals/ca/38/3c/ca383c3d1c3ac6809a86c759b576e6f3.gif' />
        </div>
    );
};

export default Premium;