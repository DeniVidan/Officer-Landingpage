import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"; // Import Navbar globally
import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import Company from "./pages/Company";
import Resources from "./pages/Resources";

function App() {
  return (
    <Router>
      <Navbar /> {/* Navbar is now global and appears on all pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/company" element={<Company />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/resources" element={<Resources />} />
      </Routes>

    </Router>
  );
}

export default App;
