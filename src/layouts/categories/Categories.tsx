import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';

import SectionHeader from '../../components/section-header/SectionHeader';
import PodcastCarousel from '../../components/podcast-carousel/PodcastCarousel';
import { popularPodcasts, topPodcasts } from '../../data';

import './Categories.scss';

const Categories = () => {
    return (
        <Container id="category-section">
            <Row>
                <SectionHeader
                    title="List of Popular Podcasts"
                    message="Here's a list of popular podcasts that you don't want to miss!"
                />
                <PodcastCarousel podcasts={popularPodcasts} numberSlides={4} />
            </Row>

            <Row>
                <SectionHeader
                    title="Top Podcasts"
                    message="Here's a list of the podcasts offering the top information around"
                />
                <PodcastCarousel podcasts={topPodcasts} numberSlides={4} />
            </Row>
        </Container>
    );
};

export default Categories;
