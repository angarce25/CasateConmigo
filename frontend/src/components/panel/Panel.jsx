import React, { useState, useEffect } from "react";
import Card from "./card/Card";
import "./panel.css";

const Panel = () => {
	const [posts, setPosts] = useState([]);
	useEffect(() => {
		fetch("http://localhost:8080/api/v1/posts")
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				setPosts(data);
			})
			.catch((err) => {
				console.log(err.message);
			});
	}, []);
	return (
		<main>
			<h2>Explora todas nuestras opciones</h2>
			<section className="cardContainer">
				{posts.map((post) => {
					return (
						<Card
							key={post.id_post}
							id={post.id_post}
							name={post.name}
							description={post.description}
							city={post.city}
							street={post.street}
							price={post.price}
						/>
					);
				})}
			</section>
		</main>
	);
};

export default Panel;
