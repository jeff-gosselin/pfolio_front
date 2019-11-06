const baseUrl = 'http://localhost:3000';
const myData = {
  summary:
    'Front end web developer and former graphic designer, well-versed in JavaScript, React, Ruby, Ruby on Rails, HTML, and CSS. Armed with both the ability to code and design visually engaging and interactive experiences.',
  skills: [
    { id: 1, name: 'HTML', level: 85 },
    { id: 2, name: 'CSS', level: 70 },
    { id: 3, name: 'JavaScript', level: 85 },
    { id: 4, name: 'React JS', level: 85 },
    { id: 5, name: 'Rails', level: 85 }
  ],
  projects: [
    {
      id: 1,
      title: 'Sneakaz E-Commerce Site',
      technologies: ['React', 'Redux', 'Rails', 'bcrypt', 'JWT', 'Photoshop'],
      description: 'Lorem ipsum dolar',
      url: 'https://sneakaz-front.herokuapp.com/',
      github: 'https://github.com/jeff-gosselin/sneakaz_front',
      date: '',
      img: `${baseUrl}/src/img/proj-images/sneakaz.png`
    },
    {
      id: 2,
      title: 'x',
      technologies: ['x', 'y', 'z'],
      description: 'Lorem ipsum dolar',
      url: '',
      github: '',
      date: '',
      img: ''
    }
  ]
};

export { myData };
