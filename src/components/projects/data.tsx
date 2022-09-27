import React from 'react'
export const projectsData = [
  {
    id: 0,
    name: 'Game Manager',
    technologies: [
      'Html',
      'Css',
      'Javascript',
      'Styled Components',
      'React',
      'Figma',
      'React Router',
    ],
    description:
      'My main difficulty there was to make a working menu without using states because code was starting to look too complex. So I Found other tools for React such as React Router. Also I had to rebuild my previous projects to build proper file structure with Styled Components. Because Game manager consists of 3 different games I had to learn more about proper file structure to prevent wasting time for file search. ',
    smallDescription:
      'Game manager consists of four games which are tic-tac-toe, Fun Generator & Tenzies',
    photos: [
      'https://i.imgur.com/rq4HS4A.png?1',
      'https://i.imgur.com/idUDF3t.png?1',
      'https://i.imgur.com/qxbGXA0.png?1',
      'https://i.imgur.com/aeFCaKc.png?1',
      'https://i.imgur.com/3RHqkrd.png?1',
    ],
    photoAlt: '/',
    github: 'https://github.com/kkvzx/game-manager',
    liveDemo: 'https://game-manager.vercel.app/',
    ended: true,
  },

  {
    id: 1,
    name: 'Github repository search',
    technologies: [
      'Html',
      'Css',
      'Styled Components',
      'Gatsby',
      'Github API',
      'Typescript',
    ],
    description: `Website consists of: 404 page, bookmarks page, index page, result page.
      Index and Search result page both use SearchBar component. After submiting the user input 'Index page' navigates to ./search/{serachInput} - numer of pages are stored as states. Search result page is taking address and use it to make right url for api call. After fetching the data from API it shows Explore component which renders SingleRepository components.Data are fetched in [searchInput].tsx. Bookmarks uses localStorage to store data about favorites repositories.`,
    smallDescription:
      'Web application made with Gatsby. User is able to search repositories on Github by their API and save data about each repository in localStorage',
    photos: [
      'https://i.imgur.com/CX7cWHo.png',
      'https://i.imgur.com/Kto86cH.png',
      'https://i.imgur.com/eizU2Am.png',
      'https://i.imgur.com/Blg2iOh.png',
      'https://i.imgur.com/lkDSY8x.png',
    ],
    photoAlt: '/',
    github: 'https://github.com/kkvzx/Github-Repository-Search',
    liveDemo: 'https://github-repository-search-gobv.vercel.app/',
    ended: true,
  },
  {
    id: 2,
    name: '<FunGenerator/>',
    technologies: ['Html', 'Css', 'Javascript', 'React', 'Figma', 'API'],
    description:
      'FunGerator is an app that uses an outside API with questions. It downloads 5 questions from the API with answers. Users can answer these questions and after submitting game counts score and show all bad answers. I’ve used figma to make the design of the application. My main problem was to properly handle submitting. To overcome all logical problems I’ve made a mind map of the process on paper and implemented it.',
    smallDescription:
      'Simple quiz app that uses an API. Object of the game is to answer corectly to 5 question from given answers.',

    photos: [
      'https://i.imgur.com/hanNU3t.png',
      'https://i.imgur.com/BQfpHuk.png',
      'https://i.imgur.com/wUuZlE5.png',
      'https://i.imgur.com/agja0CW.png',
      'https://i.imgur.com/IJryVBF.png',
    ],
    photoAlt: '/',
    github: 'https://github.com/kkvzx/quizapp',
    liveDemo: 'https://game-manager.vercel.app/',
    ended: true,
  },

  {
    id: 3,
    name: 'Portfolio 1.0',
    technologies: [
      'Html',
      'Css',
      'Javascript',
      'StyledComponents',
      'React',
      'Figma',
      'Photoshop',
      'Framer Motion',
      'Intersection Observer API',
    ],
    description:
      'I had to design website in a way to be more than static page. During the process I managed to learn fundamentals of Framer Motion with intersection observer API which will be really useful in the future. I improved my file structuring to be simpler.While coding i used a lot of Framer Motion and React documentation.',
    smallDescription:
      'This is first version of my personal website which contains a portfolio and resume. I built it using React, Framer Motion and intersection observer API',
    photos: ['https://i.imgur.com/E3YMLvw.png'],
    photoAlt: '/',
    github: 'https://github.com/kkvzx/portfolio',
    liveDemo: 'https://kkazusek.com',
    ended: true,
  },
  {
    id: 4,
    name: 'Instagram clone',
    technologies: [
      'Html',
      'Css',
      'Javascript',
      'React',
      'React Hooks',
      'Styled Components',
      'Firebase',
      'Skeleton',
    ],
    description:
      'During the procces I used Firebase to hold all the users data. The most challenging thing was to build consistent file structure and working with firebase with use of custom hooks. I also used this project to practice using React hooks such as useContext and much more.',
    smallDescription: 'Practice of React Hooks and firebase',
    photos: ['https://i.imgur.com/qWVYZL1.png'],
    photoAlt: '/',
    github: 'https://github.com/kkvzx/social-media-clone',
    liveDemo: 'https://social-media-clone-7ldyo0356-kkvzx.vercel.app/login',
    ended: true,
  },
  {
    id: 5,
    name: 'Event HR Manager',
    technologies: ['React', 'Figma', 'Tailwind Css', 'PostgreSQL', 'Skeleton'],
    description:
      "It's platform made with Tailwind CSS and PostgreSQL as database. It helps managing human resources at event's such as FEST Festival, Tommorowland, concerts, etc. where a lot of ManPower is needed for a short period of time. It takes in account human factors. Platform rely on simple structure - admins - coordinator, zone leader, worker where every role has own responsibilites and check's subordinates. Every data should be included in platform. In addtion user's would have function to anonymously report others.",
    smallDescription:
      ' It helps managing human resources at big events with multiple selling zones',
    photos: ['https://i.imgur.com/ySRDhwU.png'],
    photoAlt: '/',
    github: 'https://github.com/kkvzx/event-hr-manager',
    liveDemo: '',
    ended: false,
  },
]
