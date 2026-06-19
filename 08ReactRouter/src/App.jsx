import { Routes, Route } from "react-router-dom";

import Home from "./Componenets/Home.jsx";
import About from "./Componenets/About.jsx";
import Contact from "./Componenets/Footer.jsx";
import User from "./Componenets/User.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/about" element={<About />} />

      <Route path="/User/:username" element={<User />} />

      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
