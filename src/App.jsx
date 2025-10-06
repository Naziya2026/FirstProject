import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";
import ServicesDetails from "./pages/ServicesDetails";
import GalleryDetail from "./pages/GalleryDetail"; // ✅ This line is important

function App() {
  return (
    <Router>
      <Header />
      <main style={{ paddingTop: "100px", paddingBottom: "80px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/gallery/testi3" element={<GalleryDetail />} /> {/* ✅ This line */}
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services-details" element={<ServicesDetails />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
