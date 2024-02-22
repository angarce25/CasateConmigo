import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
	const navbarStyle = {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		backgroundColor: "white",
		padding: "10px 20px", // Ajusta el padding según tu preferencia
	};

	const logoContainerStyle = {
		// Puedes ajustar el tamaño y margen del logo según sea necesario
	};

	const logoStyle = {
		maxWidth: "50px", // Ajusta el tamaño máximo del logo
	};

	const buttonContainerStyle = {
		display: "flex",
		alignItems: "center",
	};

	const buttonStyle = {
		backgroundColor: "#64DE95",
		color: "white",
		border: "none",
		padding: "10px 20px", // Ajusta el padding según tu preferencia
		cursor: "pointer",
		borderRadius: "5px",
		marginRight: "10px", // Ajusta el margen entre botones
	};

	const buttonStyle1 = {
		backgroundColor: "#64DE95",
		color: "white",
		border: "none",
		padding: "10px 20px", // Ajusta el padding según tu preferencia
		cursor: "pointer",
		borderRadius: "5px",
		marginRight: "10px", // Ajusta el margen entre botones
	};

	const buttonHoverStyle = {
		backgroundColor: "darkgreen", // Cambia el color al pasar el cursor sobre el botón
	};

	return (
		<nav style={navbarStyle}>
			<div style={logoContainerStyle}>
				<NavLink to="/">
					<img
						src="../../img/logoCasateConmigo1.png"
						alt="Logo"
						style={logoStyle}
					/>
				</NavLink>
			</div>
			<div style={buttonContainerStyle}>
				<button style={buttonStyle1}>
					<NavLink
						to="/publicar-anuncio"
						style={{ color: "white", textDecoration: "none" }}
					>
						Publicar Anuncio
					</NavLink>
				</button>
				<button style={buttonStyle1}>
					<NavLink
						to="/acceder"
						style={{ color: "white", textDecoration: "none" }}
					>
						Acceder
					</NavLink>
				</button>
				<button style={buttonStyle}>Favoritos</button>
			</div>
		</nav>
	);
};

export default Navbar;
