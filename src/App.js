import React from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import "./Styles/index.scss"
import Header from './Components/Header';
import Home from './Components/Home';

function App() {
  return (
    <Router>
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  </Router>  );
}

export default App;
