import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router';
import AOS from 'aos';
import 'aos/dist/aos.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import HomePage from './pages/HomePage.jsx';
import UsPage from './pages/UsPage.jsx';
import Header from './components/Header.jsx';





AOS.init({ duration: 800, once: true, easing: 'ease-out-cubic' });

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/quienes-somos" element={<UsPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
