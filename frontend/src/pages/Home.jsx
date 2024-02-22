import React from "react";
import SearchBar from "../components/searchBar/searchBar";
import Alert from "../pages/Alert";
import "../App.css";
import Panel from "../components/panel/Panel";

const HomePage = () => {
	return (
		<div className="container mx-auto">
			<div className="search-section">
				<SearchBar />
			</div>
			<main className="main-content">
				<section className="mainContainer">
					{/* Componente de búsqueda */}

					{/* <div className="Alert"> */}
					<Alert className="Alert" />
					{/* </div> */}
					{/* Sección de explorar opciones */}
					<Panel />
				</section>
			</main>
		</div>
	);
};

export default HomePage;
