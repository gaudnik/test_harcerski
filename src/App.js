import React from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import "./Styles/index.scss"
import Header from './Components/Header';
import Home from './Components/Home';
import DoATest from './Components/DoATest';
import StepOne from './Components/StepOne';

function App() {
  return (
    <Router>
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wykonajtest" element={<DoATest/>}/>
        <Route path="/krokpierwszy/:firstName/:lastName" element={<StepOne/>}/>

      </Routes>
    </div>
  </Router>  );
}

export default App;