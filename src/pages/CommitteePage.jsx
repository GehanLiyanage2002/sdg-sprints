export default function CommitteePage() {
  // Organizing the committee members by their respective teams
  const teams = [
    {
      teamName: "Leadership",
      members: [
        { name: "Chandima Jayawardana", role: "Chair", imageFile: "chandima-jayawardana.jpg" }
      ]
    },
    {
      teamName: "Secretary Team",
      members: [
        { name: "Nilupulee Amarathunga", role: "Secretary", imageFile: "nilupulee-amarathunga.jpg" },
        { name: "Sahaswari Senanayaka", role: "Coordinator - Proposal Writing", imageFile: "sahaswari-senanayaka.jpg" },
        { name: "Thilini Tharushika", role: "Coordinator - Content Writing", imageFile: "thilini-tharushika.jpg" }
      ]
    },
    {
      teamName: "Program & Delivery Team",
      members: [
        { name: "Sankalpa Fernando", role: "Vice-Chair Program and Delivery", imageFile: "sankalpa-fernando.jpg" },
        { name: "Sachila Chathnuka", role: "Coordinator - Program", imageFile: "sachila-chathnuka.jpg" },
        { name: "Kisali Buddhadasa", role: "Coordinator - Program", imageFile: "kisali-buddhadasa.jpg" },
        { name: "Mayantha Nawarathna", role: "Coordinator - Logistics", imageFile: "mayantha-nawarathna.jpg" }
      ]
    },
    {
      teamName: "Finance & Partnerships Team",
      members: [
        { name: "Dasunika Yapabandara", role: "Vice-Chair Finance and Partnerships", imageFile: "dasunika-yapabandara.jpg" },
        { name: "Mahen Sandeepa", role: "Coordinator - Partnerships", imageFile: "mahen-sandeepa.jpg" },
        { name: "Yenuli Thiranagama", role: "Coordinator - Finance", imageFile: "yenuli-thiranagama.jpg" }
      ]
    },
    {
      teamName: "Public Visibility Team",
      members: [
        { name: "Senath Chandira", role: "Vice-Chair Public Visibility", imageFile: "senath-chandira.jpg" },
        { name: "Gehan Liyanage", role: "Coordinator - Web", imageFile: "gehan-liyanage.jpg" },
        { name: "Dileepa Priyasad", role: "Coordinator - Design", imageFile: "dileepa-priyasad.jpg" },
        { name: "Sesandu Ramath", role: "Coordinator - Social Media", imageFile: "sesandu-ramath.jpg" }
      ]
    }
  ];

  // Helper to load image or fallback to an initial-based avatar
  const getAvatar = (imageFile, name) => {
    try {
      // Assuming your images are directly in the src/assets/ folder
      return new URL(`../assets/${imageFile}`, import.meta.url).href;
    } catch (e) {
      // Fallback: Creates a beautiful avatar with the user's initials using a public API
      const encodedName = encodeURIComponent(name);
      return `https://ui-avatars.com/api/?name=${encodedName}&background=f43f5e&color=fff&size=256&bold=true`;
    }
  };

  return (
    <div className="pt-32 pb-24 min-h-screen relative overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-red-600/10 rounded-full blur-[150px] pointer-events-none mix-blend-screen"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Page Header */}
        <div className="text-center mb-20">
          <h1 className="text-sm font-bold tracking-widest text-rose-400 uppercase mb-4">
            Meet the Team
          </h1>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tight drop-shadow-lg">
            Organizing <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-300 to-pink-500 pr-2">Committee</span>
          </h2>
          <p className="text-lg md:text-xl text-rose-100/70 max-w-2xl mx-auto">
            The dedicated volunteers behind SDG Sprints 2026, working tirelessly to drive humanitarian innovation in Sri Lanka.
          </p>
        </div>

        {/* Iterate through each team */}
        <div className="space-y-24">
          {teams.map((team, teamIndex) => (
            <div key={teamIndex} className="relative">
              
              {/* Team Title */}
              <div className="flex items-center gap-4 mb-10 justify-center md:justify-start">
                <h3 className="text-3xl font-bold text-white">{team.teamName}</h3>
                <div className="h-px bg-gradient-to-r from-rose-500/50 to-transparent flex-grow hidden md:block"></div>
              </div>

              {/* Members Grid */}
              <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ${team.teamName === "Leadership" ? "lg:grid-cols-1 justify-items-center" : ""}`}>
                {team.members.map((member, memberIndex) => (
                  <div 
                    key={memberIndex} 
                    className={`group relative flex flex-col items-center text-center rounded-3xl bg-white/5 border border-white/10 p-8 backdrop-blur-sm hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(225,29,72,0.1)] hover:border-rose-500/30 ${team.teamName === "Leadership" ? "w-full max-w-sm" : ""}`}
                  >
                    {/* Avatar Container with Glow */}
                    <div className="relative mb-6">
                      <div className="absolute inset-0 bg-gradient-to-tr from-rose-500 to-pink-500 rounded-full blur opacity-40 group-hover:opacity-70 transition-opacity duration-500"></div>
                      <div className="relative w-32 h-32 rounded-full border-2 border-rose-400/50 overflow-hidden bg-[#24050b] group-hover:border-rose-300 transition-colors duration-500 shadow-xl">
                        {/* 
                          Ensure your images in the assets folder are perfectly square!
                          If the image is missing, the getAvatar function loads a fallback.
                        */}
                        <img 
                          src={getAvatar(member.imageFile, member.name)} 
                          alt={member.name} 
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            // Backup exactly incase local file fails to load
                            e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=f43f5e&color=fff&size=256&bold=true`;
                          }}
                        />
                      </div>
                    </div>

                    {/* Text Info */}
                    <h4 className="text-xl font-bold text-white mb-2">{member.name}</h4>
                    <span className="inline-block px-4 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-200 text-sm font-medium">
                      {member.role}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}