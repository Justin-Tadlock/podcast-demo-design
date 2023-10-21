import React from 'react';
import Container from 'react-bootstrap/esm/Container';

import SplashContent from '../../components/splash-content/SplashContent';

import './Home.scss';

const Home = () => {
    return (
        <Container fluid id="home-section" className="section">
            <SplashContent />
        </Container>
    );
};

export default Home;
