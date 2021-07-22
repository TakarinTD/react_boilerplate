const mainColors = {
  buttercup: '#f6a61f',
  froly: '#f16a73',
  havelockBlue: '#4991e2',
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

export { mainColors, randomAvatarColor };
