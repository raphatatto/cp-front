import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './assets/pages/Home';
import About from './assets/pages/About';
import './styles/App.css';  // Importando o arquivo CSS


const App: React.FC = () => {
  return (
    <Router>
      <div id="root">
        <div className="container">
          <div className="sidebar">
            <Header />
          </div>
          <div className="content">
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
              </Routes>
            </main>
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;