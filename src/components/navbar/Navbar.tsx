import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import BootstrapNavbar from 'react-bootstrap/esm/Navbar';

import './Navbar.scss';

const Navbar = () => {
    return (
        <BootstrapNavbar
            bg="dark"
            data-bs-theme="dark"
            fixed="top"
            expand="lg"
            className="bg-body-tertiary"
        >
            <Container fluid>
                <BootstrapNavbar.Brand>Podcode</BootstrapNavbar.Brand>
                <BootstrapNavbar.Toggle aria-controls="navbar-scroll" />
                <BootstrapNavbar.Collapse id="navbar-scroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#home-section">Home</Nav.Link>
                        <Nav.Link href="#partner-section">Partners</Nav.Link>
                        <Nav.Link href="#category-section">Categories</Nav.Link>
                        <Nav.Link href="#faq-section">FAQs</Nav.Link>
                        <Nav.Link href="#announcement-section">
                            Announcements
                        </Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search..."
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="link">
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </Button>
                    </Form>
                </BootstrapNavbar.Collapse>
            </Container>
        </BootstrapNavbar>
    );
};

export default Navbar;
