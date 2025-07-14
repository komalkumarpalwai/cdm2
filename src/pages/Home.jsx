import { useRef, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Stars, OrbitControls } from "@react-three/drei";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { Rocket, PhoneCall, Users } from "lucide-react";
import HomeServices from "./HomeServices";
export default function HeroSpace() {
  const glowRef = useRef();
  const heroSectionRef = useRef();
  const testimonialRef = useRef();
  const isTestimonialInView = useInView(testimonialRef, { threshold: 0.5 });

  const [index, setIndex] = useState(0);

  const testimonials = [
    {
      name: "Alexis Fillon",
      role: "Senior Growth Marketing Manager",
      company: "piano",
      avatar: "https://static.vecteezy.com/system/resources/thumbnails/012/429/394/small_2x/casual-indian-business-man-working-on-desktop-computer-free-photo.jpg",
      message:
        "We wanted a solution that could serve the modern needs of in-person and virtual event experiences. We felt that we could find a single platform that could do everything at once, and that’s exactly what we found in Codeminds.",
    },
    {
      name: "Knowvity",
      role: "E-learning Platform",
      company: "knowvity.com",
      avatar: "https://thumbs.dreamstime.com/b/indian-girl-student-wear-headset-study-online-teacher-write-notes-happy-indian-girl-student-wear-headset-study-online-webcam-168424400.jpg",
      message:
        "Codeminds turned our vision into a high-converting course platform. Seamless design, smooth UX, and an incredible team!",
    },
    {
      name: "Radhika Fashion",
      role: "Fashion Brand - Telangana",
      company: "radhikafashion.in",
      avatar: "https://img.freepik.com/premium-photo/beautiful-fashion-manager-woman-fashionable-stylish-clothes-with-black-blazer-white-shirt-white-background-studio-looking-camera_338491-24160.jpg",
      message:
        "Award-winning website design that helped us reach fashion-forward audiences across Telangana. Truly outstanding!",
    },
    {
      name: "Vijaya Makeover",
      role: "Makeover Studio",
      company: "vijayamakeovers.com",
      avatar: "https://i.pinimg.com/736x/94/06/00/94060008c7f477fcb8345b64777d7fbf.jpg",
      message:
        "Elegant, responsive and fast. Our makeover studio finally has a digital presence that matches our offline charm!",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, isTestimonialInView ? 9000 : 3000);
    return () => clearInterval(timer);
  }, [isTestimonialInView]);

  const current = testimonials[index];

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!heroSectionRef.current || !glowRef.current) return;
      const rect = heroSectionRef.current.getBoundingClientRect();
      const isInHero =
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom;

      glowRef.current.style.opacity = isInHero ? "0.7" : "0";
      glowRef.current.style.transform = `translate(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%)`;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative overflow-hidden bg-black font-[Poppins]">
      {/* Glowing Cursor */}
      <div
        ref={glowRef}
        className="fixed z-20 pointer-events-none w-64 h-64 rounded-full blur-[70px] bg-[radial-gradient(circle,#0066FF_0%,transparent_70%)] opacity-0 transition-opacity duration-300"
      />

      {/* Star Canvas */}
      <div className="absolute inset-0 z-0">
        <Canvas>
          <ambientLight intensity={0.5} />
          <Stars radius={100} depth={50} count={4000} factor={4} fade speed={0.5} />
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.4} />
        </Canvas>
      </div>

      {/* Hero */}
      <div
        ref={heroSectionRef}
        className="relative z-10 flex flex-col justify-center items-center h-screen px-6 text-center"
      >
        <div className="max-w-3xl w-full p-8 md:p-12 bg-opacity-20 backdrop-blur-md rounded-3xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6"
          >
            We Design. We Build. We Elevate.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-200 mb-8"
          >
            At <span className="text-[#0056D2] font-semibold">Codeminds</span>, we craft future-ready
            web platforms and branding strategies powered by tech and creativity.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Link
              to="/services"
              className="px-6 py-3 bg-[#0056D2] hover:bg-blue-700 text-white font-semibold rounded-full shadow transition"
            >
              Explore Services
            </Link>
            <Link
              to="/contact"
              className="px-6 py-3 border border-white text-white font-semibold rounded-full hover:bg-white hover:text-[#0056D2] transition"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Testimonials */}
      <section
        className="bg-white py-20 px-4 text-center font-[Poppins]"
        ref={testimonialRef}
      >
        <div className="max-w-4xl mx-auto relative">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-10 leading-snug">
            This is why we do <br />
            <span className="text-[#0056D2]">what we do</span>
          </h2>

          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-5xl text-[#0056D2] mb-6 font-serif">“</div>
            <p className="text-xl md:text-2xl text-gray-800 mb-10 leading-relaxed px-4 md:px-10">
              {current.message}
            </p>

            <div className="flex flex-col items-center gap-2">
              <img
                src={current.avatar}
                alt={current.name}
                className="w-14 h-14 rounded-full object-cover"
              />
              <div className="font-semibold text-gray-900">{current.name}</div>
              <div className="text-sm text-gray-500">{current.role}</div>
              <div className="text-xs font-semibold text-white bg-[#0056D2] px-2 py-1 rounded-full">
                {current.company}
              </div>
            </div>
          </motion.div>

          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-3 h-3 rounded-full ${
                  i === index ? "bg-[#0056D2]" : "bg-gray-300"
                } transition duration-300`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>
  <HomeServices />
      {/* CTA Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-800 to-[#0056D2] font-[Poppins] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center blur-[80px] opacity-20"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1606925797303-71add5c7f56a)",
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative max-w-4xl mx-auto text-center px-6 bg-white/10 backdrop-blur-md rounded-3xl shadow-lg border border-white/30 py-16"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold leading-snug text-white mb-4">
            Ready to <span className="text-yellow-300">elevate</span> your <br />
            <span className="text-white">brand & business?</span>
          </h2>
          <p className="text-blue-100 text-lg mb-10 max-w-xl mx-auto">
            Partner with{" "}
            <span className="font-semibold text-white">Codeminds</span> to craft
            stunning web solutions, branding, and digital presence that delivers real results.
          </p>

          <div className="flex flex-col sm:flex-row justify-center flex-wrap gap-4">
            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-[#0056D2] font-semibold rounded-full hover:bg-gray-100 transition"
            >
              <Rocket className="w-5 h-5" /> Let's Build Together
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 border border-white text-white px-6 py-3 rounded-full hover:bg-white hover:text-[#0056D2] transition"
            >
              <PhoneCall className="w-5 h-5" /> Contact Now
            </Link>
            <Link
              to="/blog"
              className="inline-flex items-center justify-center gap-2 border border-white text-white px-6 py-3 rounded-full hover:bg-white hover:text-[#0056D2] transition"
            >
              <Users className="w-5 h-5" /> Join Our Community
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
