import React from "react";
export const projectsData = [
  {
    id: 0,
    name: "Game Manager",
    technologies: [
      "Html",
      "Css",
      "Javascript",
      "Styled Components",
      "React",
      "Figma",
      "React Router",
    ],
    description:
      "My main difficulty there was to make a working menu without using states because code was starting to look too complex. So I Found other tools for React such as React Router. Also I had to rebuild my previous projects to build proper file structure with Styled Components. Because Game manager consists of 4 different games I had to learn more about proper file structure to prevent wasting time for file search. ",
    smallDescription:
      "Game manager consists of four games which are tic-tac-toe, Fun Generator, Tenzies and Flappy Bird.",
    photos: [
      "https://i.imgur.com/rq4HS4A.png?1",
      "https://i.imgur.com/idUDF3t.png?1",
      "https://i.imgur.com/qxbGXA0.png?1",
      "https://i.imgur.com/aeFCaKc.png?1",
      "https://i.imgur.com/3RHqkrd.png?1",
    ],
    photoAlt: "/",
    github: "https://github.com/kkvzx/game-manager",
    liveDemo: "https://game-manager.vercel.app/",
  },

  {
    id: 1,
    name: "Tic Tac Toe",
    technologies: [
      "Html",
      "Css",
      "Styled Components",
      "React",
      "React Router",
      "Figma",
    ],
    description:
      "One of the problems was to make a pretty design for such a simple game. During the process I looked at many UX and UI materials. I wanted to keep code as simple as possible to avoid using many conditions statements - I’ve managed to do so by creating an array of correct sequences which is way more readable. ",
    smallDescription:
      "Paper-and-pencil game for two players who take turns marking the spaces. The player who succeeds in placing three of their marks in a horizontal, vertical, or diagonal row is the winner.",
    photos: [
      "https://i.imgur.com/TK5ZxCb.png?2",
      "https://i.imgur.com/DCptNYi.png?2",
      "https://i.imgur.com/qz7mo8j.png?2",
      "https://i.imgur.com/hZ5uZ7a.png?2",
      "https://i.imgur.com/w8nh5FC.png?2",
      "https://i.imgur.com/RtANS1Y.png?2",
    ],
    photoAlt: "/",
    github: "https://github.com/kkvzx/tic-tac-toe",
    liveDemo: "https://game-manager.vercel.app/",
  },
  {
    id: 2,
    name: "<FunGenerator/>",
    technologies: ["Html", "Css", "Javascript", "React", "Figma", "API"],
    description:
      "FunGerator is an app that uses an outside API with questions. It downloads 5 questions from the API with answers. Users can answer these questions and after submitting game counts score and show all bad answers. I’ve used figma to make the design of the application. My main problem was to properly handle submitting. To overcome all logical problems I’ve made a mind map of the process on paper and implemented it.",
    smallDescription:
      "Simple quiz app that uses an API. Object of the game is to answer corectly to 5 question from given answers.",

    photos: [
      "https://i.imgur.com/hanNU3t.png",
      "https://i.imgur.com/BQfpHuk.png",
      "https://i.imgur.com/wUuZlE5.png",
      "https://i.imgur.com/agja0CW.png",
      "https://i.imgur.com/IJryVBF.png",
    ],
    photoAlt: "/",
    github: "https://github.com/kkvzx/quizapp",
    liveDemo: "https://game-manager.vercel.app/",
  },
  {
    id: 3,
    name: "Tenzies",
    technologies: ["Html", "Css", "Javascript", "React", "Figma"],
    description:
      "I started this project in order to practice React Hooks such as useState and useEffect. During the process I found more about passing states as props to children elements and  controlling functions. Also while working on Tenzies I found out a lot about how typescript works. My main problem to overcome was understanding how react rendering works.  ",
    smallDescription:
      "The object of the game is to roll the dice as fast as possible, the player who gets all dice on the same number is the winner.",
    photos: [
      "https://i.imgur.com/1odyL7L.png?1",
      "https://i.imgur.com/2DgCdde.png?1",
      "https://i.imgur.com/6N2HMTZ.png?1",
    ],
    photoAlt: "/",
    github: "https://github.com/kkvzx/Tenzies",
    liveDemo: "https://game-manager.vercel.app/",
  },

  {
    id: 4,
    name: "Portfolio 1.0",
    technologies: [
      "Html",
      "Css",
      "Javascript",
      "StyledComponents",
      "React",
      "Figma",
      "Photoshop",
      "Framer Motion",
      "Intersection Observer API",
    ],
    description:
      "I had to design website in a way to be more than static page. During the process I managed to learn fundamentals of Framer Motion with intersection observer API which will be really useful in the future. I improved my file structuring to be simpler.While coding i used a lot of Framer Motion and React documentation.",
    smallDescription:
      "This is first version of my personal website which contains a portfolio and resume. I built it using React, Framer Motion and intersection observer API",
    photos: ["https://i.imgur.com/E3YMLvw.png"],
    photoAlt: "/",
    github: "https://github.com/kkvzx/portfolio",
    liveDemo: "",
  },
];
