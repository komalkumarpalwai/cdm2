import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {Link} from "react-router-dom"
export default function AboutCodeMinds() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="font-[Poppins] text-[#1E1E1E]  mt-10">
      <section className="bg-[#F4F4F4] py-16 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-[#0056D2]  " data-aos="fade-up">
          About CodeMinds Web Services
        </h1>
        <p className="mt-4 text-lg md:text-xl" data-aos="fade-up" data-aos-delay="100">
          Empowering Offline Businesses to Thrive Online
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-12 grid gap-12">
        <div data-aos="fade-up">
          <h2 className="text-3xl font-semibold text-[#0056D2] mb-4">Our Vision</h2>
          <p>
            To bridge the gap between traditional businesses and the digital world by delivering high-quality,
            accessible, and results-driven websites that fuel growth and customer engagement.
          </p>
        </div>

        <div data-aos="fade-up">
          <h2 className="text-3xl font-semibold text-[#0056D2] mb-4">Our Mission</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>✔ Tailored website development that reflects your brand.</li>
            <li>✔ Seamless e-commerce solutions to boost sales.</li>
            <li>✔ Strategic SEO optimization to increase visibility.</li>
            <li>✔ User-centric designs that prioritize clarity and conversions.</li>
          </ul>
        </div>

        <div data-aos="fade-up">
          <h2 className="text-3xl font-semibold text-[#0056D2] mb-4">Our Story</h2>
          <p>
            Founded with the belief that every business deserves a digital footprint, CodeMinds began as a passion
            project to help offline businesses compete in an online-first world. Today, we combine technical expertise
            with creative problem-solving to build websites that are fast, functional, and future-ready.
          </p>
        </div>

        <div data-aos="fade-up">
          <h2 className="text-3xl font-semibold text-[#0056D2] mb-4">Our Leadership</h2>
          <p>
            Our team is led by industry professionals who blend web development mastery with business acumen. We’re not
            just coders—we’re digital partners committed to your success.
          </p>
        </div>

        <div data-aos="fade-up">
          <h2 className="text-3xl font-semibold text-[#0056D2] mb-4">Our Core Values</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>🔹 Clarity & Simplicity – Clean designs with intuitive navigation.</li>
            <li>🔹 Results-Driven – Websites built to attract and convert customers.</li>
            <li>🔹 Integrity – Transparent pricing, no hidden fees.</li>
            <li>🔹 Innovation – Staying ahead with modern tech and trends.</li>
            <li>🔹 Partnership – Your growth is our priority.</li>
          </ul>
        </div>

        <div data-aos="fade-up">
          <h2 className="text-3xl font-semibold text-[#0056D2] mb-4">Why Choose CodeMinds?</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>✨ Minimalist & Professional Designs – No clutter, just impact.</li>
            <li>✨ Mobile-First Approach – Flawless performance on all devices.</li>
            <li>✨ Strong CTAs & Visual Hierarchy – Guiding users to take action.</li>
            <li>
              ✨ Brand-Aligned Aesthetics – Consistent use of Royal Blue (#0056D2) and fonts (Poppins, Roboto).
            </li>
          </ul>
        </div>

        <div className="text-center py-10" data-aos="fade-up">
          <h3 className="text-2xl font-semibold text-[#0056D2] mb-4">
            Let’s Build Your Digital Future Together!
          </h3>
          <p className="mb-4">📩 Get in touch today for a website that works as hard as you do.</p>
      <Link to="/contact">
  <button className="bg-[#0056D2] text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition cursor-pointer">
    Contact Us
  </button>
</Link>

        </div>
      </section>
    </div>
  );
}
