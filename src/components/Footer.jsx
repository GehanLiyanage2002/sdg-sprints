import { Link } from 'react-router-dom';
import sdgLogo from '../assets/SDG.png';
import ieeeSightLogo from '../assets/sight-sl-logo.png'; 

export default function Footer() {
  return (
    <footer className="bg-white border-t border-neutral-200 pt-16 pb-8 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-12">
          
          {/* Brand & Mission */}
          <div className="md:col-span-5 lg:col-span-4 flex flex-col items-center md:items-start text-center md:text-left">
            <img src={sdgLogo} alt="SDG Sprints Logo" className="h-16 md:h-20 w-auto object-contain mb-6" />
            <p className="text-neutral-500 text-sm leading-relaxed mb-8 max-w-sm">
              Empowering innovators to design practical, technology-driven solutions for real-world humanitarian challenges aligned with the UN Sustainable Development Goals.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <span className="text-neutral-400 text-xs font-bold uppercase tracking-widest">Powered By</span>
              <img src={ieeeSightLogo} alt="IEEE SIGHT" className="h-7 w-auto object-contain" />
            </div>
          </div>

          <div className="md:col-span-1 lg:col-span-2 hidden lg:block"></div>

          {/* Quick Links */}
          <div className="md:col-span-3 lg:col-span-3 flex flex-col items-center md:items-start">
            <h4 className="text-neutral-900 font-bold mb-6 uppercase text-sm tracking-wider">Explore</h4>
            <div className="flex flex-col gap-3 text-neutral-500 text-sm">
              <Link to="/" className="hover:text-rose-600 transition-colors">Home</Link>
              <Link to="/about" className="hover:text-rose-600 transition-colors">About the Initiative</Link>
              <Link to="/goals" className="hover:text-rose-600 transition-colors">The SDGs</Link>
              <Link to="/program" className="hover:text-rose-600 transition-colors">Program Structure</Link>
              <Link to="/guidelines" className="hover:text-rose-600 transition-colors">Guidelines & Templates</Link>
              
            </div>
          </div>

          {/* Get Involved */}
          <div className="md:col-span-3 lg:col-span-3 flex flex-col items-center md:items-start">
            <h4 className="text-neutral-900 font-bold mb-6 uppercase text-sm tracking-wider">Connect</h4>
            <div className="flex flex-col gap-3 text-neutral-500 text-sm">
              <Link to="/committee" className="hover:text-rose-600 transition-colors">Organizing Committee</Link>
              <Link to="/ambassadors" className="hover:text-rose-600 transition-colors">Ambassadors</Link>
              <Link to="/past-sessions" className="hover:text-rose-600 transition-colors">Past Sessions</Link>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-neutral-100 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-neutral-400">
          <p>&copy; {new Date().getFullYear()} IEEE SIGHT Sri Lanka Section. All rights reserved.</p>
          <div className="flex gap-4">
            <span className="hover:text-neutral-900 transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hover:text-neutral-900 transition-colors cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}