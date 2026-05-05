export default function ProgramPage() {
  // Data for the Workshop Topics
  const workshopTopics = [
    "Introduction to the Sustainable Development Goals and humanitarian technology",
    "SDG challenges and emerging opportunities in Sri Lanka",
    "Real-world case studies and technology interventions related to specific SDGs",
    "Problem identification and validation techniques",
    "Human-centered design and innovation approaches",
    "Technology tools and frameworks for SDG-focused solutions",
    "Rapid prototyping and solution development strategies",
    "Measuring social impact and sustainability of solutions",
    "Pitching and storytelling for impact"
  ];

  // Data for the Challenge Timeline
  const timelineEvents = [
    {
      step: "Registration",
      title: "Registration Phase",
      date: "11 Aug – 1 Sep 2026",
      duration: "3 weeks",
      desc: "Participants from universities and institutions register their teams and select a problem from the SDG Problem Pool.",
      marks: null
    },
    {
      step: "Validation",
      title: "Team Validation & Group Allocation",
      date: "2 Sep – 7 Sep 2026",
      duration: "1 week",
      desc: "Registered teams reviewed for compliance. Approved teams added to communication groups and provided resources.",
      marks: null
    },
    {
      step: "Checkpoint 1",
      title: "Registration & Intent",
      date: "Early September 2026",
      duration: "Screening",
      desc: "Purpose: Ensure SDG alignment. Teams are evaluated on a Pass / Revise basis.",
      marks: "Screening Only"
    },
    {
      step: "Checkpoint 2",
      title: "Problem Validation",
      date: "8 Sep – 30 Sep 2026",
      duration: "2 weeks prep + 1 week eval",
      desc: "Teams conduct research to understand the selected SDG problem and validate it using evidence from reliable sources or stakeholder insights.",
      marks: "25 Marks"
    },
    {
      step: "Checkpoint 3",
      title: "Solution Concept Deck",
      date: "30 Sep – 20 Oct 2026",
      duration: "2 weeks prep + 1 week eval",
      desc: "Submit a Concept Deck outlining the proposed solution, technologies used, and expected impact aligned with the SDG challenge.",
      marks: "20 Marks"
    },
    {
      step: "Checkpoint 4",
      title: "Solution Concept Pitch",
      date: "Pitch Event: 5 Nov 2026",
      duration: "Physical Presentation",
      desc: "Shortlisted teams present their solution concept to the jury panel. Top 10 teams selected to proceed to prototype development.",
      marks: "15 Marks"
    },
    {
      step: "Checkpoint 5",
      title: "Prototype Development & Feasibility",
      date: "13 Nov – 24 Dec 2026",
      duration: "4 weeks prep + 2 weeks eval",
      desc: "Develop a functional prototype or technical architecture. Submit a demonstration video and technical documentation.",
      marks: "25 Marks"
    },
    {
      step: "Finals",
      title: "SDG Sprints Final Showcase",
      date: "Early January 2027",
      duration: "Physical Event",
      desc: "Top teams present at the Final Showcase. 5-min pitch, 3-min prototype demo, and 5-min jury Q&A.",
      marks: "15 Marks"
    }
  ];

  return (
    <div className="pt-32 pb-24 min-h-screen relative overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-20 left-1/4 w-[600px] h-[600px] bg-rose-600/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen"></div>
      <div className="absolute bottom-40 right-1/4 w-[800px] h-[800px] bg-pink-600/10 rounded-full blur-[150px] pointer-events-none mix-blend-screen"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Page Header */}
        <div className="text-center mb-20">
          <h1 className="text-sm font-bold tracking-widest text-rose-400 uppercase mb-4">
            The Journey
          </h1>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tight drop-shadow-lg">
            Program <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-300 to-pink-500">Timeline</span>
          </h2>
          <p className="text-lg md:text-xl text-rose-100/70 max-w-3xl mx-auto">
            From initial capacity building to the final showcase, discover the structured path designed to turn innovative ideas into real-world humanitarian solutions.
          </p>
        </div>

        {/* --- SECTION 1: CAPACITY BUILDING WORKSHOPS --- */}
        <div className="mb-32">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-10 gap-6">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">Capacity Building Workshops</h3>
              <p className="text-rose-200/80 max-w-2xl text-lg">
                12 interactive sessions equipping participants with the knowledge and skills to address real-world SDG challenges in Sri Lanka.
              </p>
            </div>
            {/* Quick Stats Badge */}
            <div className="flex flex-col gap-2 bg-white/5 border border-white/10 p-4 rounded-2xl backdrop-blur-md shrink-0">
              <div className="flex items-center gap-3 text-white">
                <svg className="w-5 h-5 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                <span className="font-semibold">Apr 2026 – Aug 2026</span>
              </div>
              <div className="flex items-center gap-3 text-white">
                <svg className="w-5 h-5 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
                <span className="font-semibold">Physical & Virtual Formats</span>
              </div>
            </div>
          </div>

          {/* Workshop Topics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {workshopTopics.map((topic, idx) => (
              <div key={idx} className="flex items-start gap-4 bg-black/40 border border-white/5 p-6 rounded-2xl hover:bg-white/10 hover:border-rose-500/30 transition-all duration-300 group">
                <div className="mt-1 w-6 h-6 rounded-full bg-rose-500/20 flex items-center justify-center shrink-0 group-hover:bg-rose-500/40 transition-colors">
                  <svg className="w-4 h-4 text-rose-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                </div>
                <p className="text-rose-50 font-medium leading-relaxed group-hover:text-white transition-colors">
                  {topic}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* --- SECTION 2: SDG SOLUTIONS CHALLENGE (TIMELINE) --- */}
        <div>
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">SDG Solutions Challenge</h3>
            <p className="text-rose-200/80 max-w-2xl mx-auto text-lg">
              The core component of the program. Develop innovative solutions through multiple structured evaluation checkpoints.
            </p>
          </div>

          {/* Vertical Timeline Container */}
          <div className="relative max-w-4xl mx-auto pl-4 md:pl-0">
            {/* The Vertical Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-rose-500/50 via-pink-500/20 to-transparent -translate-x-1/2 rounded-full"></div>

            {/* Timeline Events */}
            <div className="space-y-12">
              {timelineEvents.map((event, idx) => (
                <div key={idx} className={`relative flex flex-col md:flex-row items-start ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''} group`}>
                  
                  {/* Glowing Node on the line */}
                  <div className="absolute left-0 md:left-1/2 w-8 h-8 rounded-full bg-[#3a0a14] border-4 border-rose-500 shadow-[0_0_15px_rgba(244,63,94,0.6)] -translate-x-1/2 z-10 group-hover:scale-125 group-hover:bg-rose-400 transition-all duration-300"></div>

                  {/* Content Card */}
                  <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${idx % 2 === 0 ? 'md:pr-16 text-left md:text-right' : 'md:pl-16 text-left'}`}>
                    <div className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-md hover:bg-white/10 hover:border-rose-400/50 transition-all duration-300 shadow-xl relative overflow-hidden">
                      
                      {/* Subtle background number/step */}
                      <div className={`absolute -top-4 -right-4 text-7xl font-black text-white/5 select-none pointer-events-none ${idx % 2 === 0 ? 'md:right-auto md:-left-4' : ''}`}>
                        {idx + 1}
                      </div>

                      <span className="inline-block px-3 py-1 rounded-full bg-rose-500/20 text-rose-300 text-xs font-bold uppercase tracking-wider mb-3">
                        {event.step}
                      </span>
                      
                      <h4 className="text-2xl font-bold text-white mb-2">{event.title}</h4>
                      
                      <div className={`flex flex-wrap items-center gap-3 mb-4 text-sm font-medium ${idx % 2 === 0 ? 'md:justify-end' : 'justify-start'}`}>
                        <span className="flex items-center gap-1.5 text-rose-200">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                          {event.date}
                        </span>
                        <span className="text-white/30 hidden sm:inline">•</span>
                        <span className="flex items-center gap-1.5 text-rose-200/70">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                          {event.duration}
                        </span>
                      </div>
                      
                      <p className="text-rose-100/80 leading-relaxed mb-5 relative z-10">
                        {event.desc}
                      </p>

                      {/* Marks Badge (Only shows if there are evaluation marks) */}
                      {event.marks && (
                        <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl border font-bold text-sm ${event.marks === "Screening Only" ? "bg-blue-500/20 border-blue-500/30 text-blue-300" : "bg-emerald-500/20 border-emerald-500/30 text-emerald-300"}`}>
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                          Evaluation: {event.marks}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}