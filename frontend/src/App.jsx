import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import SearchBar from './components/searchBar/searchBar'

function App() {
  return (
    <div className="App">
      <Navbar />
      <SearchBar/>
      <Routes>
        {/* Define tus rutas aquí */}
        {/* Por ejemplo: */}
        {/* <Route path="/" element={<Home />} /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
