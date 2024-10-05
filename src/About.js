import React from 'react';
import './About.css'; // Import file CSS
import CreditLayer from './CreditLayer'; // Import Credit Layer

const About = () => {
  return (
    <div className="about-container">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-overlay"></div>
        <img src="/about1.png" alt="Hero About Us" className="hero-image" />
        <div className="hero-content">
          <h1 className="hero-title animate-slide-in">About Us</h1>
          <p className="breadcrumb animate-slide-in">
            <a href="/" className="breadcrumb-link">Home</a> / About Us
          </p>
        </div>
      </section>

      {/* Section Tentang Kami */}
      <section className="about-content">
        <div className="container">
          <div className="about-description animate-fade-in">
            <h2 className="section-title">Tentang PT. SAWITECH</h2>
            <p className="section-subtitle">
              PT. SAWITECH adalah perusahaan terkemuka yang bergerak di bidang penyediaan sparepart industri dan layanan konstruksi.
            </p>
          </div>

          {/* Experience & Milestones */}
          <div className="about-grid animate-fade-in">
            {/* Experience Section */}
            <div className="experience-section">
              <h3 className="text-3xl font-bold text-gray-800 mb-4">20+ Years of Experience</h3>
              <p className="text-gray-700 leading-relaxed">
                Dengan lebih dari 20 tahun pengalaman di industri ini, kami telah berhasil menyelesaikan berbagai proyek penting di berbagai wilayah Indonesia, terutama dalam penyediaan sparepart dan layanan konstruksi untuk pabrik.
              </p>
            </div>

            {/* Milestones Section */}
            <div className="milestones-section">
              <h3 className="text-3xl font-bold text-gray-800 mb-4">Milestones</h3>
              <ul className="milestones-list">
                <li><strong>2002:</strong> Pendirian PT. SAWITECH dan penyelesaian proyek pertama untuk pabrik sawit.</li>
                <li><strong>2016:</strong> Ekspansi ke konstruksi industri dan komersial.</li>
                <li><strong>2019:</strong> Pembukaan kantor cabang di Sumatera Barat.</li>
              </ul>
            </div>
          </div>

          {/* Vision & Mission */}
          <div className="vision-mission-section">
            <div className="vision animate-slide-up">
              <h3 className="vision-title">Vision</h3>
              <p className="vision-text">Menjadi pemimpin industri dalam penyediaan solusi inovatif dan berkelanjutan.</p>
            </div>

            <div className="mission animate-slide-up">
              <h3 className="mission-title">Mission</h3>
              <p className="mission-text">Memberikan layanan konstruksi dan penyediaan sparepart berkualitas yang mendukung pertumbuhan industri di seluruh Indonesia.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="founder-section text-center">
        <div className="container">
          <h2 className="section-title">Founder</h2>
          <div className="founder-card mx-auto">
            <img src="/founder1.png" alt="Founder 1" className="founder-image" />
            <h3 className="founder -name">Albert Kho</h3>
            <p className="founder-title">Direktur & Founder</p>
          </div>
        </div>
      </section>

      {/* Tim Profesional Kami */}
      <section className="team-section">
        <div className="container">
          <h2 className="section-title">Tim Profesional Kami</h2>
          <div className="team-group-card mx-auto">
            <img src="/team1.png" alt="Tim Profesional" className="team-group-image" style={{ width: '80%', maxWidth: '600px', margin: '0 auto' }} />
            <div className="team-group-content text-center mt-4">
              <p className="team-group-description">
                Tim profesional kami terdiri dari individu-individu yang berpengalaman dan berdedikasi dalam berbagai bidang konstruksi dan penyediaan sparepart industri. Mereka bekerja bersama untuk memastikan keberhasilan setiap proyek dengan keahlian dan dedikasi yang luar biasa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Menambahkan Credit Layer di bagian paling bawah */}
      <CreditLayer />
    </div>
  );
};

export default About;