import { createMuiTheme } from '@material-ui/core/styles';

const initialCustomTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#000034',
    },
    tertiary: {
      main: '#91d5ff',
    },
    background: {
      default: '#fbfbfb',
      paper: '#ffffff',
    },
    text: {
      primary: '#4a4a4a',
    },
    card: {
      primary: '#f6a61f',
      secondary: '#f16a73',
      tertiary: '#4991e2',
    },
  },
  typography: {
    fontFamily: 'Vbee',
  },
  shape: {
    borderRadius: 10,
  },
  borderRadius: '10px',
  boxShadow:
    '0px 3px 3px -2px rgba(0,0,0,0.2), 0px 3px 4px 0px rgba(0,0,0,0.14), 0px 1px 8px 0px rgba(0,0,0,0.12)',
});

export default initialCustomTheme;
