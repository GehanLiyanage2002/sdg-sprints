export default function Goals() {
  // Official 17 UN SDGs data
  const sdgs = [
    { id: 1, title: 'No Poverty', desc: 'End poverty in all its forms everywhere.' },
    { id: 2, title: 'Zero Hunger', desc: 'End hunger, achieve food security and improved nutrition and promote sustainable agriculture.' },
    { id: 3, title: 'Good Health and Well-being', desc: 'Ensure healthy lives and promote well-being for all at all ages.' },
    { id: 4, title: 'Quality Education', desc: 'Ensure inclusive and equitable quality education and promote lifelong learning opportunities for all.' },
    { id: 5, title: 'Gender Equality', desc: 'Achieve gender equality and empower all women and girls.' },
    { id: 6, title: 'Clean Water and Sanitation', desc: 'Ensure availability and sustainable management of water and sanitation for all.' },
    { id: 7, title: 'Affordable and Clean Energy', desc: 'Ensure access to affordable, reliable, sustainable and modern energy for all.' },
    { id: 8, title: 'Decent Work and Economic Growth', desc: 'Promote sustained, inclusive and sustainable economic growth, full and productive employment and decent work for all.' },
    { id: 9, title: 'Industry, Innovation and Infrastructure', desc: 'Build resilient infrastructure, promote inclusive and sustainable industrialization and foster innovation.' },
    { id: 10, title: 'Reduced Inequalities', desc: 'Reduce inequality within and among countries.' },
    { id: 11, title: 'Sustainable Cities and Communities', desc: 'Make cities and human settlements inclusive, safe, resilient and sustainable.' },
    { id: 12, title: 'Responsible Consumption and Production', desc: 'Ensure sustainable consumption and production patterns.' },
    { id: 13, title: 'Climate Action', desc: 'Take urgent action to combat climate change and its impacts.' },
    { id: 14, title: 'Life Below Water', desc: 'Conserve and sustainably use the oceans, seas and marine resources for sustainable development.' },
    { id: 15, title: 'Life on Land', desc: 'Protect, restore and promote sustainable use of terrestrial ecosystems, sustainably manage forests, combat desertification, and halt and reverse land degradation.' },
    { id: 16, title: 'Peace, Justice and Strong Institutions', desc: 'Promote peaceful and inclusive societies for sustainable development, provide access to justice for all and build effective institutions.' },
    { id: 17, title: 'Partnerships for the Goals', desc: 'Strengthen the means of implementation and revitalize the Global Partnership for Sustainable Development.' },
  ];

  // Dynamically load images from the assets folder.
  const getImageUrl = (id) => {
    const formattedId = id.toString().padStart(2, '0');
    return new URL(`../assets/goals/E_SDG_PRINT-${formattedId}.jpg`, import.meta.url).href;
  };

  return (
    <section className="relative py-12">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Goals Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sdgs.map((goal) => (
            <div 
              key={goal.id} 
              className="group relative flex flex-col rounded-2xl bg-white/5 border border-white/10 overflow-hidden hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-rose-900/20"
            >
              {/* SDG Official Logo Image */}
              <div className="w-full aspect-square overflow-hidden bg-white">
                <img 
                  src={getImageUrl(goal.id)} 
                  alt={`SDG ${goal.id}: ${goal.title}`}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              {/* Description Card Body */}
              <div className="p-6 flex-grow flex flex-col justify-between backdrop-blur-sm">
                <div>
                  <h3 className="text-white font-bold text-lg leading-tight mb-3">
                    {goal.title}
                  </h3>
                  <p className="text-rose-100/70 text-sm leading-relaxed">
                    {goal.desc}
                  </p>
                </div>
                
                {/* Dynamically Generated Link */}
                <div className="mt-6 pt-4 border-t border-white/10">
                  <a 
                    href={`https://sight.ieee.lk/sdg/${goal.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-xs font-bold uppercase tracking-wider text-rose-300 group-hover:text-white transition-colors cursor-pointer"
                  >
                    View Track &rarr;
                  </a>
                </div>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}