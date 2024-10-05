import React, { useState, useEffect } from 'react';
import './Project.css'; // Import CSS untuk styling dan animasi
import CreditLayer from './CreditLayer'; // Import Credit Layer

const projectsData = [
  {
    id: 1,
    category: 'Industrial',
    title: 'Industrial Project 1',
    image: '/industrial1.png', // Ganti dengan path gambar yang benar
  },
  {
    id: 2,
    category: 'Palm Oil Construction',
    title: 'Palm Oil Project 1',
    image: '/palmoil1.png',
  },
  {
    id: 3,
    category: 'Infrastructure',
    title: 'Infrastructure Project 1',
    image: '/infrastructure1.png',
  },
  {
    id: 4,
    category: 'Industrial',
    title: 'Industrial Project 2',
    image: '/industrial2.png',
  },
  {
    id: 5,
    category: 'Palm Oil Construction',
    title: 'Palm Oil Project 2',
    image: '/palmoil2.png',
  },
  {
    id: 6,
    category: 'Infrastructure',
    title: 'Infrastructure Project 2',
    image: '/infrastructure2.png',
  },
  {
    id: 7,
    category: 'Industrial',
    title: 'Industrial Project 3',
    image: '/industrial3.png',
  },
  {
    id: 8,
    category: 'Palm Oil Construction',
    title: 'Palm Oil Project 3',
    image: '/palmoil3.png',
  },
  {
    id: 9,
    category: 'Infrastructure',
    title: 'Infrastructure Project 3',
    image: '/infrastructure3.png',
  },
];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentIndex, setCurrentIndex] = useState(0);

  // Filter projects based on selected category
  const filteredProjects = selectedCategory === 'All'
    ? projectsData
    : projectsData.filter(project => project.category === selectedCategory);

  // Proyek yang akan ditampilkan di slide saat ini
  const displayedProjects = filteredProjects.slice(currentIndex * 4, currentIndex * 4 + 4);

  // Slide otomatis setiap 5 detik
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const maxIndex = Math.ceil(filteredProjects.length / 4) - 1;
        return prevIndex >= maxIndex ? 0 : prevIndex + 1;
      });
    }, 5000);
    return () => clearInterval(interval);
  }, [filteredProjects]);

  return (
    <div className="projects-container">
      {/* Hero Section */}
      <section className="project-hero animate-fade-in">
        <div className="hero-overlay"></div>
        <img src="/project.png" alt="Project Hero" className="hero-image animate-slide-in" />
        <div className="hero-content">
          <h1 className="hero-title animate-slide-in">Our Projects</h1>
          {/* Breadcrumb */}
          <p className="breadcrumb animate-fade-in">
            <a href="/" className="breadcrumb-link">Home</a> / <span className="breadcrumb-current">Our Projects</span>
          </p>
        </div>
      </section>

      {/* Filter Buttons */}
      <div className="projects-filter">
        <button 
          onClick={() => { setSelectedCategory('All'); setCurrentIndex(0); }} 
          className={selectedCategory === 'All' ? 'active' : ''}>
          All
        </button>
        <button 
          onClick={() => { setSelectedCategory('Palm Oil Construction'); setCurrentIndex(0); }} 
          className={selectedCategory === 'Palm Oil Construction' ? 'active' : ''}>
          Palm Oil Construction
        </button>
        <button 
          onClick={() => { setSelectedCategory('Industrial'); setCurrentIndex(0); }} 
          className={selectedCategory === 'Industrial' ? 'active' : ''}>
          Industrial
        </button>
        <button 
          onClick={() => { setSelectedCategory('Infrastructure'); setCurrentIndex(0); }} 
          className={selectedCategory === 'Infrastructure' ? 'active' : ''}>
          Infrastructure
        </button>
      </div>

      {/* Projects Grid */}
      <div className="projects-grid">
        {displayedProjects.length > 0 ? (
          displayedProjects.map((project) => (
            <div key={project.id} className="project-card animate-fade-in">
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="project-title">{project.title}</div>
            </div>
          ))
        ) : (
          <p className="no-projects animate-fade-in">No projects available in this category.</p>
        )}
      </div>

      {/* Tambahkan Credit Layer di bagian bawah */}
      <CreditLayer />
    </div>
  );
};

export default Projects;