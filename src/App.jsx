import "./App.scss";
import Header from "./comps/Header";
import Body from "./comps/Body";
import AppProvider from "./comps/contexts/AppProvider";
import { Box } from "@mui/material";

const App = () => {
  return (
    <Box className="app">
      <AppProvider>
        <Header />
        <Body />
      </AppProvider>
    </Box>
  );
};

export default App;
