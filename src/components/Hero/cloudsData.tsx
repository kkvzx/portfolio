export const clouds: {
  width?: number;
  link: any;
  top?: number;
  left?: number;
  right?: number;
  bottom?: number;
  zindex?: number;
  direction: string;
}[] = [
  {
    link: require('../../img/cloud3.png'),
    top: 10,
    left: 15,
    direction: 'left',
  },
  {
    link: require('../../img/cloud7.png'),
    width: 10,
    top: 5,
    right: 18,
    zindex: 1,
    direction: 'right',
  },
  {
    link: require('../../img/cloud0.png'),
    zindex: 2,
    top: 15,
    left: 40,
    direction: 'right',
  },

  {
    link: require('../../img/cloud2.png'),
    zindex: 2,
    top: 15,
    right: 3,
    direction: 'left',
  },

  {
    link: require('../../img/cloud4.png'),
    left: 25,
    bottom: 10,
    direction: 'right',
  },
  {
    link: require('../../img/cloud5.png'),
    top: 35,
    zindex: 1,
    right: 0,
    direction: 'left',
  },
  {
    link: require('../../img/cloud6.png'),
    width: 15,
    top: 40,
    right: 20,
    direction: 'left',
  },
  {
    link: require('../../img/cloud8.png'),
    width: 10,
    left: 35,
    bottom: 20,
    direction: 'right',
  },
  {
    link: require('../../img/cloud2.png'),
    width: 22,
    top: 50,
    right: 5,
    zindex: 5,
    direction: 'left',
  },
  {
    link: require('../../img/cloud6.png'),
    width: 15,
    top: 30,
    left: 20,
    zindex: 2,
    direction: 'left',
  },
  {
    link: require('../../img/cloud1.png'),
    zindex: 3,
    width: 30,
    top: 40,
    left: 10,
    direction: 'right',
  },
];
