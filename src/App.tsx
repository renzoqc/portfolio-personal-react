import * as React from "react";
import './App.css';
import PortfolioComponent from '../src/components/Portfolio'
import './styles/main.scss'

function App() {
  return (
    <div className="app-portfolio-root">
        <React.Suspense fallback="Loading...">
            <PortfolioComponent/>
        </React.Suspense>
    </div>
  );
}

export default App;
