import React from 'react';

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

export default SearchBar;
