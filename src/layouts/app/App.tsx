import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';

import Navbar from '../../components/navbar/Navbar';

import Announcement from '../announcements/Announcements';
import Categories from '../categories/Categories';
import Footer from '../footer/Footer';
import Partners from '../partners/Partners';
import Home from '../home/Home';
import Faqs from '../faq/Faqs';

import './App.scss';

function App() {
    return (
        <Container fluid>
            <Row>
                <Navbar />
                <Home />
                <Partners />
                <Categories />
                <Faqs />
                <Announcement />
                <Footer />
            </Row>
        </Container>
    );
}

export default App;
