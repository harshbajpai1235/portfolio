import React, { useContext, useState, useEffect } from "react";
import { ThemeContext } from "../App";
import { X, FileText } from "lucide-react";

const dashboards = [
  {
    id: 1,
    title: "Electric Vehicle Trends in the US - 2025",
    summary: "Interactive dashboard on 2025 EV trends, focused on Washington. Shows total vehicles, BEV vs PHEV share, top models/makes, CAFV eligibility, and growth by year. Fully filterable by type, model, state, and more.",
    modalSummary: "This interactive Tableau dashboard analyzes Electric Vehicle (EV) adoption trends in the U.S. for 2025, with a specific focus on Washington state. It presents key EV metrics including total vehicles, BEV and PHEV share, average electric range, and Clean Alternative Fuel Vehicle (CAFV) eligibility. Users can explore EV growth by model year, view the top makes and models, and examine regional adoption patterns using fully interactive filters.",
    businessValue: `This dashboard provides valuable insights for policymakers, EV manufacturers, and sustainability advocates by:\n\n- Tracking annual EV adoption trends and highlighting the peak in vehicle registrations around 2022\n- Identifying market leaders in EV production, with Tesla standing out among the top 10 makes\n- Visualizing state-level adoption to inform infrastructure investments such as charging station deployment\n- Evaluating CAFV eligibility across the vehicle fleet to support policy incentives and environmental programs\n- Supporting data-driven strategies through detailed breakdowns by vehicle type, model, and geographic location`,
    embedCode: `<div class='tableauPlaceholder' id='viz1753084750413' style='position: relative'><noscript><a href='#'><img alt='Electric Vehicle Trends in the US – 2025Insights into EV adoption, range, eligibility, and distribution ' src='https://public.tableau.com/static/images/Da/Dashboard1_17514872424960/Dashboard1/1_rss.png' style='border: none' /></a></noscript><object class='tableauViz'  style='display:none;'><param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' /> <param name='embed_code_version' value='3' /> <param name='site_root' value='' /><param name='name' value='Dashboard1_17514872424960/Dashboard1' /><param name='tabs' value='no' /><param name='toolbar' value='yes' /><param name='static_image' value='https://public.tableau.com/static/images/Da/Dashboard1_17514872424960/Dashboard1/1.png' /> <param name='animate_transition' value='yes' /><param name='display_static_image' value='yes' /><param name='display_spinner' value='yes' /><param name='display_overlay' value='yes' /><param name='display_count' value='yes' /><param name='language' value='en-US' /></object></div>`,
    brdPdf: "/portfolio/src/documents/EV-brd.pdf",
    thumbnail: "/portfolio/images/dashboards/sales-dashboard-thumb.jpg",
  },
  {
    id: 2,
    title: "Netflix Dashboard",
    summary: "Interactive dashboard with insights into Netflix content: trends by genre, year, country, type, and rating. Explore what's trending and global content distribution.",
    modalSummary: "This interactive Tableau dashboard visualizes key trends in Netflix’s content library across various dimensions including genre, country, release year, rating, and content type. Designed for exploration and content discovery, it helps users and analysts identify popular genres, growth patterns, and regional content distribution. The dashboard provides dynamic filters for titles, types, years, and more, offering a user-friendly way to understand Netflix's global streaming portfolio.",
    businessValue: `This dashboard is valuable for content strategists, marketers, and streaming analysts by enabling them to:\n\n- Identify top-performing genres, with dramas and documentaries leading the global catalog\n- Analyze content growth over time, showing a significant spike in content additions between 2015 and 2018\n- Understand geographic content availability, highlighting the dominance of the U.S. and India in content volume\n- Explore content type distribution, revealing that movies make up nearly 70% of the catalog\n- Assess audience segmentation by content ratings, helping Netflix tailor its catalog to demographic preferences\n\nBy offering a detailed overview of content trends, this dashboard supports data-driven decisions on content licensing, production planning, and regional expansion strategies.`,
    embedCode: `<div class='tableauPlaceholder' id='viz1753086011941' style='position: relative'><noscript><a href='#'><img alt='Dashboard 1 ' src='https://public.tableau.com/static/images/Ne/NetflixDashboard_17521147457960/Dashboard1/1_rss.png' style='border: none' /></a></noscript><object class='tableauViz'  style='display:none;'><param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' /> <param name='embed_code_version' value='3' /> <param name='site_root' value='' /><param name='name' value='NetflixDashboard_17521147457960/Dashboard1' /><param name='tabs' value='no' /><param name='toolbar' value='yes' /><param name='static_image' value='https://public.tableau.com/static/images/Ne/NetflixDashboard_17521147457960/Dashboard1/1.png' /> <param name='animate_transition' value='yes' /><param name='display_static_image' value='yes' /><param name='display_spinner' value='yes' /><param name='display_overlay' value='yes' /><param name='display_count' value='yes' /><param name='language' value='en-US' /></object></div>`,
    brdPdf: "/portfolio/src/documents/netflix-brd.pdf",
    thumbnail: "/portfolio/images/dashboards/customer-analytics-thumb.jpg",
  },
  {
    id: 3,
    title: "Environmental Impact Dashboard",
    summary: "Tracks carbon emissions, energy use, water consumption, and recycling rates. Dynamic filters for exploring environmental metrics.",
    modalSummary: "This interactive Tableau dashboard visualizes key environmental performance indicators including carbon emissions, energy usage, water consumption, and recycling rates across industries and regions. Users can explore trends over time and assess sustainability efforts using filters for compliance level, industry, product type, region, and year. The dashboard enables a holistic view of global environmental impact with clear benchmarking tools.",
    businessValue: `This dashboard helps sustainability leaders, compliance managers, and operations teams to:\n\n- Monitor and compare carbon emissions and energy usage trends across different regions and years\n- Analyze recycling performance by region and industry, supporting more effective waste reduction strategies\n- Identify high-performing sectors and areas needing improvement by tracking compliance distribution\n- Observe the relationship between recycling rates and carbon emissions, informing data-backed sustainability planning\n- Drive accountability and environmental performance through real-time visibility into resource consumption metrics\n\nBy consolidating environmental KPIs into a single, filterable view, this dashboard empowers organizations to meet regulatory targets and implement sustainable practices efficiently.`,
    embedCode: `<div class='tableauPlaceholder' id='viz1753086339333' style='position: relative'><noscript><a href='#'><img alt='Dashboard 1 ' src='https://public.tableau.com/static/images/En/EnvironmentalImpactDashboard_17520332079360/Dashboard1/1_rss.png' style='border: none' /></a></noscript><object class='tableauViz'  style='display:none;'><param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' /> <param name='embed_code_version' value='3' /> <param name='site_root' value='' /><param name='name' value='EnvironmentalImpactDashboard_17520332079360/Dashboard1' /><param name='tabs' value='no' /><param name='toolbar' value='yes' /><param name='static_image' value='https://public.tableau.com/static/images/En/EnvironmentalImpactDashboard_17520332079360/Dashboard1/1.png' /> <param name='animate_transition' value='yes' /><param name='display_static_image' value='yes' /><param name='display_spinner' value='yes' /><param name='display_overlay' value='yes' /><param name='display_count' value='yes' /><param name='language' value='en-US' /></object></div>`,
    brdPdf: "/portfolio/src/documents/eimpact-brd.pdf",
    thumbnail: "/portfolio/images/dashboards/financial-dashboard-thumb.jpg",
  },
  {
    id: 4,
    title: "StakeHolder Insights & Performance Dashboard",
    summary: "Tracks stakeholder insights, premiums, equity value, profitability by city, and assets under management. Dynamic filters for real-time analysis.",
    modalSummary: "This Tableau dashboard was developed to provide a comprehensive overview of stakeholder performance, premium flows, and asset management in the banking sector. Built in alignment with the Business Requirements Document (BRD), it offers real-time insights into key metrics including total premiums, equity value created, profitability by city and tenure, and distribution of assets under management. The dashboard features dynamic filtering by city, stakeholder type, tenure, gender, and more to support targeted performance analysis.",
    businessValue: `This dashboard delivers critical value to banking executives, product teams, and strategy leaders by:\n\n- Tracking over 245.9B in premiums and 230.8B in equity value creation across channels like bancassurance and partner branches\n- Highlighting profitability trends by city and customer tenure, enabling location-specific targeting and retention strategies\n- Visualizing assets under management by stakeholder group to align resources with high-value contributors\n- Monitoring cost and profitability metrics including commission and opex ratios, offering a clear view of net performance\n- Supporting investment and governance decisions through a snapshot of shareholding distribution across promoters, FII, DII, and retail\n\nBy consolidating financial and operational KPIs into one interactive view, this dashboard empowers real-time, data-backed decisions that enhance stakeholder value and business growth.`,
    embedCode: `<div class='tableauPlaceholder' id='viz1753086555604' style='position: relative'><noscript><a href='#'><img alt='StakeHolder Insights &amp; Performace Dashboard ' src='https://public.tableau.com/static/images/St/StakeholderInsightsPerformanceDashboard_17518579248490/StakeHolderInsightsPerformaceDashboard/1_rss.png' style='border: none' /></a></noscript><object class='tableauViz'  style='display:none;'><param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' /> <param name='embed_code_version' value='3' /> <param name='site_root' value='' /><param name='name' value='StakeholderInsightsPerformanceDashboard_17518579248490/StakeHolderInsightsPerformaceDashboard' /><param name='tabs' value='no' /><param name='toolbar' value='yes' /><param name='static_image' value='https://public.tableau.com/static/images/St/StakeholderInsightsPerformanceDashboard_17518579248490/StakeHolderInsightsPerformaceDashboard/1.png' /> <param name='animate_transition' value='yes' /><param name='display_static_image' value='yes' /><param name='display_spinner' value='yes' /><param name='display_overlay' value='yes' /><param name='display_count' value='yes' /><param name='language' value='en-US' /></object></div>`,
    brdPdf: "/portfolio/src/documents/bank-brd.pdf",
    thumbnail: "/portfolio/images/dashboards/marketing-dashboard-thumb.jpg",
  },
  {
    id: 5,
    title: "Video Game Sales Dashboard",
    summary: "Overview of video game sales by genre, platform, publisher, and title. Trends over time and filters highlight top performers and market distribution.",
    modalSummary: "This interactive Tableau dashboard provides a comprehensive analysis of global video game sales across genres, platforms, publishers, and individual game titles. Users can explore historical sales trends, identify top-performing categories, and filter data by year range, genre, and sales zone to uncover detailed market insights. The dashboard is designed to help users understand the dynamics of the gaming industry at a glance.",
    businessValue: `This dashboard offers valuable insights to game developers, publishers, and market analysts by enabling them to:\n\n- Discover leading sales-driving genres, with action and sports games dominating the market\n- Track sales evolution over decades, showing significant growth during the 2000s and peak sales around 2010\n- Identify the top-selling platforms such as Wii, PS3, and DS, guiding hardware investment strategies\n- Highlight market leaders in publishing, including Nintendo, Electronic Arts, and Sony\n- Analyze individual title success, with Wii Sports and Grand Theft Auto V leading in global sales\n\nWith over 11,000 game titles analyzed, this dashboard helps stakeholders make data-informed decisions regarding game development, platform targeting, and content strategy in a competitive industry.`,
    embedCode: `<div class='tableauPlaceholder' id='viz1753086997597' style='position: relative'><noscript><a href='#'><img alt='Dashboard 1 ' src='https://public.tableau.com/static/images/Vi/VideoGameSalesDashboard_17521967461300/Dashboard1/1_rss.png' style='border: none' /></a></noscript><object class='tableauViz'  style='display:none;'><param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' /> <param name='embed_code_version' value='3' /> <param name='site_root' value='' /><param name='name' value='VideoGameSalesDashboard_17521967461300/Dashboard1' /><param name='tabs' value='no' /><param name='toolbar' value='yes' /><param name='static_image' value='https://public.tableau.com/static/images/Vi/VideoGameSalesDashboard_17521967461300/Dashboard1/1.png' /> <param name='animate_transition' value='yes' /><param name='display_static_image' value='yes' /><param name='display_spinner' value='yes' /><param name='display_overlay' value='yes' /><param name='display_count' value='yes' /><param name='language' value='en-US' /></object></div>`,
    brdPdf: "/portfolio/src/documents/game-brd.pdf",
    thumbnail: "/portfolio/images/dashboards/vgsales-thumb.jpg",
  },
];

