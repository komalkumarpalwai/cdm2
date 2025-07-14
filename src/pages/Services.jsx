import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const servicesData = {
  knowvity: {
    title: "E-learning & Offline Coaching",
    subtitle: "Knowvity Education Solutions",
    icon: "📘",
    bgColor: "bg-[#2563eb]",
    textColor: "text-white",
    cardBg: "bg-white/10 backdrop-blur-xl",
    cardBorder: "border-white/20",
    services: [
      {
        name: "Full-Stack Coding Bootcamp",
        pricing: "Starting at ₹9,999",
        highlights: [
          "Frontend & Backend included",
          "Project-based learning",
          "Interview & career prep",
          "Certificate upon completion"
        ],
        popular: true
      },
      {
        name: "Offline Weekend Coaching",
        pricing: "₹5,499 / month",
        highlights: [
          "Live weekend classes",
          "Doubt-clearing sessions",
          "Mock tests & career support",
          "Study materials included"
        ]
      },
      {
        name: "Corporate Training",
        pricing: "Custom pricing",
        highlights: [
          "Tailored tech upskilling",
          "Team-based learning",
          "Industry-relevant curriculum",
          "Ongoing support"
        ]
      }
    ]
  },
  photography: {
    title: "Professional Photography",
    subtitle: "Thepurepic Creative Studio",
    icon: "📸",
    bgColor: "bg-white",
    textColor: "text-[#1e293b]",
    cardBg: "bg-gradient-to-br from-[#f8fafc] to-[#f1f5f9]",
    cardBorder: "border-[#e2e8f0]",
    services: [
      {
        name: "Wedding Photography",
        pricing: "Starts from ₹30,000",
        highlights: [
          "Cinematic wedding shoots",
          "Candid & traditional styles",
          "Creative pre-wedding sessions",
          "Premium album designs"
        ],
        popular: true
      },
      {
        name: "Brand & Product Shoots",
        pricing: "Custom pricing available",
        highlights: [
          "Studio or on-location shoots",
          "Advanced editing & retouching",
          "Fast delivery with creative assets",
          "Commercial usage rights"
        ]
      },
      {
        name: "Portfolio Sessions",
        pricing: "₹8,500 per session",
        highlights: [
          "Professional headshots",
          "Creative direction",
          "Multiple outfit changes",
          "Digital & print-ready files"
        ]
      }
    ]
  },
  digitalAgency: {
    title: "Digital Marketing",
    subtitle: "WeAreSVMedia Agency",
    icon: "📊",
    bgColor: "bg-[#1e293b]",
    textColor: "text-white",
    cardBg: "bg-gradient-to-br from-[#334155] to-[#1e293b]",
    cardBorder: "border-[#475569]",
    services: [
      {
        name: "Social Media Management",
        pricing: "₹12,000 / month",
        highlights: [
          "Platform setup & strategy",
          "Daily posting + reels",
          "Community engagement",
          "Monthly analytics report"
        ],
        popular: true
      },
      {
        name: "Performance Marketing",
        pricing: "Custom packages",
        highlights: [
          "Google & Meta ads",
          "Conversion tracking",
          "Weekly reporting",
          "ROI optimization"
        ]
      },
      {
        name: "Content Creation",
        pricing: "₹8,000 / month",
        highlights: [
          "Professional copywriting",
          "Visual content production",
          "Brand storytelling",
          "Platform-specific content"
        ]
      }
    ]
  }
};

