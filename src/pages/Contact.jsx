import React, { useRef, useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";

export default function Contact() {
  const formRef = useRef();
  const recaptchaRef = useRef();
  const [isSent, setIsSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [captchaVerified, setCaptchaVerified] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setErrorMessage(null);

    const token = recaptchaRef.current.getValue();
    if (!token) {
      setErrorMessage("Please complete the reCAPTCHA.");
      return;
    }

    emailjs
      .sendForm(
        "service_exl5pbq",
        "template_e3c81x8",
        formRef.current,
        "EFgyQlCLVT-9UjQiG"
      )
      .then(
        () => {
          setIsSent(true);
          formRef.current.reset();
          recaptchaRef.current.reset();
        },
        () => {
          setErrorMessage(
            "Something went wrong. Please email us directly at codemindswebservices@gmail.com."
          );
        }
      );
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-blue-100 py-16 px-6 font-[Poppins] mt-10">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-start">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-2xl shadow-xl p-8"
        >
          {!isSent ? (
            <>
              <h2 className="text-3xl font-bold text-blue-700 mb-4">Let's Talk 👋</h2>
              <p className="text-gray-600 mb-8">
                We’d love to hear from you. Fill in the form below.
              </p>
              <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    required
                    className="peer w-full border-b-2 border-gray-300 focus:border-blue-600 bg-transparent px-1 pt-6 pb-2 focus:outline-none"
                  />
                  <label className="absolute top-2 left-1 text-sm text-gray-500 peer-focus:text-xs peer-focus:-top-1 peer-focus:text-blue-600">
                    Your Name
                  </label>
                </div>
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    required
                    className="peer w-full border-b-2 border-gray-300 focus:border-blue-600 bg-transparent px-1 pt-6 pb-2 focus:outline-none"
                  />
                  <label className="absolute top-2 left-1 text-sm text-gray-500 peer-focus:text-xs peer-focus:-top-1 peer-focus:text-blue-600">
                    Your Email
                  </label>
                </div>
                <div className="relative">
                  <input
                    type="text"
                    name="title"
                    required
                    className="peer w-full border-b-2 border-gray-300 focus:border-blue-600 bg-transparent px-1 pt-6 pb-2 focus:outline-none"
                  />
                  <label className="absolute top-2 left-1 text-sm text-gray-500 peer-focus:text-xs peer-focus:-top-1 peer-focus:text-blue-600">
                    Subject
                  </label>
                </div>
                <div className="relative">
                  <textarea
                    name="message"
                    required
                    rows="4"
                    className="peer w-full border-b-2 border-gray-300 focus:border-blue-600 bg-transparent px-1 pt-6 pb-2 focus:outline-none resize-none"
                  />
                  <label className="absolute top-2 left-1 text-sm text-gray-500 peer-focus:text-xs peer-focus:-top-1 peer-focus:text-blue-600">
                    Your Message
                  </label>
                </div>
                <div className="pt-4">
                  <ReCAPTCHA
                    sitekey="6LeUe2srAAAAADGaaRkGS2jebXT06bvlUd5W6gQn"
                    ref={recaptchaRef}
                    onChange={() => setCaptchaVerified(true)}
                  />
                </div>
                <button
                  type="submit"
                  className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-full hover:bg-blue-700 transition shadow-md"
                >
                  🚀 Send Message
                </button>
              </form>
              {errorMessage && (
                <p className="text-red-500 text-sm mt-4">{errorMessage}</p>
              )}
            </>
          ) : (
            <div className="text-center py-12">
              <h2 className="text-3xl font-bold text-green-600 mb-4">✅ Message Sent!</h2>
              <p className="text-gray-700 text-lg">
                Thank you for contacting us.<br />
                <strong>Our team will reach out to you within the next 24 hours.</strong>
              </p>
            </div>
          )}
        </motion.div>

        {/* Contact Info & Map */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="space-y-5">
            <h3 className="text-2xl font-bold text-gray-800">📍 Contact Details</h3>
            <div className="flex items-center gap-4 text-gray-700">
              <MapPin className="text-blue-600" />
              <span>
                Brindavan Colony, Ibrahimpatnam,<br />Hyderabad, TG 501506
              </span>
            </div>
            <div className="flex items-center gap-4 text-gray-700">
              <Phone className="text-blue-600" />
              <div>
                <a href="tel:+919390228526" className="hover:underline">
                  +91 93902 28526
                </a>{" "}/ {" "}
                <a href="tel:+918142285266" className="hover:underline">
                  +91 81422 85266
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4 text-gray-700">
              <Mail className="text-blue-600" />
              <a href="mailto:codemindswebservices@gmail.com" className="hover:underline">
                codemindswebservices@gmail.com
              </a>
            </div>
            <a
              href="https://wa.me/919390228526"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 text-white px-5 py-3 rounded-full hover:bg-green-600 transition shadow-md"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                alt="WhatsApp"
                className="w-5 h-5"
              />
              Chat on WhatsApp
            </a>
          </div>

          {/* Google Map */}
          <div className="rounded-xl overflow-hidden shadow-md">
            <iframe
              title="Codeminds Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.4821217374773!2d78.54024991433661!3d17.485340804802616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb994ec8a1ed2f%3A0x4fbf18226b8d6e56!2sIbrahimpatnam%2C%20Telangana%20501506!5e0!3m2!1sen!2sin!4v1719230045467!5m2!1sen!2sin"
              width="100%"
              height="300"
              className="border-none"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
