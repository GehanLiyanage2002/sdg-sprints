import React from 'react';
import handbookPdf from '../assets/SDG Solutions Challenge 2026 Handbook.docx.pdf';

export default function GuidelinesPage() {
  const documents = [
    {
      id: 1,
      title: 'Project Proposal Template',
      description: 'The official template for submitting your initial SDG humanitarian technology project idea. Includes sections for problem statement, proposed solution, and target UN SDGs.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      type: 'DOCX',
      size: '24 KB',
      available: false
    },
    {
      id: 2,
      title: 'SDG Solutions Challenge 2026 – Official Contestant Handbook & Guidelines',
      description: 'Comprehensive guide covering eligibility criteria, evaluation rubrics, submission deadlines, and code of conduct for all participating teams.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      type: 'PDF',
      size: '1.2 MB',
      available: true,
      href: handbookPdf
    },
    {
      id: 3,
      title: 'Final Presentation Pitch Deck',
      description: 'A recommended slide deck structure for your final pitch to the judges. Helps you effectively communicate your solution\'s impact, feasibility, and technology stack.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
        </svg>
      ),
      type: 'PPTX',
      size: '5.4 MB',
      available: false
    }
  ];

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Page Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-sm font-bold tracking-widest text-rose-600 dark:text-rose-400 uppercase mb-4">
            Resources
          </h1>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6 tracking-tight drop-shadow-lg">
            Guidelines & <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-rose-700 dark:from-rose-300 dark:to-pink-500">Templates</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-600 dark:text-rose-100/70 max-w-3xl mx-auto">
            Download all the necessary documents, forms, and templates required to structure your ideas and prepare your final submissions.
          </p>
        </div>

        {/* Info Alert */}
        <div className="max-w-4xl mx-auto mb-12 bg-rose-50 dark:bg-rose-900/20 border border-rose-200 dark:border-rose-500/30 rounded-2xl p-6 flex items-start gap-4 animate-fade-in">
          <div className="p-2 bg-rose-100 dark:bg-rose-500/20 rounded-full text-rose-600 dark:text-rose-400 shrink-0">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <h3 className="font-bold text-slate-900 dark:text-white mb-1">Documents in Development</h3>
            <p className="text-slate-600 dark:text-rose-100/80 text-sm leading-relaxed">
              The official guidelines and templates are currently being finalized by the organizing committee. They will be available for download on this page shortly before the problem pool unlocks.
            </p>
          </div>
        </div>

        {/* Documents Grid */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {documents.map((doc) => (
            <div 
              key={doc.id}
              className="bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-3xl p-8 flex flex-col justify-between hover:shadow-xl hover:border-rose-300 dark:hover:border-rose-500/50 transition-all duration-300 group"
            >
              <div>
                <div className="w-14 h-14 bg-slate-100 dark:bg-white/10 rounded-2xl flex items-center justify-center text-rose-600 dark:text-rose-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                  {doc.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                  {doc.title}
                </h3>
                <p className="text-slate-600 dark:text-rose-100/70 text-sm leading-relaxed mb-6">
                  {doc.description}
                </p>
              </div>
              
              <div className="mt-auto">
                <div className="flex items-center justify-between text-xs font-bold text-slate-400 dark:text-white/40 uppercase tracking-wider mb-4 px-1">
                  <span>{doc.type}</span>
                  <span>{doc.size}</span>
                </div>
                
                {doc.available ? (
                  <a href={doc.href} download className="w-full py-3.5 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold hover:bg-rose-600 dark:hover:bg-rose-500 hover:text-white transition-colors flex items-center justify-center gap-2">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Download File
                  </a>
                ) : (
                  <button disabled className="w-full py-3.5 rounded-xl bg-slate-100 dark:bg-white/5 text-slate-400 dark:text-white/30 font-bold border border-slate-200 dark:border-white/5 flex items-center justify-center gap-2 cursor-not-allowed">
                    <svg className="w-5 h-5 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    Coming Soon
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
}
