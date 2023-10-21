import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';

import SectionHeader from '../../components/section-header/SectionHeader';
import PodcastCard, {
    PodcastCardProps,
} from '../../components/podcast-card/PodcastCard';

import img from '../../assets/pexels-placeholder.jpg';

import './Categories.scss';

const Categories = () => {
    let popularPodcasts: Array<PodcastCardProps> = [
        {
            imgSrc: img,
            imgAltTxt: 'test',
            title: 'Test Popular Title',
            description: 'Test popular description',
        },
        {
            imgSrc: img,
            imgAltTxt: 'test2',
            title: 'Test Popular Title2',
            description: 'Test popular description2',
        },
    ];
    let topPodcasts: Array<PodcastCardProps> = [
        {
            imgSrc: img,
            imgAltTxt: 'test',
            title: 'Test Top Title',
            description: 'Test top description',
        },
    ];

    return (
        <Container id="category-section">
            <Row>
                <SectionHeader />
                <Container fluid>
                    <Row>
                        {popularPodcasts.map((podcast, idx) => (
                            <PodcastCard
                                {...podcast}
                                key={`${podcast.title}-${idx}`}
                            />
                        ))}
                    </Row>
                </Container>
            </Row>

            <Row>
                <SectionHeader />
                <Container fluid>
                    <Row>
                        {topPodcasts.map((podcast, idx) => (
                            <PodcastCard
                                {...podcast}
                                key={`${podcast.title}-${idx}`}
                            />
                        ))}
                    </Row>
                </Container>
            </Row>
        </Container>
    );
};

export default Categories;
