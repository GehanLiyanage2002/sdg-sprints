import { useState, useEffect } from 'react';
import { problems } from '../data/problems';

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

// REPLACE THIS URL with your deployed Google Apps Script Web App URL
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbww1D_GGiC5B8zVLeXs8zwZQHgpVHhzMqFJimF6BC62kmtXMcqEX3Vrp9lgNe_vn4YEew/exec"; 

const initialFormData = {
  teamName: '',
  teamLeaderEmail: '',
  school: '',
  teamLeaderName: '',
  teamLeaderPhone: '',
  ieeeMembership: 'No',
  ieeeMembershipNumber: '',
  problemsSelected: [],
  numMembers: 1,
  members: [],
  agreePrinciples: false,
  agreeCode: false,
  agreeCommitment: false
};

export default function RegisterPage() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isUnlocked, setIsUnlocked] = useState(true); // Temporarily unlocked
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const [formData, setFormData] = useState(initialFormData);
  const [searchTerm, setSearchTerm] = useState('');
  const [isMobileInfoOpen, setIsMobileInfoOpen] = useState(false);

  useEffect(() => {
    const targetDate = new Date('2026-09-09T00:00:00+05:30').getTime();

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

    updateTimer(); 
    const timer = setInterval(updateTimer, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleMemberChange = (index, field, value) => {
    const newMembers = [...formData.members];
    newMembers[index][field] = value;
    setFormData(prev => ({ ...prev, members: newMembers }));
  };

  const addMember = () => {
    if (formData.members.length < 5) {
      setFormData(prev => ({
        ...prev,
        members: [...prev.members, { name: '', email: '', phone: '', ieeeNumber: '' }],
        numMembers: prev.members.length + 2
      }));
    }
  };

  const removeMember = (index) => {
    setFormData(prev => {
      const newMembers = prev.members.filter((_, i) => i !== index);
      return {
        ...prev,
        members: newMembers,
        numMembers: newMembers.length + 1
      };
    });
  };

  const handleProblemToggle = (code) => {
    setFormData(prev => {
      const selected = prev.problemsSelected.includes(code)
        ? prev.problemsSelected.filter(p => p !== code)
        : [...prev.problemsSelected, code];
      return { ...prev, problemsSelected: selected };
    });
  };

  const handleReset = () => {
    if(window.confirm("Are you sure you want to clear the entire form?")) {
      setFormData(initialFormData);
      setSubmitError('');
      setSearchTerm('');
    }
  };

  const validatePhone = (phone) => {
    return /^\+?[0-9\s\-\(\)]{9,15}$/.test(phone);
  };

  const validateEmail = (email) => {
    return /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Custom Validation
    if (formData.problemsSelected.length === 0) {
      setSubmitError('Please select at least one problem from the pool.');
      document.getElementById('problem-pool-section')?.scrollIntoView({ behavior: 'smooth' });
      return;
    }
    if (!validateEmail(formData.teamLeaderEmail)) {
      setSubmitError('Please enter a valid Team Leader Email Address.');
      return;
    }
    if (!validatePhone(formData.teamLeaderPhone)) {
      setSubmitError('Please enter a valid Team Leader Contact Number (e.g. +94771234567).');
      return;
    }
    
    for (let i = 0; i < formData.members.length; i++) {
      const member = formData.members[i];
      if (!validateEmail(member.email)) {
        setSubmitError(`Please enter a valid Email Address for Member ${i + 2}.`);
        return;
      }
      if (!validatePhone(member.phone)) {
        setSubmitError(`Please enter a valid Contact Number for Member ${i + 2}.`);
        return;
      }
    }

    setIsSubmitting(true);
    setSubmitError('');

    try {
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify(formData)
      });

      const result = await response.json();
      
      if (result.status === 'success') {
        setSubmitSuccess(true);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setSubmitError(result.message || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setSubmitError('Failed to submit the form. Please check your internet connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const filteredProblems = problems.filter(p => 
    p.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    p.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.sdg.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="pt-28 pb-16 min-h-screen relative bg-slate-50/50 dark:bg-[#0f0205]">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-rose-500/10 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen"></div>
        <div className="absolute bottom-[20%] left-[-10%] w-[800px] h-[800px] bg-pink-500/5 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen"></div>
      </div>

      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center animate-fade-in-down">
        <span className="inline-block px-4 py-1.5 rounded-full bg-white dark:bg-rose-900/30 text-rose-600 dark:text-rose-300 font-bold text-sm tracking-widest uppercase mb-4 shadow-sm border border-slate-200 dark:border-rose-800/50">
          SDG Solutions Challenge
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white tracking-tight drop-shadow-sm mb-4">
          Team <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-pink-500">Registration</span>
        </h1>
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
          Join the national humanitarian technology initiative. Build solutions, create impact, and contribute to the UN SDGs.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col lg:flex-row gap-8 lg:gap-10">
        
        {/* Left Column: Professional Information Panel */}
        <div className="w-full lg:w-4/12 flex flex-col gap-6">
          <div className="bg-white dark:bg-[#1a0408] border border-slate-200 dark:border-white/10 rounded-3xl p-8 shadow-xl lg:sticky lg:top-32">
            
            <div className="flex items-center justify-between mb-4 lg:mb-6 pb-4 lg:pb-6 border-b border-slate-100 dark:border-white/5">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-rose-100 dark:bg-rose-900/30 rounded-2xl flex items-center justify-center text-rose-600 shrink-0">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-xl font-bold text-slate-900 dark:text-white leading-tight">Challenge Overview</h2>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">Organized by IEEE SIGHT</p>
                </div>
              </div>
              <button 
                onClick={() => setIsMobileInfoOpen(!isMobileInfoOpen)}
                className="lg:hidden p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-white/5 rounded-full transition-colors"
              >
                <svg className={`w-5 h-5 transition-transform duration-300 ${isMobileInfoOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>

            <div className={`space-y-8 overflow-hidden transition-all duration-300 ${isMobileInfoOpen ? 'max-h-[1000px] opacity-100 mt-4' : 'max-h-0 opacity-0 lg:max-h-[1000px] lg:opacity-100 lg:mt-0'}`}>
              {/* Timeline / Deadlines */}
              <div className="bg-slate-50 dark:bg-white/5 rounded-2xl p-5 border border-slate-100 dark:border-white/5">
                <div className="flex items-start gap-3">
                  <div className="mt-1">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-rose-500"></span>
                    </span>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">Registration Closes</p>
                    <p className="text-lg font-black text-slate-900 dark:text-white">30th September 2026</p>
                  </div>
                </div>
              </div>

              {/* Guidelines list */}
              <div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                  <svg className="w-4 h-4 text-rose-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                  Eligibility
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
                    <svg className="w-5 h-5 text-emerald-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    <span>Teams of <strong>1 to 6 members</strong>.</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
                    <svg className="w-5 h-5 text-emerald-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    <span>University undergraduates & students (15+).</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
                    <svg className="w-5 h-5 text-emerald-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    <span>IEEE membership is <strong>not required</strong>.</span>
                  </li>
                </ul>
              </div>

              {/* Perks */}
              <div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                  <svg className="w-4 h-4 text-rose-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
                  What You Gain
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-slate-50 dark:bg-white/5 p-3 rounded-xl border border-slate-100 dark:border-white/5 text-center">
                    <span className="block text-2xl mb-1">💰</span>
                    <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">Cash Prizes</span>
                  </div>
                  <div className="bg-slate-50 dark:bg-white/5 p-3 rounded-xl border border-slate-100 dark:border-white/5 text-center">
                    <span className="block text-2xl mb-1">💡</span>
                    <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">Expert Mentoring</span>
                  </div>
                  <div className="bg-slate-50 dark:bg-white/5 p-3 rounded-xl border border-slate-100 dark:border-white/5 text-center">
                    <span className="block text-2xl mb-1">🌱</span>
                    <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">Funding Support</span>
                  </div>
                  <div className="bg-slate-50 dark:bg-white/5 p-3 rounded-xl border border-slate-100 dark:border-white/5 text-center">
                    <span className="block text-2xl mb-1">🤝</span>
                    <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">Networking</span>
                  </div>
                </div>
              </div>

              {/* Contact */}
              <div className="pt-6 border-t border-slate-100 dark:border-white/5">
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-widest font-bold">Need Help?</p>
                <p className="text-sm text-slate-900 dark:text-white font-semibold">Mr. Chandima Jayawardena</p>
                <p className="text-xs text-slate-600 dark:text-slate-400 mb-1">Project Chairperson</p>
                <a href="tel:0750361340" className="inline-flex items-center gap-2 text-rose-600 dark:text-rose-400 font-bold hover:text-rose-700 text-sm transition-colors">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  075 0361340
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: The Form */}
        <div className="w-full lg:w-8/12">
          {isUnlocked ? (
            submitSuccess ? (
              <div className="bg-white dark:bg-[#1a0408] border border-green-200 dark:border-green-900/50 rounded-3xl p-10 sm:p-16 shadow-2xl text-center animate-fade-in">
                <div className="w-24 h-24 bg-green-100 dark:bg-green-900/40 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner ring-8 ring-green-50 dark:ring-green-900/20">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <h3 className="text-3xl md:text-4xl font-black text-slate-800 dark:text-white mb-4 tracking-tight">Application Received!</h3>
                <p className="text-lg text-slate-600 dark:text-slate-300 max-w-md mx-auto mb-8 leading-relaxed">
                  Thank you for registering for the SDG Solutions Challenge 2026. A confirmation email with your onboarding details will be sent to the team leader shortly.
                </p>
                <button onClick={() => window.location.reload()} className="px-8 py-3 bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-700 dark:text-white font-bold rounded-xl transition-colors">
                  Submit Another Team
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 text-left animate-fade-in relative">
                
                {/* 1. Team Basics */}
                <div className="bg-white dark:bg-[#1a0408] border border-slate-200 dark:border-white/10 rounded-3xl p-5 sm:p-8 lg:p-10 shadow-lg shadow-slate-200/50 dark:shadow-none transition-all hover:shadow-xl">
                  <div className="flex items-center gap-4 mb-6 border-b border-slate-100 dark:border-white/5 pb-4">
                    <div className="w-10 h-10 rounded-full bg-rose-100 dark:bg-rose-900/40 text-rose-600 dark:text-rose-400 flex items-center justify-center font-bold text-lg">1</div>
                    <h3 className="text-2xl font-bold text-slate-800 dark:text-white">Team Setup</h3>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="col-span-1 md:col-span-2">
                      <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Team Name *</label>
                      <input required type="text" name="teamName" value={formData.teamName} onChange={handleChange} className="w-full px-5 py-3.5 rounded-xl bg-slate-50 dark:bg-black/50 border border-slate-200 dark:border-white/10 focus:bg-white focus:ring-2 focus:ring-rose-500/50 focus:border-rose-500 outline-none dark:text-white transition-all shadow-sm placeholder:text-slate-400" placeholder="Enter a creative team name" />
                    </div>
                    <div className="col-span-1 md:col-span-2">
                      <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">School / University *</label>
                      <input required type="text" name="school" value={formData.school} onChange={handleChange} className="w-full px-5 py-3.5 rounded-xl bg-slate-50 dark:bg-black/50 border border-slate-200 dark:border-white/10 focus:bg-white focus:ring-2 focus:ring-rose-500/50 focus:border-rose-500 outline-none dark:text-white transition-all shadow-sm placeholder:text-slate-400" placeholder="Your educational institution" />
                    </div>
                  </div>
                </div>

                {/* 2. Team Leader */}
                <div className="bg-white dark:bg-[#1a0408] border border-slate-200 dark:border-white/10 rounded-3xl p-5 sm:p-8 lg:p-10 shadow-lg shadow-slate-200/50 dark:shadow-none transition-all hover:shadow-xl">
                  <div className="flex items-center gap-4 mb-6 border-b border-slate-100 dark:border-white/5 pb-4">
                    <div className="w-10 h-10 rounded-full bg-rose-100 dark:bg-rose-900/40 text-rose-600 dark:text-rose-400 flex items-center justify-center font-bold text-lg">2</div>
                    <h3 className="text-2xl font-bold text-slate-800 dark:text-white">Team Leader</h3>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="col-span-1 md:col-span-2">
                      <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Full Name *</label>
                      <input required type="text" name="teamLeaderName" value={formData.teamLeaderName} onChange={handleChange} className="w-full px-5 py-3.5 rounded-xl bg-slate-50 dark:bg-black/50 border border-slate-200 dark:border-white/10 focus:bg-white focus:ring-2 focus:ring-rose-500/50 focus:border-rose-500 outline-none dark:text-white transition-all shadow-sm placeholder:text-slate-400" placeholder="Primary contact person" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Email Address *</label>
                      <input required type="email" name="teamLeaderEmail" value={formData.teamLeaderEmail} onChange={handleChange} className="w-full px-5 py-3.5 rounded-xl bg-slate-50 dark:bg-black/50 border border-slate-200 dark:border-white/10 focus:bg-white focus:ring-2 focus:ring-rose-500/50 focus:border-rose-500 outline-none dark:text-white transition-all shadow-sm placeholder:text-slate-400" placeholder="leader@example.com" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Contact Number *</label>
                      <input required type="tel" name="teamLeaderPhone" value={formData.teamLeaderPhone} onChange={handleChange} className="w-full px-5 py-3.5 rounded-xl bg-slate-50 dark:bg-black/50 border border-slate-200 dark:border-white/10 focus:bg-white focus:ring-2 focus:ring-rose-500/50 focus:border-rose-500 outline-none dark:text-white transition-all shadow-sm placeholder:text-slate-400" placeholder="+94 7X XXX XXXX" />
                    </div>
                    
                    <div className="col-span-1 md:col-span-2 bg-slate-50/50 dark:bg-white/5 p-5 rounded-2xl border border-slate-100 dark:border-white/5">
                      <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">Are you an IEEE Member?</label>
                      <div className="flex gap-8 mb-4">
                        <label className="flex items-center gap-3 cursor-pointer group">
                          <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${formData.ieeeMembership === 'Yes' ? 'border-rose-500 bg-rose-500' : 'border-slate-300 dark:border-slate-600 group-hover:border-rose-400'}`}>
                            {formData.ieeeMembership === 'Yes' && <div className="w-2 h-2 bg-white rounded-full"></div>}
                          </div>
                          <input type="radio" name="ieeeMembership" value="Yes" checked={formData.ieeeMembership === 'Yes'} onChange={handleChange} className="hidden" /> 
                          <span className="text-slate-700 dark:text-slate-200 font-medium">Yes</span>
                        </label>
                        <label className="flex items-center gap-3 cursor-pointer group">
                          <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${formData.ieeeMembership === 'No' ? 'border-slate-500 bg-slate-500' : 'border-slate-300 dark:border-slate-600 group-hover:border-slate-400'}`}>
                            {formData.ieeeMembership === 'No' && <div className="w-2 h-2 bg-white rounded-full"></div>}
                          </div>
                          <input type="radio" name="ieeeMembership" value="No" checked={formData.ieeeMembership === 'No'} onChange={handleChange} className="hidden" /> 
                          <span className="text-slate-700 dark:text-slate-200 font-medium">No</span>
                        </label>
                      </div>
                      
                      {formData.ieeeMembership === 'Yes' && (
                        <div className="animate-fade-in-down mt-4 pt-4 border-t border-slate-200 dark:border-white/10">
                          <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">IEEE Membership Number *</label>
                          <input required type="text" name="ieeeMembershipNumber" value={formData.ieeeMembershipNumber} onChange={handleChange} className="w-full md:w-1/2 px-5 py-3 rounded-xl bg-white dark:bg-black/50 border border-slate-200 dark:border-white/10 focus:ring-2 focus:ring-rose-500/50 outline-none dark:text-white transition-all shadow-sm" placeholder="Enter your 8-digit number" />
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* 3. Additional Members */}
                <div className="bg-white dark:bg-[#1a0408] border border-slate-200 dark:border-white/10 rounded-3xl p-5 sm:p-8 lg:p-10 shadow-lg shadow-slate-200/50 dark:shadow-none transition-all hover:shadow-xl">
                  <div className="flex items-center justify-between gap-4 mb-6 border-b border-slate-100 dark:border-white/5 pb-4">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-rose-100 dark:bg-rose-900/40 text-rose-600 dark:text-rose-400 flex items-center justify-center font-bold text-lg">3</div>
                      <div>
                        <h3 className="text-2xl font-bold text-slate-800 dark:text-white">Team Members</h3>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{formData.members.length} / 5 additional members added</p>
                      </div>
                    </div>
                    {formData.members.length < 5 && (
                      <button 
                        type="button" 
                        onClick={addMember}
                        className="flex items-center gap-2 text-sm font-bold text-rose-600 bg-rose-50 dark:bg-rose-900/20 hover:bg-rose-100 dark:hover:bg-rose-900/40 px-4 py-2 rounded-lg transition-colors border border-rose-100 dark:border-rose-800/30"
                      >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" /></svg>
                        Add Member
                      </button>
                    )}
                  </div>

                  <div className="space-y-6">
                    {formData.members.length === 0 && (
                      <div className="text-center py-8 bg-slate-50 dark:bg-white/5 rounded-2xl border border-dashed border-slate-300 dark:border-white/20">
                        <p className="text-slate-500 dark:text-slate-400 text-sm">No additional members added. Teams can have up to 6 members total.</p>
                      </div>
                    )}

                    {formData.members.map((member, index) => (
                      <div key={index} className="relative p-6 border border-slate-200 dark:border-white/10 rounded-2xl bg-white dark:bg-black/20 space-y-5 animate-fade-in-down shadow-sm">
                        
                        <div className="flex justify-between items-center mb-2">
                          <h4 className="font-bold text-rose-600 dark:text-rose-400 flex items-center gap-2">
                            <span className="w-6 h-6 rounded bg-rose-100 dark:bg-rose-900/50 flex items-center justify-center text-xs">{index + 2}</span>
                            Member {index + 2}
                          </h4>
                          <button 
                            type="button" 
                            onClick={() => removeMember(index)}
                            className="text-slate-400 hover:text-red-500 transition-colors p-1"
                            title="Remove member"
                          >
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                          </button>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                          <div className="col-span-1 md:col-span-2">
                            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Full Name *</label>
                            <input required type="text" value={member.name} onChange={(e) => handleMemberChange(index, 'name', e.target.value)} className="w-full px-4 py-2.5 text-sm rounded-lg bg-slate-50 dark:bg-black/50 border border-slate-200 dark:border-white/10 focus:ring-2 focus:ring-rose-500/50 outline-none dark:text-white transition-all placeholder:text-slate-400" placeholder="Full name" />
                          </div>
                          <div>
                            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Email Address *</label>
                            <input required type="email" value={member.email} onChange={(e) => handleMemberChange(index, 'email', e.target.value)} className="w-full px-4 py-2.5 text-sm rounded-lg bg-slate-50 dark:bg-black/50 border border-slate-200 dark:border-white/10 focus:ring-2 focus:ring-rose-500/50 outline-none dark:text-white transition-all placeholder:text-slate-400" placeholder="email@example.com" />
                          </div>
                          <div>
                            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Contact Number *</label>
                            <input required type="tel" value={member.phone} onChange={(e) => handleMemberChange(index, 'phone', e.target.value)} className="w-full px-4 py-2.5 text-sm rounded-lg bg-slate-50 dark:bg-black/50 border border-slate-200 dark:border-white/10 focus:ring-2 focus:ring-rose-500/50 outline-none dark:text-white transition-all placeholder:text-slate-400" placeholder="+94 7X XXX XXXX" />
                          </div>
                          <div className="col-span-1 md:col-span-2 pt-2 border-t border-slate-100 dark:border-white/5">
                            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">IEEE Membership Number <span className="text-slate-400 font-normal">(Optional)</span></label>
                            <input type="text" value={member.ieeeNumber} onChange={(e) => handleMemberChange(index, 'ieeeNumber', e.target.value)} className="w-full md:w-1/2 px-4 py-2.5 text-sm rounded-lg bg-slate-50 dark:bg-black/50 border border-slate-200 dark:border-white/10 focus:ring-2 focus:ring-rose-500/50 outline-none dark:text-white transition-all placeholder:text-slate-400" placeholder="Leave blank if none" />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 4. Problem Pool */}
                <div id="problem-pool-section" className="bg-white dark:bg-[#1a0408] border border-slate-200 dark:border-white/10 rounded-3xl p-5 sm:p-8 lg:p-10 shadow-lg shadow-slate-200/50 dark:shadow-none transition-all hover:shadow-xl scroll-mt-32">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="w-10 h-10 rounded-full bg-rose-100 dark:bg-rose-900/40 text-rose-600 dark:text-rose-400 flex items-center justify-center font-bold text-lg">4</div>
                    <h3 className="text-2xl font-bold text-slate-800 dark:text-white">Problem Pool</h3>
                  </div>
                  
                  <p className="text-sm text-slate-600 dark:text-rose-100/70 mb-6 font-medium pl-14">
                    Select one or more problems your team intends to address.
                  </p>

                  <div className="relative mb-4 pl-0 sm:pl-14">
                    <div className="absolute inset-y-0 left-0 sm:left-14 pl-3 flex items-center pointer-events-none">
                      <svg className="w-5 h-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </div>
                    <input 
                      type="text" 
                      placeholder="Search problems by title or SDG..." 
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50 dark:bg-black/50 border border-slate-200 dark:border-white/10 focus:ring-2 focus:ring-rose-500/50 outline-none dark:text-white text-sm transition-all"
                    />
                  </div>
                  
                  <div className="pl-0 sm:pl-14">
                    <div className="h-[400px] overflow-y-auto border border-slate-200 dark:border-white/10 rounded-2xl bg-slate-50 dark:bg-black/30 p-2 sm:p-4 space-y-3 shadow-inner custom-scrollbar">
                      
                      {formData.problemsSelected.length > 0 && searchTerm === '' && (
                        <div className="mb-4 pb-4 border-b border-slate-200 dark:border-white/10">
                          <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3 px-2">Selected ({formData.problemsSelected.length})</p>
                          <div className="space-y-2">
                            {problems.filter(p => formData.problemsSelected.includes(p.code)).map((problem) => (
                              <label key={`sel-${problem.code}`} className="flex items-start gap-4 p-3 bg-white dark:bg-white/10 rounded-xl cursor-pointer border border-rose-200 dark:border-rose-900/50 shadow-sm transition-all">
                                <input 
                                  type="checkbox" 
                                  checked={true}
                                  onChange={() => handleProblemToggle(problem.code)}
                                  className="mt-0.5 w-5 h-5 text-rose-600 bg-white border-slate-300 rounded focus:ring-rose-500 focus:ring-2 cursor-pointer" 
                                />
                                <div className="dark:text-white text-sm flex-1">
                                  <span className="font-bold text-rose-600 dark:text-rose-400 mr-2 bg-rose-50 dark:bg-rose-900/30 px-2 py-0.5 rounded text-xs border border-rose-100 dark:border-rose-800/50">[{problem.code}]</span>
                                  <span className="font-semibold">{problem.title}</span> 
                                  <span className="text-slate-500 dark:text-slate-400 text-xs ml-2">({problem.sdg})</span>
                                </div>
                              </label>
                            ))}
                          </div>
                        </div>
                      )}

                      <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 px-2 mt-2">
                        {searchTerm ? 'Search Results' : 'Available Problems'}
                      </p>

                      {filteredProblems.filter(p => !formData.problemsSelected.includes(p.code)).map((problem) => (
                        <label key={problem.code} className="flex items-start gap-4 p-3 hover:bg-white dark:hover:bg-white/10 rounded-xl cursor-pointer transition-all border border-transparent hover:border-slate-200 dark:hover:border-white/5 hover:shadow-sm">
                          <input 
                            type="checkbox" 
                            checked={false}
                            onChange={() => handleProblemToggle(problem.code)}
                            className="mt-0.5 w-5 h-5 text-rose-600 bg-white border-slate-300 rounded focus:ring-rose-500 focus:ring-2 cursor-pointer transition-all" 
                          />
                          <div className="dark:text-white text-sm flex-1">
                            <span className="font-bold text-slate-700 dark:text-slate-300 mr-2 bg-slate-200 dark:bg-white/10 px-2 py-0.5 rounded text-xs">[{problem.code}]</span>
                            <span className="font-semibold text-slate-800 dark:text-slate-200">{problem.title}</span> 
                            <span className="text-slate-500 dark:text-slate-400 text-xs ml-2">({problem.sdg})</span>
                          </div>
                        </label>
                      ))}

                      {filteredProblems.length === 0 && (
                        <div className="text-center py-12 text-slate-500">
                          <svg className="w-12 h-12 mx-auto text-slate-300 dark:text-slate-600 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                          No problems found matching "{searchTerm}"
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* 5. Declarations */}
                <div className="bg-white dark:bg-[#1a0408] border border-slate-200 dark:border-white/10 rounded-3xl p-5 sm:p-8 lg:p-10 shadow-lg shadow-slate-200/50 dark:shadow-none transition-all hover:shadow-xl">
                  <div className="flex items-center gap-4 mb-6 border-b border-slate-100 dark:border-white/5 pb-4">
                    <div className="w-10 h-10 rounded-full bg-rose-100 dark:bg-rose-900/40 text-rose-600 dark:text-rose-400 flex items-center justify-center font-bold text-lg">5</div>
                    <h3 className="text-2xl font-bold text-slate-800 dark:text-white">Declarations</h3>
                  </div>
                  
                  <div className="pl-0 sm:pl-14 space-y-4">
                    <label className={`flex items-start gap-4 cursor-pointer p-5 rounded-2xl border transition-all ${formData.agreePrinciples ? 'bg-rose-50/50 dark:bg-rose-900/10 border-rose-200 dark:border-rose-900/50' : 'bg-slate-50 dark:bg-black/30 border-slate-200 dark:border-white/10 hover:border-rose-300'}`}>
                      <input required type="checkbox" name="agreePrinciples" checked={formData.agreePrinciples} onChange={handleChange} className="mt-1 w-5 h-5 text-rose-600 rounded focus:ring-rose-500 cursor-pointer" />
                      <span className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                        <strong className="block text-slate-900 dark:text-white mb-1">IEEE Humanitarian Technology Principles *</strong>
                        We acknowledge that we have read and agree to adhere to the <a href="https://ieeeht.org/wp-content/uploads/2025/04/IEEE-Humanitarian-Technology-Principles-white-paper.pdf" target="_blank" rel="noopener noreferrer" className="text-rose-600 hover:underline font-bold">IEEE Humanitarian Technology Principles</a>, ensuring our project remains ethical, community-centered, and sustainable.
                      </span>
                    </label>

                    <label className={`flex items-start gap-4 cursor-pointer p-5 rounded-2xl border transition-all ${formData.agreeCode ? 'bg-rose-50/50 dark:bg-rose-900/10 border-rose-200 dark:border-rose-900/50' : 'bg-slate-50 dark:bg-black/30 border-slate-200 dark:border-white/10 hover:border-rose-300'}`}>
                      <input required type="checkbox" name="agreeCode" checked={formData.agreeCode} onChange={handleChange} className="mt-1 w-5 h-5 text-rose-600 rounded focus:ring-rose-500 cursor-pointer" />
                      <span className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                        <strong className="block text-slate-900 dark:text-white mb-1">Code of Conduct Agreement *</strong>
                        We agree to uphold professionalism, respect, and inclusivity throughout the program, in line with IEEE’s <a href="https://www.ieee.org/about/corporate/governance/p7-8" target="_blank" rel="noopener noreferrer" className="text-rose-600 hover:underline font-bold">Code of Ethics</a>.
                      </span>
                    </label>

                    <label className={`flex items-start gap-4 cursor-pointer p-5 rounded-2xl border transition-all ${formData.agreeCommitment ? 'bg-rose-50/50 dark:bg-rose-900/10 border-rose-200 dark:border-rose-900/50' : 'bg-slate-50 dark:bg-black/30 border-slate-200 dark:border-white/10 hover:border-rose-300'}`}>
                      <input required type="checkbox" name="agreeCommitment" checked={formData.agreeCommitment} onChange={handleChange} className="mt-1 w-5 h-5 text-rose-600 rounded focus:ring-rose-500 cursor-pointer" />
                      <span className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                        <strong className="block text-slate-900 dark:text-white mb-1">Commitment *</strong>
                        We understand that at least one team representative must attend orientation sessions, workshops, and mentoring meetings.
                      </span>
                    </label>
                  </div>
                </div>

                {/* Error Banner */}
                {submitError && (
                  <div className="p-5 bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300 text-sm font-bold rounded-2xl border border-red-200 dark:border-red-900/50 flex items-center gap-4 animate-fade-in-down shadow-sm">
                    <div className="w-10 h-10 bg-red-100 dark:bg-red-900/50 rounded-full flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    </div>
                    {submitError}
                  </div>
                )}

                {/* Submit Area */}
                <div className="relative sm:sticky sm:bottom-6 z-20 bg-white/80 dark:bg-[#1a0408]/90 backdrop-blur-md p-5 sm:p-6 rounded-3xl border border-slate-200 dark:border-white/10 shadow-2xl flex flex-col sm:flex-row gap-4 items-center justify-between mt-4">
                  <button
                    type="button"
                    onClick={handleReset}
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-6 py-3.5 text-sm font-bold text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 transition-all rounded-xl disabled:opacity-50"
                  >
                    Reset Form
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-4 text-base font-bold text-white transition-all duration-300 bg-gradient-to-r from-rose-500 to-rose-700 hover:from-rose-600 hover:to-rose-800 rounded-xl shadow-lg shadow-rose-500/30 hover:shadow-rose-500/50 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-600 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Submitting Application...
                      </>
                    ) : (
                      <>
                        Submit Registration
                        <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                      </>
                    )}
                  </button>
                </div>

              </form>
            )
          ) : (
            <div className="bg-white dark:bg-[#1a0408] border border-slate-200 dark:border-white/10 rounded-3xl flex flex-col items-center justify-center text-center p-12 sm:p-24 shadow-xl">
              <div className="w-24 h-24 mb-8 rounded-full bg-rose-100 dark:bg-rose-900/30 flex items-center justify-center mx-auto shadow-inner">
                <svg className="w-12 h-12 text-rose-600 dark:text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-6">
                Registration Locked
              </h3>
              <p className="text-slate-600 dark:text-rose-100/70 text-lg md:text-xl mb-12 max-w-lg mx-auto leading-relaxed">
                The registration portal will automatically unlock when the countdown ends on <strong className="text-rose-600 dark:text-rose-400 whitespace-nowrap">September 9 at 12:00 AM</strong>.
              </p>
              <div className="flex gap-4 sm:gap-8 justify-center">
                <TimerBlock value={timeLeft.days} label="Days" />
                <TimerBlock value={timeLeft.hours} label="Hours" />
                <TimerBlock value={timeLeft.minutes} label="Mins" />
                <TimerBlock value={timeLeft.seconds} label="Secs" />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
