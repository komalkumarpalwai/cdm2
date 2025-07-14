import React from 'react';

const projects = [
  {
    name: 'Knowvity',
    tagline: 'Make Your Career Right Now in Coding',
    description:
      "Confused about which course to take? We’ve got you covered! Browse courses and discover the best option for you. Knowvity is our effort to teach skills, coding, and techniques in a short time that took years to master.",
    url: 'https://www.knowvity.com/',
  },
  {
    name: 'Radhika Rajpurohit Designer Studio',
    tagline: 'Shopping Platform',
    description:
      'Elegant and bold fashion designer brand built with premium e-commerce experience in mind.',
    url: 'https://radhikarajpurohit.com/',
  },
  {
    name: 'Vijaya Makeover',
    tagline: 'Beauty & Bridal Makeover Services',
    description:
      'A full-fledged beauty salon and bridal makeover service website with bookings, galleries, and service listings.',
    url: 'https://www.vijayaamakeovers.com/',
  },
  // Add more project items here with same structure as needed
];

export default function PortfolioPage() {
  return (
    <div className="bg-white text-[#1E1E1E] py-20 px-4 font-[Poppins]">
      <h1 className="text-4xl md:text-5xl font-bold text-[#0056D2] text-center mb-12">
        Our Portfolio
      </h1>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-xl shadow-md hover:shadow-lg p-8 bg-[#F9FAFB] transition duration-300"
          >
            <p className="text-sm text-gray-500 mb-2">Project</p>
            <h2 className="text-2xl font-bold text-[#1E1E1E] mb-1">{project.name}</h2>
            <p className="text-md text-[#0056D2] font-semibold mb-4">{project.tagline}</p>
            <p className="text-gray-700 text-sm mb-6">{project.description}</p>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white bg-[#0056D2] px-4 py-2 rounded-full text-sm font-medium hover:bg-[#0044aa]"
            >
              Visit Website ↗
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
