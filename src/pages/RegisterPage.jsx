import { useState, useRef } from 'react';

const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbww1D_GGiC5B8zVLeXs8zwZQHgpVHhzMqFJimF6BC62kmtXMcqEX3Vrp9lgNe_vn4YEew/exec"; 

const ALLOWED_EMAILS = [
  "hhadithya34@gmail.com",
  "varun.sada2004@gmail.com",
  "22fis0511@ms.sab.as.lk",
  "azkym555@gmail.com",
  "sulekadissanayake2003@gmail.com",
  "dileepamalshan638@gmail.com",
  "savinduperera70@gmail.com",
  "dury.20250399@iit.ac.lk",
  "sahilkavishka428@gmail.com",
  "sanithi94125@gmail.com",
  "tkathuskan@gmail.com",
  "yasmine.elhorry@ieee.com",
  "samnihasnath@gmail.com",
  "mathuthev6@gmail.com",
  "nisalsankalana321@gmail.com",
  "thavarish369@gmail.com",
  "thamarujalthotage1@gmail.com",
  "kathirsan066@gmail.com",
  "niranganayanajith195@gmail.com",
  "niroshamadumali37@gmail.com",
  "mohanuvaram123@gmail.com",
  "praveenstudy823@gmail.com",
  "sachindunethminweerasinghe@gmail.com",
  "shanaya.shanu004@gmail.com",
  "nhmhasara@gmail.com",
  "tharuhellocool@gmail.com",
  "dilukshan.mailing@gmail.com",
  "thushinithushini5@gmail.com",
  "thamelsamith@gmail.com",
  "meththakalu@gmail.com",
  "dasununimail@gmail.com",
  "sadeepahearth@gmail.com",
  "hasenalbanna123@gmail.com",
  "kajanika955@gmail.com",
  "prasadinibuddhika20@gmail.com",
  "inusha.thathsara@gmail.com",
  "Kanishkashanuk01@gmail.com",
  "chathuminivishmi@gmail.com",
  "kmogith1@gmail.com",
  "dilshanprathapaarachchi@gmail.com",
  "bahardeenayas8@gmail.com",
  "chathu9998@gmail.com",
  "sanindutalwatte9@gmail.com",
  "nisindurupasinghe@gmail.com",
  "sahankiridena17@gmail.com",
  "piravahinym@gmail.com",
  "navomalshamusic@gmail.com",
  "sankhakuruppu@gmail.com",
  "ushanchathushka2002@gmail.com",
  "prasadhipanduwawala@gmail.com",
  "malshaweerasinghe2003@gmail.com",
  "vishwarathnayake@outlook.com",
  "dhanukadilsara@gmail.com",
  "mayooriekanthan12@gmail.com"
];

