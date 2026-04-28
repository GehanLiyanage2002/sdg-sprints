import sdgLogo from '../assets/sdg-sprints.png';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="fixed w-full top-0 z-50 border-b border-white/10 bg-[#3a0a14]/70 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo Area - Now links back to home */}
        <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <img 
            src={sdgLogo} 
            alt="SDG Sprints Logo" 
            className="h-12 w-auto object-contain drop-shadow-[0_0_10px_rgba(239,68,68,0.3)]" 
          />
          <span className="font-bold text-xl tracking-tight text-white hidden sm:block">
            SDG Sprints 2026
          </span>
        </Link>

        {/* Navigation - Updated with Links */}
        <nav className="hidden md:flex gap-8 text-sm font-medium text-rose-200/70">
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <Link to="/goals" className="hover:text-white transition-colors">The Goals</Link>
          <a href="#" className="hover:text-white transition-colors">Guidelines</a>
        </nav>

        {/* CTA Button */}
        <button className="px-5 py-2.5 rounded-full bg-rose-200 text-[#3a0a14] font-bold text-sm hover:bg-white transition-all cursor-pointer shadow-[0_0_15px_rgba(255,228,230,0.3)]">
          Register Now
        </button>
      </div>
    </header>
  );
}