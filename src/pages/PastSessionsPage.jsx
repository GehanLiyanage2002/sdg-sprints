export default function PastSessionsPage() {
  const sessions = [
    {
        "title": "SDG 9 Awareness Session \u2014 Industry, Innovation and Infrastructure",
        "date": "14th June 2026",
        "speaker": "Mr. Masith Pramuditha, Software Engineer \u2013 Integration, IT-ERP Platform Operation, IFS R&D International Pvt Ltd",
        "host": "IEEE Student Branch of University of Kelaniya",
        "description": "This awareness session opened the SDG Sprints 2026 workshop series by exploring how resilient infrastructure, sustainable industrialization, and innovation can contribute to global development. Drawing on his experience in ERP platform integration at IFS R&D International, Mr. Pramuditha shared expert knowledge and real-world experience to help participants understand SDG 9's relevance to Sri Lanka. The session was organized in collaboration with the IEEE Student Branch of the University of Kelaniya and IEEE Sri Lanka Section SIGHT, aiming to inspire attendees to work towards a smarter and more sustainable future.",
        "image": "session-4.jpeg"
    },
    {
        "title": "SDG 7 Awareness Session \u2014 Affordable and Clean Energy",
        "date": "2nd July 2026",
        "speaker": "Mr. Lovindu Wijesinghe, Doctoral Researcher and Energy Systems Analyst",
        "host": "IEEE Student Branch of University of Colombo, Faculty of Computing",
        "description": "As a Doctoral Researcher and Energy Systems Analyst, Mr. Wijesinghe guided participants through the global impacts of energy access and the real-world solutions being developed to address them. The session unpacked what affordable and clean energy means in both global and local contexts, and how individuals can be part of the shift towards more sustainable energy systems. It was organized in partnership with the IEEE Student Branch of the University of Colombo's Faculty of Computing and IEEE Sri Lanka Section SIGHT.",
        "image": "session-3.jpeg"
    },
    {
        "title": "SDG 4 Awareness Session \u2014 Quality Education",
        "date": "8th July 2026",
        "speaker": "Dr. Pasan Bandara, Senior Lecturer, Department of Biosystem Technology, Faculty of Technology, Rajarata University of Sri Lanka",
        "host": "IEEE Student Branch of Rajarata University of Sri Lanka",
        "description": "Dr. Bandara, a Senior Lecturer in the Department of Biosystem Technology at Rajarata University, led participants through the value of inclusive, equitable, and lifelong learning. The session examined the barriers to quality education in Sri Lanka and how education systems can be strengthened to empower communities. It was organized by SDG Sprints in collaboration with the IEEE Student Branch of Rajarata University of Sri Lanka, bringing together students to discuss a brighter, more empowered future for all.",
        "image": "session-2.jpeg"
    },
    {
        "title": "SDG 6 Technical Session \u2014 Clean Water and Sanitation",
        "date": "16th July 2026, 6:00 PM",
        "speaker": "Prof. Ben Basnayake",
        "host": "IEEE Student Branch of CINEC Campus",
        "description": "Prof. Basnayake led a technical deep-dive into the emerging technologies and innovative solutions shaping clean water and sanitation efforts worldwide. Participants explored how engineering and technology can be applied to sustainable water management and how these approaches can be adapted to address Sri Lanka's specific water challenges. The session was hosted in collaboration with the IEEE Student Branch of CINEC Campus and IEEE Sri Lanka Section SIGHT.",
        "image": "session-13.jpeg"
    },
    {
        "title": "SDG 10 Technical Session \u2014 Reduced Inequalities",
        "date": "16th July 2026, 7:00 PM",
        "speaker": "Mr. Jiffry Zulfer, Founder & CEO, PickMe",
        "host": "IEEE Student Branch of University of Ruhuna",
        "description": "As Founder and CEO of PickMe, Mr. Zulfer shared valuable insights on how innovation and technology can help reduce inequalities and create opportunities for more equitable communities. Drawing on his experience building one of Sri Lanka's leading tech platforms, he offered participants practical perspectives on designing solutions that create meaningful social impact. The session was organized with the IEEE Student Branch of the University of Ruhuna and IEEE Sri Lanka Section SIGHT.",
        "image": "session-1.jpeg"
    },
    {
        "title": "SDG 13 Awareness Session \u2014 Climate Action",
        "date": "17th July 2026",
        "speaker": "Ms. Avishka Sendanayake, Climate Change and Sustainability Specialist",
        "host": "IEEE Student Branch of Sri Lanka Technology Campus",
        "description": "Ms. Sendanayake, a Climate Change and Sustainability Specialist, shared valuable insights into the challenges posed by climate change and the actions needed to build a more sustainable and resilient future. The session helped participants develop a deeper understanding of climate action and explored how individuals can contribute to lasting environmental impact. It was organized in collaboration with the IEEE Student Branch of Sri Lanka Technology Campus and IEEE Sri Lanka Section SIGHT.",
        "image": "session-7.jpeg"
    },
    {
        "title": "SDG 6 Awareness Session \u2014 Clean Water and Sanitation",
        "date": "18th July 2026",
        "speaker": "Dr. Gayani Liyanage, Senior Lecturer, Department of Aquatic Bioresources, Faculty of Urban and Aquatic Bioresources",
        "host": "IEEE Student Branch of University of Vavuniya",
        "description": "Dr. Liyanage, Senior Lecturer in the Department of Aquatic Bioresources, guided participants through the fundamentals of clean water and sanitation as a global development priority. The session encouraged attendees to see themselves as stewards of one of the world's most precious resources and to understand the challenges around water security in Sri Lanka. It was organized in collaboration with the IEEE Student Branch of the University of Vavuniya and IEEE Sri Lanka Section SIGHT.",
        "image": "session-14.jpeg"
    },
    {
        "title": "SDG 1 Technical Session \u2014 No Poverty",
        "date": "20th July 2026",
        "speaker": "Mr. Anusara Sugeeshwara, Data Scientist, Abans Auto",
        "host": "IEEE Student Branch of NSBM",
        "description": "Mr. Sugeeshwara, a Data Scientist at Abans Auto, took participants through technical interventions and scalable solutions for economic empowerment. The session explored how technology and data-driven approaches can help tackle poverty and support the creation of equal opportunities for all. It was organized by SDG Sprints in collaboration with the IEEE Student Branch of NSBM and IEEE Sri Lanka Section SIGHT.",
        "image": "session-9.jpeg"
    },
    {
        "title": "SDG 12 Technical Session \u2014 Responsible Consumption and Production",
        "date": "24th July 2026, 5:00 PM",
        "speaker": "Prof. Wahidul Biswas, Deputy Director, Sustainable Engineering Group; Dr. Manoj Ranaweera, Senior Lecturer, Department of Mechanical Engineering, University of Moratuwa",
        "host": "IEEE Student Branch of Curtin University",
        "description": "This dual-speaker technical session brought together Prof. Biswas, Deputy Director of the Sustainable Engineering Group, and Dr. Ranaweera, Senior Lecturer in Mechanical Engineering at the University of Moratuwa, to discuss responsible consumption and production. Together they explored how engineering and innovation can be applied to reduce waste and build more sustainable production systems. The session was organized in collaboration with the IEEE Student Branch of Curtin University and IEEE Sri Lanka Section SIGHT.",
        "image": "session-6.jpeg"
    },
    {
        "title": "SDG 13 Technical Session \u2014 Climate Action",
        "date": "25th July 2026",
        "speaker": "Prof. Aslam Saja A.M., Associate Professor, Researcher and Specialist in Disaster Resilience, Risk Reduction, and Emergency Management",
        "host": "IEEE Student Branch of Kotelawala Defence University",
        "description": "Prof. Saja, an Associate Professor and Specialist in Disaster Resilience, Risk Reduction, and Emergency Management, shared technical insights into climate change challenges and innovative approaches to effective climate action. The session gave participants a deeper, more technical perspective on building sustainable and resilient solutions for the future. It was organized in collaboration with the IEEE Student Branch of Kotelawala Defence University and IEEE Sri Lanka Section SIGHT.",
        "image": "session-10.jpeg"
    },
    {
        "title": "SDG 3 Awareness Session \u2014 Good Health and Well-Being",
        "date": "30th July 2026",
        "speaker": "Prof. Saroj Jayasinghe, Emeritus Professor of Medicine, University of Colombo & Consultant Physician",
        "host": "IEEE Student Branch of University of Jaffna",
        "description": "Prof. Jayasinghe, Emeritus Professor of Medicine at the University of Colombo and a practicing Consultant Physician, guided participants through the fundamentals of good health and well-being as a global development goal. Drawing on decades of medical and academic experience, he encouraged attendees to become advocates for health and well-being in their own communities. The session was organized with the IEEE Student Branch of the University of Jaffna and IEEE Sri Lanka Section SIGHT.",
        "image": "session-8.jpeg"
    },
    {
        "title": "SDG 11 Technical Session \u2014 Sustainable Cities and Communities",
        "date": "31st July 2026",
        "speaker": "Mr. Ashan Perera, Social Innovation Professional, The Road to Rights International; UN SDG Action Award Winner",
        "host": "IEEE Uva Wellassa University Student Branch",
        "description": "Mr. Perera, a Social Innovation Professional at The Road to Rights International and a UN SDG Action Award winner, shared valuable insights into sustainable urban development. The session covered innovative solutions and the role technology plays in building more resilient communities, giving participants a practical view of what sustainable cities can look like in the Sri Lankan context. It was organized in collaboration with the IEEE Uva Wellassa University Student Branch and IEEE Sri Lanka Section SIGHT.",
        "image": "session-11.jpeg"
    },
    {
        "title": "SDG 9 Technical Session \u2014 Industry, Innovation and Infrastructure",
        "date": "8th August 2026",
        "speaker": "Ms. Mahendri Hemachandra, Founder and CEO, STEMNest",
        "host": "IEEE Student Branch of Sabaragamuwa University of Sri Lanka",
        "description": "As Founder and CEO of STEMNest, Ms. Hemachandra took participants deep into how practical technology and resilient infrastructure can solve real-world challenges. The session encouraged attendees to learn from industry experience and think of themselves as architects of tomorrow's infrastructure solutions. It was organized in collaboration with the IEEE Student Branch of Sabaragamuwa University of Sri Lanka and IEEE Sri Lanka Section SIGHT.",
        "image": "session-5.jpeg"
    },
    {
        "title": "SDG 10 Awareness Session \u2014 Reduced Inequalities",
        "date": "12th August 2026",
        "speaker": "Dr. A.D. Dharmawansa, B.Sc. (Hons.) (Wayamba), M.Eng. (NUT), D.Eng. (NUT), Senior Lecturer (Grade II)",
        "host": "IEEE Student Branch of Wayamba University of Sri Lanka",
        "description": "Dr. A.D. Dharmawansa, a Senior Lecturer (Grade II), closed out the workshop series with an awareness session on reducing inequalities. The session explored why inequality remains a pressing global and local issue, and what steps individuals and institutions can take towards building a more inclusive and equitable society. It was organized in collaboration with the IEEE Student Branch of Wayamba University of Sri Lanka and IEEE Sri Lanka Section SIGHT, and held over Zoom.",
        "image": "session-12.jpeg"
    }
];

  const getSessionImage = (imageFile) => {
    try {
      return new URL(`../assets/PastSessions/${imageFile}`, import.meta.url).href;
    } catch (e) {
      return null;
    }
  };

  return (
    <div className="pt-32 pb-24 min-h-screen relative overflow-hidden">
      <div className="absolute top-20 left-1/4 w-[600px] h-[600px] bg-rose-200/40 dark:bg-red-600/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen"></div>
      <div className="absolute bottom-40 right-1/4 w-[800px] h-[800px] bg-pink-600/10 rounded-full blur-[150px] pointer-events-none mix-blend-screen"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h1 className="text-sm font-bold tracking-widest text-rose-600 dark:text-rose-400 uppercase mb-4">
            Capacity Building
          </h1>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 dark:text-white mb-6 tracking-tight drop-shadow-lg">
            Past <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-rose-700 dark:from-rose-300 dark:to-pink-500">Sessions</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-600 dark:text-rose-100/70 max-w-3xl mx-auto">
            Explore our series of workshops and technical sessions that equipped participants with the knowledge and skills to address real-world SDG challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sessions.map((session, idx) => (
            <div key={idx} className="bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl overflow-hidden hover:bg-white dark:bg-white/5 hover:border-rose-500/30 transition-all duration-300 flex flex-col">
              <div className="aspect-square bg-white dark:bg-white/5 relative flex items-center justify-center overflow-hidden group">
                {session.image ? (
                  <img src={getSessionImage(session.image)} alt={session.title} className="w-full h-full object-cover" />
                ) : (
                  <div className="text-slate-900 dark:text-white/20 flex flex-col items-center">
                    <svg className="w-12 h-12 mb-2 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="text-sm font-medium">Image coming soon</span>
                  </div>
                )}
              </div>
              
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 leading-snug line-clamp-2" title={session.title}>{session.title}</h3>
                
                <div className="space-y-2 mb-4 text-sm">
                  <div className="flex items-start gap-2 text-slate-600 dark:text-rose-100/70">
                    <svg className="w-4 h-4 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                    <span>{session.date}</span>
                  </div>
                  <div className="flex items-start gap-2 text-slate-600 dark:text-rose-100/70">
                    <svg className="w-4 h-4 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                    <span>{session.speaker}</span>
                  </div>
                  <div className="flex items-start gap-2 text-slate-600 dark:text-rose-100/70">
                    <svg className="w-4 h-4 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                    <span>{session.host}</span>
                  </div>
                </div>
                
                <p className="text-slate-900 dark:text-white/60 text-sm leading-relaxed line-clamp-4">
                  {session.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
