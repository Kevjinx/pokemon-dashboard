

const getData = async (url) => {
	const response = await fetch(url);
	const data = await response.json();
	return data;
}

(async () => {
	const data = await getData('https://pokeapi.co/api/v2/pokemon/ditto');
	console.log(data);
})()
