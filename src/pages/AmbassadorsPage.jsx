export default function AmbassadorsPage() {
  // Extracted directly from your image. 
  // IMPORTANT: Update the 'university' fields with the actual university names!
  const ambassadors = [
    { name: "Sahath Khan", university: "IEEE Student Branch", imageFile: "5c67467d-c1cb-498b-9443-881783d3a3c5 - Sahath Khan.jpeg" },
    { name: "Yonath Lakvidu", university: "Informatics institute of Technology", imageFile: "35x45 - YONATH LAKVIDU.jpg" },
    { name: "Kavithra Nirmali", university: "University of Jaffna", imageFile: "1703579772699 - Kavithra Nirmali.jpeg" },
    { name: "Chamod Chandupa", university: "University of Sri Jayawardhanapura", imageFile: "Chamod - Chamod Chandupa.png" },
    { name: "Mohammed Zakee", university: "Sri Lanka Institute of Information Technology", imageFile: "DSC_0579 - Mohammed Zakee.jpg" },
    { name: "Pamodha Vikum Wanasinghe", university: "IEEE Student Branch", imageFile: "file_00000000c7587208a40377cc594f9c06 - pamodha vikum wanasinghe.png" },
    { name: "Hirushi Jayasekara", university: "IEEE Student Branch", imageFile: "hirushi - Hirushi Jayasekara.jpg" },
    { name: "Chamodi Dev", university: "IEEE Student Branch", imageFile: "IMG_1211 - Chamodi Dev.jpeg" },
    { name: "Upuli Madhubhashini", university: "IEEE Student Branch", imageFile: "IMG_4891 - upuli madhubhashini.jpeg" },
    { name: "Pabasara Ranasinghe", university: "IEEE Student Branch", imageFile: "IMG_8147 - Pabasara Ranasinghe.jpeg" },
    { name: "Ravishka Rathnayaka", university: "Sri Lanka Technology Campus", imageFile: "IMG_8747 - Ravishka Rathnayaka.jpeg" },
    { name: "Sadithma Dulakdi", university: "Kotelawala Defence University", imageFile: "IMG_8907 - sadithma dulakdi.jpeg" },
    { name: "Banuja Vijayarajan", university: "IEEE Student Branch", imageFile: "IMG_20250429_204047_516 (1) (1) - Banuja Vijayarajan(1).webp" },
    { name: "Anuja Silva", university: "IEEE Student Branch", imageFile: "IMG_20260412_074609_942 - Anuja Silva.webp" },
    { name: "Thisarani Nirupama", university: "IEEE Student Branch", imageFile: "IMG_20260421_140901 - Thisarani Nirupama Wijesinghe.jpg" },
    { name: "Sithumini Anuhansi", university: "IEEE Student Branch", imageFile: "IMG-20241118-WA0028 - Sithumini Anuhansi.jpg" },
    { name: "Lasith Eshan", university: "IEEE Student Branch", imageFile: "IMG-20241226-WA0026 - Lasith Eshan.jpg" },
    { name: "Udana Isiwari", university: "University of Peradeniya", imageFile: "IMG-20250821-WA0006(1) - udana isiwari.jpg" },
    { name: "Hiruni Piyumika", university: "IEEE Student Branch", imageFile: "IMG-20251113-WA0267 - Hiruni Piyumika.jpg" },
    { name: "Randil Fernando", university: "IEEE Student Branch", imageFile: "IMG-20260209-WA0020 - Randil Fernando.jpg" },
    { name: "Dilan Manusha", university: "NSBM Green University", imageFile: "IMG-20260210-WA0011 - Dilan Manusha.jpg" },
    { name: "Thanuri Namanda", university: "IEEE Student Branch", imageFile: "IMG-20260323-WA0070 - Thanuri Namanda.jpg" },
    { name: "Ruba Shalini", university: "IEEE Student Branch", imageFile: "IMG-20260421-WA0012 - Ruba shalini.jpg" },
    { name: "Thenuri Perera", university: "University of Kelaniya", imageFile: "IMG-20260422-WA0022 - Thenuri Perera.jpg" },
    { name: "Jithmi Wickramasinghe", university: "Sabaragamuwa University", imageFile: "Jithmi_Wickramasinghe - Jithmi Wickramasinghe.jpg" },
    { name: "Ladurshi Abiraami", university: "Curtin University", imageFile: "Ladurshi Sivapalan - Ladurshi Abiraami.jpeg" },
    { name: "Lakmi Ariyawansa", university: "IEEE Student Branch", imageFile: "Lakmi Ladeesha - Lakmi Ariyawansa.png" },
    { name: "K.M. Navodya", university: "Uva Wellassa University", imageFile: "Malshi Navodya - CST23029 K.M. Navodya.jpg" },
    { name: "Subodha Tharuka", university: "University of Ruhuna", imageFile: "my - Subodha Tharuka.jpeg" },
    { name: "Nayomi Pavithra", university: "University of Wayamba", imageFile: "Nayomi Pavithra_232007 - Nayomi Pavithra.jpg" },
    { name: "Imantha Galagedara", university: "University of Colombo", imageFile: "pic - imantha galagedara.png" },
    { name: "Sashin Nanayakkara", university: "IEEE Student Branch", imageFile: "Picsart_26-03-03_22-48-41-094 - Sashin Nanayakkara.jpg" },
    { name: "Janidu Nimsara", university: "IEEE Student Branch", imageFile: "professional portrait photo - Janidu Nimsara.jpg" },
    { name: "Suhada Basuru Rupasinghe", university: "University of Rajarata", imageFile: "Suhada Basuru Rupasinghe - Suhada Basuru Rupasinghe.png" },
    { name: "Varun Sadanandan", university: "University of Vavuniya", imageFile: "VARUN_SARMA(1) - varun sadanandan.png" },
    { name: "Kaveesha Nimmani", university: "Uva Wellassa University", imageFile: "WhatsApp Image 2025-11-06 at 8.42.25 AM - Kaveesha Nimmani.jpeg" },
    { name: "Fathima Nistha", university: "IEEE Student Branch", imageFile: "WhatsApp Image 2025-11-16 at 18.13.05_0f1afdad_20251126_160611_0000 - Fathima Nistha.jpg" },
    { name: "Navodya Sewmini", university: "IEEE Student Branch", imageFile: "WhatsApp Image 2026-03-31 at 4.28.26 PM - Navodya Sewmini.jpeg" }
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
      <div className="absolute top-40 left-1/4 w-[600px] h-[600px] bg-rose-600/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen"></div>
      <div className="absolute bottom-20 right-1/4 w-[800px] h-[800px] bg-pink-600/10 rounded-full blur-[150px] pointer-events-none mix-blend-screen"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-sm font-bold tracking-widest text-rose-400 uppercase mb-4">
            Community Development
          </h1>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-8 tracking-tight drop-shadow-lg">
            SDG Sprints <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-300 to-pink-500 pr-2">Ambassadors</span>
          </h2>
          
          <div className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-md max-w-4xl mx-auto shadow-2xl">
            <p className="text-lg md:text-xl text-rose-100/90 leading-relaxed font-medium">
              Student leaders from IEEE Student Branches serve as the vital link between SDG Sprints and university campuses. Our ambassadors promote the initiative within their universities, encourage participation, and support local engagement activities, helping us expand the reach of the program across the nation.
            </p>
          </div>
        </div>

        {/* Ambassadors Grid (Smaller cards, higher density for the large list) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
          {ambassadors.map((ambassador, idx) => (
            <div 
              key={idx} 
              className="group relative flex flex-col items-center text-center rounded-2xl bg-black/30 border border-white/10 p-6 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(225,29,72,0.15)] hover:border-rose-400/40"
            >
              {/* Avatar Container */}
              <div className="relative mb-4">
                <div className="absolute inset-0 bg-gradient-to-tr from-rose-400 to-pink-500 rounded-full blur opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full border-2 border-white/10 overflow-hidden bg-[#24050b] group-hover:border-rose-300 transition-colors duration-300">
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
              <h4 className="text-base md:text-lg font-bold text-white mb-1 leading-tight group-hover:text-rose-200 transition-colors">
                {ambassador.name}
              </h4>
              <p className="text-xs text-rose-200/70 font-medium px-2">
                {ambassador.university}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}