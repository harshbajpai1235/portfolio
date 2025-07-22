import React, { useState, useEffect, useContext } from 'react';
import { BarChart3, Menu, X, Database, BarChart2, Sun, Moon } from 'lucide-react';
import { ThemeContext } from '../App';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const [isScrolled, setIsScrolled] = useState(false);
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  const navLinks = [
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Education', href: '#education', id: 'education' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Dashboards', href: '#dashboards', id: 'dashboards' },
    { name: 'Certifications', href: '#certifications', id: 'certifications' },
    { name: 'Gallery', href: '#gallery', id: 'gallery' },
    { name: 'Challenge Me', href: '#challenge', id: 'challenge' },
    { name: 'Contact', href: '#contact', id: 'contact' }
  ];

  // Handle scroll for shadow effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll spy implementation using IntersectionObserver
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -80% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          setActiveSection(sectionId);
        }
      });
    }, observerOptions);

    // Observe all sections
    navLinks.forEach((link) => {
      const element = document.getElementById(link.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      navLinks.forEach((link) => {
        const element = document.getElementById(link.id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [navLinks]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
    
    // Smooth scroll to section with special handling for About section
    if (sectionId === 'about') {
      // Scroll directly to the animated banner for About section
      const bannerElement = document.getElementById('about-banner');
      if (bannerElement) {
        bannerElement.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="sticky top-0 z-50">
      {/* Main navbar */}
      <nav className={`transition-all duration-300 ${
        isDarkMode 
          ? 'bg-gray-900/95 backdrop-blur-md border-b border-gray-800' 
          : 'bg-white/95 backdrop-blur-md border-b border-gray-200'
      } ${isScrolled ? 'shadow-sm' : ''}`}>
        <div className="w-full px-8 lg:px-12">
          <div className="flex justify-between items-center h-16">
            {/* Left side - Branding */}
            <a 
              href="#home" 
              onClick={scrollToTop}
              className={`text-2xl font-extrabold tracking-wide transition-colors whitespace-nowrap ${
                isDarkMode 
                  ? 'text-white hover:text-gray-300' 
                  : 'text-blue-800 hover:text-blue-600'
              }`}
            >
              Harsh Bajpai
            </a>

            {/* Center - Desktop Navigation */}
            <div className="hidden lg:flex gap-8 items-center">
              {navLinks.map((link, index) => (
                <div key={link.name} className="relative group">
                  <a
                    href={link.href}
                    onClick={() => handleNavClick(link.id)}
                    className={`text-sm uppercase tracking-wide font-medium transition-all duration-300 cursor-pointer hover:scale-[1.02] hover:translate-y-[-1px] relative group before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-blue-800 before:transition-all before:duration-300 group-hover:before:w-full ${
                      activeSection === link.id 
                        ? isDarkMode 
                          ? 'text-cyan-400 font-semibold' 
                          : 'text-teal-600 font-semibold'
                        : isDarkMode
                          ? 'text-gray-300 hover:text-white'
                          : 'text-gray-700'
                    }`}
                  >
                    {link.name}
                  </a>
                  {/* Active indicator dot */}
                  {activeSection === link.id && (
                    <div className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full ${
                      isDarkMode ? 'bg-cyan-400' : 'bg-teal-600'
                    }`}></div>
                  )}
                </div>
              ))}
            </div>

            {/* Right side - Theme Toggle & Mobile Menu */}
            <div className="flex items-center space-x-4">
              {/* Theme Toggle Button */}
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-lg transition-all duration-300 ${
                  isDarkMode 
                    ? 'text-yellow-400 hover:bg-gray-800' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
                aria-label="Toggle theme"
              >
                {isDarkMode ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </button>

              {/* Mobile menu button */}
              <div className="lg:hidden">
                <button
                  onClick={toggleMenu}
                  className={`p-2 rounded-md transition-colors duration-300 ${
                    isDarkMode ? 'text-white hover:bg-gray-800' : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className={`lg:hidden border-t transition-all duration-300 ${
              isDarkMode 
                ? 'bg-gray-900 border-gray-800' 
                : 'bg-gray-50 border-gray-200'
            }`}>
              <div className="px-6 py-4 space-y-3">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => handleNavClick(link.id)}
                    className={`block text-sm font-medium uppercase tracking-wide transition-colors ${
                      activeSection === link.id
                        ? isDarkMode 
                          ? 'text-cyan-400 font-semibold' 
                          : 'text-teal-600 font-semibold'
                        : isDarkMode
                          ? 'text-gray-300 hover:text-white'
                          : 'text-gray-700 hover:text-blue-800'
                    }`}
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar; 