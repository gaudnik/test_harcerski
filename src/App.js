import React from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import "./Styles/index.scss"
import Header from './Components/Header';
import Home from './Components/Home';
import DoATest from './Components/DoATest';
import StepOne from './Components/StepOne';
import StepTwo from './Components/StepTwo';
import Thanks from './Components/Thanks';
import TestRules from './Components/TestRules';
import Rodo from './Components/RODO';
import HowItWorks from './Components/HowItWorks';
import DonationComponent from './Components/DonationComponent';
import AboutUs from './Components/AboutUs';
import InviteToTest from './Components/InviteToTest';
import ThanksForDonation from './Components/ThanksForDonation';
import SentInvitations from './Components/SentInvitations';

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
        <Route path="/dziekujemy/:firstName/:lastName" element={<Thanks/>}/>
        <Route path="/zasady" element={<TestRules/>}/>
        <Route path="/rodo" element={<Rodo/>}/>
        <Route path="/jaktodziala" element={<HowItWorks/>}/>
        <Route path="/wesprzyjnas" element={<DonationComponent/>}/>
        <Route path= "/dziekujemyzawsparcie" element={<ThanksForDonation/>}/>
        <Route path="/onas" element={<AboutUs/>}/>
        <Route path="/zaprosdotestu" element={<InviteToTest/>}/>
        <Route path='/gotowe' element={<SentInvitations/>}/>
      </Routes>
    </div>
  </Router>  );
}

export default App;