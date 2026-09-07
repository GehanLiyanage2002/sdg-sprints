import { useState } from 'react';
import { Link } from 'react-router-dom';
import sdgLogo from '../assets/SDG.png'; // Make sure your path is correct

export default function Header() {
  // State to manage whether the mobile menu is open or closed
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Helper function to close the menu when a link is clicked
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  // State to manage dark mode
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return document.documentElement.classList.contains('dark');
  });

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    if (newMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <header className="fixed w-full top-0 z-50 border-b border-black/10 bg-white/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo Area */}
        <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity" onClick={closeMobileMenu}>
          <img
            src={sdgLogo}
            alt="SDG Sprints Logo"
            className="h-16 md:h-20 w-auto object-contain py-2"
          />
        </Link>

        {/* Desktop Navigation - Hidden on Mobile */}
        <nav className="hidden md:flex gap-8 text-sm font-medium text-neutral-600">
          <Link to="/" className="hover:text-rose-600 transition-colors">Home</Link>
          <Link to="/about" className="hover:text-rose-600 transition-colors">About</Link>
          <Link to="/goals" className="hover:text-rose-600 transition-colors">The Goals</Link>
          <Link to="/committee" className="hover:text-rose-600 transition-colors">Committee</Link>
          <Link to="/ambassadors" className="hover:text-rose-600 transition-colors">Ambassadors</Link>
          <Link to="/program" className="hover:text-rose-600 transition-colors">Program</Link>
          <Link to="/past-sessions" className="hover:text-rose-600 transition-colors">Past Sessions</Link>
          <Link to="/guidelines" className="hover:text-rose-600 transition-colors">Guidelines</Link>
          
        </nav>

        {/* Right Side Actions (Button + Mobile Toggle) */}
        <div className="flex items-center gap-4">
          {/* Dark Mode Toggle */}
          <button 
            onClick={toggleDarkMode} 
            className="p-2 rounded-full hover:bg-slate-100 text-neutral-600 transition-colors"
            aria-label="Toggle Dark Mode"
          >
            {isDarkMode ? (
              // Sun icon for Light Mode
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              // Moon icon for Dark Mode
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>

          {/* CTA Button - Hidden on very small screens to save space, put inside mobile menu instead */}
          <Link to="/register" className="hidden sm:block px-5 py-2.5 rounded-full bg-rose-600 text-white font-bold text-sm hover:bg-rose-700 transition-all shadow-md">
            Register Now
          </Link>

          {/* Hamburger Menu Icon (Mobile Only) */}
          <button 
            className="md:hidden text-neutral-600 hover:text-rose-600 transition-colors p-2"
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
        <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-black/10 shadow-2xl backdrop-blur-3xl animate-fade-in-down h-screen max-h-[calc(100vh-5rem)] overflow-y-auto">
          <nav className="flex flex-col px-6 py-6 gap-4 text-base font-medium text-neutral-600">
            <Link to="/" onClick={closeMobileMenu} className="hover:text-rose-600 transition-colors block py-3 border-b border-neutral-100">Home</Link>
            <Link to="/about" onClick={closeMobileMenu} className="hover:text-rose-600 transition-colors block py-3 border-b border-neutral-100">About</Link>
            <Link to="/goals" onClick={closeMobileMenu} className="hover:text-rose-600 transition-colors block py-3 border-b border-neutral-100">The Goals</Link>
            <Link to="/committee" onClick={closeMobileMenu} className="hover:text-rose-600 transition-colors block py-3 border-b border-neutral-100">Committee</Link>
            <Link to="/ambassadors" onClick={closeMobileMenu} className="hover:text-rose-600 transition-colors block py-3 border-b border-neutral-100">Ambassadors</Link>
            <Link to="/program" onClick={closeMobileMenu} className="hover:text-rose-600 transition-colors block py-3 border-b border-neutral-100">Program</Link>
            <Link to="/past-sessions" onClick={closeMobileMenu} className="hover:text-rose-600 transition-colors block py-3 border-b border-neutral-100">Past Sessions</Link>
            <Link to="/guidelines" onClick={closeMobileMenu} className="hover:text-rose-600 transition-colors block py-3 border-b border-neutral-100">Guidelines</Link>
            
            
            {/* Mobile Register Button */}
            <Link to="/register" onClick={closeMobileMenu} className="mt-4 sm:hidden w-full px-5 py-3.5 rounded-xl bg-rose-600 text-white font-bold text-center hover:bg-rose-700 transition-all shadow-md block">
              Register Now
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}