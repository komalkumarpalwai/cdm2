import React, { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function BlogModal({ post, onClose }) {
  const modalRef = useRef();

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          ref={modalRef}
          className="bg-white max-w-3xl w-full rounded-xl p-6 overflow-y-auto max-h-[90vh]"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.9 }}
          transition={{ duration: 0.3 }}
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-2">{post.title}</h2>
          <p className="text-sm text-gray-500 mb-4">{post.date} • {post.category}</p>
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-64 object-cover rounded-lg mb-4"
          />
          <p className="text-gray-700 whitespace-pre-line leading-relaxed">
            {post.content}
          </p>

          <div className="text-right mt-6">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              Close
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
