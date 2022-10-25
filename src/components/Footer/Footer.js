import React from 'react';
import { MDBFooter, MDBContainer } from 'mdb-react-ui-kit';


const Footer = () => {
    return (
        <MDBFooter className='text-center text-white bg-danger' >
            <MDBContainer className='p-4'></MDBContainer>

            <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                © 2022 Copyright: Tech Guru Inc.

            </div>
        </MDBFooter>
    );
};

export default Footer;