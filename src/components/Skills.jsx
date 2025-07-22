import React, { useContext } from 'react';
import { ThemeContext } from '../App';

const Skills = () => {
  const { isDarkMode } = useContext(ThemeContext);

  const floatingIcons = [
    { id: 1, name: 'Python', image: '/portfolio/images/skills/python-logo.png' },
    { id: 2, name: 'Apache Spark', image: '/portfolio/images/skills/spark-logo.png' },
    { id: 3, name: 'SQL', image: '/portfolio/images/skills/sql-logo.png' },
    { id: 4, name: 'Data Warehouse', image: '/portfolio/images/skills/warehouse-logo.png' },
    { id: 5, name: 'Data Structures', image: '/portfolio/images/skills/datastructures-logo.png' },
    { id: 6, name: 'Snowflake', image: '/portfolio/images/skills/snowflake-logo.png' },
    { id: 7, name: 'Databricks', image: '/portfolio/images/skills/databricks-logo.png' },
    { id: 8, name: 'Azure', image: '/portfolio/images/skills/azure-logo.png' },
    { id: 9, name: 'Power BI', image: '/portfolio/images/skills/powerbi-logo.png' },
    { id: 10, name: 'Tableau', image: '/portfolio/images/skills/tableau-logo.png' },
    { id: 11, name: 'R', image: '/portfolio/images/skills/r-logo.png' },
    { id: 12, name: 'Excel', image: '/portfolio/images/skills/excel-logo.png' }
  ];

  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'Python', proficiency: 90 },
        { name: 'R', proficiency: 70 },
        { name: 'SQL', proficiency: 95 },
        { name: 'C', proficiency: 80 },
        { name: 'Matlab', proficiency: 60 }
      ]
    },
    {
      title: 'Data Analysis & Manipulation',
      skills: [
        { name: 'Pandas', proficiency: 90 },
        { name: 'Numpy', proficiency: 90 },
        { name: 'Excel', proficiency: 95 },
        { name: 'Hypothesis Testing', proficiency: 90 },
        { name: 'A/B Testing', proficiency: 90 }
      ]
    },
    {
      title: 'Data Visualization',
      skills: [
        { name: 'Tableau', proficiency: 95 },
        { name: 'PowerBI', proficiency: 75 },
        { name: 'Matplotlib', proficiency: 95 },
        { name: 'Seaborn', proficiency: 90 },
        { name: 'Excel (Charts)', proficiency: 90 }
      ]
    },
    {
      title: 'Machine Learning (Foundational/Applied)',
      skills: [
        { name: 'Scikit-learn', proficiency: 80 },
        { name: 'Regression Models', proficiency: 90 },
        { name: 'Time Series Analysis', proficiency: 75 }
      ]
    },
    {
      title: 'Soft Skills',
      skills: [
        { name: 'Data Storytelling', proficiency: 95 },
        { name: 'Problem Solving', proficiency: 90 },
        { name: 'Project Management', proficiency: 95 },
        { name: 'Ownership & Accountability', proficiency: 93 },
        { name: 'Structured Thinking', proficiency: 95 }
      ]
    },
    {
      title: "Currently Learning",
      skills: [
        { name: "PostgreSQL", proficiency: 35 },
        { name: "Apache", proficiency: 25 },
        { name: "Scrum", proficiency: 75 },
        { name: "Kanban", proficiency: 70 },
        { name: "Jira", proficiency: 86 }
      ]
    }
  ];

  return (
    <section id="skills" className={`py-16 transition-colors duration-300 ${
      isDarkMode ? 'bg-gray-900' : 'bg-gray-100'
    }`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-4">
          <h2 className={`text-4xl font-bold mb-4 transition-colors duration-300 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            SKILLS & EXPERTISE
          </h2>
          
          {/* Highlight Line */}
          <div className="flex justify-center mb-4">
            <div className="w-24 h-1 bg-blue-500 rounded-full"></div>
          </div>
          
          <p className={`text-lg italic transition-colors duration-300 mb-8 ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            "Learning is my constant. Tools evolve, and so do I."
          </p>
        </div>

        {/* Floating Icons */}
        <div className="mb-16">
          <div className="flex flex-wrap justify-center gap-8 lg:gap-12 xl:gap-16">
            {floatingIcons.map((icon, index) => (
              <div
                key={icon.id}
                className={`w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 bg-white rounded-lg border-4 border-gray-900 shadow-2xl flex items-center justify-center p-3 transform hover:scale-110 transition-all duration-500 ease-out animate-float`}
                style={{
                  animationDelay: `${index * 0.3}s`,
                  animationDuration: '3s',
                  animationIterationCount: 'infinite',
                  animationTimingFunction: 'ease-in-out'
                }}
              >
                <img 
                  src={icon.image} 
                  alt={icon.name}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Skills Categories */}
        <div className={`rounded-2xl p-8 border-2 transition-all duration-300 ${
          isDarkMode 
            ? 'bg-gray-800 border-gray-700 shadow-xl' 
            : 'bg-white border-gray-200 shadow-lg'
        }`}>
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className={`rounded-xl p-6 border-4 transition-all duration-300 hover:shadow-xl hover:scale-105 ${
                  isDarkMode 
                    ? 'bg-gray-700 border-gray-600 shadow-lg hover:border-purple-500/30' 
                    : 'bg-gray-50 border-gray-200 shadow-md hover:border-blue-500/30'
                }`}
              >
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mr-4 transition-all duration-300 shadow-lg ${
                    category.title === 'Programming Languages'
                      ? (isDarkMode ? 'bg-gradient-to-br from-blue-500 to-purple-600' : 'bg-gradient-to-br from-blue-500 to-purple-600')
                      : category.title === 'Data Analysis & Manipulation'
                      ? (isDarkMode ? 'bg-gradient-to-br from-green-500 to-emerald-600' : 'bg-gradient-to-br from-green-500 to-emerald-600')
                      : category.title === 'Data Visualization'
                      ? (isDarkMode ? 'bg-gradient-to-br from-orange-500 to-red-500' : 'bg-gradient-to-br from-orange-500 to-red-500')
                      : category.title === 'Machine Learning (Foundational/Applied)'
                      ? (isDarkMode ? 'bg-gradient-to-br from-purple-500 to-pink-600' : 'bg-gradient-to-br from-purple-500 to-pink-600')
                      : category.title === 'Soft Skills'
                      ? (isDarkMode ? 'bg-gradient-to-br from-indigo-500 to-blue-600' : 'bg-gradient-to-br from-indigo-500 to-blue-600')
                      : (isDarkMode ? 'bg-gradient-to-br from-yellow-500 to-orange-500' : 'bg-gradient-to-br from-yellow-500 to-orange-500')
                  }`}>
                    <div className="w-6 h-6 text-white font-bold text-lg flex items-center justify-center">
                      {category.title === 'Programming Languages' && '💻'}
                      {category.title === 'Data Analysis & Manipulation' && '📊'}
                      {category.title === 'Data Visualization' && '📈'}
                      {category.title === 'Machine Learning (Foundational/Applied)' && '🤖'}
                      {category.title === 'Soft Skills' && '🎯'}
                      {category.title === 'Currently Learning' && '🚀'}
                    </div>
                  </div>
                  <h3 className={`text-xl font-bold transition-colors duration-300 ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {category.title}
                  </h3>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className={`font-medium transition-colors duration-300 ${
                          isDarkMode ? 'text-gray-200' : 'text-gray-700'
                        }`}>
                          {skill.name}
                          {category.title === 'Currently Learning' && (
                            <span className="ml-2 inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300">
                              <span className="mr-1">📈</span>
                              In Progress
                            </span>
                          )}
                        </span>
                        <span className={`font-bold transition-colors duration-300 ${
                          skill.proficiency >= 85
                            ? (isDarkMode ? 'text-green-400' : 'text-green-600')
                            : skill.proficiency >= 70
                            ? (isDarkMode ? 'text-yellow-400' : 'text-yellow-600')
                            : (isDarkMode ? 'text-red-400' : 'text-red-600')
                        }`}>
                          {skill.proficiency}%
                        </span>
                      </div>
                      <div className={`w-full h-3 rounded-full overflow-hidden ${
                        isDarkMode ? 'bg-gray-600' : 'bg-gray-200'
                      }`}>
                        <div 
                          className={`h-full rounded-full transition-all duration-1000 ease-out ${
                            skill.proficiency >= 85
                              ? 'bg-gradient-to-r from-green-500 to-emerald-600'
                              : skill.proficiency >= 70
                              ? 'bg-gradient-to-r from-yellow-500 to-amber-600'
                              : 'bg-gradient-to-r from-red-500 to-red-600'
                          }`}
                          style={{ width: `${skill.proficiency}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Skills;