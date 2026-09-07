import { useState, useEffect } from 'react';

const TimerBlock = ({ value, label }) => (
  <div className="flex flex-col items-center justify-center bg-slate-50 dark:bg-black/30 backdrop-blur-md border border-slate-200 dark:border-white/10 rounded-xl w-16 h-16 sm:w-20 sm:h-20 shadow-inner">
    <span className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tabular-nums">
      {value.toString().padStart(2, '0')}
    </span>
    <span className="text-[10px] sm:text-xs font-bold text-slate-500 dark:text-rose-100/60 uppercase tracking-widest mt-1">
      {label}
    </span>
  </div>
);

export default function RegisterPage() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isUnlocked, setIsUnlocked] = useState(false);

  useEffect(() => {
    // Target Date: September 8, 2026 at 00:00:00 Sri Lanka Time
    const targetDate = new Date('2026-09-08T00:00:00+05:30').getTime();

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

  return (
    <div className="pt-32 pb-12 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6 tracking-tight drop-shadow-lg">
          Registration for <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-rose-700 dark:from-rose-300 dark:to-pink-500">SDG Sprint 2026</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-600 dark:text-rose-100/70 max-w-3xl mx-auto">
          Please click the link below to register your team for the upcoming SDG Sprint 2026.
        </p>
      </div>

      <div className="max-w-2xl mx-auto px-6">
        <div className="bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl p-8 sm:p-12 shadow-xl flex flex-col items-center justify-center text-center min-h-[400px]">
          {isUnlocked ? (
            <>
              <svg className="w-16 h-16 text-rose-500 mb-6 opacity-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">Ready to Join?</h3>
              <p className="text-slate-600 dark:text-rose-100/70 mb-8">
                Click the button below to open the registration form securely in a new tab.
              </p>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSeOMKTpOH0vQ7HY980kj_Fm8O4ObFdO7vEK2iu5wOvhrNwp0w/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-200 bg-rose-600 border border-transparent rounded-full shadow-sm hover:bg-rose-700 hover:shadow-md hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-600"
              >
                Open Registration Form
              </a>
            </>
          ) : (
            <>
              <div className="w-20 h-20 mb-6 rounded-full bg-rose-100 dark:bg-rose-900/30 flex items-center justify-center mx-auto">
                <svg className="w-10 h-10 text-rose-600 dark:text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4">
                Registration Opens Soon
              </h3>
              <p className="text-slate-600 dark:text-rose-100/70 text-lg mb-8 max-w-lg mx-auto">
                Registration will be unlocked when the countdown ends on September 8 at 12:00 AM.
              </p>
              <div className="flex gap-3 sm:gap-4 justify-center">
                <TimerBlock value={timeLeft.days} label="Days" />
                <TimerBlock value={timeLeft.hours} label="Hours" />
                <TimerBlock value={timeLeft.minutes} label="Mins" />
                <TimerBlock value={timeLeft.seconds} label="Secs" />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
