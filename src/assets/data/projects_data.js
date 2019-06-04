import NPS from '../images/projects/nps.png';
import PDXBNB from '../images/projects/pdxbnb.png';
import NYT from '../images/projects/nyt.png';
import Unsplash from '../images/projects/unsplash.png';
import Weather from '../images/projects/weather.png';

export default [
  {
    name: 'PDXbnb',
    info:
      'Data visualization group project displaying average rental rates in Portland neighborhoods using Airbnb data; built with Angular, Firebase, and Chart.js.',
    img: PDXBNB,
    alt: 'PDXbnb',
    githubLink: 'https://github.com/RunHannah/PDXbnb',
    liveLink: 'https://pdxbnb-76f3c.firebaseapp.com/'
  },
  {
    name: 'National Park Service Website Clone',
    info:
      'This is a clone of the National Park Service website.  Built with Angular, Firebase, and National Park Service API.',
    img: NPS,
    alt: 'NPS',
    githubLink: 'https://github.com/RunHannah/nps',
    liveLink: 'https://national-park-service-clone.firebaseapp.com/'
  },
  {
    name: 'NYT Best Seller Books',
    info:
      "See the New York Times' best selling books for the week! Built with React, NYT API, and form and submit functionality.",
    img: NYT,
    alt: 'nyt',
    githubLink: 'https://github.com/RunHannah/react-nyt-books',
    liveLink: 'https://runhannah.github.io/react-nyt-books/'
  },
  {
    name: 'Unsplash',
    info:
      'Returns a collection of photos and responds in changes to screen width. Built with React and Unsplash API. Implements CSS Flex and Grid, and React Router',
    img: Unsplash,
    alt: 'unsplash',
    githubLink: 'https://github.com/RunHannah/react-unsplash',
    liveLink: 'https://runhannah.github.io/react-unsplash/'
  },
  {
    name: 'Weather',
    info:
      'Returns weather and map results based on search input. Built with Node.js, Express, vanilla JavaScript, and DarkSky and Mapbox APIs.',
    img: Weather,
    alt: 'weather',
    githubLink: 'https://github.com/RunHannah/nodejs-weather',
    liveLink: 'https://rhweather.herokuapp.com/'
  }
];
