import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import data from '../data/data.json';
import { Pagination, Button } from 'react-bootstrap';

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
                const nombreMatches = product.nombre.toLowerCase().includes(searchTerm.toLowerCase());
                const descripcionMatches = product.descripcion.toLowerCase().includes(searchTerm.toLowerCase());
                const localizacionMatches = product.localizacion.toLowerCase().includes(searchTerm.toLowerCase());
                const priceInRange = (!minPrice || product.importe >= parseInt(minPrice)) && (!maxPrice || product.importe <= parseInt(maxPrice));
                return (nombreMatches || descripcionMatches || localizacionMatches) && priceInRange;
            });
            setSearchResults(filteredResults);
        } else {
            setSearchResults(data);
        }
    }, [searchTerm, minPrice, maxPrice]);

    // Lógica para paginación
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = searchResults.slice(indexOfFirstProduct, indexOfLastProduct);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    // Función para manejar la carga de todos los productos
    const loadAllProducts = () => {
        setCurrentPage(1); // Reiniciar la página actual
        setSearchResults(data); // Mostrar todos los productos
    };

    return (
        <div className="container">
            <h5 className="my-4">Resultados de la búsqueda</h5>
            <div className="row">
                {currentProducts.map(product => (
                    <div key={product.id} className="col-md-3 mb-4">
                        <div className="card h-100">
                            <img src={product.foto} className="card-img-top" alt={product.nombre} style={{ maxHeight: '200px' }} />
                            <div className="card-body">
                                <h5 className="card-title">{product.nombre}</h5>
                                <p className="card-text">{product.descripcion}</p>
                                <p className="card-text">Precio: {product.importe}€</p>
                                <p className="card-text">Localización: {product.localizacion}</p>
                                <p className="card-text">Fecha del anuncio: {product.fecha_anuncio}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="row">
                <div className="col d-flex justify-content-center">
                    <Pagination>
                        {[...Array(Math.ceil(searchResults.length / productsPerPage)).keys()].map(number => (
                            <Pagination.Item key={number + 1} active={number + 1 === currentPage} onClick={() => paginate(number + 1)}>
                                {number + 1}
                            </Pagination.Item>
                        ))}
                    </Pagination>
                </div>
            </div>
            <div className="row">
                <div className="col d-flex justify-content-center mt-3">
                    <Button variant="secondary" onClick={loadAllProducts}>Mostrar todos los productos</Button>
                </div>
            </div>
        </div>
    );
};

export default ShowProducts;
