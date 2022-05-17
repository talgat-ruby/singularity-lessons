import { useState, useEffect, useCallback } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import style from "./index.module.css";

const hello = () => {
	console.log('%c hello -> ', 'background: #222; color: royalblue',)
}

const App = () => {
	const [pokemons, setPokemons] = useState([]);

	const makePokemonReqeust = useCallback(async (url) => {
		const res = await fetch(url);
		if (!res.ok) {
			throw new Error("Smth wrong");
		}
		return await res.json();
	}, []);

	const makeRequest = useCallback(async () => {
		try {
			const res = await fetch("https://pokeapi.co/api/v2/pokemon/");
			if (!res.ok) {
				throw new Error("Smth wrong");
			}
			const { results: pokemons } = await res.json();

			const attrs = await Promise.all(pokemons.map(({url}) => makePokemonReqeust(url)))

			const pokemonsWithImage = pokemons.map((p, i) => ({
				name: p.name,
				image: attrs[i]?.sprites?.front_default
			}))

			setPokemons(pokemonsWithImage);
		} catch (err) {
			console.error(err);
		}
	}, [makePokemonReqeust]);

	useEffect(() => {
		hello()
		console.log('%c Make request -> ', 'background: #222; color: royalblue')
		makeRequest()
	}, [makeRequest, hello])

	return (
		<>
			<div className={style.list}>
				{pokemons.map((p) => (
					<Card key={p.name} sx={{ maxWidth: 345 }}>
						<CardMedia
							component="img"
							height="140"
							image={p.image}
							alt="green iguana"
						/>
						<CardContent>
							<Typography
								gutterBottom
								variant="h5"
								component="div"
							>
								{p.name}
							</Typography>
							<Typography variant="body2" color="text.secondary">
								Lizards are a widespread group of squamate
								reptiles, with over 6,000 species, ranging
								across all continents except Antarctica
							</Typography>
						</CardContent>
						<CardActions>
							<Button size="small">Share</Button>
							<Button size="small">Learn More</Button>
						</CardActions>
					</Card>
				))}
			</div>
			<Button variant="contained" onClick={makeRequest}>
				Make List Request
			</Button>
		</>
	);
};

export default App;
