import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import Features from './components/Features';
import StrategyExamples from './components/StrategyExamples';
import Security from './components/Security';
import LegalPage from './components/LegalPage';

const LandingPage = () => (
  <>
    <Hero />
    <SocialProof />
    <Features />
    <StrategyExamples />
    <Security />
  </>
);

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/terms" element={<LegalPage type="terms" />} />
          <Route path="/privacy" element={<LegalPage type="privacy" />} />
          <Route path="/risk-disclaimer" element={<LegalPage type="risk" />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
