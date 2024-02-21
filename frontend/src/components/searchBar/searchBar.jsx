import React, { useState } from 'react';
import data from '../../data/data.json'; // Importa los datos del archivo JSON

// Función para eliminar acentos de un texto
const removeAccents = (str) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
};

const SearchBar = ({ searchTerm, setSearchTerm }) => {
    return (
        <div className="flex justify-end mt-4">
            <input
                type="text"
                placeholder="Buscar..."
                className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
        </div>
    );
};

const Card = ({ piso }) => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full" src={piso.foto} alt={piso.nombre} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{piso.nombre}</div>
                <p className="text-gray-700 text-base">{piso.descripcion}</p>
                <p className="text-gray-700 text-base">Importe: {piso.importe}€</p>
                <p className="text-gray-700 text-base">Localización: {piso.localizacion}</p>
                <p className="text-gray-700 text-base">Fecha del anuncio: {piso.fecha_anuncio}</p>
            </div>
        </div>
    );
};

const SearchableApartments = () => {
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <div className="container mx-auto">
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            {searchTerm && <SearchableCardList searchTerm={searchTerm} />}
        </div>
    );
};

const SearchableCardList = ({ searchTerm }) => {
    const filteredData = data.filter(piso => {
        const lowerSearchTerm = removeAccents(searchTerm.toLowerCase());
        for (let key in piso) {
            if (typeof piso[key] === 'string' && removeAccents(piso[key].toLowerCase()).includes(lowerSearchTerm)) {
                return true;
            } else if (typeof piso[key] === 'number' && piso[key] === Number(searchTerm)) {
                return true;
            }
        }
        return false;
    });

    return (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {filteredData.map(piso => (
                <Card key={piso.id} piso={piso} />
            ))}
        </div>
    );
};

export default SearchableApartments;
