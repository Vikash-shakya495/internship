import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Cart from "./pages/Cart";
import Home from './pages/Home';
import About from './pages/About';
import Menu from './components/Menu';

const App = () => (
<Router>
  <Navbar />
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/cart" element={<Cart />} />
    <Route path="/about" element={<About/>} />
    <Route path="/menu" element={<Menu />} />
  </Routes>
</Router>
);

export default App;