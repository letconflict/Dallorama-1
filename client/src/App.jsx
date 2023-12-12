import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import { logo } from './assets';
import { Home, CreatePost } from './page';
import HomePage from './page/Homepage';
import Navigation from './components/HomePage/Navigation';
import Banner from './components/HomePage/Banner';
import Footerx from './components/Footer';

const App = () => (
  <BrowserRouter>
  <Banner/>
    <header className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
      <Link to="/">
        <img src="https://img.playbook.com/zZe6cgFh4bELht8xE1_LY_Kth2cuBgdyZRX6CHNJNLQ/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2Y4MzVhOWJi/LTk4MDUtNDIwMi1i/ZDI2LWMzODQyMzI4/MjkyNQ" />
      </Link>
      <Navigation/>
    </header>
   
    <main className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Community" element={<Home />} />
        <Route path="/Dallorama" element={<CreatePost />} />
      </Routes>
    </main>
    <Footerx/>
  </BrowserRouter>
);

export default App;
