// Import project images
import backofficeImage from '../components/my-websites/images/mes-cadeaux-originaux-backoffice.jpg';
import organisemeImage from '../components/my-websites/images/organise-me.jpg';
import weatherImage from '../components/my-websites/images/weather-app.jpg';
import cadeauxOriginauxImage from '../components/my-websites/images/mes-cadeaux-originaux.jpg';

/**
 * List of projects to display in the portfolio
 *
 * For each project:
 * - name: Project name
 * - imageAlt: Alternative text for the image
 * - liveLink: Link to the live site
 * - sourceLink: GitHub link (single repo)
 * - sourceLinkFront/sourceLinkBack: GitHub links (separate front and back repos)
 * - description: Short description of the project
 * - image: Project image
 */
export const projects = [
  {
    name: 'Mes cadeaux originaux backoffice',
    imageAlt: 'mes-cadeaux-originaux-backoffice',
    liveLink: 'https://admin.mescadeauxoriginaux.com/',
    sourceLink: 'https://github.com/Raynnon/cadeaux-originaux',
    description: 'Backoffice made with React, Express.js and mongoDB',
    image: backofficeImage,
  },
  {
    name: 'Mes cadeaux originaux',
    imageAlt: 'mes-cadeaux-originaux',
    liveLink: 'https://cadeaux-originaux-frontoffice.vercel.app/',
    sourceLink: 'https://github.com/Raynnon/cadeaux-originaux',
    description: 'Affiliate site made with Next.js, Express.js and mongoDB',
    image: cadeauxOriginauxImage,
  },
  {
    name: 'Organise Me',
    imageAlt: 'organise-me',
    liveLink: 'https://organiseme.florian-assante.com',
    sourceLinkFront: 'https://github.com/Raynnon/organiseme',
    sourceLinkBack: 'https://github.com/Raynnon/tasks-api',
    description: 'A task manager created with React, Express.js and MongoDB',
    image: organisemeImage,
  },
  {
    name: 'The Weather App',
    imageAlt: 'weather-app',
    liveLink: 'https://weather.florian-assante.com',
    sourceLink: 'https://github.com/Raynnon/weather-app',
    description: 'A weather app created with EJS and Express.js using the Weatherbit API.',
    image: weatherImage,
  },
];
