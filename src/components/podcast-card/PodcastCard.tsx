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
        <div className="podcast-card">
            <Row className="pcc-img">
                <img src={imgSrc} alt={imgAltTxt} />
            </Row>
            <Row className="pcc-title">{title}</Row>
            <Row className="pcc-description">{description}</Row>
        </div>
    );
};

export default PodcastCard;
