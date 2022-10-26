import React from 'react';
import { useContext } from 'react';
import { Image } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Premium = () => {
    const { user } = useContext(AuthContext)
    const course = useLoaderData()
    return (
        <div className='d-flex flex-column align-items-center justify-content-center my-5'>
            <div>
                <h3 className='text-center'>Dear <span className='text-warning'>{user?.displayName},</span> <br /> With The Email Address of <span className='text-primary'>{user?.email}</span></h3>
                <h4 className='text-center text-success'>You Successfully Purchased <span className='text-danger fw-bold'>{course?.course_name}</span> course</h4>
                <h1 className='text-center my-5'>Thank You For Purchasing The
                    <span className='text-danger'> {course?.course_name} </span> Course</h1>
            </div>
            <Image src='https://i.pinimg.com/originals/ca/38/3c/ca383c3d1c3ac6809a86c759b576e6f3.gif' />
        </div>
    );
};

export default Premium;