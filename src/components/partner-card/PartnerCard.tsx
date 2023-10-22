import React from 'react';
import Row from 'react-bootstrap/esm/Row';

import './PartnerCard.scss';

export interface PartnerCardProps {
    name: string;
    imgSrc: string;
}

const PartnerCard = ({ name, imgSrc }: PartnerCardProps) => {
    return (
        <div className="partner-card">
            <Row className="pc-img">
                <img src={imgSrc} alt={name} />
            </Row>
            <Row className="pc-name">{name}</Row>
        </div>
    );
};

export default PartnerCard;
