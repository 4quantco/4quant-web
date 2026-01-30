import { BrowserRouter as Router } from 'react-router-dom';
import Layout from './components/Layout';
import Hero from './components/Hero';
import Features from './components/Features';
import SocialProof from './components/SocialProof';

function App() {
  return (
    <Router>
      <Layout>
        <Hero />
        <Features />
        <SocialProof />
      </Layout>
    </Router>
  );
}

export default App;
