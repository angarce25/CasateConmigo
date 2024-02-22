import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchBar() {
	const [searchTerm, setSearchTerm] = useState("");
	const [priceRange, setPriceRange] = useState("");
	const navigate = useNavigate();

	const handleSearch = () => {
		let searchQuery = `/search?q=${encodeURIComponent(searchTerm)}`;

		// Agregar filtro por rango de precio
		if (priceRange === "lt700") {
			searchQuery += "&minPrice=0&maxPrice=700";
		} else if (priceRange === "701-1000") {
			searchQuery += "&minPrice=701&maxPrice=1000";
		} else if (priceRange === "gt1000") {
			searchQuery += "&minPrice=1001";
		}

		navigate(searchQuery);
	};

	return (
		<div style={{ backgroundColor: "#B5F0CD", padding: "20px" }}>
			<div
				style={{
					backgroundColor: "#65D492",
					padding: "20px",
					borderRadius: "8px",
					display: "flex",
					alignItems: "center",
					justifyContent: "space-between",
				}}
			>
				<h5 style={{ color: "white", marginRight: "10px" }}>
					Búsqueda personalizada
				</h5>
				<div
					style={{
						display: "flex",
						alignItems: "center",
						justifyContent: "space-between",
						width: "70%",
					}}
				>
					<input
						type="text"
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
						style={{
							backgroundColor: "white",
							padding: "8px",
							borderRadius: "8px",
							marginRight: "10px",
							flex: "1",
						}}
					/>
					<select
						value={priceRange}
						onChange={(e) => setPriceRange(e.target.value)}
						style={{
							backgroundColor: "white",
							padding: "8px",
							borderRadius: "8px",
							marginRight: "10px",
						}}
					>
						<option value="">Rango de precio</option>
						<option value="lt700">Menor de 700€</option>
						<option value="701-1000">701€ - 1000€</option>
						<option value="gt1000">Mayor de 1000€</option>
					</select>
					<button
						onClick={handleSearch}
						style={{
							backgroundColor: "white",
							color: "black",
							padding: "8px 20px",
							borderRadius: "8px",
							border: "none",
							cursor: "pointer",
						}}
					>
						Buscar
					</button>
				</div>
			</div>
		</div>
	);
}

export default SearchBar;
