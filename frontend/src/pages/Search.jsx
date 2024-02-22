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
            <div className="content-wrapper">
                <h4 className="my-4">Resultados de la búsqueda</h4>
                <div className="cards-container" style={{ marginBottom: '20px' }}>
                    {currentProducts.map(product => (
                        <div key={product.id} className="card" style={{ marginBottom: '20px' }}>
                            <div className="card-image" style={{ maxHeight: '150px' }}>
                                <img src={product.foto} alt={product.nombre} style={{ maxHeight: '100%', maxWidth: '100%' }} />
                            </div>
                            <div className="card-content">
                                <h5 className="heading" style={{ fontSize: '16px', marginTop: '10px' }}>{product.nombre}</h5>
                                <p className="card-text">Precio: {product.importe}€</p>
                                {/* Agregar más contenido según sea necesario */}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="pagination" style={{ color: '#abc07f', textAlign: 'center', marginBottom: '20px' }}>
                    {[...Array(Math.ceil(searchResults.length / productsPerPage)).keys()].map(number => (
                        <button key={number + 1} className={currentPage === number + 1 ? 'active btnPagination' : 'btnPagination'} onClick={() => paginate(number + 1)}>
                            {number + 1}
                        </button>
                    ))}
                </div>
                <div className="row">
                    <div className="col-12 mt-3" style={{ display: 'flex', justifyContent: 'center' }}>
                        <button className="btnSearch" onClick={loadAllProducts} style={{ color: '#000', marginRight: '10px', marginBottom: '10px' }}>Mostrar todos los productos</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowProducts;

