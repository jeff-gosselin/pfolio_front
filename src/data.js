const myData = {
  summary:
    'Front end web developer and former graphic designer, well-versed in JavaScript, React, HTML, and CSS. Armed with both the ability to code and design visually engaging and interactive experiences.',
  skills: [
    { id: 1, name: 'HTML', level: 85 },
    { id: 2, name: 'CSS', level: 75 },
    { id: 3, name: 'JavaScript', level: 65 },
    { id: 4, name: 'React JS', level: 70 },
    { id: 5, name: 'Rails', level: 48 }
  ],
  projects: [
    {
      id: 1,
      title: 'Sneakaz E-Commerce Site',
      technologies: [
        'React',
        'Redux',
        'Rails',
        'bcrypt',
        'JWT',
        'Adobe Photoshop'
      ],
      description:
        'An ecommerce application where users can search for sneakers, add sneakers to their virtual shopping bag, make fake purchases, and keep track of their order history.',
      url: 'https://sneakaz-front.herokuapp.com/',
      github: 'https://github.com/jeff-gosselin/sneakaz_front',
      date: 'May 4th, 2019',
      img: 'sneakaz.png'
    },
    {
      id: 2,
      title: 'Movie Seen App',
      technologies: ['React', 'Rails', 'The Movie Database API'],
      description:
        'A web app that gives the user info on blockbuster movies, and keeps track of movies the user has seen, movies the user is interested in seeing, and movies the user never wants to see!',
      url: 'https://movie-seen-front.herokuapp.com',
      github: 'https://github.com/jeff-gosselin/planet_movie_front',
      date: 'May 21st, 2019',
      img: 'movie-seen.png'
    },
    {
      id: 3,
      title: 'Single Page Mockup',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      description:
        'This was originally just an image that I laid out into a single page app. This was primarily an exercise in laying out web page content.',
      url: 'https://mywebnow-page.herokuapp.com',
      github: 'https://github.com/jeff-gosselin/thesis_proj',
      date: 'July 12th 2019',
      img: 'mywebnow.png'
    },
    {
      id: 4,
      title: 'Product Variant Selector',
      technologies: ['React', 'SCSS'],
      description:
        'Built a product variant selector component where you can choose the color, size, and edition.',
      url: 'https://variant-selector.herokuapp.com',
      github: 'https://github.com/jeff-gosselin/variant-selector',
      date: 'September 24th 2019',
      img: 'variant-selector.png'
    },
    {
      id: 5,
      title: 'Surfing The Tube',
      technologies: ['React', 'CSS', 'YouTube API'],
      description:
        'Using the YouTube API, I built an app that allows you to search surf videos.',
      url: 'http://surftube.herokuapp.com',
      github: 'https://github.com/jeff-gosselin/mytube',
      date: 'November 7th 2019',
      img: 'surftube.png'
    }
  ]
};

export { myData };
