// HomeServices.jsx
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const services = [
  {
    title: "E-learning & Coaching",
    subtitle: "Knowvity Education",
    image: "https://directionelearning.com/wp-content/uploads/2021/06/shutterstock_1940410141__1___1_-removebg-1.png",
    description: "Learn full-stack development, get placement-ready, or attend our offline bootcamps.",
    link: "/services#knowvity",
  },
  {
    title: "Photography Services",
    subtitle: "Thepurepic Studio",
    image: "https://www.indiafilings.com/learn/wp-content/uploads/2017/07/GST-Rate-for-Photography-Services.jpg",
    description: "Premium photography for weddings, brands, portfolios, and commercial needs.",
    link: "/services#photography",
  },
  {
    title: "Digital Marketing",
    subtitle: "WeAreSVMedia",
    image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=600&q=80",
    description: "Social media growth, content creation, ads management, and ROI-focused strategies.",
    link: "/services#digital-agency",
  },
];

export default function HomeServices({ scrollRef }) {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section
      className="bg-white py-20 text-[#1E1E1E] font-[Poppins] overflow-hidden"
      ref={scrollRef}
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-14 text-[#0056D2]" data-aos="fade-up">
          What We Offer
        </h2>

        {/* Mobile Swiper Carousel */}
        <div className="md:hidden" data-aos="fade-up">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            autoplay={{ delay: 3500 }}
            pagination={{ clickable: true }}
          >
            {services.map((service, index) => (
              <SwiperSlide key={index}>
                <div className="bg-[#F4F4F4] p-4 rounded-2xl shadow-md border-l-4 border-[#0056D2]">
                  <img src={service.image} alt={service.title} className="rounded-lg h-48 w-full object-cover mb-4" />
                  <h3 className="text-xl font-bold text-[#0056D2]">{service.title}</h3>
                  <p className="text-sm italic text-gray-500 mb-2">{service.subtitle}</p>
                  <p className="text-gray-700 text-sm mb-4">{service.description}</p>
                  <button
                    onClick={() => navigate(service.link)}
                    className="text-sm font-semibold bg-[#0056D2] text-white py-2 px-4 rounded-full hover:bg-[#003F9E] transition"
                  >
                    Learn More
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8 justify-center">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#F4F4F4] p-6 rounded-2xl shadow-md hover:shadow-lg border-l-4 border-[#0056D2] transition duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <img src={service.image} alt={service.title} className="rounded-lg h-48 w-full object-cover mb-4" />
              <h3 className="text-xl font-bold text-[#0056D2]">{service.title}</h3>
              <p className="text-sm italic text-gray-500 mb-2">{service.subtitle}</p>
              <p className="text-gray-700 text-sm mb-4">{service.description}</p>
              <button
                onClick={() => navigate(service.link)}
                className="text-sm font-semibold bg-[#0056D2] text-white py-2 px-4 rounded-full hover:bg-[#003F9E] transition"
              >
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
