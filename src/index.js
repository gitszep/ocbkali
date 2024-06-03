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
      <Route path='/about' element={<Recovery />} />
      <Route path='/szkolenia' element={<CloudPage />} />
      <Route path='/kontakt' element={<ContactPage />} />
      <Route path='/uslugi' element={<KontaktPage />} />
      <Route path='/normy' element={<HontaktPage />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

