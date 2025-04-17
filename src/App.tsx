import * as React from "react";
import { useEffect } from 'react'
import { useLocation } from "react-router-dom";
import './App.css';
import PortfolioComponent from '../src/components/Portfolio'
import './styles/main.scss'
import { initGA, trackPageview } from './ga'

function App() {
  const location = useLocation();

  useEffect(() => {
    initGA();
  }, []);

  useEffect(() => {
    trackPageview(location.pathname);
  }, [location]);

  return (
    <div className="app-portfolio-root">
      <React.Suspense
        fallback={
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <div className="spinner"></div>
          </div>
        }
      >
        <PortfolioComponent />
      </React.Suspense>
    </div>
  );
}

export default App;
