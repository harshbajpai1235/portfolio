import React, { useContext } from 'react';
import { ThemeContext } from '../App';

const Contact = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const sectionBg = isDarkMode
    ? 'bg-gradient-to-b from-[#0a1626] via-[#101a2c] to-[#0a1626]'
    : 'bg-gradient-to-b from-blue-100 via-white to-blue-50';
  const gradientBorder = isDarkMode
    ? 'bg-gradient-to-br from-[#1e293b] via-[#2563eb] to-[#101a2c]'
    : 'bg-gradient-to-br from-[#60a5fa] via-[#2563eb] to-[#fff]';
  const cardBg = isDarkMode ? 'bg-white/10' : 'bg-white';
  const headingColor = isDarkMode ? 'text-blue-200' : 'text-blue-800';
  const subtitleColor = isDarkMode ? 'text-blue-300' : 'text-blue-600';
  const infoBg = isDarkMode ? 'bg-blue-900/60' : 'bg-white';
  const infoText = isDarkMode ? 'text-blue-100' : 'text-blue-900';
  const closingHeading = isDarkMode ? 'text-blue-200' : 'text-blue-900';
  const closingText = isDarkMode ? 'text-blue-300' : 'text-blue-700';

  return (
    <section id="contact" className={`py-20 relative overflow-hidden ${sectionBg}`}>
      {/* Faint Data SVG Pattern */}
      <svg width="900" height="400" viewBox="0 0 900 400" fill="none" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10 pointer-events-none select-none z-0" style={{minWidth:900, minHeight:400}} xmlns="http://www.w3.org/2000/svg">
        {/* Dots */}
        <circle cx="100" cy="100" r="8" fill="#3b82f6" />
        <circle cx="300" cy="200" r="6" fill="#60a5fa" />
        <circle cx="700" cy="120" r="7" fill="#2563eb" />
        <circle cx="500" cy="320" r="5" fill="#38bdf8" />
        <circle cx="800" cy="300" r="6" fill="#1e40af" />
        {/* Connecting lines */}
        <line x1="100" y1="100" x2="300" y2="200" stroke="#3b82f6" strokeWidth="2" />
        <line x1="300" y1="200" x2="700" y2="120" stroke="#60a5fa" strokeWidth="2" />
        <line x1="700" y1="120" x2="800" y2="300" stroke="#2563eb" strokeWidth="2" />
        <line x1="300" y1="200" x2="500" y2="320" stroke="#38bdf8" strokeWidth="2" />
      </svg>

      <div className="max-w-3xl mx-auto px-4 sm:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className={`text-4xl font-extrabold uppercase tracking-widest mb-2 ${headingColor}`}>CONTACT</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-3"></div>
          <div className={`text-lg font-semibold mb-2 ${subtitleColor}`}>Get in Touch</div>
        </div>

        {/* Gradient border wrapper */}
        <div className={`${gradientBorder} p-1 rounded-[2rem] shadow-[0_8px_40px_0_rgba(37,99,235,0.18)]`}>
          {/* Card with solid background and fully rounded edges */}
          <div className={`flex flex-col gap-8 items-center justify-center ${cardBg} rounded-[2rem] overflow-hidden px-8 py-10 relative`}>
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/harsh-bajpai22"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 px-7 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 mb-2 w-full max-w-md mx-auto justify-center group"
              style={{zIndex:1}}
            >
              {/* Official LinkedIn logo SVG with micro-animation */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-8 h-8 fill-white group-hover:scale-110 transition-transform duration-200" fill="white">
                <rect width="32" height="32" rx="16" fill="#0077b5"/>
                <path d="M12.75 13.5h-2.5v8h2.5v-8zm-1.25-1.25c.828 0 1.25-.672 1.25-1.25 0-.578-.422-1.25-1.25-1.25s-1.25.672-1.25 1.25c0 .578.422 1.25 1.25 1.25zm3.25 1.25v8h2.5v-4.25c0-1.125.75-1.75 1.625-1.75.875 0 1.125.625 1.125 1.75v4.25h2.5v-4.75c0-2.25-1.25-3.25-2.75-3.25-1.125 0-1.625.625-1.875 1.063V13.5h-2.125z"/>
              </svg>
              Connect with me on LinkedIn
            </a>

            {/* Email */}
            <div className={`flex items-center gap-4 px-7 py-4 rounded-xl ${infoBg} ${infoText} font-semibold text-lg shadow border border-blue-200 dark:border-blue-800 w-full max-w-md mx-auto justify-center group transition-all duration-200`}> 
              {/* Email icon with micro-animation */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-7 h-7 text-blue-600 dark:text-blue-300 group-hover:scale-110 transition-transform duration-200">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15A2.25 2.25 0 002.25 6.75m19.5 0v.243a2.25 2.25 0 01-.659 1.591l-7.09 7.09a2.25 2.25 0 01-3.182 0l-7.09-7.09A2.25 2.25 0 012.25 6.993V6.75" />
              </svg>
              <span>Email Me At: <a href="mailto:bajpaih03@gmail.com" className="underline hover:text-blue-700">bajpaih03@gmail.com</a></span>
            </div>

            {/* Tableau Public */}
            <a
              href="https://public.tableau.com/app/profile/harshbajpai"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-4 px-7 py-4 rounded-xl ${infoBg} ${infoText} font-bold text-lg shadow-lg border border-blue-200 dark:border-blue-800 hover:bg-blue-100 hover:text-blue-900 dark:hover:bg-[#1a2233] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 mb-2 w-full max-w-md mx-auto justify-center group`}
              style={{zIndex:1}}
            >
              {/* Tableau Public logo SVG with micro-animation */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-8 h-8 group-hover:scale-110 transition-transform duration-200" fill="none">
                <rect width="32" height="32" rx="16" fill="#1f3262"/>
                <g stroke="#f9b233" strokeWidth="1.5">
                  <line x1="16" y1="8" x2="16" y2="24" />
                  <line x1="8" y1="16" x2="24" y2="16" />
                  <line x1="11" y1="11" x2="21" y2="21" />
                  <line x1="21" y1="11" x2="11" y2="21" />
                </g>
              </svg>
              You can also Follow me on Tableau Public
            </a>

            {/* Location */}
            <div className={`flex items-center gap-4 px-7 py-4 rounded-xl ${infoBg} ${infoText} font-semibold text-lg shadow border border-blue-200 dark:border-blue-800 w-full max-w-md mx-auto justify-center group transition-all duration-200`}>
              {/* Location icon with micro-animation */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-7 h-7 text-blue-600 dark:text-blue-300 group-hover:scale-110 transition-transform duration-200">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21c-4.418 0-8-5.373-8-9.6C4 6.477 7.134 3.75 12 3.75s8 2.727 8 7.65C20 15.627 16.418 21 12 21z" />
                <circle cx="12" cy="11" r="3" />
              </svg>
              <span>San Francisco, United States</span>
            </div>

            {/* Closing Statement */}
            <div className="mt-8 text-center">
              <h3 className={`text-2xl font-bold mb-2 ${closingHeading}`}>I look forward to connecting!</h3>
              <p className={`text-lg max-w-2xl mx-auto ${closingText}`}>
                Whether you have a project in mind, want to discuss opportunities, or just want to connect with a fellow data & AI enthusiast, I'm here and excited to hear from you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;