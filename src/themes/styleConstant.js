const drawerWidth = 65;
const drawerHoverWidth = 240;
const headerHeight = 50;

const cyanShadow =
  '0 12px 20px -10px rgba(73, 145, 226, 0.28), 0 4px 20px 0 rgba(0,0,0,0.12), 0 7px 8px -5px rgba(73, 145, 226, 0.2)';
const redShadow =
  '0 12px 20px -10px rgba(241, 106, 115,0.28), 0 4px 20px 0 rgba(0,0,0,0.12), 0 7px 8px -5px rgba(241, 106, 115,0.2)';

const colorArray = [
  'LAVENDER',
  'MAGICMINT',
  'CANARY',
  'WINTERWIZARD',
  'LIGHTAPRICOT',
  'SHAMPOO',
  'GRAY',
  'SOAP',
  'ROMANSILVER',
  'BURLYWOOD',
  'PUCE',
  'MAGENTA',
  'SALMON',
  'YONDER',
  'GREEN',
  'LIME',
  'AQUAMARINE',
  'MUSTARD',
  'MELON',
  'ORANGE',
];

const colorStyleMap = {
  LAVENDER: {
    backgroundColor: '#B27E9F',
  },
  MAGICMINT: {
    backgroundColor: '#afffc8',
  },
  CANARY: {
    backgroundColor: '#fffda6',
  },
  WINTERWIZARD: {
    backgroundColor: '#9fecfe',
  },
  LIGHTAPRICOT: {
    backgroundColor: '#ffd1af',
  },
  SHAMPOO: {
    backgroundColor: '#ffcdf6',
  },
  GRAY: {
    backgroundColor: '#C7CBCF',
  },
  SOAP: {
    backgroundColor: '#d2c3ea',
  },
  ROMANSILVER: {
    backgroundColor: '#81A591',
  },
  BURLYWOOD: {
    backgroundColor: '#DCBF85',
  },
  PUCE: {
    backgroundColor: '#D18E8C',
  },
  MAGENTA: {
    backgroundColor: '#CE93D8',
  },
  SALMON: {
    backgroundColor: '#E08F8F',
  },
  YONDER: {
    backgroundColor: '#9fa8da',
  },
  GREEN: {
    backgroundColor: '#8CCC8F',
  },
  LIME: {
    backgroundColor: '#dce775',
  },
  AQUAMARINE: {
    backgroundColor: '#69F0AE',
  },
  MUSTARD: {
    backgroundColor: '#ffd54f',
  },
  MELON: {
    backgroundColor: '#FFAAAA',
  },
  ORANGE: {
    backgroundColor: '#ff8a65',
  },
};

const mainColors = {
  buttercup: '#f6a61f',
  froly: '#f16a73',
  havelockBlue: '#4991e2',
  blurDark: '#4a4a4a',
  darkBlue: '#000034',
  oceanGreen: '#48bb78',
  mediumPurple: '#9f7aea',
  orange: '#ff8a65',
};

const bgAvatarColors = [
  mainColors.buttercup,
  mainColors.froly,
  mainColors.havelockBlue,
];

const randomAvatarColor = () => {
  const rdIndex = Math.floor(Math.random() * bgAvatarColors.length);
  const color = bgAvatarColors[rdIndex];
  return color;
};

export {
  cyanShadow,
  redShadow,
  drawerWidth,
  drawerHoverWidth,
  headerHeight,
  colorStyleMap,
  colorArray,
  mainColors,
  randomAvatarColor,
};
