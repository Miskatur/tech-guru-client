import React from 'react';
import { Button, Image, OverlayTrigger, Tooltip } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import './Header.css'
import { FaHome, FaBookOpen, FaBloggerB, FaQuestionCircle } from 'react-icons/fa';
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)



    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    return (
        <div>

            <Navbar bg="danger" variant="dark" expand="lg">
                <Container>
                    <div className=' d-flex align-items-center justify-content-center'>
                        <Navbar.Brand> <Link to={'/'}>
                            <Image
                                src={logo}
                                width="50px"
                                height="50px"
                                className="d-inline-block align-top text-white"
                                alt="React Bootstrap logo"
                            />

                        </Link></Navbar.Brand>


                        <h4 className='text-decoration-none mx-2 text-white'>Tech-Guru</h4>
                    </div>
                    <Navbar.Toggle aria-controls="navbarScroll" className='custom' />

                    <Navbar.Collapse id="navbarScroll" >

                        <Nav
                            className="ms-auto my-2 my-lg-0 d-flex align-items-center fw-semibold"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Link className='text-decoration-none mx-2 text-white' to={'/'}> <FaHome className='mx-1' /> Home </Link>
                            <Link className='text-decoration-none mx-2  text-white' to={'/courses'}> <FaBookOpen className='mx-1' /> Courses </Link>
                            <Link className='text-decoration-none mx-2  text-white' to={"/blog"} > <FaBloggerB className='mx-1' /> Blogs</Link>
                            <Link className='text-decoration-none mx-2  text-white' to={'/faq'}> <FaQuestionCircle className='mx-1' /> FAQ</Link>
                            <Nav>
                                {
                                    user?.uid ?
                                        <>

                                            <span className='mx-2'>
                                                {
                                                    user?.photoURL &&
                                                    <Image
                                                        style={{ height: "30px" }}
                                                        roundedCircle
                                                        src={user.photoURL}
                                                        data-bs-toggle="tooltip" data-bs-placement="bottom" title={user.displayName}
                                                    ></Image>
                                                }
                                            </span>

                                            <Button variant="warning" className=' mx-2 '><Link className='text-decoration-none text-dark' onClick={handleLogOut}>LogOut</Link></Button>
                                        </>
                                        :
                                        <>
                                            <Button variant="warning" className=' mx-2 '><Link className='text-decoration-none text-dark' to={'/login'}>Login</Link></Button>
                                            <Button variant='warning' className='mx-2 '><Link className='text-decoration-none text-dark' to={'/register'}>Register
                                            </Link></Button>
                                        </>
                                }
                            </Nav>
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <hr className='my-3 container' />

        </div>
    );
};

export default Header;