import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navigation from './components/Navigation'
import './index.css'
import About from './components/About'
import Education from './components/Education'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Footer from './components/Footer'
import Contact from './components/Contact'


createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Navigation />
  <About/>
  <Education/>
  <Experience/>
  <Skills/>
  <Contact/>
  <Footer/>
  
  </StrictMode>,
)
