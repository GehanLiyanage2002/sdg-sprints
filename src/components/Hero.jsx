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
        <div className="absolute inset-0 bg-white/90 dark:bg-[#24050b]/80 backdrop-blur-[2px]"></div>
        
        {/* Ambient Background Glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-rose-200/50 dark:bg-red-600/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen"></div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* INCREASED COMPONENT WIDTH: Changed max-w-4xl to max-w-6xl for a wider, modern layout */}
        <div className="max-w-6xl mx-auto text-center flex flex-col items-center">
          
          {/* Organization Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs sm:text-sm font-medium text-slate-700 dark:text-rose-100/80 mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></span>
            Powered by IEEE Sri Lanka Section SIGHT
          </div>

          {/* Online Event Badge */}
          {/* ... */}

          {/* Main Title */}
          {/* Adjusted gap and leading to balance the wider text */}
          <h1 className="text-[4rem] sm:text-6xl md:text-8xl lg:text-[9rem] font-black mb-6 sm:mb-8 leading-none flex flex-col md:flex-row items-center justify-center gap-2 sm:gap-4 md:gap-5 w-full">
            {/* Added tracking-widest to SDG to match SPRINTS */}
            <span className="text-slate-900 dark:text-white drop-shadow-sm tracking-widest">SDG</span>
            
            {/* FIXES APPLIED HERE:
              1. 'tracking-widest' adds the modern, wide letter spacing.
              2. 'pr-4 pb-4 pt-2' prevents the browser from cropping the edges of the gradient. 
            */}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-rose-700 dark:from-rose-300 dark:via-pink-400 dark:to-red-400 tracking-widest pr-4 pb-4 pt-2">
              SPRINTS
            </span>
          </h1>
          
          {/* Small, Punchy Description - Increased width to max-w-3xl */}
          <p className="text-lg md:text-xl lg:text-2xl text-slate-600 dark:text-rose-100/70 max-w-3xl mx-auto mb-12 leading-relaxed font-medium">
            Ideate, design, and deploy practical humanitarian technology projects aligned with the UN Sustainable Development Goals from anywhere in the world.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full sm:w-auto">
            <Link to="/goals" className="group w-full sm:w-auto px-10 py-4 rounded-full bg-slate-900 dark:bg-white/10 text-white font-bold text-lg hover:bg-rose-600 dark:hover:bg-white/20 dark:border dark:border-white/20 transition-all duration-300 cursor-pointer text-center flex items-center justify-center gap-2 shadow-xl hover:shadow-rose-500/20">
              Explore Goals
              <span className="group-hover:translate-x-1 transition-transform duration-300">&rarr;</span>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}