import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbare from "./assets/Navbar";
import Home from "./Pages/Home";
import Project from "./Pages/Project";
import About from "./Pages/About";

function App() {
  return (
    <BrowserRouter>
      <Navbare />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Projects" element={<Project />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
