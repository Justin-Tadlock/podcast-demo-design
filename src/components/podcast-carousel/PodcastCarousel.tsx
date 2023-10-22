import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Carousel from 'react-bootstrap/esm/Carousel';

import PodcastCard, { PodcastCardProps } from '../podcast-card/PodcastCard';

import './PodcastCarousel.scss';

export interface PostcastCarouselProps {
    podcasts: Array<PodcastCardProps>;
    numberSlides: number;
}

const PodcastCarousel = ({
    podcasts,
    numberSlides = 3,
}: PostcastCarouselProps) => {
    const showControls = numberSlides < podcasts.length ? true : false;

    const getSlides = () => {
        const numPages = Math.ceil(podcasts.length / numberSlides) - 1;
        const slides: Array<React.JSX.Element> = [];

        for (let i = 0; i <= numPages; i++) {
            const startPos = i * numberSlides;

            slides.push(
                <Carousel.Item>
                    {podcasts
                        .slice(startPos, startPos + numberSlides)
                        .map((podcast, idx) => (
                            <PodcastCard
                                {...podcast}
                                key={`${podcast.title}-${startPos + idx}`}
                            />
                        ))}
                </Carousel.Item>
            );
        }
        return slides;
    };

    return (
        <Container className="podcast-container">
            <Carousel
                interval={null}
                controls={showControls}
                indicators={showControls}
            >
                {getSlides()}
            </Carousel>
        </Container>
    );
};

export default PodcastCarousel;
