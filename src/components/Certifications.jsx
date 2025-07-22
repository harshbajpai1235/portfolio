import React, { useContext } from "react";
import { ThemeContext } from "../App";

const certifications = [
  {
    id: 1,
    name: "Introduction to Python",
    issueDate: "Issued Mar 2025",
    thumbnail: "/portfolio/images/thumb/datacamp.png", // Place your image here
    link: "https://www.datacamp.com/completed/statement-of-accomplishment/course/821ec913109398e5a304d701e93e33ef4cd79bae"
  },
  {
    id: 2,
    name: "Intermediate Python",
    issueDate: "Issued Mar 2025",
    thumbnail: "/portfolio/images/thumb/datacamp.png", // Place your image here
    link: "https://www.datacamp.com/completed/statement-of-accomplishment/course/a084319d3acd0e4bdde0a967176c91b8754731f8"
  },
  {
    id: 3,
    name: "Introduction to SQL",
    issueDate: "Issued Apr 2025",
    thumbnail: "/portfolio/images/thumb/datacamp.png", // Place your image here
    link: "https://www.datacamp.com/completed/statement-of-accomplishment/course/4592f33ba62f1ea85fb0df7da61a3dbe1e2c0b39"
  },
  {
    id: 4,
    name: "Understanding Prompt Engineering",
    issueDate: "Issued Apr 2025",
    thumbnail: "/portfolio/images/thumb/datacamp.png", // Place your image here
    link: "https://www.datacamp.com/completed/statement-of-accomplishment/course/22da8f42ba74c3621cdf439ea9c8e8b1431cc8fc"
  },
];

const Certifications = () => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <section id="certifications" className={`w-full py-20 ${isDarkMode ? "bg-[#181c20]" : "bg-[#f7f9fa]"}`}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-extrabold mb-4 tracking-wide transition-colors duration-300 ${isDarkMode ? "text-white" : "text-gray-900"}`}>CERTIFICATIONS</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className={`text-lg transition-colors duration-300 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>Verified credentials and continuous learning.</p>
        </div>
        {/* Certifications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {certifications.map(cert => (
            <a
              key={cert.id}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`group block rounded-2xl shadow-xl transition-all duration-300 overflow-hidden border-2 ${
                isDarkMode ? "bg-gray-900 border-gray-800 hover:bg-blue-900/20" : "bg-white border-gray-200 hover:bg-blue-100"
              } hover:shadow-2xl hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 relative`}
            >
              {/* Achievement Badge */}
              <span className="absolute top-3 right-3 z-10 w-7 h-7 select-none" title="Achievement" role="img" aria-label="Achievement">
                <svg viewBox="0 0 32 32" fill="none" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="16" cy="13" r="9" fill="#FFD700"/>
                  <polygon points="16,7 17.9,11.6 23,12.2 19,15.7 20.2,20.7 16,18 11.8,20.7 13,15.7 9,12.2 14.1,11.6" fill="#fff"/>
                  <rect x="11" y="22" width="3" height="7" rx="1" fill="#FFD700"/>
                  <rect x="18" y="22" width="3" height="7" rx="1" fill="#FFD700"/>
                </svg>
              </span>
              {/* Thumbnail Placeholder - Replace with your image */}
              <div className="w-full h-40 bg-gradient-to-br from-blue-100 to-blue-300 dark:from-blue-900/20 dark:to-blue-900/40 overflow-hidden group-hover:scale-105 transition-transform duration-300 flex items-center justify-center relative">
                {/* CTA Overlay on Hover (only on thumbnail) */}
                <span className="absolute left-0 right-0 bottom-4 flex items-center justify-center z-20 opacity-0 group-hover:opacity-50 transition-opacity duration-300 bg-black/80 text-white text-lg font-semibold tracking-wide select-none pointer-events-none mx-4 rounded-md py-1">
                  View Credentials
                </span>
                <img
                  src={cert.thumbnail}
                  alt={cert.name}
                  className="w-full h-full object-cover rounded-lg transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              {/* Certification Info */}
              <div className="p-6 flex flex-col items-center">
                <h3 className={`text-xl font-bold mb-2 text-center transition-colors duration-300 ${isDarkMode ? "text-white" : "text-gray-900"}`}>{cert.name}</h3>
                <span className={`text-base font-medium transition-colors duration-300 ${isDarkMode ? "text-gray-200" : "text-gray-500"}`}>{cert.issueDate}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications; 