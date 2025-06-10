import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Hombres from "./pages/Hombres.jsx";
import Mujeres from "./pages/Mujeres.jsx";
import Accesorios from "./pages/Accesorios.jsx";
import Login from "./pages/Login.jsx";




function App() {
  return (
    <>
      <Navbar />
      <div className="p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/hombres" element={<Hombres />} />
          <Route path="/mujeres" element={<Mujeres />} />
          <Route path="/accesorios" element={<Accesorios />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
