import "./App.scss"
import Header from "./comps/Header";
import Body from "./comps/Body";
import AppProvider from "./comps/contexts/AppProvider"

const App = () => {

  return <div className="app">
    <AppProvider> 
      <Header/>
      <Body />
    </AppProvider> 
  </div>
}

export default App;
