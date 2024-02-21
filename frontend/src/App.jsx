import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import SearchBar from './components/searchBar/searchBar'
import Contact from '../src/pages/Contact'

import './pages/Contact.css'
import './pages/Home.css'

function App() {
  return (
    <div className="App">
      <Navbar />
      <SearchBar/>
      <Routes>
       <Route path='/Contact' element={<Contact />} />
        {/* Por ejemplo: */}
        {/* <Route path="/" element={<Home />} /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
