import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

import ShowProducts from './pages/Search';

import './pages/Contact.css'
import './pages/Home.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './pages/Home';
import ContactForm from '../src/pages/Contact';


function App() {
  return (
    <div className="App">
      <Navbar />
    
      <Routes>

       <Route path='/Contact' element={<ContactForm />} />
       <Route path='/Search' element={<ShowProducts />} />
       <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
