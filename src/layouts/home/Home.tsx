import React from 'react';
import Container from 'react-bootstrap/esm/Container';

import './Home.scss';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Button from 'react-bootstrap/esm/Button';

const Home = () => {
    return (
        <Container fluid id="home-section">
            <Container id="home-content">
                <Row id="author">Podcode</Row>
                <Row id="header">
                    Bringing you the best information of programming around!
                </Row>
                <Row id="description">
                    <p>
                        Join us on our journey of exploring everything from
                        coding philosophies down to the latest and greatest
                        libraries available to coders everywhere!
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
        </Container>
    );
};

export default Home;
