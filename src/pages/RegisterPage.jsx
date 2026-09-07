export default function RegisterPage() {
  return (
    <div className="pt-32 pb-12 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6 tracking-tight drop-shadow-lg">
          Registration for <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-rose-700 dark:from-rose-300 dark:to-pink-500">SDG Sprint 2026</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-600 dark:text-rose-100/70 max-w-3xl mx-auto">
          Please fill out the form below to register your team for the upcoming SDG Sprint 2026.
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl p-4 sm:p-8 shadow-xl min-h-[600px] flex items-center justify-center">
          {/* Google Form Placeholder */}
          <div className="text-center">
            <svg className="w-16 h-16 text-rose-500 mx-auto mb-4 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-2">Google Form will be placed here</h3>
            <p className="text-slate-500 dark:text-rose-100/60">Once provided, the form will be embedded in this space.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
