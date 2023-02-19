import React, { useState, useEffect,  } from 'react';
import { getPokemonById } from '../data/pokeAPI/index.mjs';
import Card from './Card';

const DisplaySearch = ({commonIds}) => {
	const [pokemon, setPokemon] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const newPokemon = await Promise.all(
				commonIds.map(async (id) => {
					const pokemon = await getPokemonById(id);
					return pokemon;
				})
			);
			setPokemon(newPokemon);
			console.log('setPokemon', newPokemon)
		};
		console.log('commonIds', commonIds);
		commonIds.length > 0 && fetchData().catch(console.error);
	}, [commonIds]);

	return (
		<div>
			<h2>Search Results</h2>
			<ul>
				{pokemon.map((pokemon) => (
					<li key={pokemon.id}>
						<Card pokemon={pokemon} />
					</li>
				))}
			</ul>
		</div>
	);
}

export default DisplaySearch;