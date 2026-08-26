import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/HomePage';
import GoalsPage from './pages/GoalsPage';
import AboutPage from './pages/AboutPage';
import CommitteePage from './pages/CommitteePage';
import AmbassadorsPage from './pages/AmbassadorsPage';
import ProgramPage from './pages/ProgramPage';
import PastSessionsPage from './pages/PastSessionsPage';
function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-50 dark:bg-[#24050b] text-slate-900 dark:text-white flex flex-col font-sans selection:bg-rose-200">
        <Header />
        
        <main className="relative z-10 flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/goals" element={<GoalsPage />} />
            <Route path="/committee" element={<CommitteePage />} />
            <Route path="/ambassadors" element={<AmbassadorsPage />} />
            <Route path="/program" element={<ProgramPage />} />
            <Route path="/past-sessions" element={<PastSessionsPage />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;