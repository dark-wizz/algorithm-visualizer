import { createTheme } from '@mui/material/styles';

const primaryClr = '#3df3f0'
const paperClr = "#01081280"
const bgClr ='#00060f'
const primarBorderClr = "#3df3f0"
const hoverClr = "#23eded"

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: primaryClr,
    },
    background: {
      default: bgClr,
    },
  },
  components:{
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: primaryClr, 
          "&:hover > *":{
            filter: `drop-shadow(0 0 3px ${hoverClr})`,
          }
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
    MuiPaper:{
      defaultProps:{
        elevation: 10,
      },
      styleOverrides:{
        root:{
          border: `1px solid ${primarBorderClr}`,
          background: paperClr,
        }
      }
      
    }
  }
});

export default theme;

