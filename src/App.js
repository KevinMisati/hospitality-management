import './App.css';
import Home from "./Pages/Home"
import Header from "./Components/Header"
import {Routes,Route} from "react-router-dom"


function App() {
  return (
    <div className="App">
      <header>
        
        <Header />
      </header>
      <Routes>
        <Route path="/" >
          <Home />
        </Route>

        
      </Routes>
     
    </div>
  );
}

export default App;
