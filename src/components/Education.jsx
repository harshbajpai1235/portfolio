import React, { useState, useContext } from 'react';
import { X, GraduationCap, Award, BookOpen } from 'lucide-react';
import { ThemeContext } from '../App';

const Education = () => {
  const [selectedUniversity, setSelectedUniversity] = useState(null);
  const { isDarkMode } = useContext(ThemeContext);

  const universities = [
    {
      id: 'sfsu',
      name: 'San Francisco State University',
      logo: '/portfolio/images/universities/sfsu-logo.png',
      degree: 'Master of Science in Statistical Data Science',
      years: '2024 - 2026',
      gpa: 3.7,
      maxGpa: 4.0,
      isPursuing: true,
      courses: [
        'Statistical Learning & Data Mining',
        'Advanced Probability Models',
        'Statistical Computing with R and Python',
        'Experimental Design and Analysis',
        'Application of Statistical & Machine Learning',
        'Pattern Analysis & Computational Statistics'
      ],
      achievements: [
        'Currently pursuing Master\'s degree in Statistical Data Science',
        'Focus on applied statistics and data science methodologies'
      ]
    },
    {
      id: 'rgpv',
      name: 'Rajiv Gandhi Proudyogiki Vishwavidyalaya',
      logo: '/portfolio/images/universities/mumbai-logo.png',
      degree: 'Bachelor of Technology in Electronics & Communication Engineering',
      years: '2020 - 2024',
      gpa: 8.9,
      maxGpa: 10,
      isPursuing: false,
      courses: [
        'Data Structures and Algorithms',
        'C Programming',
        'IoT Development',
        'Embedded Systems',
        'Object-Oriented Programming',
        'Signal Processing'
      ],
      achievements: [
        'First Class with Distinction (CGPA: 8.98/10)',
        'Consistently ranked among top 3 students in the department throughout the program'
      ]
    }
  ];

  const handleUniversityClick = (university) => {
    setSelectedUniversity(university);
  };

  const closeModal = () => {
    setSelectedUniversity(null);
  };

  return (
    <section id="education" className={`py-16 transition-colors duration-300 ${
      isDarkMode 
        ? 'bg-gray-800 text-gray-100' 
        : 'bg-white text-gray-900'
    }`}>
      <div className="max-w-6xl mx-auto px-6 lg:px-20">
        {/* Section Title */}
        <h2 className={`text-4xl font-bold mb-4 text-center drop-shadow-lg transition-colors duration-300 ${
          isDarkMode ? 'text-white' : 'text-gray-900'
        }`}>
          EDUCATION
        </h2>
        
        {/* Highlight Line */}
        <div className="w-24 h-1 bg-blue-600 mx-auto mb-12"></div>

        {/* University Tiles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {universities.map((university) => (
            <div
              key={university.id}
              onClick={() => handleUniversityClick(university)}
              className={`relative cursor-pointer group transition-all duration-500 transform hover:scale-105 ${
                isDarkMode 
                  ? 'bg-gray-700 hover:bg-gray-600 border-gray-600' 
                  : 'bg-white hover:bg-gray-50 border-gray-200'
              } rounded-xl shadow-lg hover:shadow-xl border-2 border-transparent hover:border-purple-500/30 overflow-hidden`}
            >
              {/* University Logo */}
              <div className="h-80 overflow-hidden rounded-b-xl">
                <img 
                  src={university.logo} 
                  alt={`${university.name} Logo`}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
              </div>
              
              {/* University Info (Always Visible) */}
              <div className={`p-6 ${
                isDarkMode ? 'bg-gray-700' : 'bg-white'
              }`}>
                <div className={`transition-colors duration-300 ${
                  isDarkMode ? 'text-gray-200' : 'text-gray-900'
                }`}>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold">{university.name}</h3>
                    {university.isPursuing && (
                      <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
                        Pursuing
                      </span>
                    )}
                  </div>
                  <p className={`text-lg mb-1 transition-colors duration-300 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    {university.degree}
                  </p>
                  <p className={`text-sm transition-colors duration-300 ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-500'
                  }`}>
                    {university.years}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Information Display Area */}
        {selectedUniversity && (
          <div className={`mt-8 p-8 rounded-xl shadow-2xl transition-all duration-700 ease-out transform animate-in slide-in-from-bottom-8 fade-in-0 ${
            isDarkMode 
              ? 'bg-gray-700 border border-gray-600' 
              : 'bg-white border border-gray-200'
          }`}>
            {/* Header with Close Button */}
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center gap-4">
                <div className={`p-3 rounded-full ${
                  isDarkMode ? 'bg-purple-600/20' : 'bg-purple-100'
                }`}>
                  <GraduationCap className={`w-6 h-6 ${
                    isDarkMode ? 'text-purple-400' : 'text-purple-600'
                  }`} />
                </div>
                <div>
                  <h3 className={`text-2xl font-bold mb-1 transition-colors duration-300 ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {selectedUniversity.name}
                  </h3>
                  <p className={`text-lg transition-colors duration-300 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {selectedUniversity.degree}
                  </p>
                  <p className={`text-sm transition-colors duration-300 ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-500'
                  }`}>
                    {selectedUniversity.years}
                  </p>
                </div>
              </div>
              <button
                onClick={closeModal}
                className={`p-2 rounded-full hover:bg-gray-200 transition-all duration-300 hover:scale-110 ${
                  isDarkMode ? 'hover:bg-gray-600' : 'hover:bg-gray-200'
                }`}
              >
                <X className={`w-5 h-5 ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-600'
                }`} />
              </button>
            </div>

            {/* GPA Display */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className={`font-semibold transition-colors duration-300 ${
                  isDarkMode ? 'text-gray-200' : 'text-gray-700'
                }`}>
                  Cumulative GPA
                </span>
                <span className={`font-bold text-lg transition-colors duration-300 ${
                  isDarkMode ? 'text-green-400' : 'text-green-600'
                }`}>
                  {selectedUniversity.gpa}/{selectedUniversity.maxGpa}
                </span>
              </div>
              <div className={`w-full h-3 rounded-full overflow-hidden ${
                isDarkMode ? 'bg-gray-600' : 'bg-gray-200'
              }`}>
                <div 
                  className="h-full bg-green-500 rounded-full transition-all duration-1500 ease-out"
                  style={{ 
                    width: `${(selectedUniversity.gpa / selectedUniversity.maxGpa) * 100}%` 
                  }}
                ></div>
              </div>
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Relevant Courses */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <BookOpen className={`w-5 h-5 ${
                    isDarkMode ? 'text-blue-400' : 'text-blue-600'
                  }`} />
                  <h4 className={`font-semibold text-lg transition-colors duration-300 ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    Relevant Courses
                  </h4>
                </div>
                <ul className={`space-y-2 transition-colors duration-300 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  {selectedUniversity.courses.map((course, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                        isDarkMode ? 'bg-blue-400' : 'bg-blue-600'
                      }`}></span>
                      <span>{course}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Notable Achievements */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Award className={`w-5 h-5 ${
                    isDarkMode ? 'text-yellow-400' : 'text-yellow-600'
                  }`} />
                  <h4 className={`font-semibold text-lg transition-colors duration-300 ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    Notable Achievements
                  </h4>
                </div>
                <ul className={`space-y-3 transition-colors duration-300 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  {selectedUniversity.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                        isDarkMode ? 'bg-yellow-400' : 'bg-yellow-600'
                      }`}></span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Education; 