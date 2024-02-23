import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import HomePage from './pages/Home';
import ContactForm from '../src/pages/Contact';
import Aboutus from './pages/About';
import Login from './pages/Login';

import ShowProducts from './pages/Search';

import './pages/Contact.css'
import './pages/Home.css'
import './pages/Alert.css'
import './components/footer/footer.css'
import './pages/Search.css'
import './pages/About.css'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Navbar />
    
      <Routes>

       <Route path='/Contact' element={<ContactForm />} />
       <Route path='/Search' element={<ShowProducts />} />
       <Route path="/" element={<HomePage />} />
       <Route path="/about" element={<Aboutus />} />
       <Route path="/acceder" element={<Login />} />
       
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
