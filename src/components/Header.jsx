import { useState } from 'react';
import { Link } from 'react-router-dom';
import sdgLogo from '../assets/sdg-sprints.png'; // Make sure your path is correct

export default function Header() {
  // State to manage whether the mobile menu is open or closed
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Helper function to close the menu when a link is clicked
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="fixed w-full top-0 z-50 border-b border-white/10 bg-[#3a0a14]/70 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo Area */}
        <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity" onClick={closeMobileMenu}>
          <img
            src={sdgLogo}
            alt="SDG Sprints Logo"
            className="h-12 w-auto object-contain drop-shadow-[0_0_10px_rgba(239,68,68,0.3)]"
          />
          <span className="font-bold text-xl tracking-tight text-white hidden sm:block">
            SDG Sprints 2026
          </span>
        </Link>

        {/* Desktop Navigation - Hidden on Mobile */}
        <nav className="hidden md:flex gap-8 text-sm font-medium text-rose-200/70">
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <Link to="/about" className="hover:text-white transition-colors">About</Link>
          <Link to="/goals" className="hover:text-white transition-colors">The Goals</Link>
          <Link to="/committee" className="hover:text-white transition-colors">Committee</Link>
          <Link to="/ambassadors" className="hover:text-white transition-colors">Ambassadors</Link>
          <Link to="/program" className="hover:text-white transition-colors">Program</Link>
        </nav>

        {/* Right Side Actions (Button + Mobile Toggle) */}
        <div className="flex items-center gap-4">
          {/* CTA Button - Hidden on very small screens to save space, put inside mobile menu instead */}
          <button className="hidden sm:block px-5 py-2.5 rounded-full bg-rose-200 text-[#3a0a14] font-bold text-sm hover:bg-white transition-all cursor-pointer shadow-[0_0_15px_rgba(255,228,230,0.3)]">
            Register Now
          </button>

          {/* Hamburger Menu Icon (Mobile Only) */}
          <button 
            className="md:hidden text-rose-200 hover:text-white transition-colors p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {/* Simple SVG Hamburger / Close Icon */}
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                // "X" Close icon when menu is open
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                // Hamburger lines when menu is closed
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-[#3a0a14] border-b border-white/10 shadow-2xl backdrop-blur-xl animate-fade-in-down">
          <nav className="flex flex-col px-6 py-6 gap-4 text-base font-medium text-rose-200/90">
            <Link to="/" onClick={closeMobileMenu} className="hover:text-white transition-colors block py-2 border-b border-white/5">Home</Link>
            <Link to="/about" onClick={closeMobileMenu} className="hover:text-white transition-colors block py-2 border-b border-white/5">About</Link>
            <Link to="/goals" onClick={closeMobileMenu} className="hover:text-white transition-colors block py-2 border-b border-white/5">The Goals</Link>
            <Link to="/committee" onClick={closeMobileMenu} className="hover:text-white transition-colors block py-2 border-b border-white/5">Committee</Link>
            <Link to="/ambassadors" onClick={closeMobileMenu} className="hover:text-white transition-colors block py-2 border-b border-white/5">Ambassadors</Link>
            <Link to="/program" onClick={closeMobileMenu} className="hover:text-white transition-colors block py-2 border-b border-white/5">Program</Link>
            
            {/* Mobile Register Button */}
            <button className="mt-4 sm:hidden w-full px-5 py-3 rounded-xl bg-rose-200 text-[#3a0a14] font-bold text-center hover:bg-white transition-all shadow-lg">
              Register Now
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}