import { BrowserRouter as Router } from 'react-router-dom';
import Layout from './components/Layout';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import Features from './components/Features';
import StrategyExamples from './components/StrategyExamples';
import Security from './components/Security';

function App() {
  return (
    <Router>
      <Layout>
        <Hero />
        <SocialProof />
        <Features />
        <StrategyExamples />
        <Security />
      </Layout>
    </Router>
  );
}

export default App;
