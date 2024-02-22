import React from "react";
import "./card.css";

const Card = ({ id_post, name, description, city, street, price }) => {
	return (
		<article className="cardMain">
			<div className="cardImage">
				<img></img>
			</div>
			<div className="cardFooter">
				<p>{name}</p>
				<p>{price}$</p>
				<div class="heart-icon">❤</div>
			</div>
		</article>
	);
};

export default Card;
