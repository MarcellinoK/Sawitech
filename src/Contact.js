import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FaPhoneAlt, FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import './Contact.css'; // Import CSS untuk animasi tambahan

const Contact = () => {
  const form = useRef();

  // Fungsi untuk mengirim email
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_blyx0a8', 'template_ejwy01k', form.current, '1nWaI3LRcdCJrSkOW')
      .then(
        (result) => {
          console.log('SUCCESS!', result.text);
          Swal.fire({
            icon: 'success',
            title: 'Message Sent Successfully!',
            text: 'Thank you for contacting us, we will contact back to you soon.',
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'OK',
          });
        },
        (error) => {
          console.log('FAILED...', error.text);
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Failed to send the message. Please try again.',
            confirmButtonColor: '#d33',
            confirmButtonText: 'OK',
          });
        },
      );

    // Mereset form setelah mengirim
    e.target.reset();
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center py-12 px-6 lg:px-8 contact-container">
      <div className="max-w-5xl w-full lg:flex gap-12">
        {/* Bagian Informasi Kontak */}
        <div className="bg-white p-8 rounded-lg shadow-lg lg:w-1/2 contact-info animate-fade-in">
          <h2 className="text-lg font-bold text-yellow-500 mb-2">GET IN TOUCH</h2>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">WE BRING THE BEST SOLUTION</h1>
          <p className="text-gray-600 mb-6">We'd love to hear from you</p>
          <div className="space-y-4">
            <div className="flex items-start contact-item animate-slide-up">
              <FaPhoneAlt className="text-yellow-500 w-6 h-6 mr-4" />
              <p className="text-gray-700"><strong>Phone Number:</strong> 0761-840-3459</p>
            </div>
            <div className="flex items-start contact-item animate-slide-up">
              <FaWhatsapp className="text-yellow-500 w-6 h-6 mr-4" />
              <p className="text-gray-700"><strong>WhatsApp:</strong> 0811-663-559</p>
            </div>
            <div className="flex items-start contact-item animate-slide-up">
              <FaEnvelope className="text-yellow-500 w-6 h-6 mr-4" />
              <p className="text-gray-700"><strong>Email:</strong> office@sawitechgroup.co.id</p>
            </div>
            <div className="flex items-start contact-item animate-slide-up">
              <FaMapMarkerAlt className="text-yellow-500 w-6 h-6 mr-4" />
              <p className="text-gray-700"><strong>Main Office:</strong> Jl. By Pass KM, 20 No. 168, <br />
              Kel. Balai Gadang Kec. Koto Tangah,<br/>
              Kota Padang, Sumatera Barat</p>
            </div>
          </div>
        </div>

        {/* Bagian Formulir Kontak */}
        <div className="bg-white p-8 rounded-lg shadow-lg lg:w-1/2 border border-gray-200 contact-form animate-fade-in">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">FILL THE FORM BELOW</h2>
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <div className="form-group animate-fade-in">
              <label htmlFor="from_name" className="block text-sm font-bold mb-2 text-gray-800">
                Your Name
              </label>
              <input
                type="text"
                id="from_name"
                name="from_name"
                autoComplete="off"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-500"
                required
              />
            </div>
            <div className="form-group animate-fade-in">
              <label htmlFor="company" className="block text-sm font-bold mb-2 text-gray-800">
                Company
              </label>
              <input
                type="text"
                id="company"
                name="company"
                autoComplete="off"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-500"
                required
              />
            </div>
            <div className="form-group animate-fade-in">
              <label htmlFor="phone" className="block text-sm font-bold mb-2 text-gray-800">
                Phone Number
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                autoComplete="off"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-500"
                required
              />
            </div>
            <div className="form-group animate-fade-in">
              <label htmlFor="email" className="block text-sm font-bold mb-2 text-gray-800">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                autoComplete="off"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-500"
                required
              />
            </div>
            <div className="form-group animate-fade-in">
              <label htmlFor="message" className="block text-sm font-bold mb-2 text-gray-800">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                autoComplete="off"
                rows="5"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-500"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-yellow-500 text-white font-bold py-3 rounded-lg hover:bg-yellow-600 transition duration-300 animate-bounce-in"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;