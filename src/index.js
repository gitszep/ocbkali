import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Recovery from './routes/RecoveryPage'
import CloudPage from './routes/CloudPage'
import ContactPage from './routes/ContactPage'
import KontaktPage from './routes/KontaktPage';
import HontaktPage from  './routes/HontaktPage';
ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/recovery' element={<Recovery />} />
      <Route path='/cloud' element={<CloudPage />} />
      <Route path='/contact' element={<ContactPage />} />
      <Route path='/kontakt' element={<KontaktPage />} />
      <Route path='/Hontakt' element={<HontaktPage />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

