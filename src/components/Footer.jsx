import sdgLogo from '../assets/sdg-sprints.png';
import ieeeSightLogo from '../assets/sight-sl-logo.png'; 

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#24050b] py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Branding Section */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-5 text-center md:text-left">
          <img 
            src={sdgLogo} 
            alt="SDG Sprints Logo" 
            className="h-14 w-auto object-contain opacity-90" 
          />
          <div>
            <h3 className="font-bold text-xl text-white mb-2">SDG Sprints 2026</h3>
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3">
              <p className="text-rose-200/60 text-sm font-medium uppercase tracking-wider">
                Powered by
              </p>
              <img 
                src={ieeeSightLogo} 
                alt="IEEE SIGHT Logo" 
                className="h-8 w-auto object-contain bg-white/5 p-1 rounded backdrop-blur-sm" 
              />
            </div>
          </div>
        </div>
        
        {/* Links Section */}
        <div className="flex gap-6 text-rose-200/70 text-sm font-medium mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-white transition-colors">Community</a>
          <a href="#" className="hover:text-white transition-colors">Contact</a>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 mt-10 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center text-rose-200/40 text-sm gap-4">
        <p>&copy; {new Date().getFullYear()} IEEE SIGHT. All rights reserved.</p>
        <p>Built for Sustainable Impact</p>
      </div>
    </footer>
  );
}