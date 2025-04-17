import "./App.scss";
import Header from "./comps/Header";
import Body from "./comps/Body";
import AppProvider from "./comps/contexts/AppProvider";
import { Box } from "@mui/material";

const App = () => {
  return (
    <div class="grid-bg ba-grid anim">
      <div class="inner">
        <Box className="app">
          <AppProvider>
            <Header />
            <Body />
          </AppProvider>
        </Box>
      </div>
    </div>
  );
};

export default App;
