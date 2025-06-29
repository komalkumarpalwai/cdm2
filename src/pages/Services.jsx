import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { servicesData } from "../data/services";

export default function Services() {
  const webDev = servicesData.webDevelopment;
  const marketing = servicesData.digitalMarketing;

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="font-[Poppins]">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-black via-[#0A0F2C] to-[#001F49] text-white py-24 text-center overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30 bg-stars-pattern bg-repeat animate-pulse"></div>

        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight leading-tight">
            🚀 Our Digital Solutions Engineered for Growth
          </h1>
          <p className="text-gray-300 mb-8 text-lg">
            Everything from website creation to traffic generation — under one roof.
          </p>
          <button className="px-8 py-3 bg-[#0056D2] hover:bg-[#003F9E] rounded-full font-medium text-white shadow-lg hover:shadow-blue-700 transition duration-300">
            Get Your Free Consultation
          </button>
        </div>
      </section>

      {/* Web Development Services */}
      <section className="relative bg-[#0056D2] text-white py-24 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            {webDev.title}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {webDev.services.map((service, i) => (
              <div
                key={i}
                className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-white/20"
                data-aos="fade-up"
              >
                <div className="text-5xl mb-4">{webDev.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                <p className="text-gray-200 mb-4">{service.pricing}</p>
                <ul className="list-disc list-inside text-gray-100 space-y-1 text-sm">
                  {service.highlights.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Digital Marketing Services */}
      <section className="relative bg-[#F9F9F9] py-24 text-[#1E1E1E] overflow-hidden">
        <div className="absolute top-0 left-0 w-60 h-60 bg-[#0056D2] rounded-full blur-3xl opacity-20 animate-float-slow"></div>
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            {marketing.title}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {marketing.services.map((service, i) => (
              <div
                key={i}
                className="bg-white rounded-3xl p-6 shadow-md hover:shadow-lg hover:shadow-[#0056D2]/30 transition-all duration-300"
                data-aos="fade-up"
              >
                <div className="text-5xl mb-4">{marketing.icon}</div>
                <h3 className="text-xl font-bold mb-2">{service.name}</h3>
                <p className="text-gray-600 mb-4">{service.pricing}</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                  {service.highlights.map((feat, idx) => (
                    <li key={idx}>{feat}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
