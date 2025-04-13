import { createTheme } from '@mui/material/styles';

const primaryClr = '#23eded'

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#ffffff',
    },
  },
  components: {
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: primaryClr, 
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: '#ffffff',
          color: '#000000',
          fontSize: '0.8rem',
        },
        arrow: {
          color: '#ffffff',
        },
      },
    },
  },
});

export default theme;

