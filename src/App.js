import './App.css';
import Home from "./Pages/Home"
import PropertyDetails from "./Pages/PropertyDetails"
import Header from "./Components/Header"
import {Routes,Route} from "react-router-dom"
import Footer from "./Components/Footer"


function App() {
  return (
    <div className="App">
      <header>
        
        <Header />
      </header>
      
      <Routes>
        
          <Route path="/" element={<Home />} />
          <Route path="product/:id" element={<PropertyDetails />} /> 
      </Routes>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
