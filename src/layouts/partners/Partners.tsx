import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';

import './Partners.scss';
import PartnerCard, {
    PartnerCardProps,
} from '../../components/partner-card/PartnerCard';

import cloudSolutionsImg from '../../assets/partners/pexels-cloud-solutions.jpg';
import collabWorksImg from '../../assets/partners/pexels-collabworks.jpg';
import crossCodersImg from '../../assets/partners/pexels-crosscoders.jpg';
import darkCodersImg from '../../assets/partners/pexels-darkcoders.jpg';
import hyperCodersImg from '../../assets/partners/pexels-hyperprojects.jpg';
import javaWorksImg from '../../assets/partners/pexels-javaworks.jpg';
import professorsInCodeImg from '../../assets/partners/pexels-professors-in-code.jpg';
import zenCodeImg from '../../assets/partners/pexels-zencode.jpg';

const Partners = () => {
    let partnersList: Array<PartnerCardProps> = [
        { name: 'Cloud Solutions', imgSrc: cloudSolutionsImg },
        { name: 'CollabWorks', imgSrc: collabWorksImg },
        { name: 'CrossCoders', imgSrc: crossCodersImg },
        { name: 'Dark Coders', imgSrc: darkCodersImg },
        { name: 'HyperCoders', imgSrc: hyperCodersImg },
        { name: 'JavaWorks', imgSrc: javaWorksImg },
        { name: 'Professors in Code', imgSrc: professorsInCodeImg },
        { name: 'Zen Code', imgSrc: zenCodeImg },
    ];
    return (
        <Container fluid id="partner-section">
            <Container fluid>
                <Row id="thank-you">
                    <p>
                        "A huge thank you to all of our partners that help us
                        along our journey in exploring the vastness of
                        technology and coding!"
                    </p>
                    <p>
                        - The <span className="podcode">Podcode</span> team.
                    </p>
                </Row>
                <Row id="partners">
                    {partnersList.map((partner, idx) => (
                        <PartnerCard
                            {...partner}
                            key={`${partner.name}-${idx}`}
                        />
                    ))}
                </Row>
                <Row className="contact">
                    <p>
                        Don't see your name or logo?&nbsp;
                        <a href="mailto:lorem.podcode@contact.us">
                            Click here
                        </a>{' '}
                        to to let us know!
                    </p>
                </Row>
            </Container>
        </Container>
    );
};

export default Partners;
