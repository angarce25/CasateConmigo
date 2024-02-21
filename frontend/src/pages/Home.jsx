import React from 'react';
import SearchBar from '../components/searchBar/searchBar'; // Importa el componente de búsqueda
import '../App.css';

const HomePage = () => {
    return (
        <div className="container mx-auto">
            <main className="main-content">
                {/* Componente de búsqueda */}
                <div className="bg-B5F0CD p-4 rounded-md mb-4">
                    <SearchBar />
                </div>

                {/* Sección de novedades */}
                <section className="bg-65D492 p-4 rounded-md mb-4">
                    <h5 className="text-white">Novedades</h5>
                    {/* Contenido de las novedades */}
                </section>

                {/* Sección de explorar opciones */}
                <section>
                    <h5 className="text-white">Explora nuestras opciones</h5>
                    {/* Contenido de las opciones a explorar */}
                </section>
            </main>
        </div>
    );
};

export default HomePage;
