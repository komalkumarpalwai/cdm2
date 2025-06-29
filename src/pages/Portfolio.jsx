import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const projects = [
  {
    title: 'Fashion E-commerce Site',
    description: 'A responsive online store built with MERN stack featuring user login, cart, and admin dashboard.',
    image: 'https://images.unsplash.com/photo-1522199755839-a2bacb67c546',
  },
  {
    title: 'Restaurant Landing Page',
    description: 'Single-page site with animations, menu sections, and reservation form for a local restaurant.',
    image: 'https://images.unsplash.com/photo-1555992336-cbf8f3b4a964',
  },
  {
    title: 'Educational Platform',
    description: 'Full-stack LMS platform with course enrollment, admin panel, and student dashboard.',
    image: 'https://images.unsplash.com/photo-1584697964403-362dc51b8331',
  },
  {
    title: 'Beauty Makeover Studio',
    description: 'A modern services and booking website for a makeover brand with gallery and pricing pages.',
    image: 'https://images.unsplash.com/photo-1559628233-6534d07e8f49',
  },
];

export default function Portfolio() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="font-[Poppins] bg-white text-[#1E1E1E] py-16 px-4">
      <h1 className="text-4xl md:text-5xl text-center font-bold text-[#0056D2] mb-12" data-aos="fade-up">
        Our Portfolio
      </h1>
      <div className="max-w-6xl mx-auto" data-aos="fade-up">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <div className="bg-[#F4F4F4] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
                <img src={project.image} alt={project.title} className="w-full h-56 object-cover" />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-[#0056D2] mb-2">{project.title}</h3>
                  <p className="text-sm text-gray-700">{project.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}