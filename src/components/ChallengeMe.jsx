import React, { useState, useContext } from 'react';
import { Send, Target, Zap, Award } from 'lucide-react';
import { ThemeContext } from '../App';

const ChallengeMe = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    challenge: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch('https://formspree.io/f/mwpqledk', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          challenge: formData.challenge,
        }),
      });
      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', challenge: '' });
      } else {
        alert('Submission failed. Please try again.');
      }
    } catch (error) {
      alert('Submission failed. Please try again.');
    }
    setIsSubmitting(false);
  };

  return (
    <section id="challenge-me" className={`py-20 ${isDarkMode ? 'bg-[#232b36]' : 'bg-[#f7f9fa]'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold mb-4 uppercase tracking-wider transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Challenge Me</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className={`text-lg font-medium transition-colors duration-300 ${isDarkMode ? 'text-blue-200' : 'text-blue-700'}`}>Ask me anything. Let's connect!</p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-start h-full">
          {/* Left Side: Text and Icons */}
          <div className="flex flex-col h-full">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Ready for a Challenge?</h3>
            </div>
            <p className={`text-lg mb-8 ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>I love solving complex data problems and turning them into actionable insights. Whether it's a business challenge, a dataset that needs analysis, or an innovative approach you want to explore, I'm ready to take it on!</p>
            {/* What I Can Help With (improved color) */}
            <div className={`rounded-xl p-6 mt-0 mb-8 border ${isDarkMode ? 'bg-[#232b36] border-blue-900' : 'bg-blue-50 border-blue-400'}`}>
              <h4 className={`font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>What I Can Help With:</h4>
              <div className="grid grid-cols-2 gap-2 text-base font-semibold">
                <span className={`flex items-center gap-2 ${isDarkMode ? 'text-blue-200' : 'text-blue-900'}`}><span className={`w-2 h-2 rounded-full ${isDarkMode ? 'bg-blue-200' : 'bg-blue-900'}`}></span>Data Cleaning & Preprocessing</span>
                <span className={`flex items-center gap-2 ${isDarkMode ? 'text-blue-200' : 'text-blue-900'}`}><span className={`w-2 h-2 rounded-full ${isDarkMode ? 'bg-blue-200' : 'bg-blue-900'}`}></span>Statistical Analysis</span>
                <span className={`flex items-center gap-2 ${isDarkMode ? 'text-blue-200' : 'text-blue-900'}`}><span className={`w-2 h-2 rounded-full ${isDarkMode ? 'bg-blue-200' : 'bg-blue-900'}`}></span>Predictive Modeling</span>
                <span className={`flex items-center gap-2 ${isDarkMode ? 'text-blue-200' : 'text-blue-900'}`}><span className={`w-2 h-2 rounded-full ${isDarkMode ? 'bg-blue-200' : 'bg-blue-900'}`}></span>Dashboard Creation</span>
                <span className={`flex items-center gap-2 ${isDarkMode ? 'text-blue-200' : 'text-blue-900'}`}><span className={`w-2 h-2 rounded-full ${isDarkMode ? 'bg-blue-200' : 'bg-blue-900'}`}></span>Business Intelligence</span>
                <span className={`flex items-center gap-2 ${isDarkMode ? 'text-blue-200' : 'text-blue-900'}`}><span className={`w-2 h-2 rounded-full ${isDarkMode ? 'bg-blue-200' : 'bg-blue-900'}`}></span>Any AI Related Query</span>
              </div>
            </div>
            {/* LinkedIn DM Prompt (polished, professional, consistent) */}
            <div className={`w-full rounded-2xl px-8 py-7 flex flex-col sm:flex-row items-center justify-between shadow-lg transition-colors duration-300 mt-8 ${isDarkMode ? 'bg-gradient-to-r from-blue-900 to-blue-700' : 'bg-gradient-to-r from-blue-500 to-blue-400'} mt-auto`}
                 style={{ minHeight: '130px' }}>
              {/* Left: Official LinkedIn Logo and Text */}
              <div className="flex flex-row items-center flex-1 min-w-0">
                <div className="flex-shrink-0 flex items-center justify-center w-16 h-16 rounded-full bg-[#0077b5]/90 shadow-md mr-7">
                  {/* Official LinkedIn logo: white 'in' on blue */}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-9 h-9" fill="white">
                    <rect width="32" height="32" rx="16" fill="#0077b5"/>
                    <path d="M12.75 13.5h-2.5v8h2.5v-8zm-1.25-1.25c.828 0 1.25-.672 1.25-1.25 0-.578-.422-1.25-1.25-1.25s-1.25.672-1.25 1.25c0 .578.422 1.25 1.25 1.25zm3.25 1.25v8h2.5v-4.25c0-1.125.75-1.75 1.625-1.75.875 0 1.125.625 1.125 1.75v4.25h2.5v-4.75c0-2.25-1.25-3.25-2.75-3.25-1.125 0-1.625.625-1.875 1.063V13.5h-2.125z"/>
                  </svg>
                </div>
                <div className="flex flex-col min-w-0 justify-center text-left">
                  <span className="block text-3xl font-extrabold mb-1 text-white drop-shadow-lg tracking-tight text-left">
                    Prefer LinkedIn?
                  </span>
                  <span className="text-base text-white/90 leading-snug">Connect and send your challenges, suggestions, questions via DM</span>
                </div>
              </div>
              {/* Right: Button with blue 'in' on white */}
              <a
                href="https://www.linkedin.com/in/harsh-bajpai22"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 sm:mt-0 sm:ml-8 inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold shadow-md transition-all duration-300 text-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 border-2 border-[#0077b5] bg-white text-[#0077b5] hover:bg-blue-50 hover:text-blue-900"
                style={{ fontWeight: 600 }}
              >
                {/* Blue 'in' on white */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-7 h-7" fill="#0077b5">
                  <rect width="32" height="32" rx="16" fill="white"/>
                  <path d="M12.75 13.5h-2.5v8h2.5v-8zm-1.25-1.25c.828 0 1.25-.672 1.25-1.25 0-.578-.422-1.25-1.25-1.25s-1.25.672-1.25 1.25c0 .578.422 1.25 1.25 1.25zm3.25 1.25v8h2.5v-4.25c0-1.125.75-1.75 1.625-1.75.875 0 1.125.625 1.125 1.75v4.25h2.5v-4.75c0-2.25-1.25-3.25-2.75-3.25-1.125 0-1.625.625-1.875 1.063V13.5h-2.125z"/>
                </svg>
                DM on LinkedIn
              </a>
            </div>
          </div>
          {/* Right Side: Form */}
          <div className="flex flex-col h-full justify-stretch">
            {/* Gradient border wrapper */}
            <div className="rounded-2xl p-[2px] bg-gradient-to-r from-blue-400 to-blue-600 shadow-xl h-full flex flex-col justify-center">
              <div className={`rounded-xl h-full flex flex-col justify-center ${isDarkMode ? 'bg-[#232b36]' : 'bg-white'} p-8`}>
                <style>
                  {`
                    .flip-card {
                      perspective: 1200px;
                    }
                    .flip-card-inner {
                      position: relative;
                      width: 100%;
                      height: 100%;
                      transition: transform 0.7s cubic-bezier(0.4,0,0.2,1);
                      transform-style: preserve-3d;
                    }
                    .flip-card.flipped .flip-card-inner {
                      transform: rotateY(180deg);
                    }
                    .flip-card-front, .flip-card-back {
                      position: absolute;
                      width: 100%;
                      height: 100%;
                      backface-visibility: hidden;
                      -webkit-backface-visibility: hidden;
                      top: 0;
                      left: 0;
                    }
                    .flip-card-back {
                      transform: rotateY(180deg);
                    }
                  `}
                </style>
                <div className={`flip-card relative w-full h-full flex-1 flex flex-col justify-center${isSubmitted ? ' flipped' : ''}`} style={{ minHeight: 400 }}>
                  <div className="flip-card-inner w-full h-full">
                    {/* Front: Form */}
                    <form
                      onSubmit={handleSubmit}
                      className="flip-card-front space-y-6 flex-1 flex flex-col justify-center rounded-xl bg-transparent"
                    >
                      {/* Call to Action Heading */}
                      <div className="text-3xl font-extrabold text-center mb-8 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 bg-clip-text text-transparent drop-shadow-lg">
                        Let's Tackle Your Problem!
                      </div>
                      <div>
                        <label htmlFor="name" className={`block mb-2 font-semibold ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>Your Name *</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className={`w-full px-4 py-3 rounded-md border-0 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors duration-300 ${isDarkMode ? 'bg-[#1a2027] text-white placeholder-gray-400' : 'bg-gray-100 text-gray-900 placeholder-gray-500'}`}
                          placeholder="Enter your name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className={`block mb-2 font-semibold ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>Email Address *</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className={`w-full px-4 py-3 rounded-md border-0 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors duration-300 ${isDarkMode ? 'bg-[#1a2027] text-white placeholder-gray-400' : 'bg-gray-100 text-gray-900 placeholder-gray-500'}`}
                          placeholder="Enter your email"
                        />
                      </div>
                      <div>
                        <label htmlFor="challenge" className={`block mb-2 font-semibold ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>Describe Your Challenge *</label>
                        <textarea
                          id="challenge"
                          name="challenge"
                          value={formData.challenge}
                          onChange={handleChange}
                          required
                          rows={5}
                          className={`w-full px-4 py-3 rounded-md border-0 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors duration-300 ${isDarkMode ? 'bg-[#1a2027] text-white placeholder-gray-400' : 'bg-gray-100 text-gray-900 placeholder-gray-500'}`}
                          placeholder="Describe your data challenge, business problem, or the dataset you'd like me to analyze..."
                        />
                      </div>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 font-medium text-lg gap-2"
                      >
                        <Send size={20} />
                        {isSubmitting ? 'Submitting...' : 'Submit Challenge'}
                      </button>
                    </form>
                    {/* Back: Acknowledgment */}
                    <div className={`flip-card-back flex flex-col items-center justify-center rounded-xl ${isDarkMode ? 'bg-[#232b36]' : 'bg-white'}`}>
                      <span style={{ fontSize: 56 }} role="img" aria-label="Party Popper">🎉</span>
                      <h2 className="mt-4 text-2xl font-bold text-center text-gray-900 dark:text-white">Challenge Submitted!</h2>
                      <p className="mt-3 text-center text-gray-400 text-lg font-medium max-w-xs">
                        Thank you for the challenge! I'll review your request and get back to you shortly with my approach and timeline.
                      </p>
                      <button
                        className="mt-8 px-7 py-3 bg-blue-600 text-white rounded-md text-lg font-semibold shadow hover:bg-blue-700 transition-colors"
                        onClick={() => setIsSubmitted(false)}
                      >
                        Submit Another Challenge
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChallengeMe; 