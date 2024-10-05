import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import HeroSection from './HeroSection';
import About from './About';
import OurService from './OurService';
import OurProduct from './OurProduct'; // Menggunakan OurProduct yang telah dimodifikasi
import ContactLayer from './ContactLayer'; // Import ContactLayer
import CreditLayer from './CreditLayer';
import Project from './Project'; // Import Project
import Contact from './Contact'; // Import Contact

function App() {
  return (
    <Router>
      <div>
        {/* Header untuk Navigasi */}
        <Header />
        
        {/* Bagian Routes untuk Routing Halaman */}
        <Routes>
          {/* Halaman Beranda */}
          <Route 
            path="/" 
            element={
              <>
                <HeroSection />
                <ContactLayer />
                <OurService />
                <CreditLayer />
              </>
            } 
          />

          {/* Halaman About */}
          <Route path="/about" element={<About />} />

          {/* Halaman Services */}
          <Route path="/services" element={<OurService />} />

          {/* Halaman Product */}
          <Route path="/product" element={<OurProduct />} /> {/* Mengganti rute menjadi /product */}

          {/* Halaman Projects */}
          <Route path="/projects" element={<Project />} /> 

          {/* Halaman Contact */}
          <Route path="/contact" element={<Contact />} /> {/* Tambahkan route untuk halaman Contact */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;