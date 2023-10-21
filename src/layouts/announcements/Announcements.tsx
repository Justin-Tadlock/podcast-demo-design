import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';

import Announcement, {
    AnnouncementProps,
} from '../../components/announcement/Announcement';

import announcementSrc from '../../assets/pexels-announcement.jpg';

import './Announcements.scss';

const Announcements = () => {
    const announcement: AnnouncementProps = {
        title: 'Test Announcement',
        description: 'Test announcement description',
        imgSrc: announcementSrc,
        imgAltTxt: 'test announcement alt text',
    };

    return (
        <Container id="announcement-section" className="section">
            <Row>
                <Announcement {...announcement} />
            </Row>
        </Container>
    );
};

export default Announcements;
