import React from 'react';
import './HeroSection.css'; // Import file CSS untuk animasi

const HeroSection = () => {
  return (
    <div 
      className="relative hero-background" 
      style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/hero1.png'})` }} // Pastikan nama file sesuai
    >
      <div className="hero-content">
        {/* Nama Perusahaan */}
        <h1 className="text-white text-xl md:text-2xl font-semibold animate-fade-in" style={{ fontFamily: 'sans-serif', animationDelay: '0.5s' }}>
          PT. SAWITECH PADANG
        </h1>

        {/* Headline */}
        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight text-[#F57C00] animate-slide-in" style={{ fontFamily: 'sans-serif', animationDelay: '1s' }}>
          WE ARE YOUR <br /> SOLUTION
        </h1>

        {/* Deskripsi */}
        <p className="text-white mb-6 max-w-xl text-base md:text-lg leading-relaxed animate-fade-in" style={{ fontFamily: 'sans-serif', color: '#f0f0f0', animationDelay: '1.5s' }}>
          Tempat Yang Sesuai Untuk Masalahmu <br />
          Ayo, Temukan Kebutuhanmu!
        </p>

        {/* Tombol */}
        <div className="animate-slide-in" style={{ animationDelay: '2s' }}>
          <button
            className="bg-[#F57C00] text-white px-6 py-3 rounded hover:bg-[#FF9800] transition duration-300 w-full" // Tombol lebar penuh
            style={{ fontFamily: 'sans-serif' }}
          >
            OUR PROJECT
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;