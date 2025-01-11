import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import LandingPage from './components/LandingPage';
import './App.css';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        
      
        <Route path='/' element={<LandingPage/>} />
    
      </Routes>
    </BrowserRouter>
  );
}

export default App;