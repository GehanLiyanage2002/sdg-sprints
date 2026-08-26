import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import bgVideo from '../assets/hero-bg.mp4';

export default function Hero() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isUnlocked, setIsUnlocked] = useState(false);

  useEffect(() => {
    // Target Date: September 5, 2026 at 00:00:00 Sri Lanka Time
    const targetDate = new Date('2026-09-05T00:00:00+05:30').getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) {
        setIsUnlocked(true);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    };

    updateTimer(); // Initial call
    const timer = setInterval(updateTimer, 1000);

    return () => clearInterval(timer);
  }, []);

  const TimerBlock = ({ value, label }) => (
    <div className="flex flex-col items-center justify-center bg-white/50 dark:bg-black/30 backdrop-blur-md border border-slate-200 dark:border-white/10 rounded-xl w-16 h-16 sm:w-20 sm:h-20 shadow-inner">
      <span className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tabular-nums">
        {value.toString().padStart(2, '0')}
      </span>
      <span className="text-[10px] sm:text-xs font-bold text-slate-500 dark:text-rose-100/60 uppercase tracking-widest mt-1">
        {label}
      </span>
    </div>
  );

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
        <div className="max-w-6xl mx-auto text-center flex flex-col items-center">
          
          {/* Organization Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs sm:text-sm font-medium text-slate-700 dark:text-rose-100/80 mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></span>
            Powered by IEEE Sri Lanka Section SIGHT
          </div>

          {/* Main Title */}
          <h1 className="text-[4rem] sm:text-6xl md:text-8xl lg:text-[9rem] font-black mb-6 sm:mb-8 leading-none flex flex-col md:flex-row items-center justify-center gap-2 sm:gap-4 md:gap-5 w-full">
            <span className="text-slate-900 dark:text-white drop-shadow-sm tracking-widest">SDG</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-rose-700 dark:from-rose-300 dark:via-pink-400 dark:to-red-400 tracking-widest pr-4 pb-4 pt-2">
              SPRINTS
            </span>
          </h1>
          
          {/* Small, Punchy Description */}
          <p className="text-lg md:text-xl lg:text-2xl text-slate-600 dark:text-rose-100/70 max-w-3xl mx-auto mb-10 leading-relaxed font-medium">
            Ideate, design, and deploy practical humanitarian technology projects aligned with the UN Sustainable Development Goals from anywhere in the world.
          </p>

          {/* Countdown Timer Section */}
          <div className="mb-10 flex flex-col items-center">
            {!isUnlocked ? (
              <div className="flex flex-col items-center animate-fade-in">
                <div className="text-sm font-bold text-rose-600 dark:text-rose-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  Problem Pool unlocks in
                </div>
                <div className="flex gap-3 sm:gap-4">
                  <TimerBlock value={timeLeft.days} label="Days" />
                  <TimerBlock value={timeLeft.hours} label="Hours" />
                  <TimerBlock value={timeLeft.minutes} label="Mins" />
                  <TimerBlock value={timeLeft.seconds} label="Secs" />
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center animate-fade-in">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100/80 dark:bg-emerald-900/40 border border-emerald-300 dark:border-emerald-500/30 text-emerald-700 dark:text-emerald-400 text-sm font-bold tracking-widest uppercase shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  Problem Pool is Open!
                </div>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 w-full sm:w-auto">
            {/* Outline Button: Explore Goals */}
            <Link to="/about" className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/50 dark:bg-white/5 backdrop-blur-sm border border-slate-300 dark:border-white/10 text-slate-900 dark:text-white font-bold text-lg hover:bg-slate-100 dark:hover:bg-white/10 transition-all duration-300 text-center">
              About Sprints
            </Link>

            {/* Primary Button: Problem Pool (Locked/Unlocked) */}
            {isUnlocked ? (
              <Link to="/goals" className="group w-full sm:w-auto px-10 py-4 rounded-full bg-gradient-to-r from-rose-500 to-rose-700 hover:from-rose-600 hover:to-rose-800 text-white font-bold text-lg transition-all duration-300 cursor-pointer text-center flex items-center justify-center gap-2 shadow-xl hover:shadow-rose-500/40 transform hover:-translate-y-1">
                Access Problem Pool
                <span className="group-hover:translate-x-1 transition-transform duration-300">&rarr;</span>
              </Link>
            ) : (
              <button disabled className="group w-full sm:w-auto px-10 py-4 rounded-full bg-slate-200 dark:bg-white/5 border border-slate-300 dark:border-white/10 text-slate-400 dark:text-white/30 font-bold text-lg cursor-not-allowed text-center flex items-center justify-center gap-2 transition-all duration-300">
                <svg className="w-5 h-5 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                Access Problem Pool
              </button>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}