import React from "react";
import "./card.css";

const Card = ({ id_post, name, description, city, street, price }) => {
	return (
		<div className="Card">
			<h3>{name}</h3>
			<p>{description}</p>
		</div>
	);
};

export default Card;