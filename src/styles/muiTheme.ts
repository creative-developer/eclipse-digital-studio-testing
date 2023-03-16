import { createTheme } from '@mui/material/styles';

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
  // palette: {
  //   primary: { main: '' },
  //   secondary: { main: '' },
  //   error: { main: '' },
  // },
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
      styleOverrides: {
        colorPrimary: {
          background: 'linear-gradient(222.09deg, rgba(249, 142, 128, 0.2) 18.52%, rgba(249, 142, 128, 0) 45.76%), #F7776A',
        },
      },
    },
  },
});
