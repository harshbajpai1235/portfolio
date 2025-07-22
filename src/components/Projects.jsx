import React, { useState, useContext } from "react";
import { ExternalLink, Github, FileText, Presentation, Eye, ArrowLeft, X } from "lucide-react";
import { ThemeContext } from "../App";

// Project images - using public directory method
const Projects = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const [selectedProject, setSelectedProject] = useState(null);
  const [showLiteratureSurveyModal, setShowLiteratureSurveyModal] = useState(false);
  const [selectedLiteratureSurvey, setSelectedLiteratureSurvey] = useState(null);

  // Main Projects Data
  const mainProjects = [
    {
      id: 1,
      title: "NYC Yellow Taxi Fare Prediction",
      thumbnail: "/portfolio/images/projects/nyc-taxi.jpg", // Add image to public/portfolio/images/projects/
      category: "Data Science/Data Analytics",
      shortDescription: "A full stack data science project where I analyzed NYC dataset with 6Millions+ records.",
      hasLiveDemo: true,
      problem: "The challenge was to predict New York City Yellow Taxi fare and total trip amount using a large-scale dataset (~6.4 million records), requiring efficient preprocessing, machine learning modeling, and real-time deployment readiness.",
      motivation: "I wanted to showcase my ability to turn raw data into smart, usable insights through a production-ready ML pipeline. Inspired by the impact real-time fare estimations can have on customer experience and operational optimization, I aimed to combine data science with user-facing design.",
      role: "I led this end-to-end full-stack project as a solo Data Scientist, managing the entire project lifecycle from data wrangling and feature engineering to model training, API creation, UI development, and cloud deployment, while also handling timelines, planning, and technical coordination.",
      dataSources: [
        "NYC Taxi & Limousine Commision trip records",
        "Google Maps API (distance/duration)"
      ],
      methodologies: [
        "Machine Learning",
        "Regression Analysis",
        "Feature Engineering & Dimensionality Reduction",
        "Exploratory & Statistical Analysis",
        "Real-time Flask API development and front-end integration",
        "Hybrid Rule-Based Logic (for total amount prediction)"
      ],
      tools: [
        "Python (pandas, scikit-learn, numpy, matplotlib, seaborn)",
        "Flask",
        "Jupyter Notebook",
        "Google Maps API",
        "Render",
        "HTML",
        "CSS",
        "JS"
      ],
      results: "Achieved 85% accuracy on fare prediction. Reduced model size from 1.5GB to 3.8MB for real-time API compatibility. Built a live interactive fare estimator with location autocomplete and real-time predictions.",
      learnings: "Learned how to optimize and compress machine learning models without significant performance loss. Understood the power of combining rule-based business logic with data-driven models. Discovered payment-type influences on total revenue, with card payments showing higher average fare values than cash.",
        demoLink: "https://nyc-yellow-taxi-fare-prediction.onrender.com",
        githubLink: "https://github.com/harshbajpai1235/Project-NYC-taxi",
        presentationLink: "https://docs.google.com/presentation/d/e/2PACX-1vQ_HIC8dLub63ggIvUEb0KwH7pSqMLqyJXqnnQAWPC8akwhs7EMK929sa1grBG845dYBvY-weAtsTr2/pub?start=false&loop=false&delayms=3000",
        reportLink: "/portfolio/public/portfolio/documents/nyc-taxi-report.pdf"
    },
    {
      id: 2,
      title: "Netflix Data-Driven Analysis",
      thumbnail: "/portfolio/images/projects/netflix-analysis.jpg", // Add image to public/portfolio/images/projects/
      category: "Data Analysis",
      shortDescription: "A comprehensive data exploration project analyzing 10,000+ Netflix movies and series.",
      hasLiveDemo: false,
      problem: "With streaming platforms like Netflix transforming global entertainment, this project aimed to uncover what makes certain movies more successful than others. Using a dataset of 10,000+ titles, I explored metadata to identify patterns in genre performance, ratings, language, and narrative themes.",
      motivation: "I was curious about the interplay between audience preferences and content traits in the media industry. This project let me blend storytelling with data, using exploratory analysis and clustering to provide insights that could influence content strategy and viewer engagement.",
      role: "I led this project independently, from data exploration and visualization to business insight generation and unsupervised learning. I also managed the entire project structure, analysis pipeline, and insight communication.",
      dataSources: [
        "Open-source Netflix-style movie metadata (~10,000 entries)",
        "Included variables: title, language, release year, genre(s), popularity, vote counts, average rating, and overview text"
      ],
      methodologies: [
        "Exploratory Data Analysis (EDA)",
        "Text preprocessing and word cloud generation",
        "KMeans Clustering",
        "Feature Engineering and Thematic Analysis",
        "Business Insight Synthesis"
      ],
      tools: [
        "Python",
        "Pandas",
        "NumPy",
        "Matplotlib",
        "Seaborn",
        "Scikit-learn (KMeans)",
        "Jupyter Notebook",
        "Data Storytelling",
        "Business Communication"
      ],
      results: "Movie production increased significantly post-2000, peaking in 2017. English dominates the dataset, with Hindi and French as notable contributors. Top genres by volume: Drama, Comedy, and Thriller. KMeans clustering revealed 4 viewer-response-based movie groups.",
      learnings: "Genre alone doesn’t dictate success—language, theme, and emotional pull matter. Combining multiple metrics (ratings, popularity, votes) yields better acquisition strategies. Viewer behavior often elevates ‘hidden gems’ that lack exposure but perform well.",
      recommendations: "Focus on rising genres like Sci-Fi and Animation to engage younger viewers. Promote emotionally resonant themes like family, heroism, and true stories. Develop a hybrid success metric for smarter content acquisition.",
      githubLink: "https://github.com/harshbajpai1235/Netflix-Movie-Insights",
      reportLink: "/portfolio/public/portfolio/documents/netflix.pdf"
    },
    {
      id: 3,
      title: "Hotel Booking Cancellation Analysis",
      thumbnail: "/portfolio/images/projects/hotel-booking.jpg", // Add image to public/portfolio/images/projects/
      category: "Data Analysis",
      shortDescription: "Explored patterns in hotel booking cancellations using real-world data from City and Resort hotels.",
      hasLiveDemo: false,
      problem: "City and Resort Hotels were facing a major business issue: high booking cancellation rates leading to revenue loss and underutilized capacity. The goal of this project was to analyze real-world data and uncover the key drivers behind these cancellations.",
      motivation: "As someone passionate about transforming raw data into actionable business strategies, I wanted to deep-dive into a high-impact business challenge in the hospitality industry. This project allowed me to identify clear behavioral patterns and translate them into practical recommendations that could reduce cancellations and improve revenue efficiency.",
      role: "I led the entire analytics project independently—from cleaning and transforming a 119,000+ row dataset, designing visual narratives, to extracting actionable business insights. I also applied structured problem-solving and project ownership throughout the process.",
      dataSources: [
        "Real-world hotel booking dataset from City and Resort hotels (2015–2017)",
        "Included 36 features: lead time, booking method, ADR, guest details, etc."
      ],
      methodologies: [
        "Exploratory Data Analysis (EDA)",
        "Statistical Comparison",
        "Outlier Treatment",
        "Data Cleaning & Transformation",
        "Root Cause Pattern Analysis"
      ],
      tools: [
        "Python (pandas, numpy, matplotlib, seaborn)",
        "Jupyter Notebook",
        "Data Storytelling",
        "Business Analytics",
        "Stakeholder-oriented communication"
      ],
      results: "37% of total bookings were canceled. City hotels had a much higher cancellation rate (42%) than resort hotels (28%). January saw the highest cancellation frequency. Online Travel Agencies were responsible for the majority of cancellations. Higher ADR (room price) was strongly correlated with increased cancellations. Portugal accounted for the most canceled bookings by country.",
      recommendations: "Adjust pricing strategies during peak cancellation periods (e.g., January). Reduce OTA dependency by offering better incentives for direct bookings. Offer loyalty perks and weekend discounts to improve city hotel retention. Launch country-specific promotions in high-cancellation regions like Portugal.",
      learnings: "I developed a deeper understanding of customer behavior, pricing sensitivity, and booking dynamics. This project strengthened my ability to translate insights into business actions and reinforced the importance of segment-specific strategies in BI.",
      githubLink: "https://github.com/harshbajpai1235/Hotel-Booking-Cancellation-Analysis",
      reportLink: "/portfolio/public/portfolio/documents/hotel.pdf"
    },
    {
      id: 4,
      title: "Spotify SQL Analysis",
      thumbnail: "/portfolio/images/projects/spotify-sql.jpg", // Add image to public/portfolio/images/projects/
      category: "Data Analysis",
      shortDescription: "SQL-based data analysis project on 20,000+ Spotify & Youtube records.",
      hasLiveDemo: false,
      problem: "With streaming platforms like Spotify and YouTube generating massive user engagement, this project explored over 20,000 tracks to uncover trends in artist performance, track attributes, platform popularity, and user engagement using pure SQL.",
      motivation: "I wanted to challenge myself to extract meaningful insights from a rich media dataset using only SQL. The goal was to go beyond just querying and demonstrate the analytical power of SQL for answering complex business questions, without relying on Python, BI tools, or dashboards.",
      role: "I led the entire project independently from schema design and exploratory querying to advanced SQL analysis. I also focused on clean query structuring, logic optimization, and real-world problem solving using a pure PostgreSQL environment.",
      dataSources: [
        "Rows: 20,594 tracks",
        "Fields: Artist, track, album, album type, audio features (danceability, energy, valence, etc.), platform stats (views, likes, streams), boolean flags (licensed, official_video), platform source (Spotify or YouTube)"
      ],
      methodologies: [
        "Aggregate Functions: AVG, SUM, MAX, MIN",
        "Boolean Filtering (official_video = TRUE)",
        "GROUP BY, ORDER BY, LIMIT",
        "Common Table Expressions (CTEs)",
        "Window Functions (DENSE_RANK() OVER (PARTITION BY...))",
        "Subqueries, COALESCE()"
      ],
      tools: [
        "PostgreSQL (SQL only)",
        "pgAdmin / psql",
        "SQL-Only Project: No Python, dashboards, or external tools used"
      ],
      results: "385 tracks have over 1 billion Spotify streams. Official YouTube videos showed significantly higher engagement (likes/comments). Some tracks performed better on Spotify than YouTube, offering platform-specific marketing insights. Genres with higher energy and danceability dominate top stream lists. Popular themes and high-performing artists showed consistent cross-platform success. CTEs and window functions helped identify each artist’s top 3 most-viewed tracks.",
      businessApplications: "Use engagement data to optimize platform-specific release strategies. Prioritize official video production to increase YouTube engagement. Analyze liveness and energy variance to tailor playlists by mood. Spotlight artists whose visibility lags their performance using rank-based tracking.",
      learnings: "This project reinforced how much can be accomplished using SQL alone—especially for analysts working directly with relational databases. I gained deeper confidence in structuring multi-layer queries, applying ranking logic, and building business cases directly from raw data.",
      githubLink: "https://github.com/harshbajpai1235/Spotify-SQL-Analysis"
    }
  ];

  // Other Projects Data
  const otherProjects = [
    {
      id: 1,
      title: "Face Recognition Using Eigenfaces PCA",
      thumbnail: "/portfolio/images/projects/face-recognition.png", // Image in public directory
      githubLink: "https://github.com/harshbajpai1235/Face-Recognition-by-Eigenface-PCA",
      description: "A MATLAB-based face recognition system that utilizes the Eigenface algorithm"
    },
    {
      id: 2,
      title: "Object Segmentation using Mean Shift",
      thumbnail: "/portfolio/images/projects/mean-shift.jpg", // Add image to public/portfolio/images/projects/
      githubLink: "https://github.com/harshbajpai1235/Object-Segmentation-by-Mean-Shift",
      description: "This project implements the Mean Shift algorithm from scratch to perform image segmentation on grayscale images"
    },
    {
      id: 3,
      title: "Facial Classification using PCA + LDA",
      thumbnail: "/portfolio/images/projects/facial-classification.jpg", // Add image to public/portfolio/images/projects/
      githubLink: "https://github.com/harshbajpai1235/Facial-Classification-by-LDA",
      description: "Implements a facial gender classification pipeline by combining Principal Component Analysis and Linear Discriminant Analysis"
    },
    {
      id: 4,
      title: "The Evolution of Intelligent Integration",
      thumbnail: "/portfolio/images/projects/literature-survey.jpg", // Add image to public/portfolio/images/projects/
      githubLink: "https://github.com/username/literature-survey",
      description: "How SCRF Harnessed the Power of Deep learning and Breakthrough in Automatic Speech Recognition",
      isLiteratureSurvey: true,
      literatureSurveyPdf: "/portfolio/literature-survey.pdf",
      presentationLink: "https://docs.google.com/presentation/d/e/2PACX-1vTHCuT7_ANklkhJmrjAOaJ_jni06EGQsrZDZ9JP4SXBZY9GTwdGisJNik0qm4Qj4hUKdeTxUEeU2Pgi/pub?start=false&loop=false&delayms=3000"
    }
  ];

  // Function to handle image loading errors
  const handleImageError = (e) => {
    // Hide the image and show a placeholder background
    e.target.style.display = 'none';
    const container = e.target.parentElement;
    if (container) {
      container.classList.add('bg-gradient-to-br', 'from-gray-200', 'to-gray-300');
      if (isDarkMode) {
        container.classList.remove('from-gray-200', 'to-gray-300');
        container.classList.add('from-gray-700', 'to-gray-800');
      }
    }
  };

  // Function to get image source - handles public paths with base path
  const getImageSrc = (thumbnail) => {
    return thumbnail; // All images are now public paths
  };

  const openProjectDetails = (project) => {
    setSelectedProject(project);
  };

  const closeProjectDetails = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className={`w-full py-20 ${
      isDarkMode ? 'bg-gray-800' : 'bg-gray-50'
    }`}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold mb-4 transition-colors duration-300 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            PROJECTS
          </h2>
          <div className={`w-24 h-1 bg-blue-600 mx-auto mb-4`}></div>
          <p className={`text-lg transition-colors duration-300 ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Projects are my playground for learning, building, and delivering clarity.
          </p>
        </div>

        {/* Main Projects Card */}
        <div className={`rounded-2xl shadow-2xl p-8 mb-12 transition-all duration-300 ${
          isDarkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
        }`}>
          <h3 className={`text-2xl font-bold mb-8 text-center transition-colors duration-300 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Featured Projects
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mainProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => openProjectDetails(project)}
                className={`group cursor-pointer rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 ${
                  isDarkMode ? 'bg-gray-700 border border-gray-600' : 'bg-white border border-gray-200'
                }`}
              >
                {/* Project Thumbnail */}
                <div className="relative h-48 overflow-hidden rounded-xl">
                  <img
                    src={getImageSrc(project.thumbnail)}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    onError={handleImageError}
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-xl">
                    <div className="text-center text-white drop-shadow-lg">
                      <Eye className="w-8 h-8 mx-auto mb-2" />
                      <p className="font-semibold">View Project Details</p>
                    </div>
                  </div>
                </div>
                
                {/* Project Info */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className={`text-xl font-bold transition-colors duration-300 ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      {project.title}
                    </h4>
                    {project.hasLiveDemo && (
                      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold shadow-sm ${
                        isDarkMode 
                          ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white border border-green-400/30' 
                          : 'bg-gradient-to-r from-green-500 to-emerald-600 text-white border border-green-400/30'
                      }`}>
                        <span className="mr-1">🚀</span>
                        Live Demo
                      </span>
                    )}
                  </div>
                  <p className={`text-sm transition-colors duration-300 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {project.shortDescription}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Other Projects Card */}
        <div className={`rounded-2xl shadow-2xl p-8 transition-all duration-300 ${
          isDarkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
        }`}>
          <h3 className={`text-2xl font-bold mb-8 text-center transition-colors duration-300 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Other Projects
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {otherProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => {
                  if (project.isLiteratureSurvey) {
                    setSelectedLiteratureSurvey(project);
                    setShowLiteratureSurveyModal(true);
                  } else {
                    window.open(project.githubLink, '_blank');
                  }
                }}
                className={`group cursor-pointer rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 ${
                  isDarkMode ? 'bg-gray-700 border border-gray-600' : 'bg-white border border-gray-200'
                }`}
              >
                {/* Project Thumbnail */}
                <div className="relative h-48 overflow-hidden rounded-xl">
                  <img
                    src={getImageSrc(project.thumbnail)}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    onError={handleImageError}
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-xl">
                    <div className="text-center text-white drop-shadow-lg">
                      <Github className="w-8 h-8 mx-auto mb-2" />
                      <p className="font-semibold">Click to View Project</p>
                    </div>
                  </div>
                </div>
                
                {/* Project Info */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className={`text-xl font-bold transition-colors duration-300 ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      {project.title}
                    </h4>
                    {project.isLiteratureSurvey && (
                      <span className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold shadow-sm ${
                        isDarkMode 
                          ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white border border-indigo-400/30' 
                          : 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white border border-indigo-400/30'
                      }`}>
                        <span className="mr-1.5">📚</span>
                        Literature Survey
                      </span>
                    )}
                  </div>
                  <p className={`text-sm transition-colors duration-300 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View More Projects Button */}
        <div className="text-center mt-16">
          <a
            href="https://github.com/harshbajpai1235" // Replace with your actual GitHub profile link
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-300 ${
              isDarkMode ? 'hover:bg-blue-800' : 'hover:bg-blue-700'
            }`}
          >
            <Github className="w-5 h-5 mr-2" />
            View More Projects on GitHub
          </a>
        </div>

        {/* Project Details Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div className={`max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl transition-all duration-700 ease-out transform animate-in slide-in-from-bottom-8 fade-in-0 ${
              isDarkMode ? 'bg-gray-800 border border-gray-600' : 'bg-white border border-gray-200'
            }`}>
              {/* Header */}
              <div className={`sticky top-0 z-10 p-8 border-b transition-all duration-300 backdrop-blur-sm ${
                isDarkMode 
                  ? 'bg-gray-800 bg-opacity-95 border-gray-600' 
                  : 'bg-white bg-opacity-95 border-gray-200'
              }`}>
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-full ${
                      isDarkMode ? 'bg-blue-600/20' : 'bg-blue-100'
                    }`}>
                      <FileText className={`w-6 h-6 ${
                        isDarkMode ? 'text-blue-400' : 'text-blue-600'
                      }`} />
                    </div>
                    <div>
                      <h3 className={`text-3xl font-bold mb-2 transition-colors duration-300 ${
                        isDarkMode ? 'text-white' : 'text-gray-900'
                      }`}>
                        {selectedProject.title}
                      </h3>
                      <p className={`text-lg transition-colors duration-300 ${
                        isDarkMode ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        {selectedProject.category}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={closeProjectDetails}
                    className={`p-2 rounded-full hover:bg-gray-200 transition-all duration-300 hover:scale-110 ${
                      isDarkMode ? 'hover:bg-gray-600' : 'hover:bg-gray-200'
                    }`}
                  >
                    <X className={`w-5 h-5 ${
                      isDarkMode ? 'text-gray-400' : 'text-gray-600'
                    }`} />
                  </button>
                </div>

                {/* Links & Resources Buttons */}
                {selectedProject.title === "Netflix Data-Driven Analysis" ? (
                  <div className="flex flex-wrap gap-4 mt-8">
                    {selectedProject.githubLink && (
                      <a
                        href={selectedProject.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-2 px-5 py-3 rounded-full font-semibold shadow-lg transition-all duration-300 text-base focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 border-2 border-transparent hover:scale-105 active:scale-95 ${
                          isDarkMode
                            ? 'bg-gradient-to-r from-gray-700 to-gray-900 text-white hover:from-gray-600 hover:to-gray-800'
                            : 'bg-gradient-to-r from-gray-200 to-gray-400 text-gray-900 hover:from-gray-300 hover:to-gray-500'
                        }`}
                      >
                        <Github className="w-5 h-5" />
                        GitHub Repository
                      </a>
                    )}
                    {selectedProject.reportLink && (
                      <button
                        onClick={() => {
                          const baseUrl = window.location.origin;
                          const url = baseUrl + selectedProject.reportLink;
                          const link = document.createElement('a');
                          link.href = url;
                          link.target = '_blank';
                          link.rel = 'noopener noreferrer';
                          document.body.appendChild(link);
                          link.click();
                          document.body.removeChild(link);
                        }}
                        className={`flex items-center gap-2 px-5 py-3 rounded-full font-semibold shadow-lg transition-all duration-300 text-base focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-400 border-2 border-transparent hover:scale-105 active:scale-95 ${
                          isDarkMode
                            ? 'bg-gradient-to-r from-red-500 to-pink-600 text-white hover:from-red-400 hover:to-pink-500'
                            : 'bg-gradient-to-r from-red-300 to-pink-400 text-red-900 hover:from-red-400 hover:to-pink-500'
                        }`}
                      >
                        <FileText className="w-5 h-5" />
                        Project Report
                      </button>
                    )}
                  </div>
                ) : (
                  <div className="flex flex-wrap gap-4 mt-8">
                    {selectedProject.hasLiveDemo && selectedProject.demoLink && (
                      <a
                        href={selectedProject.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-2 px-5 py-3 rounded-full font-semibold shadow-lg transition-all duration-300 text-base focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-400 border-2 border-transparent hover:scale-105 active:scale-95 ${
                          isDarkMode
                            ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:from-green-400 hover:to-emerald-500'
                            : 'bg-gradient-to-r from-green-400 to-emerald-500 text-white hover:from-green-500 hover:to-emerald-600'
                        }`}
                      >
                        <ExternalLink className="w-5 h-5" />
                        Live Demo
                      </a>
                    )}
                    {selectedProject.githubLink && (
                      <a
                        href={selectedProject.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-2 px-5 py-3 rounded-full font-semibold shadow-lg transition-all duration-300 text-base focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 border-2 border-transparent hover:scale-105 active:scale-95 ${
                          isDarkMode
                            ? 'bg-gradient-to-r from-gray-700 to-gray-900 text-white hover:from-gray-600 hover:to-gray-800'
                            : 'bg-gradient-to-r from-gray-200 to-gray-400 text-gray-900 hover:from-gray-300 hover:to-gray-500'
                        }`}
                      >
                        <Github className="w-5 h-5" />
                        GitHub Repository
                      </a>
                    )}
                    {selectedProject.presentationLink && (
                      <a
                        href={selectedProject.presentationLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-2 px-5 py-3 rounded-full font-semibold shadow-lg transition-all duration-300 text-base focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400 border-2 border-transparent hover:scale-105 active:scale-95 ${
                          isDarkMode
                            ? 'bg-gradient-to-r from-yellow-500 to-yellow-700 text-white hover:from-yellow-400 hover:to-yellow-600'
                            : 'bg-gradient-to-r from-yellow-300 to-yellow-500 text-yellow-900 hover:from-yellow-400 hover:to-yellow-600'
                        }`}
                      >
                        <Presentation className="w-5 h-5" />
                        Presentation
                      </a>
                    )}
                    {selectedProject.reportLink && (
                      <button
                        onClick={() => {
                          const baseUrl = window.location.origin;
                          const url = baseUrl + selectedProject.reportLink;
                          const link = document.createElement('a');
                          link.href = url;
                          link.target = '_blank';
                          link.rel = 'noopener noreferrer';
                          document.body.appendChild(link);
                          link.click();
                          document.body.removeChild(link);
                        }}
                        className={`flex items-center gap-2 px-5 py-3 rounded-full font-semibold shadow-lg transition-all duration-300 text-base focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-400 border-2 border-transparent hover:scale-105 active:scale-95 ${
                          isDarkMode
                            ? 'bg-gradient-to-r from-red-500 to-pink-600 text-white hover:from-red-400 hover:to-pink-500'
                            : 'bg-gradient-to-r from-red-300 to-pink-400 text-red-900 hover:from-red-400 hover:to-pink-500'
                        }`}
                      >
                        <FileText className="w-5 h-5" />
                        Project Report
                      </button>
                    )}
                  </div>
                )}
              </div>

              {/* Modal Content for Featured Projects */}
              {/* Use the same colored card layout for all featured projects */}
              <>
                {/* Problem Statement */}
                <div className={`mb-8 p-6 rounded-xl transition-colors duration-300 ${isDarkMode ? 'bg-blue-900/30' : 'bg-blue-50'}`}>
                  <h4 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Problem Statement</h4>
                  <p className={`transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{selectedProject.problem}</p>
                </div>

                {/* Motivation & Inspiration */}
                <div className={`mb-8 p-6 rounded-xl transition-colors duration-300 ${isDarkMode ? 'bg-yellow-900/20' : 'bg-yellow-50'}`}>
                  <h4 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Motivation & Inspiration</h4>
                  <p className={`transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{selectedProject.motivation}</p>
                </div>

                {/* My Role */}
                <div className={`mb-8 p-6 rounded-xl transition-colors duration-300 ${isDarkMode ? 'bg-purple-900/20' : 'bg-purple-50'}`}>
                  <h4 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>My Role</h4>
                  <p className={`transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{selectedProject.role}</p>
                </div>

                {/* How I Built It */}
                <div className={`mb-8 p-6 rounded-xl transition-colors duration-300 ${isDarkMode ? 'bg-green-900/20' : 'bg-green-50'}`}>
                  <h4 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>How I Built It</h4>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h5 className={`font-semibold mb-3 transition-colors duration-300 ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>Data Sources</h5>
                      <ul className={`space-y-2 transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{selectedProject.dataSources.map((source, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${isDarkMode ? 'bg-blue-400' : 'bg-blue-600'}`}></span>
                          <span>{source}</span>
                        </li>
                      ))}</ul>
                    </div>
                    <div>
                      <h5 className={`font-semibold mb-3 transition-colors duration-300 ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>Methodologies Applied</h5>
                      <ul className={`space-y-2 transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{selectedProject.methodologies.map((method, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${isDarkMode ? 'bg-green-400' : 'bg-green-600'}`}></span>
                          <span>{method}</span>
                        </li>
                      ))}</ul>
                    </div>
                  </div>
                  <div className="mt-6">
                    <h5 className={`font-semibold mb-3 transition-colors duration-300 ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>Tools & Skills Showcased</h5>
                    <div className="flex flex-wrap gap-2">{selectedProject.tools.map((tool, index) => (
                      <span key={index} className={`px-3 py-1 rounded-full text-sm font-medium transition-colors duration-300 ${isDarkMode ? 'bg-purple-600/20 text-purple-400 border border-purple-600/30' : 'bg-purple-100 text-purple-700 border border-purple-200'}`}>{tool}</span>
                    ))}</div>
                  </div>
                </div>

                {/* Results & Impact */}
                <div className={`mb-8 p-6 rounded-xl transition-colors duration-300 ${isDarkMode ? 'bg-pink-900/20' : 'bg-pink-50'}`}>
                  <h4 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Results & Impact</h4>
                  <div className={`p-6 rounded-xl ${isDarkMode ? 'bg-green-600/10 border border-green-600/20' : 'bg-green-50 border border-green-200'}`}>
                    <h5 className={`font-semibold mb-2 transition-colors duration-300 ${isDarkMode ? 'text-green-400' : 'text-green-700'}`}>Key Results</h5>
                    <p className={`transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{selectedProject.results}</p>
                  </div>
                </div>

                {/* Key Learnings */}
                <div className={`mb-8 p-6 rounded-xl transition-colors duration-300 ${isDarkMode ? 'bg-orange-900/20' : 'bg-orange-50'}`}>
                  <h4 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Key Learnings</h4>
                  <ul className={`list-disc ml-6 transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{selectedProject.learnings.split('. ').filter(Boolean).map((item, idx) => (
                    <li key={idx}>{item.trim()}{item.trim().endsWith('.') ? '' : '.'}</li>
                  ))}</ul>
                </div>
                {selectedProject.title === "Netflix Data-Driven Analysis" && selectedProject.recommendations && (
                  <div className={`mb-8 p-6 rounded-xl transition-colors duration-300 ${isDarkMode ? 'bg-cyan-900/20' : 'bg-cyan-50'}`}>
                    <h4 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Business Recommendations</h4>
                    <ul className={`list-disc ml-6 transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{selectedProject.recommendations.split('. ').filter(Boolean).map((item, idx) => (
                      <li key={idx}>{item.trim()}{item.trim().endsWith('.') ? '' : '.'}</li>
                    ))}</ul>
                  </div>
                )}
              </>
            </div>
          </div>
        )}

        {/* Literature Survey Modal */}
        {showLiteratureSurveyModal && selectedLiteratureSurvey && (
          <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
            <div className={`max-w-3xl w-full max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl transition-all duration-700 ease-out transform animate-in slide-in-from-bottom-8 fade-in-0 ${
              isDarkMode ? 'bg-gray-800 border border-gray-600' : 'bg-white border border-gray-200'
            }`}>
              <div className={`sticky top-0 z-10 p-8 border-b transition-all duration-300 backdrop-blur-sm ${
                isDarkMode 
                  ? 'bg-gray-800 bg-opacity-95 border-gray-600' 
                  : 'bg-white bg-opacity-95 border-gray-200'
              }`}>
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-full ${
                      isDarkMode ? 'bg-blue-600/20' : 'bg-blue-100'
                    }`}>
                      <FileText className={`w-6 h-6 ${
                        isDarkMode ? 'text-blue-400' : 'text-blue-600'
                      }`} />
                    </div>
                    <div>
                      <h3 className={`text-3xl font-bold mb-2 transition-colors duration-300 ${
                        isDarkMode ? 'text-white drop-shadow-2xl font-extrabold' : 'text-gray-900'
                      }`}>
                        {selectedLiteratureSurvey.title}
                      </h3>
                      <p className={`text-lg transition-colors duration-300 ${
                        isDarkMode ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        Literature Survey
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => setShowLiteratureSurveyModal(false)}
                    className={`p-2 rounded-full hover:bg-gray-200 transition-all duration-300 hover:scale-110 ${
                      isDarkMode ? 'hover:bg-gray-600' : 'hover:bg-gray-200'
                    }`}
                  >
                    <X className={`w-5 h-5 ${
                      isDarkMode ? 'text-gray-400' : 'text-gray-600'
                    }`} />
                  </button>
                </div>
              </div>

              <div className="p-8">
                <div className={`mb-8 p-6 rounded-xl transition-colors duration-300 ${isDarkMode ? 'bg-blue-900/30' : 'bg-blue-50'}`}> 
                  <h4 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Overview</h4>
                  <p className={`text-lg transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{selectedLiteratureSurvey.description}</p>
                </div>
                <div className={`mb-8 p-6 rounded-xl transition-colors duration-300 ${isDarkMode ? 'bg-green-900/20' : 'bg-green-50'}`}> 
                  <h4 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Key Findings</h4>
                  <p className={`text-lg transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>The literature survey provides a comprehensive overview of the current state of Automatic Speech Recognition (ASR) technology, including recent advancements, challenges, and future trends.</p>
                </div>
                <div className={`mb-8 p-6 rounded-xl transition-colors duration-300 ${isDarkMode ? 'bg-yellow-900/20' : 'bg-yellow-50'}`}> 
                  <h4 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Links & Resources</h4>
                  <div className="flex flex-wrap gap-4">
                    <a
                      href={selectedLiteratureSurvey.presentationLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 px-5 py-3 rounded-full font-semibold shadow-lg transition-all duration-300 text-base focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400 border-2 border-transparent hover:scale-105 active:scale-95 ${
                        isDarkMode
                          ? 'bg-gradient-to-r from-yellow-500 to-yellow-700 text-white hover:from-yellow-400 hover:to-yellow-600'
                          : 'bg-gradient-to-r from-yellow-300 to-yellow-500 text-yellow-900 hover:from-yellow-400 hover:to-yellow-600'
                      }`}
                    >
                      <Presentation className="w-5 h-5" />
                      Presentation
                    </a>
                    {selectedLiteratureSurvey.literatureSurveyPdf && (
                      <a
                        href={selectedLiteratureSurvey.literatureSurveyPdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-2 px-5 py-3 rounded-full font-semibold shadow-lg transition-all duration-300 text-base focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 border-2 border-transparent hover:scale-105 active:scale-95 ${
                          isDarkMode
                            ? 'bg-gradient-to-r from-blue-500 to-blue-700 text-white hover:from-blue-400 hover:to-blue-600'
                            : 'bg-gradient-to-r from-blue-300 to-blue-500 text-blue-900 hover:from-blue-400 hover:to-blue-600'
                        }`}
                      >
                        <FileText className="w-5 h-5" />
                        Literature Survey PDF
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects; 