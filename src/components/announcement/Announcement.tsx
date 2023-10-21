import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';

import './Announcement.scss';

export interface AnnouncementProps {
    title: string;
    description: string;
    imgSrc: string;
    imgAltTxt: string;
}
const Announcement = ({
    title,
    description,
    imgSrc,
    imgAltTxt,
}: AnnouncementProps) => {
    return (
        <Container className="announcement">
            <Row>{title}</Row>
            <Row>{description}</Row>
            <Row>
                <img src={imgSrc} alt={imgAltTxt} className="img-fluid" />
            </Row>
        </Container>
    );
};

export default Announcement;
