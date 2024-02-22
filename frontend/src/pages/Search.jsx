import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import data from '../data/data.json';

const ShowProducts = () => {
    const [searchResults, setSearchResults] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage] = useState(4);
    const { search } = useLocation();
    const queryParams = new URLSearchParams(search);
    const searchTerm = queryParams.get('q');
    const minPrice = queryParams.get('minPrice');
    const maxPrice = queryParams.get('maxPrice');

    useEffect(() => {
        if (searchTerm || minPrice || maxPrice) {
            const filteredResults = data.filter(product => {
                const nombreMatches = product.nombre.toLowerCase().includes(searchTerm?.toLowerCase());
                const descripcionMatches = product.descripcion.toLowerCase().includes(searchTerm?.toLowerCase());
                const localizacionMatches = product.localizacion.toLowerCase().includes(searchTerm?.toLowerCase());
                const priceInRange = (!minPrice || product.importe >= parseInt(minPrice)) && (!maxPrice || product.importe <= parseInt(maxPrice));
                return (nombreMatches || descripcionMatches || localizacionMatches) && priceInRange;
            });
            setSearchResults(filteredResults);
        } else {
            setSearchResults(data);
        }
    }, [searchTerm, minPrice, maxPrice]);

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = searchResults.slice(indexOfFirstProduct, indexOfLastProduct);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const loadAllProducts = () => {
        setCurrentPage(1);
        setSearchResults(data);
    };

    return (
        <div className="container">
            <h5 className="my-4">Resultados de la búsqueda</h5>
            <div className="cards-container">
                {currentProducts.map(product => (
                    <div key={product.id} className="card">
                        <div className="card-image">
                            <img src={product.foto} alt={product.nombre} />
                        </div>
                        <div className="card-content">
                            <h5 className="heading">{product.nombre}</h5>
                            {/* Agregar más contenido según sea necesario */}
                            <p className="author">Autor: <span className="name">{product.autor}</span></p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="pagination">
                {[...Array(Math.ceil(searchResults.length / productsPerPage)).keys()].map(number => (
                    <button key={number + 1} className={currentPage === number + 1 ? 'active' : ''} onClick={() => paginate(number + 1)}>
                        {number + 1}
                    </button>
                ))}
            </div>
            <div className="row">
                <div className="col d-flex justify-content-center mt-3">
                    <button className="btn" onClick={loadAllProducts}>Mostrar todos los productos</button>
                </div>
            </div>
        </div>
    );
};

export default ShowProducts;
