export default function AmbassadorsPage() {
  // Extracted directly from your image. 
  // IMPORTANT: Update the 'university' fields with the actual university names!
  const ambassadors = [
    { name: "Ravishka Rathnayake", university: "SLTC", imageFile: "IMG_8747 - Ravishka Rathnayaka.jpeg" },
    { name: "Jithmi Wickramasinghe", university: "Sabaragamuwa University of Sri Lanka", imageFile: "Jithmi_Wickramasinghe - Jithmi Wickramasinghe.jpg" },
    { name: "Chamod Chandupa", university: "University of Sri Jayawardenepura", imageFile: "Chamod - Chamod Chandupa.png" },
    { name: "Dilan Manusha", university: "NSBM", imageFile: "IMG-20260210-WA0011 - Dilan Manusha.jpg" },
    { name: "Sadithma Dulakdi Samarasinghe", university: "KDU", imageFile: "IMG_8907 - sadithma dulakdi.jpeg" },
    { name: "Thisarani Wijesinghe", university: "Open University of Sri Lanka", imageFile: "IMG_20260421_140901 - Thisarani Nirupama Wijesinghe.jpg" },
    { name: "Nayomi Amarasekara", university: "Wayamba University of Sri Lanka", imageFile: "Nayomi Pavithra_232007 - Nayomi Pavithra.jpg" },
    { name: "Pamodha Vikum Wanasinghe", university: "Rajarata University of Sri Lanka", imageFile: "file_00000000c7587208a40377cc594f9c06 - pamodha vikum wanasinghe.png" },
    { name: "Subodha Tharuka", university: "University of Ruhuna", imageFile: "my - Subodha Tharuka.jpeg" },
    { name: "Udana Isiwari", university: "University of Peradeniya", imageFile: "IMG-20250821-WA0006(1) - udana isiwari.jpg" },
    { name: "Malshi Navodya", university: "Uva Wellassa University", imageFile: "Malshi Navodya - CST23029 K.M. Navodya.jpg" },
    { name: "Sivapalan Ladurshi Abiraami", university: "Curtin University Colombo", imageFile: "Ladurshi Sivapalan - Ladurshi Abiraami.jpeg" },
    { name: "Sithumini Anuhansi", university: "NIBM", imageFile: "IMG-20241118-WA0028 - Sithumini Anuhansi.jpg" },
    { name: "Zakee Nowfal", university: "SLIIT", imageFile: "DSC_0579 - Mohammed Zakee.jpg" },
    { name: "Thenuri Perera", university: "University of Kelaniya", imageFile: "IMG-20260422-WA0022 - Thenuri Perera.jpg" },
    { name: "Sadanandan Varun Sarma", university: "University of Vavuniya", imageFile: "VARUN_SARMA(1) - varun sadanandan.png" },
    { name: "Sashin Nanayakkara", university: "CINEC", imageFile: "Picsart_26-03-03_22-48-41-094 - Sashin Nanayakkara.jpg" },
    { name: "Kavithra Bandara", university: "University of Jaffna", imageFile: "1703579772699 - Kavithra Nirmali.jpeg" },
    { name: "Yonath Lakvidu", university: "IIT", imageFile: "35x45 - YONATH LAKVIDU.jpg" },
    { name: "Imantha Galagedara", university: "UCSC", imageFile: "pic - imantha galagedara.png" }
  ];

  // Helper to load image or fallback to an initial-based avatar
  const getAvatar = (imageFile, name) => {
    try {
      // Assuming your images are directly in the src/assets/ folder
      return new URL(`../assets/${imageFile}`, import.meta.url).href;
    } catch (e) {
      const encodedName = encodeURIComponent(name);
      return `https://ui-avatars.com/api/?name=${encodedName}&background=f43f5e&color=fff&size=256&bold=true`;
    }
  };

  return (
    <div className="pt-32 pb-24 min-h-screen relative overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-40 left-1/4 w-[600px] h-[600px] bg-rose-200/40 dark:bg-red-600/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen"></div>
      <div className="absolute bottom-20 right-1/4 w-[800px] h-[800px] bg-pink-600/10 rounded-full blur-[150px] pointer-events-none mix-blend-screen"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-sm font-bold tracking-widest text-rose-600 dark:text-rose-400 uppercase mb-4">
            Community Development
          </h1>
          <h2 className="text-5xl md:text-6xl font-black text-slate-900 dark:text-white mb-8 tracking-tight drop-shadow-lg">
            SDG Sprints <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-300 to-pink-500 pr-2">Ambassadors</span>
          </h2>
          
          <div className="bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 p-8 rounded-3xl backdrop-blur-md max-w-4xl mx-auto shadow-2xl">
            <p className="text-lg md:text-xl text-slate-600 dark:text-rose-100/70 leading-relaxed font-medium">
              Student leaders from IEEE Student Branches serve as the vital link between SDG Sprints and university campuses. Our ambassadors promote the initiative within their universities, encourage participation, and support local engagement activities, helping us expand the reach of the program across the nation.
            </p>
          </div>
        </div>

        {/* Ambassadors Grid (Smaller cards, higher density for the large list) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
          {ambassadors.map((ambassador, idx) => (
            <div 
              key={idx} 
              className="group relative flex flex-col items-center text-center rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 p-6 backdrop-blur-sm hover:bg-slate-50 dark:hover:bg-white/10 dark:bg-[#24050b] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(225,29,72,0.15)] hover:border-rose-400/40"
            >
              {/* Avatar Container */}
              <div className="relative mb-4">
                <div className="absolute inset-0 bg-gradient-to-tr from-rose-400 to-pink-500 rounded-full blur opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full border-2 border-slate-200 dark:border-white/10 overflow-hidden bg-[#24050b] group-hover:border-rose-300 transition-colors duration-300">
                  <img 
                    src={getAvatar(ambassador.imageFile, ambassador.name)} 
                    alt={ambassador.name} 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(ambassador.name)}&background=f43f5e&color=fff&size=256&bold=true`;
                    }}
                  />
                </div>
              </div>

              {/* Text Info */}
              <h4 className="text-base md:text-lg font-bold text-slate-900 dark:text-white mb-1 leading-tight group-hover:text-rose-600 dark:group-hover:text-rose-400 dark:hover:text-rose-400 dark:text-rose-400 transition-colors">
                {ambassador.name}
              </h4>
              <p className="text-xs text-slate-500 dark:text-rose-200/70 font-medium px-2">
                {ambassador.university}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}