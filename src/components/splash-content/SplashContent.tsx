import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Button from 'react-bootstrap/esm/Button';

import './SplashContent.scss';
import Col from 'react-bootstrap/esm/Col';

const SplashContent = () => {
    return (
        <Container id="splash-content">
            <Row>Podcode</Row>
            <Row>Welcome to Podcode</Row>
            <Row>
                <p>
                    Here we focus on bringing you news about code development
                    and tools.
                </p>
                <p>
                    Join us on our journey of exploring everything from coding
                    philosophies down to the latest and greatest libraries
                    available to coders everywhere!
                </p>
            </Row>
            <Row>
                <Col xs={2}>
                    <Button variant="light">Sign Up</Button>
                </Col>
                <Col xs={2}>
                    <Button variant="outline-light">Log in</Button>
                </Col>
            </Row>
        </Container>
    );
};

export default SplashContent;
