import React from 'react';
import SearchBar from '../components/SearchBar'; // Importa el componente de búsqueda


const HomePage = () => {
    return (
        <div className="container mx-auto">
           
            <div className="bg-B5F0CD p-4 rounded-md mb-4"> {/* Recuadro con background color B5F0CD */}
                {/* Contenido dentro del primer recuadro */}
            </div>
            <div className="bg-65D492 p-4 rounded-md mb-4"> {/* Recuadro de búsqueda con background color 65D492 */}
                <h2 className="text-white">Búsqueda personalizada</h2> {/* Título de la búsqueda */}
                <SearchBar /> {/* Componente de búsqueda */}
                <button className="bg-black text-white px-4 py-2 rounded-md">Buscar</button> {/* Botón de búsqueda */}
            </div>
            <main>
                {/* Aquí puedes incluir el contenido principal de tu página de inicio */}
                <section>
                    <h1>Bienvenido a mi aplicación</h1>
                    <p>Este es un mensaje de bienvenida...</p>
                </section>
                <section>
                    {/* Otro contenido principal */}
                </section>
            </main>
        </div>
    );
};

export default HomePage;
