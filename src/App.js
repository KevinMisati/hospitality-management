import './App.css';
import Home from "./Pages/Home"
import Product from "./Pages/ProductDetails"
import Header from "./Components/Header"
import {Routes,Route} from "react-router-dom"


function App() {
  return (
    <div className="App">
      <header>
        
        <Header />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="product/:id" element={<Product />} /> 
      </Routes>
    </div>
  );
}

export default App;
