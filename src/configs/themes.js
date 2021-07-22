import { createMuiTheme } from '@material-ui/core/styles';
import amber from '@material-ui/core/colors/amber';
import { mainColors } from './styleConstant';

const theme = createMuiTheme({
  palette: {
    secondary: {
      light: amber[400],
      main: amber[600],
      dark: amber[700],
    },
    primary: {
      light: mainColors.havelockBlue,
      main: mainColors.havelockBlue,
      dark: mainColors.havelockBlue,
    },
  },
  typography: {
    useNextVariants: true,
    fontFamily: 'Poppins, Arial, sans-serif',
  },
  shape: {
    borderRadius: 10,
  },
});

export default theme;
