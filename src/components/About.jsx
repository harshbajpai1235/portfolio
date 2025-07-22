import React, { useState, useEffect, useContext } from 'react';
import { Download, Eye } from 'lucide-react';
import { ThemeContext } from '../App';

const About = () => {
  const [currentBanner, setCurrentBanner] = useState(0);
  const { isDarkMode } = useContext(ThemeContext);

  const banners = [
    {
      id: 1,
      background: "url('/portfolio/images/background.jpg')"
    },
    {
      id: 2,
      background: "url('/portfolio/images/background2.jpg')"
    },
    {
      id: 3,
      background: "url('/portfolio/images/background3.jpg')"
    },
    {
      id: 4,
      background: "url('/portfolio/images/background4.jpg')"
    },
    {
      id: 5,
      background: "url('/portfolio/images/background5.jpg')"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 8000); // Increased from 5000ms to 8000ms (8 seconds)
    return () => clearInterval(interval);
  }, [banners.length]);

  const goToBanner = (index) => {
    setCurrentBanner(index);
  };

  return (
    <section id="about" className="w-full -mt-16">
      {/* Animated Gradient Banner */}
      <div id="about-banner" className="w-full h-2 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 animate-gradient-x"></div>
      
      {/* Hero Cover Photo Area with Carousel */}
      <div className="relative w-full h-[450px] overflow-hidden">
        {/* Banner Slides */}
        {banners.map((banner, index) => (
          <div
            key={banner.id}
            className={`absolute inset-0 bg-cover bg-center transition-all duration-1500 ease-in-out ${
              index === currentBanner ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ backgroundImage: banner.background }}
          >
            {/* Overlay - Removed for clean banner display */}
            <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0)" }}></div>
          </div>
        ))}

        {/* Navigation Dots */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-50">
          {banners.map((banner, index) => (
            <button
              key={banner.id}
              onClick={() => goToBanner(index)}
              className={`w-3 h-3 rounded-full transition-all duration-500 cursor-pointer ${
                index === currentBanner 
                  ? 'bg-white scale-125 shadow-lg' 
                  : 'bg-white/40 hover:bg-white/60 hover:scale-110'
              }`}
              aria-label={`Go to banner ${index + 1}`}
            />
          ))}
        </div>

        {/* Content Layout */}
        <div className="relative z-30 flex items-center justify-between px-8 lg:px-20 h-full">
          {/* Left Side: Name, Title, Quote, and Social Logos */}
          <div className="flex flex-col justify-center max-w-2xl gap-3 h-full">
            <div className="flex-1 flex flex-col justify-center">
              <h1 className="text-white font-extrabold text-5xl sm:text-6xl lg:text-7xl drop-shadow-2xl" 
                   style={{ 
                     fontFamily: 'Open Sans, Lato, Roboto, sans-serif',
                     textShadow: '0 4px 8px rgba(0,0,0,0.5)',
                     animation: 'fadeInUp 0.8s ease-out'
                   }}>
                Harsh Bajpai
              </h1>
              <h2 className="text-cyan-400 font-semibold text-xl sm:text-2xl mt-3 drop-shadow-lg animate-pulse" 
                   style={{ animation: 'fadeInUp 0.8s ease-out 0.2s both' }}>
                Analytical Data & AI Enthusiast
              </h2>
              <p className="italic text-gray-200 text-lg sm:text-xl mt-3 font-light max-w-lg drop-shadow-md leading-relaxed"
                   style={{ animation: 'fadeInUp 0.8s ease-out 0.4s both' }}>
                "Data is not just numbers — it's a story waiting to be told."
              </p>
            </div>
            
            {/* Social Media Logos - Positioned at bottom, same level as buttons */}
            <div className="flex items-center gap-6 mb-8" style={{ animation: 'fadeInUp 0.8s ease-out 0.6s both' }}>
              {/* LinkedIn */}
              <a 
                href="https://www.linkedin.com/in/harsh-bajpai22" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
              >
                <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                  {/* Add your LinkedIn logo image here */}
                  <img src="/portfolio/images/logos/linkedin-logo.png" alt="LinkedIn" className="w-6 h-6" />
                </div>
                <span className="sr-only">LinkedIn</span>
              </a>

              {/* Tableau */}
              <a 
                href="https://public.tableau.com/app/profile/harshbajpai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
              >
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  {/* Add your Tableau logo image here */}
                  <img src="/portfolio/images/logos/tableau-logo.png" alt="Tableau" className="w-6 h-6" />
                </div>
                <span className="sr-only">Tableau</span>
              </a>

              {/* GitHub */}
              <a 
                href="https://github.com/harshbajpai1235" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
              >
                <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                  {/* Add your GitHub logo image here */}
                  <img src="/portfolio/images/logos/github-logo.png" alt="GitHub" className="w-6 h-6" />
                </div>
                <span className="sr-only">GitHub</span>
              </a>
            </div>
          </div>
          
          {/* Right Side: Profile + Buttons */}
          <div className="flex flex-col items-center justify-center gap-6 h-full">
            <div className="rounded-full w-44 h-44 sm:w-56 sm:h-56 lg:w-64 lg:h-64 shadow-2xl border-4 border-white/20 bg-gray-200 flex items-center justify-center overflow-hidden transform hover:scale-105 transition-all duration-500 backdrop-blur-sm" 
                 style={{ 
                   boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(255, 255, 255, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                   animation: 'fadeInUp 0.8s ease-out 0.8s both'
                 }}>
              <img src="/portfolio/images/profile.jpg" alt="Profile" className="w-full h-full object-cover" />
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8" style={{ animation: 'fadeInUp 0.8s ease-out 1.0s both' }}>
              <a href="/portfolio/resume.pdf" download 
                 className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center gap-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1 border border-white/20 backdrop-blur-sm">
                <Download className="w-5 h-5" /> Download Resume
              </a>
              <a href="/portfolio/resume.pdf" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="border-2 border-white/30 text-white px-6 py-3 rounded-lg hover:bg-white/10 transition-all duration-300 flex items-center gap-3 backdrop-blur-sm hover:border-white/50 transform hover:-translate-y-1 shadow-lg">
                <Eye className="w-5 h-5" /> View Resume
              </a>
            </div>
          </div>
        </div>

        {/* Open to Work Indicator - Top Right Corner */}
        <div className="absolute top-6 right-6 z-40" style={{ animation: 'fadeInUp 0.8s ease-out 1.2s both' }}>
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-full shadow-lg backdrop-blur-sm border border-white/20 transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              <span className="font-semibold text-sm tracking-wide">Open to Work</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Lower Section: About Paragraph */}
      <div className={`py-16 px-6 lg:px-20 transition-colors duration-300 ${
        isDarkMode 
          ? 'bg-gray-900 text-gray-100' 
          : 'bg-gray-50 text-gray-900'
      }`}>
        <div className="max-w-5xl mx-auto">
          {/* Section Title */}
          <h2 className={`text-4xl font-bold mb-4 text-center drop-shadow-lg transition-colors duration-300 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>ABOUT ME</h2>
          
          {/* Highlight Line */}
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-12"></div>

          <div className={`rounded-2xl shadow-2xl p-10 mt-10 mb-4 transition-colors duration-300 ${isDarkMode ? 'bg-[#181f2a] text-gray-200' : 'bg-white text-gray-700'}`}>
            <div className={`text-lg leading-relaxed space-y-6`}>
              <p>
                Hello! I'm Harsh Bajpai, an aspiring Data Analyst and Business Intelligence enthusiast currently pursuing a Master's in Statistical Data Science at San Francisco State University.
              </p>
              <p>
                What draws me to this field is the journey: starting with raw, messy, and often ambiguous data, uncovering patterns, building clarity, and ultimately turning insights into actionable business strategies. I find joy in the entire data lifecycle, from wrangling and visualizing data to sharing findings with stakeholders in simple, relatable terms. I love presenting my work and translating technical insights into clear, story-driven narratives for any audience.
              </p>
              <p>
                My short-term goal is to secure an internship where I can not only apply what I've learned but also grow by working alongside experienced teams. I'm looking for an opportunity where I can contribute meaningfully, collaborate actively, and keep learning every single day. Whatever organization I become part of, I bring full ownership, discipline, and a mindset that treats every win and challenge as my own, as if the company were mine.
              </p>
              <p>
                Technically, I'm equipped with a strong foundation in SQL, Python, Tableau, Excel, and statistical thinking. Soft-skill-wise, I'm adaptable, quick to learn, and thrive in both independent deep work and collaborative problem-solving environments. I believe clear communication, structured thinking, and strong business understanding are just as important as technical proficiency.
              </p>
              <p>
                I use AI as a productivity partner, whether it's refining dashboards, improving visual storytelling, or staying on top of emerging data tools. But I believe real business intelligence comes from human judgment, empathy, and strategic thinking, and these are areas where I take pride in constantly growing.
              </p>
              <p>
                For me, data isn't just numbers. It's one of the most critical pillars supporting a company's future. As someone who respects that responsibility, I aim to handle every dataset with purpose, care, and a drive to uncover what truly matters.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 