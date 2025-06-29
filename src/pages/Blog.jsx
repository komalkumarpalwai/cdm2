import React, { useState } from "react";
import BlogCard from "../components/BlogCard";
import BlogSearch from "../components/BlogSearch";
import BlogModal from "../components/BlogModal";
import SocialFeed from "../components/SocialFeed";
import { blogPosts } from "../data/blogData";

export default function Blog() {
  const [search, setSearch] = useState("");
  const [selectedPost, setSelectedPost] = useState(null);

  const filtered = blogPosts.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase()) ||
    post.tags.some((tag) => tag.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="p-6 max-w-7xl mx-auto font-[Poppins]">
      <h1 className="text-4xl font-extrabold mb-6 text-center text-gray-800 mt-12">
        📝 Latest Blogs
      </h1>

      {/* Search Bar */}
      <BlogSearch search={search} setSearch={setSearch} />

      {/* Blog Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {filtered.length > 0 ? (
          filtered.map((post) => (
            <BlogCard key={post.id} post={post} onClick={setSelectedPost} />
          ))
        ) : (
          <p className="text-gray-500 col-span-full text-center">
            No matching posts found.
          </p>
        )}
      </div>

      {/* Modal Popup */}
      {selectedPost && (
        <BlogModal post={selectedPost} onClose={() => setSelectedPost(null)} />
      )}

      {/* Social Feed */}
      <div className="mt-12">
        <SocialFeed />
      </div>
    </div>
  );
}
