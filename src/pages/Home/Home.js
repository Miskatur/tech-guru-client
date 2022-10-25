import React from 'react';
import { Button, Container, Image } from 'react-bootstrap';
import { FaArrowAltCircleRight, FaQuestion } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import sideImage from '../../assets/sidepic.png'

const Home = () => {
    return (
        <div>
            <Container>
                <div className='row'>
                    <div className='col-md-6 col-sm-12 '>
                        <Image src={sideImage} className='my-2' fluid>
                        </Image>

                    </div>
                    <div className='col-md-6 col-sm-12 d-flex flex-column justify-content-center align-items-center '>
                        <h1 className='text-center'>Looking For The Best Online Courses In The Country?</h1>
                        <h3 className='text-center text-warning'>The Search Is Over. Here We Are.</h3>

                        <h2 className='text-center'>Why Us <span> <FaQuestion className='text-danger' /></span></h2>



                        <Link to={'/courses'}>
                            <Button variant='danger' className='my-3 py-3'>Check Out Now <FaArrowAltCircleRight /> </Button>
                        </Link>

                    </div>

                </div>

            </Container>

        </div >
    );
};

export default Home;