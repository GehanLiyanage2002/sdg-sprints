import Goals from '../components/Goals';

export default function GoalsPage() {
  return (
    <div className="pt-32 pb-12 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6 tracking-tight drop-shadow-lg">
          Sustainable Development Goals (SDGs): <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-rose-700 dark:from-rose-300 dark:to-pink-500">Key Challenges in Sri Lanka</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-600 dark:text-rose-100/70 max-w-3xl mx-auto">
          Explore the specific, pressing challenges within each SDG that demand innovative humanitarian technology solutions in Sri Lanka.
        </p>
      </div>
      <Goals />
    </div>
  );
}