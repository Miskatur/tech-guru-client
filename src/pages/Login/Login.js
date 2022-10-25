import React from 'react';
import {
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBBtn,
    MDBIcon,
    MDBInput,
    MDBCheckbox
}
    from 'mdb-react-ui-kit';
import { Form, Image } from 'react-bootstrap';
import { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';


const Login = () => {
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'
    const navigate = useNavigate()
    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider()

    const { userSignIn, setUser, signInWithGoogle, signInWithGithub } = useContext(AuthContext)
    const [errorMessage, setErrorMessage] = useState(false)

    const [passwordShown, setPasswordShown] = useState(false)

    const handleSubmitForm = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        userSignIn(email, password)
            .then(result => {
                const user = result.user;
                setUser(user)
                form.reset()
                navigate(from, { replace: true })
            })
            .catch(error => {
                const errorMessage = error.message;
                setErrorMessage(errorMessage)
            })
    }

    const handledPassword = (event) => {
        setPasswordShown(!passwordShown)

    }


    const handleGoogleSignIn = () => {
        signInWithGoogle(googleProvider)
            .then(result => {
                const user = result.user;
                setUser(user)
                navigate(from, { replace: true })

            })
            .catch(error => {
                const errorMessage = error.message;
                setErrorMessage(errorMessage)
            })
    }

    const handleGithubSignIn = () => {
        signInWithGithub(githubProvider)
            .then(result => {
                const user = result.user;
                setUser(user)
                navigate(from, { replace: true })

            })
            .catch(error => {
                const errorMessage = error.message;
                setErrorMessage(errorMessage)
            })
    }

    return (
        <Form onSubmit={handleSubmitForm}>
            <MDBContainer fluid className="p-3 my-5 w-75 mx-auto">
                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Login Information</p>

                <MDBRow>

                    <MDBCol col='10' md='6'>
                        <Image src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" className="img-fluid" alt="Phone image" />
                    </MDBCol>

                    <MDBCol col='4' md='6'>


                        <MDBInput wrapperClass='mb-4' label='Email address' id='formControlLg1' name='email' type='email' size="lg" />
                        <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg2' name='password' type={passwordShown ? 'text' : 'password'} size="lg" />


                        <div className="d-flex justify-content-between mx-4 mb-4">
                            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Show Password' onClick={handledPassword} />
                        </div>



                        <p className='text-danger'>{errorMessage}</p>


                        <MDBBtn className="mb-4 w-100" size="lg" style={{ backgroundColor: '#ffa900', color: 'black' }}>Log In</MDBBtn>

                        <p>New Here? Create a New Account. <Link to={'/register'}>Register Now</Link> </p>

                        <div className="divider d-flex align-items-center my-4">
                            <p className="text-center fw-bold mx-auto mb-0">OR</p>
                        </div>

                        <MDBBtn className="mb-4 w-100" size="lg" style={{ backgroundColor: 'red' }} onClick={handleGoogleSignIn}>
                            <MDBIcon fab icon="google" className="mx-2" />
                            Continue with google
                        </MDBBtn>

                        <MDBBtn className="mb-4 w-100" size="lg" style={{ backgroundColor: 'black' }} onClick={handleGithubSignIn}>
                            <MDBIcon fab icon="github" className="mx-2" />
                            Continue with github
                        </MDBBtn>

                    </MDBCol>

                </MDBRow>

            </MDBContainer>

        </Form>
    );
};

export default Login;