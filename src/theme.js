import { createTheme } from '@mui/material/styles';

const primaryClr = '#23eded'
const paperClr = '#010812'
const bgClr = 'rgb(0, 11, 26)'

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#ffffff',
    },
    background: {
      default: bgClr,
      paper: bgClr,
    },
  },
});

export default theme;

