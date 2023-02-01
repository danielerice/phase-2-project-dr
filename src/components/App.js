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
     <NavBar isLoggedIn={isLoggedIn} setLogin={setIsLoggedIn} />
     <Routes>
      
      <Route path="about" element={
      <About />
      }></Route>
      
      <Route  path="admin" element={
      <Admin isLoggedIn={isLoggedIn} setLogin={setIsLoggedIn} />
      }></Route>
      
      <Route path="menu" element={
      <Menu />
      }></Route>
      
      <Route exact path="/" element={
      <Home />
      }></Route>
    
    </Routes>
    </div>
  );
}

export default App;
