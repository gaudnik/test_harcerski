import React from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import "./Styles/index.scss"
import Header from './Components/Header';
import Home from './Components/Home';
import DoATest from './Components/DoATest';
import StepOne from './Components/StepOne';
import StepTwo from './Components/StepTwo';
import StepThree from './Components/StepThree';
import TestRules from   './Components/TestRules';


function App() {
  return (
    <Router>
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wykonajtest" element={<DoATest/>}/>
        <Route path="/krokpierwszy/:firstName/:lastName" element={<StepOne/>}/>
        <Route path="/krokdrugi/:firstName/:lastName" element={<StepTwo/>}/>
        <Route path="/kroktrzeci/:firstName/:lastName" element={<StepThree/>}/>
        <Route path="/zasady" element={<TestRules/>}/>
      </Routes>
    </div>
  </Router>  );
}

export default App;