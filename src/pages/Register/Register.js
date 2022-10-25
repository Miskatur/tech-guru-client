import React from 'react';
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBInput,
    MDBIcon,
    MDBCheckbox
}
    from 'mdb-react-ui-kit';
import { Form } from 'react-bootstrap';
import { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();

    const [agreed, setAgreed] = useState(false)
    const { createUser, setUser, updateUserInfo } = useContext(AuthContext)
    const [errorMessage, setErrorMessage] = useState(false)


    const handleSubmitForm = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photoURL = form.photoURL.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        if (password !== confirm) {
            return alert('Password did not matched!')
        }
        createUser(email, password)
            .then(result => {
                const user = result.user;
                setUser(user)
                form.reset()
                handleUpdateUser(name, photoURL)
                navigate('/')
            })
            .catch(error => {
                const errorMessage = error.message;
                setErrorMessage(errorMessage)
            })
    }

    const handleUpdateUser = (name, photoURL) => {
        updateUserInfo(name, photoURL)
            .then(result => {
                const user = result.user;
                setUser(user)
            })
            .catch(error => {
                const errorMessage = error.message;
                setErrorMessage(errorMessage)
            })
    }

    const handleCheckox = () => {
        setAgreed(!agreed)
    }
    return (
        <Form onSubmit={handleSubmitForm}>
            <MDBContainer fluid>

                <MDBCard className='text-black m-5' style={{ borderRadius: '25px' }}>
                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Registration Form</p>
                    <MDBCardBody>
                        <MDBRow>
                            <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>

                                <div className="d-flex flex-row align-items-center mb-4 ">
                                    <MDBIcon fas icon="user me-3" size='lg' />
                                    <MDBInput label='Your Name' id='form1' name='name' type='text' className='w-100' />
                                </div>
                                <div className="d-flex flex-row align-items-center mb-4 ">
                                    <MDBIcon fas icon="image me-3" size='lg' />
                                    <MDBInput label='Your Photo URL' name='photoURL' id='form9' type='text' className='w-100' />
                                </div>

                                <div className="d-flex flex-row align-items-center mb-4">
                                    <MDBIcon fas icon="envelope me-3" size='lg' />
                                    <MDBInput label='Your Email' id='form2' type='email' name='email' />

                                </div>

                                <div className="d-flex flex-row align-items-center mb-4">
                                    <MDBIcon fas icon="lock me-3" size='lg' />
                                    <MDBInput label='Password' id='form3' type='password' name='password' />
                                </div>

                                <div className="d-flex flex-row align-items-center mb-4">
                                    <MDBIcon fas icon="key me-3" size='lg' />
                                    <MDBInput label='Repeat your password' id='form4' type='password' name='confirm' />
                                </div>

                                <div className='mb-4'>
                                    <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Agree Terms & Conditions' onClick={handleCheckox} />
                                </div>


                                <p className='text-danger'>{errorMessage}</p>


                                <MDBBtn className='mb-4' size='lg' disabled={!agreed}>Register</MDBBtn>
                                <p>Already have an Account? <Link to={'/login'}>Login here</Link> </p>

                            </MDBCol>

                            <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
                                <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid />
                            </MDBCol>

                        </MDBRow>
                    </MDBCardBody>
                </MDBCard>

            </MDBContainer>

        </Form>
    );
};

export default Register;