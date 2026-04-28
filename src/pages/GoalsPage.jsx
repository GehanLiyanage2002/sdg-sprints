import Goals from '../components/Goals';

export default function GoalsPage() {
  return (
    <div className="pt-32 pb-12 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
        <h1 className="text-sm font-bold tracking-widest text-rose-400 uppercase mb-3">
          Challenge Tracks
        </h1>
        <p className="text-rose-100/70 max-w-2xl mx-auto">
          Explore the 17 Sustainable Development Goals to find the focus area for your humanitarian technology project.
        </p>
      </div>
      <Goals />
    </div>
  );
}