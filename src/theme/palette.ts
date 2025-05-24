import colors from './colors';

const Palette = (mode: 'light' | 'dark', theme: number) => {
  let color;

  switch (theme) {
    case 1:
      color = colors.theme1;
      break;
    case 2:
      color = colors.theme2;
      break;
    case 3:
      color = colors.theme3;
      break;
    case 4:
      color = colors.theme4;
      break;
    case 5:
      color = colors.theme5;
      break;
    default:
      color = colors.theme1;
  }

  return {
    mode,
    primary: {
      main: color.primary.main,
    },
    secondary: {
      main: color.secondary.main,
    },
  };
};

export default Palette;
