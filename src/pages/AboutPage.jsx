export default function AboutPage() {
  // SVG Icons for the core values
  const valueIcons = {
    Innovation: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2zM12 9v2m0 4h.01" />,
    Collaboration: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />,
    Inclusivity: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />,
    Sustainability: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />,
    Ethical: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  };

  return (
    <div className="pt-32 pb-24 min-h-screen relative overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-20 left-1/4 w-[600px] h-[600px] bg-rose-600/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen"></div>
      <div className="absolute bottom-20 right-1/4 w-[800px] h-[800px] bg-red-600/10 rounded-full blur-[150px] pointer-events-none mix-blend-screen"></div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        {/* --- SECTION 1: Introduction --- */}
        <div className="text-center mb-20">
          <h1 className="text-sm font-bold tracking-widest text-rose-400 uppercase mb-4">
            The Initiative
          </h1>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-8 tracking-tight">
            What is <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-300 to-pink-500">SDG Sprints?</span>
          </h2>
          
          <div className="text-xl md:text-2xl text-rose-50 leading-relaxed font-medium max-w-4xl mx-auto mb-10">
            SDG Sprints 2026 is the flagship humanitarian technology initiative organized by IEEE Sri Lanka Section SIGHT to encourage innovative technological solutions addressing the most pressing Sustainable Development Goal (SDG) challenges in Sri Lanka.
          </div>

          <div className="grid md:grid-cols-2 gap-8 text-left text-rose-100/80 leading-relaxed">
            <p className="bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-md">
              Sri Lanka continues to face multiple development challenges such as environmental sustainability, access to clean water, food security, healthcare access, digital inequality in education, and climate resilience. These challenges require practical and innovative solutions that combine technology with community-centered design.
            </p>
            <p className="bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-md">
              SDG Sprints aims to empower young innovators to explore these problems and create solutions that align with global SDGs while directly addressing real local community needs. The program provides a collaborative platform where undergraduates, industry professionals, and communities can work together.
            </p>
          </div>

          {/* Highlight Box for Framework */}
          <div className="mt-8 bg-gradient-to-r from-rose-950/80 to-[#24050b]/80 p-8 rounded-3xl border border-rose-500/20 backdrop-blur-md text-center max-w-3xl mx-auto shadow-[0_0_30px_rgba(225,29,72,0.1)]">
            <p className="text-rose-100/90 leading-relaxed">
              Through structured design methodologies such as <strong className="text-white">Design Sprints</strong> and the <strong className="text-white">Double Diamond framework</strong>, the program guides participants through problem discovery, solution design, and potential real-world implementation. By leveraging IEEE’s global network, SDG Sprints 2026 aims to create an ecosystem where humanitarian technology innovation can thrive.
            </p>
          </div>
        </div>

        {/* --- SECTION 2: Vision & Mission --- */}
        <div className="grid md:grid-cols-2 gap-8 mb-24">
          <div className="relative p-10 rounded-3xl bg-black/40 border border-white/10 backdrop-blur-md group hover:border-rose-400/50 transition-colors">
            <div className="absolute top-0 right-8 -translate-y-1/2 bg-rose-500/20 border border-rose-400/30 p-3 rounded-full backdrop-blur-md">
              <svg className="w-6 h-6 text-rose-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
            </div>
            <h3 className="text-3xl font-bold text-white mb-4">Project Vision</h3>
            <p className="text-rose-100/80 leading-relaxed text-lg">
              To establish IEEE Sri Lanka Section SIGHT as the go-to hub for humanitarian needs, connecting people, resources, data, and solutions for impactful technology-driven SDG initiatives.
            </p>
          </div>

          <div className="relative p-10 rounded-3xl bg-black/40 border border-white/10 backdrop-blur-md group hover:border-pink-400/50 transition-colors">
            <div className="absolute top-0 right-8 -translate-y-1/2 bg-pink-500/20 border border-pink-400/30 p-3 rounded-full backdrop-blur-md">
              <svg className="w-6 h-6 text-pink-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            </div>
            <h3 className="text-3xl font-bold text-white mb-4">Project Mission</h3>
            <p className="text-rose-100/80 leading-relaxed text-lg">
              To empower undergraduate students and communities to collaboratively design and develop technology-driven solutions that address real-world problems aligned with the SDGs, using structured innovation frameworks.
            </p>
          </div>
        </div>

        {/* --- SECTION 3: Values --- */}
        <div className="mb-24 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-12">Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-center">
            {/* Array of values mapped directly from your text */}
            {[
              { title: 'Innovation', desc: 'Encouraging creative technological solutions that address real-world humanitarian challenges.', icon: valueIcons.Innovation },
              { title: 'Collaboration', desc: 'Promoting teamwork among students, industry experts, NGOs, and community stakeholders.', icon: valueIcons.Collaboration },
              { title: 'Inclusivity', desc: 'Ensuring that solutions consider diverse communities and promote equal access to technology.', icon: valueIcons.Inclusivity },
              { title: 'Sustainability', desc: 'Developing solutions that are practical, scalable, and capable of long-term impact.', icon: valueIcons.Sustainability },
              { title: 'Ethical Technology', desc: 'Promoting responsible and ethical use of technology for societal benefit.', icon: valueIcons.Ethical }
            ].map((value, idx) => (
              <div key={idx} className={`bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm hover:-translate-y-2 transition-transform duration-300 hover:bg-white/10 ${idx > 2 ? 'md:col-span-1 md:col-start-2 lg:col-span-1' : ''}`}>
                <div className="w-14 h-14 mx-auto bg-gradient-to-br from-rose-400 to-pink-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-rose-500/20 text-white">
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">{value.icon}</svg>
                </div>
                <h4 className="text-xl font-bold text-white mb-3">{value.title}</h4>
                <p className="text-rose-100/70 text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* --- SECTION 4: Objectives & Goals --- */}
        <div>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-10 text-center">Objectives & Goals</h3>
          <div className="bg-black/30 border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-md">
            <ul className="space-y-6">
              {[
                "To encourage undergraduate students to design innovative solutions for real community challenges.",
                "To align technological innovation with the United Nations Sustainable Development Goals.",
                "To promote humanitarian technology development among students and young professionals.",
                "To create a pipeline of scalable solutions that can be implemented with industry and NGO support.",
                "To build a strong network of innovators, mentors, and partners working toward sustainable development."
              ].map((goal, index) => (
                <li key={index} className="flex items-start gap-4 group">
                  <div className="mt-1 w-8 h-8 rounded-full bg-rose-500/20 border border-rose-500/40 flex items-center justify-center flex-shrink-0 group-hover:bg-rose-500/40 transition-colors">
                    <span className="text-rose-300 font-bold text-sm">{index + 1}</span>
                  </div>
                  <p className="text-rose-100/80 text-lg leading-relaxed pt-0.5 group-hover:text-white transition-colors">
                    {goal}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
}