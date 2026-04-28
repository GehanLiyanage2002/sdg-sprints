import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/HomePage';
import GoalsPage from './pages/GoalsPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-[#3a0a14] to-neutral-950 flex flex-col font-sans selection:bg-rose-500/30">
        <Header />
        
        {/* Main Content Area */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/goals" element={<GoalsPage />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;