export default function RegisterPage() {
  const formRef = useRef(null);
  const [file, setFile] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const [isValidEmail, setIsValidEmail] = useState(false);

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const toBase64 = (fileObj) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(fileObj);
    reader.onload = () => {
      let encoded = reader.result.toString().replace(/^data:(.*,)?/, '');
      if ((encoded.length % 4) > 0) {
        encoded += '='.repeat(4 - (encoded.length % 4));
      }
      resolve(encoded);
    };
    reader.onerror = error => reject(error);
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError('');

    const formData = new FormData(formRef.current);
    const emailValue = formData.get('email');

    if (!emailValue) {
      setSubmitError('Please enter your email address.');
      return;
    }

    const trimmedEmail = emailValue.toString().trim().toLowerCase();

    if (!ALLOWED_EMAILS.map(em => em.toLowerCase()).includes(trimmedEmail)) {
      setSubmitError('Unauthorized: Only registered team leader emails are allowed to submit the validation template.');
      return;
    }

    if (!file) {
      setSubmitError('Please select a file to upload.');
      return;
    }

    setIsSubmitting(true);
    try {
      const base64Data = await toBase64(file);
      
      const payload = {
        fileName: file.name,
        mimeType: file.type,
        base64: base64Data
      };

      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify(payload)
      });

      const result = await response.json();
      
      if (result.status === 'success') {
        setSubmitSuccess(true);
      } else {
        setSubmitError(result.message || 'Upload failed. Please try again.');
      }
    } catch (err) {
      setSubmitError('Failed to submit. Please check your internet connection.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Validation handlers removed to simplify rendering

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
          Problem <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-pink-500">Validation</span>
        </h1>
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
          Submit your team's problem validation report template. Only registered team leaders are allowed to submit.
        </p>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {submitSuccess ? (
          <div className="bg-white dark:bg-[#1a0408] border border-green-200 dark:border-green-900/50 rounded-3xl p-10 sm:p-16 shadow-2xl text-center animate-fade-in">
            <div className="w-24 h-24 bg-green-100 dark:bg-green-900/40 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner ring-8 ring-green-50 dark:ring-green-900/20">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
            </div>
            <h3 className="text-3xl md:text-4xl font-black text-slate-800 dark:text-white mb-4 tracking-tight">Upload Successful!</h3>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-md mx-auto mb-8 leading-relaxed">
              Your problem validation report has been securely uploaded to our repository. Thank you.
            </p>
            <button 
              onClick={() => { 
                setSubmitSuccess(false); 
                setFile(null); 
                setIsValidEmail(false);
                if(formRef.current) formRef.current.reset();
              }} 
              className="px-8 py-3 bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-700 dark:text-white font-bold rounded-xl transition-colors"
            >
              Submit Another Report
            </button>
          </div>
        ) : (
          <div className="bg-white dark:bg-[#1a0408] border border-slate-200 dark:border-white/10 rounded-3xl p-6 sm:p-10 shadow-xl">
            <div className="bg-rose-50 dark:bg-rose-900/20 border border-rose-200 dark:border-rose-900/50 rounded-2xl p-4 mb-8">
              <h3 className="text-sm font-bold text-rose-800 dark:text-rose-300 mb-2 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                Important Notice
              </h3>
              <p className="text-sm text-rose-700 dark:text-rose-400">
                Team registration has successfully concluded. This portal is strictly for registered team leaders to submit their Problem Validation Template. Please use the exact email address you used during registration.
              </p>
            </div>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Team Leader Email Address *</label>
                <div className="relative">
                  <input 
                    id="email"
                    name="email"
                    required 
                    type="text" 
                    onChange={(e) => {
                      const val = e.target.value;
                      const isMatch = ALLOWED_EMAILS.map(em => em.toLowerCase()).includes(val.trim().toLowerCase());
                      setIsValidEmail(isMatch);
                    }}
                    className={`w-full pl-5 pr-12 py-3.5 rounded-xl bg-slate-50 dark:bg-black/50 border ${isValidEmail ? 'border-emerald-500 focus:border-emerald-500 focus:ring-emerald-500/50' : 'border-slate-200 dark:border-white/10 focus:border-rose-500 focus:ring-rose-500/50'} focus:bg-white focus:ring-2 outline-none dark:text-white transition-all shadow-sm placeholder:text-slate-400 font-sans`} 
                    placeholder="leader@example.com" 
                  />
                  {isValidEmail && (
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 text-emerald-500 animate-fade-in flex items-center gap-1">
                      <span className="text-xs font-bold uppercase tracking-wider hidden sm:inline-block mr-1">Verified</span>
                      <svg className="w-6 h-6 drop-shadow-sm" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                    </div>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Upload Validation Template *</label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-slate-300 dark:border-white/20 border-dashed rounded-xl hover:border-rose-400 dark:hover:border-rose-500 transition-colors bg-slate-50 dark:bg-black/30 relative">
                  <div className="space-y-1 text-center relative z-10">
                    <svg className="mx-auto h-12 w-12 text-slate-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                      <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <div className="flex justify-center text-sm text-slate-600 dark:text-slate-400 mt-2">
                      <label htmlFor="file-upload" className="relative cursor-pointer bg-transparent rounded-md font-medium text-rose-600 dark:text-rose-400 hover:text-rose-500 focus-within:outline-none">
                        <span>Upload a file</span>
                        <input id="file-upload" name="file-upload" type="file" className="sr-only" onChange={handleFileChange} accept=".pdf,.doc,.docx,.ppt,.pptx" required />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-slate-500">
                      PDF, DOCX up to 10MB
                    </p>
                  </div>
                </div>
                {file && (
                  <p className="mt-2 text-sm text-emerald-600 dark:text-emerald-400 font-medium break-all">
                    Selected: {file.name}
                  </p>
                )}
              </div>

              {submitError && (
                <div className="p-4 bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300 text-sm font-bold rounded-xl border border-red-200 dark:border-red-900/50 flex items-start gap-3">
                  <svg className="w-5 h-5 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  <span className="break-words">{submitError}</span>
                </div>
              )}

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full py-4 px-6 rounded-xl text-white font-bold text-lg bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-500 hover:to-pink-500 focus:ring-4 focus:ring-rose-500/30 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                    Uploading...
                  </>
                ) : (
                  <>
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" /></svg>
                    Submit Validation Report
                  </>
                )}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
