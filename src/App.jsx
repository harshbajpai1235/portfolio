import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Education from './components/Education'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Dashboards from './components/Dashboards'
import Certifications from './components/Certifications'
import Gallery from './components/Gallery'
import ChallengeMe from './components/ChallengeMe'
import Contact from './components/Contact'

// Create Theme Context
export const ThemeContext = React.createContext();

function App() {
  const [activeSection, setActiveSection] = useState('about')
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check localStorage for saved preference, default to dark mode
    const saved = localStorage.getItem('darkMode');
    return saved ? JSON.parse(saved) : true;
  });

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]')
      const scrollPos = window.scrollY + 100

      sections.forEach(section => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight
        const sectionId = section.getAttribute('id')

        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
          setActiveSection(sectionId)
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 80,
    });
    // Save theme preference to localStorage
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
    
    // Apply theme to document
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      <div className={`min-h-screen transition-colors duration-300 ${
        isDarkMode ? 'text-white' : 'text-gray-900'
      }`}>
        <Navbar 
          activeSection={activeSection}
          scrollToSection={scrollToSection}
        />
        
        <main className="pt-16">
          <div><About /></div>
          <div><Education /></div>
          <div><Skills /></div>
          <div><Projects /></div>
          <div><Dashboards /></div>
          <div><Certifications /></div>
          <div><Gallery /></div>
          <div><ChallengeMe /></div>

          {/* Separator Section before Contact */}
          <section className="relative py-16 px-4 sm:px-0 flex flex-col items-center justify-center overflow-hidden">
            {/* SVG Wave Pattern Background */}
            <div className="absolute inset-0 w-full h-full pointer-events-none select-none z-0">
              {/* Floating Data Dots */}
              <div className="floating-dot" style={{ left: '12%', top: '38%', width: 18, height: 18, background: 'rgba(59,130,246,0.7)' }} />
              <div className="floating-dot floating-dot2" style={{ left: '78%', top: '44%', width: 14, height: 14, background: 'rgba(2,132,199,0.7)' }} />
              <div className="floating-dot floating-dot3" style={{ left: '30%', top: '60%', width: 10, height: 10, background: 'rgba(59,130,246,0.5)' }} />
              <div className="floating-dot" style={{ left: '60%', top: '70%', width: 22, height: 22, background: 'rgba(96,165,250,0.5)' }} />
              <div className="floating-dot floating-dot2" style={{ left: '50%', top: '30%', width: 12, height: 12, background: 'rgba(59,130,246,0.3)' }} />
              {/* Light mode wave - modern blue gradient */}
              <svg className="block dark:hidden w-full h-full animated-wave" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="waveBlue1" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stop-color="#e0f2fe" />
                    <stop offset="100%" stop-color="#7dd3fc" />
                  </linearGradient>
                  <linearGradient id="waveBlue2" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stop-color="#bae6fd" />
                    <stop offset="100%" stop-color="#38bdf8" />
                  </linearGradient>
                </defs>
                <path fill="url(#waveBlue1)" fillOpacity="0.85" d="M0,160L60,170.7C120,181,240,203,360,197.3C480,192,600,160,720,154.7C840,149,960,171,1080,186.7C1200,203,1320,213,1380,218.7L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z" />
                <path fill="url(#waveBlue2)" fillOpacity="0.5" d="M0,224L60,208C120,192,240,160,360,154.7C480,149,600,171,720,186.7C840,203,960,213,1080,197.3C1200,181,1320,160,1380,149.3L1440,139L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z" />
              </svg>
              {/* Dark mode wave - modern blue gradient */}
              <svg className="hidden dark:block w-full h-full animated-wave" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="waveDarkBlue1" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stop-color="#0f172a" />
                    <stop offset="100%" stop-color="#1e40af" />
                  </linearGradient>
                  <linearGradient id="waveDarkBlue2" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stop-color="#1e3a8a" />
                    <stop offset="100%" stop-color="#2563eb" />
                  </linearGradient>
                </defs>
                <path fill="url(#waveDarkBlue1)" fillOpacity="0.85" d="M0,160L60,170.7C120,181,240,203,360,197.3C480,192,600,160,720,154.7C840,149,960,171,1080,186.7C1200,203,1320,213,1380,218.7L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z" />
                <path fill="url(#waveDarkBlue2)" fillOpacity="0.5" d="M0,224L60,208C120,192,240,160,360,154.7C480,149,600,171,720,186.7C840,203,960,213,1080,197.3C1200,181,1320,160,1380,149.3L1440,139L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z" />
              </svg>
            </div>
            {/* Content Overlay */}
            <div className="relative z-10 max-w-4xl w-full mx-auto px-6 py-12 flex flex-col items-center rounded-3xl bg-white dark:bg-slate-900/90 shadow-2xl shadow-blue-100/40 dark:shadow-2xl dark:shadow-blue-900/40 backdrop-blur-md border border-blue-300 dark:border-blue-800">
              <blockquote className="text-center text-2xl sm:text-3xl font-extrabold italic mb-6 max-w-3xl mx-auto text-blue-700 drop-shadow-2xl dark:bg-gradient-to-r dark:from-blue-500 dark:via-sky-400 dark:to-blue-700 dark:bg-clip-text dark:text-transparent">
                “Creativity is intelligence having fun”
                <span className="block mt-3 text-xl font-bold text-blue-500 drop-shadow-lg dark:bg-gradient-to-r dark:from-blue-400 dark:to-blue-600 dark:bg-clip-text dark:text-transparent">— Albert Einstein</span>
              </blockquote>
              <div className="max-w-2xl mx-auto text-center mt-10">
                <p className="text-xl sm:text-2xl font-extrabold mb-5 text-blue-700 drop-shadow-xl text-center dark:bg-gradient-to-r dark:from-blue-700 dark:via-blue-500 dark:to-sky-400 dark:bg-clip-text dark:text-transparent">This portfolio isn’t built from a template. It’s built from me.</p>
                <p className="text-lg text-gray-800 dark:text-slate-200 mb-6 font-medium drop-shadow-sm">Every section, every design choice, every word and interaction here was crafted by me — from ideation to implementation. It’s more than a portfolio; it reflects how I approach problems: with intention, creativity, and a bias for action.</p>
                <p className="text-2xl font-extrabold text-blue-600 mt-6 drop-shadow-lg dark:bg-gradient-to-r dark:from-sky-500 dark:via-blue-600 dark:to-blue-800 dark:bg-clip-text dark:text-transparent">If something here sparked your curiosity, let’s connect.</p>
              </div>
            </div>
          </section>
          <div><Contact /></div>
        </main>
      </div>
      {/* Animated wave and floating dots styles */}
      <style>{`
        @keyframes waveMove {
          0% { transform: translateX(0); }
          100% { transform: translateX(-60px); }
        }
        .animated-wave {
          animation: waveMove 8s linear infinite alternate;
        }
        .floating-dot {
          position: absolute;
          border-radius: 9999px;
          opacity: 0.18;
          pointer-events: none;
          animation: floatDot 7s ease-in-out infinite alternate;
        }
        .floating-dot2 { animation-delay: 2s; }
        .floating-dot3 { animation-delay: 4s; }
        @keyframes floatDot {
          0% { transform: translateY(0); opacity: 0.18; }
          50% { transform: translateY(-24px); opacity: 0.28; }
          100% { transform: translateY(0); opacity: 0.18; }
        }
      `}</style>
    </ThemeContext.Provider>
  )
}

export default App; 