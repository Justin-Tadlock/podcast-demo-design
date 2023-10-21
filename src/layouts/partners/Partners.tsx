import React from 'react';
import Container from 'react-bootstrap/esm/Container';

import './Partners.scss';

const Partners = () => {
    return (
        <Container fluid id="partner-section" className="section">
            <p>Thank you message for partners.</p>
            <div id="partners-container"></div>
        </Container>
    );
};

export default Partners;
