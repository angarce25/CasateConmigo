import React from 'react';
import SearchBar from '../components/searchBar/searchBar'; 
import Alert from '../pages/Alert'
import '../App.css';

const HomePage = () => {
    return (
        <div className="container mx-auto">
            <main className="main-content">
                {/* Componente de búsqueda */}
                <div className="search-section">
                    <SearchBar />
                </div>

                <div className='Alert'>
                    <Alert />
                </div>
                {/* Sección de explorar opciones */}
                <section>
                    <h5 className="section-title">Explora nuestras opciones</h5>
                    {/* Contenido de las opciones a explorar */}
                </section>
            </main>
        </div>
    );
};

export default HomePage;
