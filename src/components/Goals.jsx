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
  const [isUnlocked, setIsUnlocked] = useState(true); // Temporarily unlockedl when modal is open

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedSdg) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => { document.body.style.overflow = 'auto'; };
  }, [selectedSdg]);

  // Timer logic for September 8, 2026 0:00 AM
  useEffect(() => {
    if (!selectedSdg) return;

    // Target date: September 8, 2026, 00:00:00 Sri Lanka Time
    const targetDate = new Date('2026-09-08T00:00:00+05:30').getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
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

  const handleClose = () => setSelectedSdg(null);

  return (
    <section className="relative py-12">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Goals Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6">
          {sdgs.map((goal) => (
            <div 
              key={goal.id} 
              onClick={() => setSelectedSdg(goal)}
              className="group cursor-pointer relative flex flex-col rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 overflow-hidden hover:bg-slate-50 dark:hover:bg-white/10 dark:bg-[#24050b] transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-rose-900/20"
            >
              {/* SDG Official Logo Image */}
              <div className="w-full aspect-square overflow-hidden bg-white dark:bg-white/5 relative">
                <img 
                  src={getImageUrl(goal.id)} 
                  alt={`SDG ${goal.id}: ${goal.title}`}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
              </div>
              
              {/* Description Card Body */}
              <div className="p-4 sm:p-6 flex-grow flex flex-col justify-between backdrop-blur-sm">
                <div>
                  <h3 className="text-slate-900 dark:text-white font-bold text-base sm:text-lg leading-tight mb-2 sm:mb-3 line-clamp-2">
                    {goal.title}
                  </h3>
                  <p className="text-slate-600 dark:text-rose-100/70 text-xs sm:text-sm leading-relaxed line-clamp-3">
                    {goal.desc}
                  </p>
                </div>
                
                {/* View Problems Button */}
                <div className="mt-6 pt-4 border-t border-slate-200 dark:border-white/10 flex items-center justify-between">
                  <span className="inline-block text-xs font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400 group-hover:text-slate-900 dark:text-white transition-colors">
                    View Problems &rarr;
                  </span>
                </div>
                
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL OVERLAY */}
      {selectedSdg && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 animate-fade-in-down">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-slate-900/40 dark:bg-black/70 backdrop-blur-md transition-opacity cursor-pointer"
            onClick={handleClose}
          ></div>

          {/* Modal Content */}
          <div className="relative w-full max-w-4xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 md:p-8 border-b border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#24050b]">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-xl overflow-hidden bg-white dark:bg-white/5 flex-shrink-0">
                  <img src={getImageUrl(selectedSdg.id)} alt={selectedSdg.title} className="w-full h-full object-contain" />
                </div>
                <div>
                  <h2 className="text-sm font-bold tracking-widest text-rose-600 dark:text-rose-400 uppercase mb-1">SDG {selectedSdg.id} Challenges</h2>
                  <h3 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white leading-tight">{selectedSdg.title}</h3>
                </div>
              </div>
              <button 
                onClick={handleClose}
                className="w-10 h-10 rounded-full bg-slate-50 dark:bg-[#24050b] hover:bg-slate-200 dark:hover:bg-white/20 flex items-center justify-center text-slate-900 dark:text-white transition-colors flex-shrink-0 cursor-pointer"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 md:p-12 overflow-y-auto flex flex-col items-center justify-center text-center">
              {!isUnlocked ? (
                <>
                  <div className="w-20 h-20 mb-6 rounded-full bg-rose-100 dark:bg-rose-900/30 flex items-center justify-center">
                    <svg className="w-10 h-10 text-rose-600 dark:text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4">
                    Problems Temporarily Hidden
                  </h3>
                  <p className="text-slate-600 dark:text-rose-100/70 text-lg mb-8 max-w-lg">
                    The problem pool for this SDG is currently locked. It will be revealed when the countdown ends on September 8 at 12:00 AM.
                  </p>
                  
                  <div className="flex items-center justify-center gap-4 sm:gap-6">
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-slate-900 dark:bg-white/10 rounded-2xl flex items-center justify-center text-2xl sm:text-3xl font-bold text-white shadow-inner">
                        {timeLeft.days.toString().padStart(2, '0')}
                      </div>
                      <span className="mt-2 text-xs sm:text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Days</span>
                    </div>
                    <div className="text-2xl sm:text-4xl font-bold text-slate-400 dark:text-slate-600 pb-6">:</div>
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-slate-900 dark:bg-white/10 rounded-2xl flex items-center justify-center text-2xl sm:text-3xl font-bold text-white shadow-inner">
                        {timeLeft.hours.toString().padStart(2, '0')}
                      </div>
                      <span className="mt-2 text-xs sm:text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Hours</span>
                    </div>
                    <div className="text-2xl sm:text-4xl font-bold text-slate-400 dark:text-slate-600 pb-6">:</div>
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-slate-900 dark:bg-white/10 rounded-2xl flex items-center justify-center text-2xl sm:text-3xl font-bold text-white shadow-inner">
                        {timeLeft.minutes.toString().padStart(2, '0')}
                      </div>
                      <span className="mt-2 text-xs sm:text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Mins</span>
                    </div>
                    <div className="text-2xl sm:text-4xl font-bold text-slate-400 dark:text-slate-600 pb-6">:</div>
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-rose-600 dark:bg-rose-500 rounded-2xl flex items-center justify-center text-2xl sm:text-3xl font-bold text-white shadow-inner shadow-rose-900/50">
                        {timeLeft.seconds.toString().padStart(2, '0')}
                      </div>
                      <span className="mt-2 text-xs sm:text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Secs</span>
                    </div>
                  </div>
                </>
              ) : (
                <div className="w-full text-left space-y-4">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-white/10 pb-2">Available Problems</h3>
                  <div className="space-y-4">
                    {problems.filter(p => p.sdg === `SDG ${selectedSdg.id}`).map(problem => (
                      <div key={problem.code} className="bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 p-4 rounded-xl">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="bg-rose-100 dark:bg-rose-900/50 text-rose-700 dark:text-rose-300 font-bold px-2 py-1 rounded text-sm">[{problem.code}]</span>
                          <h4 className="font-bold text-slate-800 dark:text-white text-lg">{problem.title}</h4>
                        </div>
                        <p className="text-slate-600 dark:text-rose-100/70 text-sm">{problem.desc}</p>
                        <div className="mt-3 inline-block bg-slate-200 dark:bg-white/10 text-slate-600 dark:text-slate-300 text-xs px-2 py-1 rounded-md font-medium">
                          {problem.tag}
                        </div>
                      </div>
                    ))}
                    {problems.filter(p => p.sdg === `SDG ${selectedSdg.id}`).length === 0 && (
                      <p className="text-slate-500 italic text-center py-4">No specific problems listed for this SDG yet.</p>
                    )}
                  </div>
                </div>
              )}
            </div>
            
            {/* Modal Footer */}
            <div className="p-6 border-t border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#24050b] flex justify-end">
              <button 
                onClick={handleClose}
                className="px-6 py-2.5 rounded-full bg-slate-200 hover:bg-slate-300 text-slate-800 font-medium text-sm transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
            
          </div>
        </div>
      )}

    </section>
  );
}