import React, { useState, useContext } from "react";
import { ThemeContext } from "../App";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

// Gallery images data
const galleryImages = [
  {
    id: 1,
    thumbnail: "/portfolio/images/gallery/gallery1-thumb.jpg", // Place your image here
    full: "/portfolio/images/gallery/gallery1.jpg", // Place your high-res image here
    event: "Understanding Unbalanced data in Factorial Design",
    date: "December 2024",
    relevance: "Presented during Math 747 - Design & Analysis of Experiments at San Francisco State University under Prof. Tao He, this project explored the complexity of unbalanced factorial data and methods to analyze it using ANOVA, proportional data handling, and regression-bsed approaches.",
    description: "Delivering a presentation on Experimental Design."
  },
  {
    id: 2,
    thumbnail: "/portfolio/images/gallery/gallery2-thumb.jpg",
    full: "/portfolio/images/gallery/gallery2.jpg",
    event: "Predicting NYC Taxi Fares & Revenue Patterns Presentation",
    date: "May 2025",
    relevance: "This project combined machine learning and data storytelling to solve a real-world business problem using 6.4M+ ride records from NYC's Yellow Taxi dataset. Demonstrated practical value through predictive modeling (random forest), feature engineering, and hybrid rule-based logic for accurate fare estimation and business insight delivery.",
    description: "Presenting fare prediction insights and revenue optimization analysis."
  },
  {
    id: 3,
    thumbnail: "/portfolio/images/gallery/gallery3-thumb.jpg",
    full: "/portfolio/images/gallery/gallery3.jpg",
    event: "Deep Learning in ASR: Enhacing Speech Recognition with SCRFs",
    date: "May 2025",
    relevance: "Showcases graduate-level presentation skills, technial depth in AI, and research communication on cutting-edge speech recognition models using Segmental Conditional Random Fields (SCRFs) and deep neural networks.",
    description: "Presented advanced ASR model integrating deep learning with structured probabilistic modeling."
  },
  {
    id: 4,
    thumbnail: "/portfolio/images/gallery/gallery4-thumb.jpg",
    full: "/portfolio/images/gallery/gallery4.jpg",
    event: "Mastering the Job Search - LinkedIn Workshop",
    date: "July 2025",
    relevance: "Gained practical insights into recruiter behavior, profile optimization, and the application process from LinkedIn's Community Learning series. This helped sharpen my approach to becoming a top applicant in today's competitive hiring landscape.",
    description: "Attended an exclusive job-search strategy session at LinkedIn HQ"
  },
];

const Gallery = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const [selectedIndex, setSelectedIndex] = useState(null);

  // Modal navigation
  const goToPrev = () => setSelectedIndex((idx) => (idx > 0 ? idx - 1 : galleryImages.length - 1));
  const goToNext = () => setSelectedIndex((idx) => (idx < galleryImages.length - 1 ? idx + 1 : 0));
  const closeModal = () => setSelectedIndex(null);

  return (
    <section id="gallery" className={`w-full py-20 ${isDarkMode ? "bg-gray-900" : "bg-gray-100"}`}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-extrabold mb-4 tracking-wide transition-colors duration-300 ${isDarkMode ? "text-white" : "text-gray-900"}`}>PROFESSIONAL GALLERY</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className={`text-lg transition-colors duration-300 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>Every image here holds a story: of learning, presenting, connecting, and growing.</p>
        </div>
        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {galleryImages.map((img, idx) => (
            <button
              key={img.id}
              className={`group relative rounded-2xl shadow-2xl overflow-hidden p-0 bg-transparent hover:shadow-3xl hover:-translate-y-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300`}
              style={{ minHeight: 256 }}
              onClick={() => setSelectedIndex(idx)}
            >
              {/* Subtle Badge */}
              {idx < 3 ? (
                <span className="absolute top-3 right-3 z-10 px-2 py-0.5 text-xs font-semibold rounded-full bg-blue-500/70 text-white/90 select-none" style={{letterSpacing: '0.02em'}}>
                  Presentation
                </span>
              ) : idx === 3 ? (
                <span className="absolute top-3 right-3 z-10 px-2 py-0.5 text-xs font-semibold rounded-full bg-purple-500/70 text-white/90 select-none" style={{letterSpacing: '0.02em'}}>
                  Event
                </span>
              ) : null}
              {/* Image with overlay and zoom on hover */}
              <div className="w-full h-64 overflow-hidden relative rounded-2xl">
                <img
                  src={img.thumbnail}
                  alt={img.event}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 rounded-2xl"
                  style={{ minHeight: 256, maxHeight: 256 }}
                  loading="lazy"
                />
                {/* Overlay only on hover */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-60 transition-opacity duration-300 rounded-2xl" />
                {/* Description on hover */}
                <div className="absolute bottom-0 left-0 right-0 px-4 py-3 bg-black/70 text-white text-base opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-2xl">
                  {img.description}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
      {/* Modal/Lightbox */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4 animate-fade-in">
          <div className={`max-w-2xl w-full max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl transition-all duration-700 ease-out transform animate-in slide-in-from-bottom-8 fade-in-0 ${
            isDarkMode ? 'bg-gray-900 border border-gray-700' : 'bg-white border border-gray-200'
          }`}>
            {/* Modal Header */}
            <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700">
              <div>
                <h3 className={`text-xl font-bold transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{galleryImages[selectedIndex].event}</h3>
                <p className={`text-sm transition-colors duration-300 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{galleryImages[selectedIndex].date}</p>
              </div>
              <button
                onClick={closeModal}
                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-110"
                aria-label="Close"
              >
                <X className={`w-6 h-6 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`} />
              </button>
            </div>
            {/* Large Image */}
            <div className="w-full flex justify-center items-center bg-black/10 dark:bg-black/30 py-6">
              <img
                src={galleryImages[selectedIndex].full}
                alt={galleryImages[selectedIndex].event}
                className="max-h-[400px] w-auto rounded-xl shadow-lg"
                style={{ maxWidth: '100%' }}
              />
            </div>
            {/* Description */}
            <div className="px-8 pb-8">
              <p className={`text-base mb-2 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{galleryImages[selectedIndex].description}</p>
              <p className={`text-sm mb-1 transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}><b>Relevance:</b> {galleryImages[selectedIndex].relevance}</p>
            </div>
            {/* Navigation */}
            <div className="flex justify-between items-center px-8 pb-6">
              <button
                onClick={goToPrev}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition-all duration-300"
                aria-label="Previous"
              >
                <ChevronLeft className="w-5 h-5" /> Previous
              </button>
              <button
                onClick={goToNext}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition-all duration-300"
                aria-label="Next"
              >
                Next <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery; 