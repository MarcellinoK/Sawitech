import React from 'react';
import './OurProduct.css'; // Pastikan Anda menyesuaikan CSS file
import CreditLayer from './CreditLayer'; // Import Credit Layer
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const OurProduct = () => {
  return (
    <div className="our-products-container">
      {/* Hero Section */}
      <section className="products-hero">
        <div className="hero-overlay"></div>
        <img src="/products-hero.jpg" alt="Our Products" className="hero-image" />
        <div className="hero-content">
          <h1 className="hero-title animate-slide-in">Our Products</h1>
          <p className="breadcrumb animate-slide-in">
            <a href="/" className="breadcrumb-link">Home</a> / Our Products
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="products-section">
        <div className="container">
          <h2 className="section-title">Our Valued Products</h2>
          <p className="section-subtitle">
            Over the years, we have provided a range of high-quality products, trusted by our customers to meet their needs. Our products are designed to help you succeed in your projects.
          </p>

          {/* Swiper Slider */}
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            <SwiperSlide>
              <div className="product-card">
                <img src="/product1.png" alt="Conveyor" className="product-image" />
                <h3 className="product-title">Conveyor</h3>
                <p className="product-description">Efficient conveyor system for material handling.</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="product-card">
                <img src="/product2.png" alt="Crane" className="product-image" />
                <h3 className="product-title">Crane</h3>
                <p className="product-description">Heavy-duty crane for construction projects.</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="product-card">
                <img src="/product3.png" alt="Forklift" className="product-image" />
                <h3 className="product-title">Forklift</h3>
                <p className="product-description">Reliable forklift for warehouse logistics.</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="product-card">
                <img src="/product4.png" alt="Pulley" className="product-image" />
                <h3 className="product-title">Pulley System</h3>
                <p className="product-description">Durable pulley system for multiple industrial uses.</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="product-card">
                <img src="/product5.png" alt="Elevator" className="product-image" />
                <h3 className="product-title">Elevator</h3>
                <p className="product-description">Safe and efficient elevators for commercial buildings.</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="product-card">
                <img src="/product6.png" alt="Belt System" className="product-image" />
                <h3 className="product-title">Belt System</h3>
                <p className="product-description">High-quality belt system for smooth operations.</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      {/* Menambahkan Credit Layer di bagian paling bawah */}
      <CreditLayer />
    </div>
  );
};

export default OurProduct;