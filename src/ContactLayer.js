import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import './ContactLayer.css'; // Import file CSS
const ContactLayer = () => {
  return (
    <div className="contact-layer mx-auto px-8 py-4 shadow-lg flex justify-around items-center">
      {/* Quick Contact Section */}
      <div className="flex items-center">
        <div className="flex flex-col items-start">
          <p className="text-lg font-bold text-white mb-1">Quick Contact</p> {/* Teks menjadi putih */}
          <div className="flex items-center mb-1">
            <FaPhone className="mr-2 icon-color" size={18} />
            <p className="text-white text-sm"><strong>Telp:</strong> +62 811-663-559</p> {/* Teks menjadi putih */}
          </div>
          <div className="flex items-center">
            <FaEnvelope className="mr-2 icon-color" size={18} />
            <p className="text-white text-sm"><strong>Email:</strong> office@sawitechgroup.co.id</p> {/* Teks menjadi putih */}
          </div>
        </div>
      </div>

      {/* Divider (Garis Pemisah) */}
      <div className="h-10 w-0.5 bg-gray-300"></div>

      {/* Our Location Section */}
      <div className="flex items-center">
        <div className="flex flex-col items-start">
          <p className="text-lg font-bold text-white mb-1">Our Location</p> {/* Teks menjadi putih */}
          <div className="flex items-center">
            <FaMapMarkerAlt className="mr-2 icon-color" size={18} />
            <p className="text-white text-sm">
              Jl. By Pass KM, 20 No. 168 RT. 02 RW. 03, <br />
              Kel. Balai Gadang Kec. Koto Tangah,<br/>
              Kota Padang, Sumatera Barat
            </p> {/* Teks menjadi putih */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactLayer;