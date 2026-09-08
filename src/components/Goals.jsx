import { useState, useEffect } from 'react';

export default function Goals() {
  // Official 13 UN SDGs data
  const sdgs = [
    {
        "id": 1,
        "title": "No Poverty",
        "desc": "Focus on addressing key challenges in No Poverty."
    },
    {
        "id": 2,
        "title": "Zero Hunger",
        "desc": "Focus on addressing key challenges in Zero Hunger."
    },
    {
        "id": 3,
        "title": "Good Health and Well-Being",
        "desc": "Focus on addressing key challenges in Good Health and Well-Being."
    },
    {
        "id": 4,
        "title": "Quality Education",
        "desc": "Focus on addressing key challenges in Quality Education."
    },
    {
        "id": 6,
        "title": "Clean Water and Sanitation",
        "desc": "Focus on addressing key challenges in Clean Water and Sanitation."
    },
    {
        "id": 7,
        "title": "Affordable and Clean Energy",
        "desc": "Focus on addressing key challenges in Affordable and Clean Energy."
    },
    {
        "id": 9,
        "title": "Industry, Innovation and Infrastructure",
        "desc": "Focus on addressing key challenges in Industry, Innovation and Infrastructure."
    },
    {
        "id": 10,
        "title": "Reduced Inequalities",
        "desc": "Focus on addressing key challenges in Reduced Inequalities."
    },
    {
        "id": 11,
        "title": "Sustainable Cities and Communities",
        "desc": "Focus on addressing key challenges in Sustainable Cities and Communities."
    },
    {
        "id": 12,
        "title": "Responsible Consumption and Production",
        "desc": "Focus on addressing key challenges in Responsible Consumption and Production."
    },
    {
        "id": 13,
        "title": "Climate Action",
        "desc": "Focus on addressing key challenges in Climate Action."
    },
    {
        "id": 14,
        "title": "Life Below Water",
        "desc": "Focus on addressing key challenges in Life Below Water."
    },
    {
        "id": 15,
        "title": "Life on Land",
        "desc": "Focus on addressing key challenges in Life on Land."
    },
    {
        "id": 17,
        "title": "Partnerships for the Goals",
        "desc": "Focus on addressing key challenges in Partnerships for the Goals."
    }
];

  // eslint-disable-next-line no-unused-vars
  const problems = [
    {
        "sdg": "SDG 1",
        "code": "1.1",
        "title": "Poor Targeting of Welfare Programs and Estate Poverty",
        "desc": "Weak targeting mechanisms and exclusion errors in welfare programs result in many vulnerable households, especially in estate regions\u2014being left out of benefits. This deepens multidimensional poverty, affecting income, education, housing, and health simultaneously.",
        "tag": "Welfare / Targeting"
    },
    {
        "sdg": "SDG 1",
        "code": "1.2",
        "title": "Informal Workers Trapped in Poverty Cycles by Economic Shocks",
        "desc": "A large share of workers rely on informal employment without job security, insurance, or pensions. This makes them highly susceptible to economic shocks, trapping families in recurring poverty cycles.",
        "tag": "Job Security"
    },
    {
        "sdg": "SDG 1",
        "code": "1.3",
        "title": "High Cost of Living Reduces Income for the Poor",
        "desc": "Inflation and currency depreciation reduce real purchasing power, disproportionately affecting low-income households and pushing near-poor populations below the poverty line.",
        "tag": "Cost of Living"
    },
    {
        "sdg": "SDG 2",
        "code": "2.1",
        "title": "Food Shortages and Poor Nutrition due to Farming Setbacks",
        "desc": "Policy disruptions and rising input costs have reduced agricultural output, increasing food prices and limiting access to adequate nutrition, especially for children.",
        "tag": "Agri Supply"
    },
    {
        "sdg": "SDG 2",
        "code": "2.2",
        "title": "Uneven Food Distribution and Nutritional Gaps",
        "desc": "Inefficient logistics, storage limitations, and high transportation costs lead to uneven food distribution, creating disparities in access to nutritious food across regions.",
        "tag": "Logistics"
    },
    {
        "sdg": "SDG 2",
        "code": "2.3",
        "title": "Climate Change Threatens Food Production",
        "desc": "Frequent droughts and floods disrupt farming cycles, reduce yields, and increase uncertainty in food production, undermining national food security.",
        "tag": "Climate Resilience"
    },
    {
        "sdg": "SDG 3",
        "code": "3.1",
        "title": "Staff Migration, Drug Shortages, and Rise of Non-Communicable Diseases (NCDs)",
        "desc": "The migration of healthcare professionals, combined with shortages of essential medicines, weakens service delivery while non-communicable diseases continue to rise.",
        "tag": "Healthcare Delivery"
    },
    {
        "sdg": "SDG 3",
        "code": "3.2",
        "title": "Mental Health Crisis with Limited Funding for Care",
        "desc": "Economic stress and social instability have increased mental health issues, but limited funding, infrastructure, and stigma restrict access to care.",
        "tag": "Mental Health"
    },
    {
        "sdg": "SDG 3",
        "code": "3.3",
        "title": "Late Disease Detection due to Poor Preventive Care",
        "desc": "Insufficient screening and awareness programs result in late diagnosis of diseases, increasing both treatment costs and mortality rates.",
        "tag": "Early Detection"
    },
    {
        "sdg": "SDG 4",
        "code": "4.1",
        "title": "Lack of Rural Internet Access and Outdated Vocational Skills",
        "desc": "Limited internet access and outdated vocational training programs prevent students from acquiring skills aligned with modern labor market demands.",
        "tag": "Digital Access"
    },
    {
        "sdg": "SDG 4",
        "code": "4.2",
        "title": "Uneven Learning Recovery and Post-Pandemic Gaps",
        "desc": "Disruptions to schooling and unequal access to remote learning have caused significant learning losses, especially among disadvantaged students.",
        "tag": "Learning Recovery"
    },
    {
        "sdg": "SDG 6",
        "code": "6.1",
        "title": "Aging Water Systems, Scarcity, and Poor Plantation Sanitation",
        "desc": "Aging infrastructure, contaminated groundwater, and inadequate sanitation facilities limit access to safe and dignified water services.",
        "tag": "Infrastructure"
    },
    {
        "sdg": "SDG 6",
        "code": "6.2",
        "title": "Flooding and Contamination from Poor Wastewater Management",
        "desc": "Poor drainage systems and unregulated wastewater disposal increase flood risks and contaminate urban water sources.",
        "tag": "Wastewater"
    },
    {
        "sdg": "SDG 7",
        "code": "7.1",
        "title": "Unstable Energy Costs due to Reliance on Imported Fuel",
        "desc": "Dependence on imported fuels exposes the country to global price fluctuations, resulting in unstable energy costs and affordability issues.",
        "tag": "Energy Import"
    },
    {
        "sdg": "SDG 7",
        "code": "7.2",
        "title": "Unequal and Unreliable Energy Access in Remote Areas",
        "desc": "Although electrification is widespread, reliable and consistent energy access remains limited in remote areas.",
        "tag": "Remote Access"
    },
    {
        "sdg": "SDG 7",
        "code": "7.3",
        "title": "Slow Adoption of Renewables due to Policy Barriers",
        "desc": "Policy uncertainty and bureaucratic delays discourage investment in renewable energy, slowing the transition to sustainable energy systems.",
        "tag": "Renewables"
    },
    {
        "sdg": "SDG 9",
        "code": "9.1",
        "title": "Economic Crisis Hinders Industrial Growth and Infrastructure Investment",
        "desc": "Economic instability has reduced investment in industry and infrastructure, limiting growth and competitiveness.",
        "tag": "Investment"
    },
    {
        "sdg": "SDG 9",
        "code": "9.2",
        "title": "Lack of Funds Stalls Innovation and Growth for Small Businesses",
        "desc": "High borrowing costs and limited access to capital restrict the ability of SMEs to innovate and expand.",
        "tag": "SME Funding"
    },
    {
        "sdg": "SDG 9",
        "code": "9.3",
        "title": "Rural Digital Divide Limits Economic Participation",
        "desc": "Limited broadband access in rural areas prevents businesses and communities from participating in the digital economy.",
        "tag": "Digital Divide"
    },
    {
        "sdg": "SDG 10",
        "code": "10.1",
        "title": "Economic Shocks Widen the Income Gap and Exclude Marginalized Groups",
        "desc": "Economic shocks have widened income gaps and disproportionately affected marginalized groups, increasing inequality.",
        "tag": "Income Gap"
    },
    {
        "sdg": "SDG 10",
        "code": "10.2",
        "title": "Digital Divide Creates Unequal Economic Opportunities",
        "desc": "Lack of digital access and skills excludes vulnerable populations from emerging economic opportunities.",
        "tag": "Digital Inclusion"
    },
    {
        "sdg": "SDG 11",
        "code": "11.1",
        "title": "Unplanned Urban Growth, Housing Shortages, and Failed Waste Management",
        "desc": "Unplanned urban growth and inadequate waste systems create environmental hazards and reduce living standards.",
        "tag": "Urban Planning"
    },
    {
        "sdg": "SDG 11",
        "code": "11.2",
        "title": "Traffic Congestion and Pollution from Inefficient Urban Transport",
        "desc": "Traffic congestion and reliance on private vehicles increase emissions and reduce urban efficiency.",
        "tag": "Transport"
    },
    {
        "sdg": "SDG 12",
        "code": "12.1",
        "title": "Poor Management of Plastic Waste and Lack of Recycling",
        "desc": "Poor enforcement and lack of recycling infrastructure result in large volumes of unmanaged plastic waste.",
        "tag": "Recycling"
    },
    {
        "sdg": "SDG 12",
        "code": "12.2",
        "title": "Wasteful Consumption and Inefficient Resource Use",
        "desc": "Limited awareness and weak policies encourage wasteful consumption patterns and inefficient resource use.",
        "tag": "Resource Use"
    },
    {
        "sdg": "SDG 13",
        "code": "13.1",
        "title": "Limited Capacity to Adapt to Climate Change",
        "desc": "Limited financial and institutional capacity restricts the implementation of effective climate adaptation strategies.",
        "tag": "Adaptation"
    },
    {
        "sdg": "SDG 13",
        "code": "13.2",
        "title": "Poor Early Warning Systems for Disasters",
        "desc": "Inadequate early warning systems and preparedness measures increase vulnerability to extreme weather events.",
        "tag": "Early Warning"
    },
    {
        "sdg": "SDG 14",
        "code": "14.1",
        "title": "Overfishing, Pollution, and Reef Damage Threaten Marine Life",
        "desc": "Overfishing, pollution, and coral damage reduce fish stocks and threaten coastal livelihoods.",
        "tag": "Marine Life"
    },
    {
        "sdg": "SDG 14",
        "code": "14.2",
        "title": "Poor Enforcement Leads to Illegal Fishing",
        "desc": "Insufficient monitoring and enforcement enable unsustainable fishing practices.",
        "tag": "Enforcement"
    },
    {
        "sdg": "SDG 14",
        "code": "14.3",
        "title": "Coastlines and Habitats Lost to Erosion and Development",
        "desc": "Climate change and development pressures are degrading coastal ecosystems and natural protective barriers.",
        "tag": "Erosion"
    },
    {
        "sdg": "SDG 15",
        "code": "15.1",
        "title": "Forest Loss and Decline of Wildlife in Critical Ecosystems",
        "desc": "Forest clearing and environmental stressors reduce biodiversity and ecosystem resilience.",
        "tag": "Conservation"
    },
    {
        "sdg": "SDG 15",
        "code": "15.2",
        "title": "Conflicts Between People and Wildlife Due to Habitat Loss",
        "desc": "Expansion of human activities into natural habitats increases conflicts and disrupts ecosystems.",
        "tag": "Human-Wildlife"
    },
    {
        "sdg": "SDG 15",
        "code": "15.3",
        "title": "Poor Enforcement Allows Illegal Logging",
        "desc": "Poor enforcement allows unsustainable exploitation of forest resources.",
        "tag": "Anti-Logging"
    },
    {
        "sdg": "SDG 17",
        "code": "17.1",
        "title": "Lack of Coordination and Funding for SDG Implementation",
        "desc": "Lack of coordination and funding constraints weaken effective SDG implementation.",
        "tag": "Coordination"
    },
    {
        "sdg": "SDG 17",
        "code": "17.2",
        "title": "Limited Data for Tracking Progress on SDGs",
        "desc": "Limited data integration reduces the ability to track progress and make informed decisions.",
        "tag": "Data Tracking"
    },
    {
        "sdg": "SDG 17",
        "code": "17.3",
        "title": "Limited Involvement of the Private Sector in SDGs",
        "desc": "Insufficient incentives and unclear frameworks limit private sector participation in SDG initiatives.",
        "tag": "Private Sector"
    }
];

  const [selectedSdg, setSelectedSdg] = useState(null);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isUnlocked, setIsUnlocked] = useState(false);

  // Handle ESC key to go back and scroll to top on selection
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedSdg(null);
      }
    };

    if (selectedSdg) {
      document.addEventListener('keydown', handleKeyDown);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    
    return () => { 
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedSdg]);

  // Timer logic for September 8, 2026 0:00 AM
  useEffect(() => {
    if (!selectedSdg) return;

    // Target date: September 8, 2026, 00:00:00 Sri Lanka Time
    const targetDate = new Date('2026-09-08T00:00:00+05:30').getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) {
        setIsUnlocked(true);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, [selectedSdg]);

  // Dynamically load images from the assets folder.
  const getImageUrl = (id) => {
    const formattedId = id.toString().padStart(2, '0');
    return new URL(`../assets/goals/E_SDG_PRINT-${formattedId}.jpg`, import.meta.url).href;
  };

  return (
    <section className="relative py-8 md:py-12 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {!selectedSdg ? (
          /* Goals Grid */
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 animate-fade-in-down max-w-md sm:max-w-none mx-auto">
            {sdgs.map((goal) => (
              <div 
                key={goal.id} 
                onClick={() => setSelectedSdg(goal)}
                className="group cursor-pointer relative flex flex-row sm:flex-col rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-white/10 overflow-hidden hover:bg-slate-50 dark:hover:bg-slate-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-rose-900/10 focus:outline-none focus:ring-2 focus:ring-rose-500"
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setSelectedSdg(goal); } }}
              >
                {/* SDG Official Logo Image */}
                <div className="w-1/3 sm:w-full aspect-square overflow-hidden bg-white dark:bg-slate-800 relative flex-shrink-0">
                  <img 
                    src={getImageUrl(goal.id)} 
                    alt={`SDG ${goal.id}: ${goal.title}`}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
                </div>
                
                {/* Description Card Body */}
                <div className="p-4 sm:p-5 flex-grow flex flex-col justify-between backdrop-blur-sm w-2/3 sm:w-full border-l sm:border-l-0 sm:border-t border-slate-100 dark:border-slate-700/50">
                  <div>
                    <h3 className="text-slate-900 dark:text-white font-bold text-sm sm:text-base leading-tight mb-1.5 sm:mb-2 line-clamp-2">
                      {goal.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed line-clamp-2 sm:line-clamp-3">
                      {goal.desc}
                    </p>
                  </div>
                  
                  {/* View Problems Button */}
                  <div className="mt-3 sm:mt-5 pt-3 sm:pt-4 border-t border-slate-200 dark:border-white/10 flex items-center justify-between">
                    <span className="inline-block text-[10px] sm:text-xs font-bold uppercase tracking-widest text-rose-600 dark:text-rose-400 group-hover:text-rose-700 dark:group-hover:text-rose-300 transition-colors">
                      View Problems &rarr;
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Detailed View replacing the Grid */
          <div className="animate-fade-in-up">
            {/* Back Button */}
            <button 
              onClick={() => setSelectedSdg(null)}
              className="group flex items-center gap-2 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors mb-6 font-medium focus:outline-none focus:ring-2 focus:ring-rose-500 rounded-lg px-2 py-1 -ml-2 text-sm sm:text-base"
            >
              <svg className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to all Goals
            </button>

            {/* SDG Header Banner */}
            <div className="bg-white dark:bg-slate-800/40 rounded-3xl p-6 md:p-10 border border-slate-200 dark:border-slate-700/50 shadow-sm mb-8 md:mb-12">
               <div className="flex flex-col md:flex-row gap-5 md:gap-10 items-center text-center md:text-left">
                  <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-2xl overflow-hidden bg-slate-50 dark:bg-slate-800 flex-shrink-0 shadow-inner border border-slate-200/60 dark:border-slate-700">
                    <img src={getImageUrl(selectedSdg.id)} alt={selectedSdg.title} className="w-full h-full object-contain p-2" />
                  </div>
                  <div className="flex flex-col items-center md:items-start">
                    <h2 className="text-xs sm:text-sm font-bold tracking-widest text-rose-500 dark:text-rose-400 uppercase mb-2">SDG {selectedSdg.id} Challenges</h2>
                    <h3 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight mb-3 sm:mb-4">{selectedSdg.title}</h3>
                    <p className="text-slate-600 dark:text-slate-400 max-w-3xl text-sm sm:text-lg leading-relaxed">{selectedSdg.desc}</p>
                  </div>
               </div>
            </div>

            {/* Content Area */}
            <div className="max-w-4xl mx-auto md:mx-0">
              {!isUnlocked ? (
                <div className="py-12 sm:py-16 flex flex-col items-center md:items-start text-center md:text-left bg-slate-50 dark:bg-slate-800/20 rounded-3xl p-6 sm:p-8 md:p-12 border border-slate-100 dark:border-slate-800">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 mb-5 sm:mb-6 rounded-full bg-gradient-to-tr from-rose-100 to-rose-50 dark:from-rose-900/40 dark:to-rose-800/10 flex items-center justify-center shadow-sm">
                    <svg className="w-7 h-7 sm:w-8 sm:h-8 text-rose-500 dark:text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-3 sm:mb-4 tracking-tight">
                    Challenges Locked
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-lg mb-8 sm:mb-10 max-w-lg leading-relaxed">
                    The problem pool for this SDG is currently hidden. It will be revealed when the countdown ends.
                  </p>
                  
                  <div className="flex items-center justify-center md:justify-start gap-2 sm:gap-6 flex-wrap">
                    <div className="flex flex-col items-center">
                      <div className="w-14 h-14 sm:w-20 sm:h-20 bg-white dark:bg-slate-800 rounded-xl sm:rounded-2xl flex items-center justify-center text-xl sm:text-3xl font-bold text-slate-800 dark:text-white shadow-sm border border-slate-200/60 dark:border-slate-700">
                        {timeLeft.days.toString().padStart(2, '0')}
                      </div>
                      <span className="mt-2 sm:mt-3 text-[9px] sm:text-xs font-bold text-slate-400 uppercase tracking-widest">Days</span>
                    </div>
                    <div className="text-lg sm:text-2xl font-light text-slate-300 dark:text-slate-700 pb-5 sm:pb-6">:</div>
                    <div className="flex flex-col items-center">
                      <div className="w-14 h-14 sm:w-20 sm:h-20 bg-white dark:bg-slate-800 rounded-xl sm:rounded-2xl flex items-center justify-center text-xl sm:text-3xl font-bold text-slate-800 dark:text-white shadow-sm border border-slate-200/60 dark:border-slate-700">
                        {timeLeft.hours.toString().padStart(2, '0')}
                      </div>
                      <span className="mt-2 sm:mt-3 text-[9px] sm:text-xs font-bold text-slate-400 uppercase tracking-widest">Hours</span>
                    </div>
                    <div className="text-lg sm:text-2xl font-light text-slate-300 dark:text-slate-700 pb-5 sm:pb-6">:</div>
                    <div className="flex flex-col items-center">
                      <div className="w-14 h-14 sm:w-20 sm:h-20 bg-white dark:bg-slate-800 rounded-xl sm:rounded-2xl flex items-center justify-center text-xl sm:text-3xl font-bold text-slate-800 dark:text-white shadow-sm border border-slate-200/60 dark:border-slate-700">
                        {timeLeft.minutes.toString().padStart(2, '0')}
                      </div>
                      <span className="mt-2 sm:mt-3 text-[9px] sm:text-xs font-bold text-slate-400 uppercase tracking-widest">Mins</span>
                    </div>
                    <div className="text-lg sm:text-2xl font-light text-slate-300 dark:text-slate-700 pb-5 sm:pb-6">:</div>
                    <div className="flex flex-col items-center">
                      <div className="w-14 h-14 sm:w-20 sm:h-20 bg-gradient-to-br from-rose-500 to-rose-600 rounded-xl sm:rounded-2xl flex items-center justify-center text-xl sm:text-3xl font-bold text-white shadow-md shadow-rose-900/20">
                        {timeLeft.seconds.toString().padStart(2, '0')}
                      </div>
                      <span className="mt-2 sm:mt-3 text-[9px] sm:text-xs font-bold text-slate-400 uppercase tracking-widest">Secs</span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="w-full">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 sm:mb-8 pb-4 border-b border-slate-200 dark:border-slate-800">
                     <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white tracking-tight">Identified Problems</h3>
                     <span className="text-xs sm:text-sm font-bold text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 px-3 sm:px-4 py-1.5 rounded-full w-fit">{problems.filter(p => p.sdg === `SDG ${selectedSdg.id}`).length} Problems</span>
                  </div>
                  
                  <div className="space-y-4 sm:space-y-6">
                    {problems.filter(p => p.sdg === `SDG ${selectedSdg.id}`).map((problem, idx) => (
                      <div 
                        key={problem.code} 
                        className="group bg-white dark:bg-slate-800/40 p-5 sm:p-6 md:p-8 rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-rose-300 dark:hover:border-rose-500/50 transition-all shadow-sm hover:shadow-md"
                        style={{ animation: `fadeInUp 0.4s ease-out forwards ${idx * 0.05}s`, opacity: 0 }}
                      >
                        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 sm:gap-4 mb-3 sm:mb-4">
                          <h4 className="font-extrabold text-slate-900 dark:text-white text-lg sm:text-xl leading-snug group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors">{problem.title}</h4>
                          <span className="flex-shrink-0 inline-flex bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-md text-xs sm:text-sm border border-slate-200 dark:border-slate-700 w-fit">#{problem.code}</span>
                        </div>
                        <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">{problem.desc}</p>
                        
                        <div className="flex items-center">
                          <span className="inline-flex items-center gap-1.5 text-rose-600 dark:text-rose-400 text-[10px] sm:text-xs font-bold uppercase tracking-widest bg-rose-50 dark:bg-rose-900/20 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-md">
                            <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                            </svg>
                            {problem.tag}
                          </span>
                        </div>
                      </div>
                    ))}
                    
                    {problems.filter(p => p.sdg === `SDG ${selectedSdg.id}`).length === 0 && (
                      <div className="flex flex-col items-center justify-center py-16 sm:py-24 bg-slate-50 dark:bg-slate-800/20 rounded-3xl border border-dashed border-slate-200 dark:border-slate-700 text-center px-4">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center mb-4 sm:mb-6 shadow-sm">
                          <svg className="w-8 h-8 sm:w-10 sm:h-10 text-slate-300 dark:text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                          </svg>
                        </div>
                        <p className="text-slate-500 dark:text-slate-400 font-medium text-sm sm:text-lg">No specific problems listed for this SDG yet.</p>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
            
            <style>{`
              @keyframes fadeInUp {
                from { transform: translateY(20px); opacity: 0; }
                to { transform: translateY(0); opacity: 1; }
              }
            `}</style>
          </div>
        )}
      </div>
    </section>
  );
}