import React from "react";
import Navbar from "./components/Navbar";
import Menu from './components/Menu';
import About from './pages/About';
import Contact from './pages/Contact';

const App = () => (
  <div>
    <Navbar />
    <About/>
    <Menu />
    <Contact />
  </div>
);

export default App;