const Dashboards = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const [selectedDashboard, setSelectedDashboard] = useState(null);
  const firstRow = dashboards.slice(0, 3);
  const secondRow = dashboards.slice(3);

  // Dynamically load Tableau script when modal opens
  useEffect(() => {
    if (selectedDashboard && selectedDashboard.embedCode) {
      // Remove any previous script
      const oldScript = document.getElementById('tableau-embed-script');
      if (oldScript) oldScript.remove();
      // Add the Tableau script
      const script = document.createElement('script');
      script.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
      script.id = 'tableau-embed-script';
      document.body.appendChild(script);
    }
  }, [selectedDashboard]);

  // Add this useEffect after the tableau script loads to adjust the viz size
  useEffect(() => {
    if (selectedDashboard && selectedDashboard.id === 1) {
      // Wait for Tableau script to load and viz to be available
      const timer = setTimeout(() => {
        const vizDiv = document.getElementById('viz1753075801507');
        if (vizDiv) {
          vizDiv.style.width = '100%';
          vizDiv.style.minHeight = '600px';
          const vizObj = vizDiv.querySelector('object.tableauViz');
          if (vizObj) {
            vizObj.style.width = '100%';
            vizObj.style.minHeight = '600px';
            vizObj.style.height = '600px';
          }
        }
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [selectedDashboard]);

  return (
    <section id="dashboards" className={`w-full py-20 ${isDarkMode ? "bg-gray-900" : "bg-gray-100"}`}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold mb-4 transition-colors duration-300 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
            DASHBOARDS
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className={`text-lg transition-colors duration-300 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
            My favorite place to blend design, data, and decisions.
          </p>
        </div>
        {/* Main Dashboards Card */}
        <div className={`rounded-2xl shadow-2xl p-8 mb-12 min-h-[520px] transition-all duration-300 ${
          isDarkMode ? "bg-gray-800 border border-gray-700" : "bg-white border border-gray-200"
        }`}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {firstRow.map((dashboard) => (
              <div
                key={dashboard.id}
                className={`flex flex-col group cursor-pointer rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 ${
                  isDarkMode ? "bg-gray-700 border border-gray-600" : "bg-white border border-gray-200"
                } min-h-[370px]`}
                onClick={() => setSelectedDashboard(dashboard)}
              >
                {/* Dashboard Thumbnail */}
                <div className="relative h-48 overflow-hidden rounded-xl">
                  <img
                    src={dashboard.thumbnail}
                    alt={dashboard.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-xl">
                    <div className="text-center text-white drop-shadow-lg">
                      <p className="font-semibold">View Dashboard Details</p>
                    </div>
                  </div>
                </div>
                {/* Dashboard Info */}
                <div className="p-6 flex-1 flex flex-col">
                  <h4 className={`text-xl font-bold mb-2 transition-colors duration-300 ${
                    isDarkMode ? "text-white" : "text-gray-900"
                  }`}>
                    {dashboard.title}
                  </h4>
                  <p className={`text-sm transition-colors duration-300 ${
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  }`}>
                    {dashboard.summary}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {secondRow.map((dashboard) => (
              <div
                key={dashboard.id}
                className={`flex flex-col group cursor-pointer rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 ${
                  isDarkMode ? "bg-gray-700 border border-gray-600" : "bg-white border border-gray-200"
                } min-h-[370px]`}
                onClick={() => setSelectedDashboard(dashboard)}
              >
                {/* Dashboard Thumbnail */}
                <div className="relative h-48 overflow-hidden rounded-xl">
                  <img
                    src={dashboard.thumbnail}
                    alt={dashboard.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-xl">
                    <div className="text-center text-white drop-shadow-lg">
                      <p className="font-semibold">View Dashboard Details</p>
                    </div>
                  </div>
                </div>
                {/* Dashboard Info */}
                <div className="p-6 flex-1 flex flex-col">
                  <h4 className={`text-xl font-bold mb-2 transition-colors duration-300 ${
                    isDarkMode ? "text-white" : "text-gray-900"
                  }`}>
                    {dashboard.title}
                  </h4>
                  <p className={`text-sm transition-colors duration-300 ${
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  }`}>
                    {dashboard.summary}
                  </p>
                </div>
              </div>
            ))}
            {/* Empty card for alignment */}
            <div className="hidden md:block"></div>
          </div>
        </div>

        {/* Modal/Expanded Area */}
        {selectedDashboard && (
          <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center p-4 animate-fade-in">
            <div className={`max-w-6xl w-full max-h-[95vh] overflow-x-auto overflow-y-auto rounded-2xl shadow-2xl transition-all duration-700 ease-out transform animate-in slide-in-from-bottom-8 fade-in-0 ${
              isDarkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
            }`}>
              {/* Inject CSS to force Tableau embed to be fully visible */}
              <style>{`
                .tableauPlaceholder, .tableauViz {
                  width: 1600px !important;
                  min-width: 1200px !important;
                  max-width: 100vw !important;
                  height: 1000px !important;
                  min-height: 1000px !important;
                  max-height: 90vh !important;
                  margin: 0 auto !important;
                  display: block !important;
                }
              `}</style>
              {/* Header */}
              <div className={`sticky top-0 z-10 p-8 border-b transition-all duration-300 backdrop-blur-sm ${
                isDarkMode 
                  ? 'bg-gray-800 bg-opacity-95 border-gray-700' 
                  : 'bg-white bg-opacity-95 border-gray-200'
              }`}>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className={`text-3xl font-bold mb-2 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{selectedDashboard.title}</h3>
                  </div>
                  <button
                    onClick={() => setSelectedDashboard(null)}
                    className={`p-2 rounded-full hover:bg-gray-200 transition-all duration-300 hover:scale-110 ${
                      isDarkMode ? 'hover:bg-gray-600' : 'hover:bg-gray-200'
                    }`}
                  >
                    <X className={`w-5 h-5 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`} />
                  </button>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-8">
                {/* Summary Section */}
                <div className={`mb-8 p-6 rounded-xl transition-colors duration-300 ${isDarkMode ? 'bg-blue-900/30' : 'bg-blue-50'}`}>
                  <h4 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Summary</h4>
                  <p className={`transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{selectedDashboard.modalSummary || selectedDashboard.summary}</p>
                </div>
                {/* Business Value & Insights Section */}
                <div className={`mb-8 p-6 rounded-xl transition-colors duration-300 ${isDarkMode ? 'bg-green-900/20' : 'bg-green-50'}`}>
                  <h4 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Business Value & Insights</h4>
                  <p className={`transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{selectedDashboard.businessValue}</p>
                </div>
                {/* Tableau Embed Section */}
                <div className={`mb-8 p-6 rounded-xl transition-colors duration-300 ${isDarkMode ? 'bg-yellow-900/20' : 'bg-yellow-50'}`}>
                  <h4 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Interactive Dashboard</h4>
                  {/* Responsive Tableau Embed */}
                  <div className="w-full min-h-[1000px] rounded-lg overflow-auto border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
                    {/* Render the Tableau embed code */}
                    <div
                      id="tableau-embed-container"
                      style={{ width: '100%', minHeight: '1000px', overflowX: 'auto' }}
                      dangerouslySetInnerHTML={{ __html: selectedDashboard.embedCode }}
                    />
                  </div>
                </div>
                {/* Links to Documentation */}
                <div className={`mb-8 p-6 rounded-xl transition-colors duration-300 ${isDarkMode ? 'bg-pink-900/20' : 'bg-pink-50'}`}>
                  <h4 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Links & Resources</h4>
                  <div className="flex flex-wrap gap-4">
                    {selectedDashboard.brdPdf && (
                      <a
                        href={selectedDashboard.brdPdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-5 py-3 rounded-full font-semibold shadow-lg transition-all duration-300 text-base focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 border-2 border-transparent hover:scale-105 active:scale-95 bg-gradient-to-r from-blue-500 to-blue-700 text-white hover:from-blue-400 hover:to-blue-600"
                      >
                        <FileText className="w-5 h-5" />
                        View BRD
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

export default Dashboards;