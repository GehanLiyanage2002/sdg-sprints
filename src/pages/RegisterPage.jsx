export default function RegisterPage() {
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
        <div className="bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl p-8 sm:p-12 shadow-xl flex flex-col items-center justify-center text-center">
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
        </div>
      </div>
    </div>
  );
}
