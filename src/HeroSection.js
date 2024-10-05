import React from 'react';
import './HeroSection.css'; // Import file CSS untuk animasi

const HeroSection = () => {
  return (
    <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/Hero1.png'})` }}>
      <div className="absolute inset-0 flex flex-col items-start justify-center px-8 md:px-16 font-body">
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
        <div className="space-x-4 animate-slide-in" style={{ animationDelay: '2s' }}>
          <button
            className="bg-[#F57C00] text-white px-6 py-3 rounded hover:bg-[#FF9800] transition duration-300"
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