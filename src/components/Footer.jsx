import { useState } from 'react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser'; // ✅ Import EmailJS
import logo from '../assets/output-onlinepngtools.png';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!email) return;

    emailjs
      .send(
        'service_exl5pbq', // ✅ Replace with your service ID
        'template_7tr9sbp', // ✅ Replace with your template ID
        { user_email: email },
        'EFgyQlCLVT-9UjQiG' // ✅ Replace with your public key
      )
      .then(
        () => {
          setSubmitted(true);
          setEmail('');
        },
        (err) => {
          console.error('EmailJS error:', err);
          setError('Failed to subscribe. Please try again later or email us directly.');
        }
      );
  };

  return (
    <footer className="bg-blue-50 text-[#1E1E1E] font-[Poppins] px-6 py-12 border-t border-gray-200">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Branding */}
        <div>
          <Link to="/" className="flex items-center space-x-2 mb-4">
            <img src={logo} alt="Codeminds Logo" className="h-10 w-auto" />
          </Link>
          <p className="text-sm text-gray-600 mb-4">
            Empowering learners worldwide with accessible, high-quality education.
          </p>
          <ul className="text-sm text-gray-600 space-y-1">
            <li><strong>Email:</strong> <a href="mailto:codemindswebservices@gmail.com" className="hover:text-[#0056D2] transition">codemindswebservices@gmail.com</a></li>
            <li><strong>Phone:</strong> 93902 28526 / 81422 85266</li>
            <li><strong>Address:</strong> Brindavan Colony, Ibrahimpatnam-501506,<br />Rangareddy, Hyderabad, TG.</li>
            <li><strong>Founder:</strong> Srinivas Rao</li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold text-[#0056D2] mb-3">Services</h3>
          <ul className="text-sm space-y-2 text-gray-700">
            <li><strong>Web Development</strong></li>
            <ul className="text-sm text-gray-500 ml-4 space-y-1">
              <li>• Static/Dynamic Websites</li>
              <li>• E-commerce Solutions</li>
              <li>• Web Applications</li>
            </ul>
            <li className="mt-3"><strong>Digital Marketing</strong></li>
            <ul className="text-sm text-gray-500 ml-4 space-y-1">
              <li>• SEO</li>
              <li>• SMM</li>
              <li>• PPC</li>
              <li>• Content Marketing</li>
              <li>• Branding & Strategy</li>
            </ul>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-[#0056D2] mb-3">Quick Links</h3>
          <ul className="text-sm space-y-2 text-gray-700">
            <li><Link to="/" className="hover:text-[#0056D2] transition">Home</Link></li>
            <li><Link to="/services" className="hover:text-[#0056D2] transition">Services</Link></li>
            <li><Link to="/portfolio" className="hover:text-[#0056D2] transition">Portfolio</Link></li>
            <li><Link to="/contact" className="hover:text-[#0056D2] transition">Contact</Link></li>
            <li><Link to="/legal" className="hover:text-[#0056D2] transition">Privacy Policy</Link></li>
            <li><Link to="/legal" className="hover:text-[#0056D2] transition">Terms & Conditions</Link></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold text-[#0056D2] mb-3">Newsletter</h3>
          <p className="text-sm text-gray-600 mb-4">
            Subscribe for updates and free resources.
          </p>
          {!submitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col space-y-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="px-4 py-2 rounded-md border border-gray-300 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0056D2]"
              />
              <button
                type="submit"
                className="bg-[#0056D2] hover:bg-blue-700 text-white py-2 px-4 rounded-md transition"
              >
                Subscribe
              </button>
              {error && <span className="text-red-500 text-sm">{error}</span>}
            </form>
          ) : (
            <div className="text-green-600 text-sm font-medium">
              ✅ Thank you for subscribing! We'll keep you updated.
            </div>
          )}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-gray-200 pt-4 text-center text-sm text-gray-500">
        © 2025 <span className="text-[#0056D2] font-semibold">Codeminds</span>. All rights reserved.
      </div>
    </footer>
  );
}
