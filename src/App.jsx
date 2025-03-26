import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./components/Navbar"; // Import Navbar globally
import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import Company from "./pages/Company";
import Resources from "./pages/Resources";
import ContactPage from "./pages/Contact";
import FeaturesPage from "./pages/Features";
import PricingPage from "./pages/Pricing";
import SecurityPage from "./pages/SecurityPage"
import CaseStudiesPage from "./pages/CaseStudies";

// ScrollToTop component
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* Add ScrollToTop component here */}
      <Navbar /> {/* Navbar is now global and appears on all pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/security" element={<SecurityPage />} />
        <Route path="/case-studies" element={<CaseStudiesPage />} />
        <Route path="/resources" element={<Resources />} />
      </Routes>
    </Router>
  );
}

export default App;