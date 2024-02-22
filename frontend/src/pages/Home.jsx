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

                {/* Sección de novedades */}
                <section className="news-section">
                    <h5 className="section-title">Novedades</h5>
                    <Alert className="news-card" />
                    {/* Agrega más tarjetas de novedades según sea necesario */}
                </section>

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
