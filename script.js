const inputSearch = document.getElementById("search");
const button = document.getElementById("btn");
const pokemonInfo = document.getElementById("pokemon-info");

async function getPokemonData(pokemonData) {
    try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonData}`);
    const data = await response.json();
    return data;
    } catch(error){
        throw new Error(`il pokemon ${pokemonData} non esiste`)
    }
}

async function displayData() {
   const pokemon = inputSearch.value 
   const pokemonData = await getPokemonData(pokemon);
   console.log(pokemonData)
 }


button.addEventListener("click",displayData )