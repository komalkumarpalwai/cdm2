import React from "react";
import { motion } from "framer-motion";
import { CalendarDays } from "lucide-react";

export default function BlogCard({ post, onClick }) {
  return (
    <motion.article
      role="button"
      aria-label={`Read blog: ${post.title}`}
      onClick={() => onClick(post)}
      className="cursor-pointer bg-white rounded-2xl shadow-md hover:shadow-xl overflow-hidden hover:ring-2 hover:ring-blue-300 transition-all duration-300"
      whileHover={{ scale: 1.015 }}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="h-60 overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          loading="lazy"
        />
      </div>

      <div className="p-5">
        <div className="flex justify-between items-center text-sm text-blue-600 font-semibold">
          <span>{post.category}</span>
          <time
            className="flex items-center gap-1 text-gray-400 text-xs"
            dateTime={post.date}
          >
            <CalendarDays className="w-4 h-4" />
            {post.date}
          </time>
        </div>

        <h3 className="text-lg md:text-xl font-bold text-gray-800 mt-2 line-clamp-2">
          {post.title}
        </h3>

        <p className="text-gray-600 mt-3 text-sm leading-relaxed line-clamp-3">
          {post.excerpt}
        </p>

        <div className="mt-4 flex flex-wrap gap-2 text-xs">
          {post.tags.map((tag, i) => (
            <span
              key={i}
              className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full font-medium"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
