import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import SingleFilmsPage from './pages/SingleFilmsPage';
import Auth from './pages/Auth';
import NotFound from './pages/NotFound';

const token = localStorage.getItem('token');
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path={'/'} element={<Home />} />
      <Route path={'/sing-up'} element={<Auth />} />
      <Route path={'/films/:id'} element={<SingleFilmsPage />} />
      <Route path={'*'} element={<NotFound />} />
    </Routes>
    <App />
  </BrowserRouter>
);
