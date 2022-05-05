import { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import style from "./index.module.css";

const App = () => {
	const [pokemons, setPokemons] = useState([]);

	const makePokemonReqeust = async (url) => {
		const res = await fetch(url);
		if (!res.ok) {
			throw new Error("Smth wrong");
		}
		return await res.json();
	};

	const makeRequest = async () => {
		try {
			const res = await fetch("https://pokeapi.co/api/v2/pokemon/");
			if (!res.ok) {
				throw new Error("Smth wrong");
			}
			const { results: pokemons } = await res.json();

			const pokemon = await makePokemonReqeust(pokemons[0].url);

			console.log(
				"%c pokemon -> ",
				"background: #222; color: royalblue",
				pokemon
			);

			// setPokemons(json.results);
		} catch (err) {
			console.error(err);
		}
	};

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
