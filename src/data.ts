import { PodcastCardProps } from './components/podcast-card/PodcastCard';

import aiProgrammingImg from './assets/podcasts/pexels-ai-in-programming.jpg';
import bestPracticesImg from './assets/podcasts/pexels-best-practices.jpg';
import cleanWorkspacesImg from './assets/podcasts/pexels-clean-workspaces.jpg';
import coffeeAndFocusImg from './assets/podcasts/pexels-coffee-increases-focus.jpg';
import firmwarePerformanceImg from './assets/podcasts/pexels-firmware-performance.jpg';
import geographicStudiesImg from './assets/podcasts/pexels-geographic-studies.jpg';
import mostCommonMistakesImg from './assets/podcasts/pexels-most-common-mistakes.jpg';
import nomadLifestyleImg from './assets/podcasts/pexels-nomad-lifestyle.jpg';
import photographyAndCodingImg from './assets/podcasts/pexels-photography-and-coding.jpg';
import studentLifeImg from './assets/podcasts/pexels-student-life.jpg';
import toddlerBootcampImg from './assets/podcasts/pexels-toddler-bootcamps.jpg';

export const popularPodcasts: Array<PodcastCardProps> = [
    {
        imgSrc: aiProgrammingImg,
        imgAltTxt: 'Motherboard with glowing red hardware lights',
        title: 'AI Programming',
        description: 'Could AI be replacing software engineers?',
    },
    {
        imgSrc: bestPracticesImg,
        imgAltTxt: 'Desk with monitor and books stacked horizontally',
        title: 'Best Practices for Coders',
        description: 'The best authors and books on best practices.',
    },
    {
        imgSrc: cleanWorkspacesImg,
        imgAltTxt: 'A cleaned desk with laptop and mouse.',
        title: 'Clean Desks',
        description:
            'Studies are showing that clean desks can improve productivity',
    },
    {
        imgSrc: coffeeAndFocusImg,
        imgAltTxt:
            'A desk with a laptop, glasses, and a coffee mug with black coffee',
        title: 'Caffeine Focus',
        description:
            'Studies are showing that caffeine can help with prolonged productivity',
    },
    {
        imgSrc: firmwarePerformanceImg,
        imgAltTxt: 'Picture of a motherboard zoomed in to the CPU slot',
        title: 'Testing Firmware',
        description: 'How hard is it to test the firmware on hardware?',
    },
    {
        imgSrc: geographicStudiesImg,
        imgAltTxt:
            'A picture of a laptop with a geographic map coloring regions and someone pointing to the screen',
        title: 'Fastest Growing Regions',
        description:
            'This study shows the region with the fastest level of growth in coding graduates.',
    },
];

export const topPodcasts: Array<PodcastCardProps> = [
    {
        imgSrc: mostCommonMistakesImg,
        imgAltTxt:
            'Picture of a man sitting at a desk holding his head in his hands and looking at a computer screen',
        title: 'Common Mistakes to Avoid',
        description:
            'These are the most common coding mistakes to avoid when learning to code',
    },
    {
        imgSrc: nomadLifestyleImg,
        imgAltTxt: 'A picture of a laptop, book, and coffee mug on a bed',
        title: 'The Rise of Nomads',
        description:
            'There is a rise in the technical nomads who work while traveling around the world',
    },
    {
        imgSrc: photographyAndCodingImg,
        imgAltTxt: 'A picture of a laptop and camera sitting on a table',
        title: 'Code Enhancing Images',
        description:
            'There is an emerging software that can select and optimize photos for getting hired',
    },
    {
        imgSrc: studentLifeImg,
        imgAltTxt:
            'A picture of a woman sitting with a laptop on the table and a backpack in the background',
        title: 'Struggling Students',
        description:
            'Students are finding it harder to get the right experience to get hired out of college',
    },
    {
        imgSrc: toddlerBootcampImg,
        imgAltTxt:
            'A picture of a toddler sitting at a desk in front of a computer wearing a headset looking away from the camera',
        title: 'Toddler Bootcamps Rising',
        description:
            'We are beginning to see more and more bootcamps teaching toddlers how to code!',
    },
];
