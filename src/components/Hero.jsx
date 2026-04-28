import { Link } from 'react-router-dom';
import bgVideo from '../assets/hero-bg.mp4';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden flex items-center min-h-[90vh]">
      
      {/* Background Video Wrapper */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={bgVideo} type="video/mp4" />
        </video>
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-[#3a0a14]/80 backdrop-blur-[2px]"></div>
        
        {/* Ambient Background Glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-600/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen"></div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* INCREASED COMPONENT WIDTH: Changed max-w-4xl to max-w-6xl for a wider, modern layout */}
        <div className="max-w-6xl mx-auto text-center flex flex-col items-center">
          
          {/* Organization Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-xs sm:text-sm font-medium text-rose-200 mb-6 backdrop-blur-md shadow-lg">
            <span className="w-2 h-2 rounded-full bg-rose-400 animate-pulse"></span>
            Powered by IEEE Sri Lanka Section SIGHT
          </div>

          {/* Online Event Badge */}
          {/* <div className="inline-flex items-center gap-2 mb-6 px-5 py-2 rounded-xl bg-gradient-to-r from-rose-500/20 to-pink-500/20 border border-rose-400/30 backdrop-blur-md shadow-[0_0_20px_rgba(244,63,94,0.2)]">
            <svg className="w-4 h-4 text-rose-300" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
            </svg>
            <span className="text-rose-200 font-bold tracking-widest text-xs sm:text-sm uppercase">
              100% Online Global Challenge
            </span>
          </div> */}

          {/* Main Title */}
          {/* Adjusted gap and leading to balance the wider text */}
          <h1 className="text-6xl md:text-8xl lg:text-[9rem] font-black mb-8 leading-none flex flex-col md:flex-row items-center justify-center gap-4 md:gap-5 w-full">
            {/* Added tracking-tight to SDG to contrast with the wide SPRINTS */}
            <span className="text-white drop-shadow-2xl tracking-tight">SDG</span>
            
            {/* FIXES APPLIED HERE:
              1. 'tracking-widest' adds the modern, wide letter spacing.
              2. 'pr-4 pb-4 pt-2' prevents the browser from cropping the edges of the gradient. 
            */}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-300 via-pink-400 to-red-400 tracking-widest pr-4 pb-4 pt-2">
              SPRINTS
            </span>
          </h1>
          
          {/* Small, Punchy Description - Increased width to max-w-3xl */}
          <p className="text-lg md:text-xl lg:text-2xl text-rose-100/90 max-w-3xl mx-auto mb-12 leading-relaxed font-medium">
            Ideate, design, and deploy practical humanitarian technology projects aligned with the UN Sustainable Development Goals from anywhere in the world.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full sm:w-auto">
            {/* <button className="w-full sm:w-auto px-10 py-4 rounded-full bg-gradient-to-r from-rose-100 to-pink-200 text-[#3a0a14] font-black text-lg hover:shadow-[0_0_30px_rgba(254,205,211,0.6)] hover:-translate-y-1 hover:scale-105 transition-all duration-300 cursor-pointer">
              Claim Your Spot
            </button> */}
            <Link to="/goals" className="group w-full sm:w-auto px-10 py-4 rounded-full bg-black/40 border border-white/20 text-white font-bold text-lg hover:bg-white/20 backdrop-blur-md transition-all duration-300 cursor-pointer text-center flex items-center justify-center gap-2">
              Explore Goals
              <span className="group-hover:translate-x-1 transition-transform duration-300 text-rose-300">&rarr;</span>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}