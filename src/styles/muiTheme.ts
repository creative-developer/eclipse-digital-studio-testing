import { createTheme } from '@mui/material/styles';
import { Colors } from 'typings/colors';

export const theme = createTheme({
  breakpoints: {
    values: {
      xxs: 0,
      xs: 375,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1208 + 48,
    },
  },
  palette: {
    primary: { main: Colors.accent },
    // secondary: { main: '' },
    // error: { main: '' },
  },
  // typography: {
  //   fontFamily: "'Ubuntu', sans-serif",
  //   h1: {},
  //   h2: {},
  //   h3: {},
  //   h4: {},
  //   h5: {},
  //   body1: {},
  //   body2: {},
  //   button: {},
  //   caption: {},
  // },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          minWidth: 375,
          backgroundColor: '#fff !important',
        },
        main: {
          flex: '1 0 auto',
        },
        '#root': {
          position: 'relative',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
        },
        '.router-link': {
          textDecoration: 'none',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        text: {
          backgroundColor: 'transparent',
          transition: 'all .4s ease',
          '&:hover': {
            color: '',
            backgroundColor: 'transparent',
          },
        },
        textPrimary: {
          color: '',
          '&:hover': {
            color: '',
            backgroundColor: 'transparent',
          },
        },
        textSecondary: {
          color: '',
          '&:hover': {
            color: '',
            backgroundColor: 'transparent',
          },
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          display: 'block',
          marginBottom: 8,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {},
    },
  },
});
