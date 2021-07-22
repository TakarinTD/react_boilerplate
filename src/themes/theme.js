import { createMuiTheme } from '@material-ui/core/styles';
import { FEATURE_COLORS } from './configs';

const theme = createMuiTheme({
  palette: {
    secondary: {
      main: FEATURE_COLORS.secondary,
    },
    primary: {
      main: FEATURE_COLORS.primary,
    },
    divider: FEATURE_COLORS.divider,
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
