import React, { useEffect, useRef, useState } from 'react';
import './OurService.css'; // Import file CSS untuk styling

const OurService = () => {
  const [completedProject, setCompletedProject] = useState(0);
  const [yearsExperience, setYearsExperience] = useState(0);
  const [professionalTeam, setProfessionalTeam] = useState(0);
  const [certifications, setCertifications] = useState(0);

  const serviceSectionRef = useRef(null);
  const hasAnimated = useRef(false);

  // Fungsi untuk mengatur animasi bertambahnya angka
  const animateNumbers = (start, end, setState, duration = 4000) => {
    let startTime;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const currentNumber = Math.floor(progress * (end - start) + start);
      setState(currentNumber);
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
  };

  // Fungsi untuk menjalankan animasi angka saat elemen masuk ke viewport
  const handleScrollAnimation = () => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          animateNumbers(0, 120, setCompletedProject);
          animateNumbers(0, 20, setYearsExperience);
          animateNumbers(0, 260, setProfessionalTeam);
          animateNumbers(0, 9, setCertifications);
          hasAnimated.current = true;
          observer.disconnect();
        }
      });
    }, { threshold: 0.5 });
    observer.observe(serviceSectionRef.current);
  };

  useEffect(() => {
    handleScrollAnimation();
  }, []);

  return (
    <div ref={serviceSectionRef} className="our-service-section">
      {/* Slogan */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-orange-600 uppercase tracking-wider">Our Services</h2>
        <h1 className="text-5xl font-extrabold text-gray-800 mt-4">
          Empowering <span className="text-orange-600">Your Business</span>
        </h1>
        <p className="text-lg text-gray-600 mt-4">We deliver the best engineering solutions tailored to your needs.</p>
      </div>

      {/* Gambar dan Layanan */}
      <div className="services-grid">
        {/* Kolom Kiri - Ikon dan Teks Layanan */}
        <div className="service-item">
          <img src="/steel.svg" alt="Steel Structure" className="service-icon" />
          <p className="service-text">Steel Structure</p>
        </div>
        <div className="service-item">
          <img src="/infrastructure.svg" alt="Infrastructure" className="service-icon" />
          <p className="service-text">Infrastructure</p>
        </div>
        {/* Gambar Full Body di Tengah */}
        <div className="engineer-image-container">
          <img src="/engineer.png" alt="Engineer" className="engineer-image" />
        </div>
        {/* Kolom Kanan - Ikon dan Teks Layanan */}
        <div className="service-item">
          <img src="/industrial.svg" alt="Palm Oil Mill Construction" className="service-icon" />
          <p className="service-text">Palm Oil Mill Construction</p>
        </div>
        <div className="service-item">
          <img src="/civil.svg" alt="Civil Construction" className="service-icon" />
          <p className="service-text">Civil Construction</p>
        </div>
      </div>

      {/* Statistik */}
      <div className="stats-grid">
        <div className="stats-box">
          <h2 className="stats-number">{completedProject}+</h2>
          <p className="stats-label">Completed Projects</p>
        </div>
        <div className="stats-box">
          <h2 className="stats-number">{yearsExperience}+</h2>
          <p className="stats-label">Years Experience</p>
        </div>
        <div className="stats-box">
          <h2 className="stats-number">{professionalTeam}+</h2>
          <p className="stats-label">Professional Team</p>
        </div>
        <div className="stats-box">
          <h2 className="stats-number">{certifications}+</h2>
          <p className="stats-label">Certifications</p>
        </div>
      </div>
    </div>
  );
};

export default OurService;