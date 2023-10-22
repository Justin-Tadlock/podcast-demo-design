import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';

import './SectionHeader.scss';

export interface SectionHeaderProps {
    title: string;
    message: string;
}

const SectionHeader = ({ title, message }: SectionHeaderProps) => {
    return (
        <Container className="section-header">
            <span className="sh-title">{title}</span>
            <span className="sh-seperator"></span>
            <span className="sh-message">{message}</span>
            <span className="sh-hr"></span>
        </Container>
    );
};

export default SectionHeader;
