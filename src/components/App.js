import React, {useState} from 'react';
import { Routes, Route, useHistory } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Admin from "./Admin";
import About from "./About";
import Menu from "./Menu";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  return (
    <div className="App">
     <NavBar setLogin={setIsLoggedIn} />
     <Routes>
      
      <Route exact path="/about" element={
      <About />
      }/>
      
      <Route exact path="/admin" element={
      <Admin isLoggedIn={isLoggedIn} setLogin={setIsLoggedIn} />
      }/>
      
      <Route exact path="/menu" element={
      <Menu />
      }/>
      
      <Route exact path="/" element={
      <Home />
      }/>
    
    </Routes>
    </div>
  );
}

export default App;