export default function Services() {
  const navigate = useNavigate();
  const { knowvity, photography, digitalAgency } = servicesData;

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleAddNow = (serviceName) => {
    navigate('/contact', { state: { selectedService: serviceName } });
  };

  const ServiceCard = ({ service, config, index }) => (
    <div
      className={`${config.cardBg} border ${config.cardBorder} rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl relative overflow-hidden h-full flex flex-col`}
      data-aos="fade-up"
      data-aos-delay={index * 100}
    >
      {service.popular && (
        <div className="absolute top-0 right-0 bg-[#0056D2] text-white text-xs font-bold px-3 py-1 rounded-bl-lg cursor-pointer">
          POPULAR
        </div>
      )}
      <div className={`text-5xl mb-4 ${config.textColor}`}>{config.icon}</div>
      <h3 className={`text-xl font-bold mb-2 ${config.textColor}`}>
        {service.name}
      </h3>
      <p className={`mb-4 font-medium ${config.textColor === "text-white" ? "text-blue-200" : "text-blue-600"}`}>
        {service.pricing}
      </p>
      <ul className="list-disc list-inside space-y-2 text-sm flex-grow">
        {service.highlights.map((point, idx) => (
          <li 
            key={idx} 
            className={config.textColor === "text-white" ? "text-blue-100" : "text-slate-600"}
          >
            {point}
          </li>
        ))}
      </ul>
      <button
        onClick={() => handleAddNow(service.name)}
        className={`mt-6 w-full py-2 rounded-lg font-medium ${
          config.textColor === "text-white"
            ? "bg-white text-blue-600 hover:bg-blue-50"
            : "bg-blue-600 text-white hover:bg-blue-700"
        } transition-colors cursor-pointer`}
      >
        Add Now
      </button>
    </div>
  );

  return (
    <div className="font-[Poppins]">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#000814] via-[#001D3D] to-[#003566] text-white py-28 text-center overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20 bg-grid-pattern bg-repeat"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-0"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <div className="inline-flex items-center bg-blue-900/30 border border-blue-400/30 rounded-full px-4 py-1 mb-4 text-sm cursor-pointer">
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-300"></span>
            </span>
            Comprehensive Digital Solutions
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
            Transform Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-500">Digital Presence</span>
          </h1>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-8">
            From immersive education to stunning visuals and strategic marketing - we deliver exceptional results across all digital domains.
          </p>
          <div className="flex gap-4 justify-center">
            <button 
              onClick={() => navigate('/contact')}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full font-medium text-white shadow-lg hover:shadow-blue-700/50 transition-all duration-300 flex items-center cursor-pointer"
            >
              Get Free Consultation
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            <button 
              onClick={() => navigate('/portfolio')}
              className="px-6 py-3 bg-transparent hover:bg-white/10 border border-white/30 rounded-full font-medium text-white shadow-lg transition-all duration-300 flex items-center cursor-pointer"
            >
              View Case Studies
            </button>
          </div>
        </div>
      </section>

      {/* Knowvity Section */}
      <section className={`relative ${knowvity.bgColor} ${knowvity.textColor} py-24 overflow-hidden`}>
        <div className="absolute inset-0 opacity-10 bg-circuit-pattern"></div>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">{knowvity.title}</h2>
            <p className="text-xl opacity-80">{knowvity.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {knowvity.services.map((service, i) => (
              <ServiceCard key={i} service={service} config={knowvity} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Photography Section */}
      <section className={`relative ${photography.bgColor} ${photography.textColor} py-24 overflow-hidden`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">{photography.title}</h2>
            <p className="text-xl opacity-80">{photography.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {photography.services.map((service, i) => (
              <ServiceCard key={i} service={service} config={photography} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Digital Agency Section */}
      <section className={`relative ${digitalAgency.bgColor} ${digitalAgency.textColor} py-24 overflow-hidden`}>
        <div className="absolute inset-0 opacity-10 bg-connection-pattern"></div>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">{digitalAgency.title}</h2>
            <p className="text-xl opacity-80">{digitalAgency.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {digitalAgency.services.map((service, i) => (
              <ServiceCard key={i} service={service} config={digitalAgency} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-noise-pattern"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Elevate Your Business?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Our team of experts is ready to help you achieve your goals across education, photography, and digital marketing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => navigate('/contact')}
              className="px-8 py-4 bg-white text-blue-600 hover:bg-blue-50 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center cursor-pointer"
            >
              Book a Discovery Call
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </button>
            <button 
              onClick={() => navigate('/portfolio')}
              className="px-8 py-4 bg-transparent hover:bg-white/10 border-2 border-white rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center cursor-pointer"
            >
              View Portfolio
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}