import React from 'react';

import './PodcastCard.scss';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';

export interface PodcastCardProps {
    imgSrc: string;
    imgAltTxt: string;
    title: string;
    description: string;
}

const PodcastCard = ({
    imgSrc,
    imgAltTxt,
    title,
    description,
}: PodcastCardProps) => {
    return (
        <Container id="podcast-card">
            <Row id="img">
                <img src={imgSrc} alt={imgAltTxt} />
            </Row>
            <Row id="title">{title}</Row>
            <Row id="description">{description}</Row>
        </Container>
    );
};

export default PodcastCard;
