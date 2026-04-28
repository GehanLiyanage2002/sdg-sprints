// Import local images from the PastEvents folder.
// Ensure these filenames match your actual files!
import workshop2Img from '../assets/PastEvents/sdg-sprints-2025-workshop-5.jpg';
import workshop1Img from '../assets/PastEvents/sdg-sprints-2025-workshop-6.jpg';
import launchpadImg from '../assets/PastEvents/sdg-sprints-2025-launchpad-3.jpg';

export default function Initiatives() {
  // Data updated to keep only Events, use local images, and include official links
  const initiativesData = [
    {
      id: 1,
      category: 'Event',
      title: 'SDG Sprints Workshop #2: Zero Hunger, Clean Water, Affordable Energy, Sustainable Cities & Climate Action',
      date: 'Nov 29, 2025',
      desc: 'Unleash your creativity and join the next chapter of the SDG Sprints journey! Workshop 2 brings powerful insights, hands-on learning, and real-world applications...',
      image: workshop2Img,
      link: 'https://sight.ieee.lk/initiatives/sdg-sprints-2025-workshop-2'
    },
    {
      id: 2,
      category: 'Event',
      title: 'SDG Sprints Workshop #1: Health with Jendo Innovations & Education with Room to Read',
      date: 'Nov 15, 2025',
      desc: 'SDG Sprints Workshop series focused on Good Health and Well-being (SDG 3) and Quality Education (SDG 4). Unleash your creativity and...',
      image: workshop1Img,
      link: 'https://sight.ieee.lk/initiatives/sdg-sprints-2025-workshop-1'
    },
    {
      id: 3,
      category: 'Event',
      title: 'SDG Sprints Launchpad: Beginning the Journey of Innovation and Purpose',
      date: 'Oct 31, 2025',
      desc: 'The Launchpad of SDG Sprints marks the beginning of an inspiring journey where innovation meets purpose. The event brings together...',
      image: launchpadImg,
      link: 'https://sight.ieee.lk/initiatives/sdg-sprints-launchpad-2025'
    }
  ];

  return (
    <section className="relative py-24 border-t border-white/5 bg-[#24050b]/30">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Past <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-300 to-pink-400">Events</span>
          </h2>
          <p className="text-lg text-rose-100/70 max-w-2xl">
            Explore the specific implementations and initiatives under the SDG Sprints project.
          </p>
        </div>

        {/* Cards Grid - Now perfectly sized for 3 items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {initiativesData.map((item) => (
            <div 
              key={item.id} 
              className="group flex flex-col rounded-2xl bg-white/5 border border-white/10 overflow-hidden hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(225,29,72,0.15)]"
            >
              {/* Card Image Area */}
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#24050b] via-transparent to-transparent opacity-80"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-md shadow-lg bg-emerald-500/80 text-white border border-emerald-400/50">
                  {item.category}
                </div>
              </div>
              
              {/* Card Content Area */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-2 text-rose-200/60 text-sm mb-3 font-medium">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {item.date}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 leading-snug group-hover:text-rose-200 transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-rose-100/70 text-sm leading-relaxed mb-6 flex-grow">
                  {item.desc}
                </p>
                
                {/* Link out to the official IEEE site */}
                <div className="mt-auto pt-4 border-t border-white/10">
                  <a 
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-bold text-rose-300 group-hover:text-white transition-colors cursor-pointer"
                  >
                    Read Full Story
                    <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
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