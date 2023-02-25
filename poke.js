const pokeName = document.querySelector('.poke-name');
const pokeInfo = document.querySelector('.poke-info');

const colors = {
    fire: "#FDDFDF",
    grass: "#DEFDE0",
    electric: "#FCF7DE",
    water: "#DEF3FD",
    ground: "#f4e7da",
    rock: "#d5d5d4",
    fairy: "#fceaff",
    poison: "#d6b3ff",
    bug: "#f8d5a3",
    dragon: "#97b3e6",
    psychic: "#eaeda1",
    flying: "#F5F5F5",
    fighting: "#E6E0D4",
    normal: "#F5F5F5",
    ice: "#e0f5ff ",
};

const initPokemon = async () => {
    let url = `https://pokeapi.co/api/v2/pokemon/${localStorage.getItem('id')}`;
    let res = await fetch(url);
    let data = await res.json();
    console.log('Hello World');
    createPokeInfo(data);
}

const createPokeInfo = (pokemon) => {
    const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
    const id = pokemon.id.toString().padStart(3,'0');
    const height = pokemon.height;
    const weight = pokemon.weight;
    const type = pokemon.types[0].type.name;
    const color = colors[type];

    pokeName.innerHTML = name;

    const pokeCard = document.createElement('div');
    pokeCard.classList.add('poke-card');
    pokeCard.style.backgroundColor = `${color}`;

    pokeCard.innerHTML = `
        <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id}.png" alt="img of ${name}"> <hr>
        <p>ID: ${id}</p> <hr>
        <p>Height: ${height} meter</p> <hr>
        <p>Weight: ${weight} kg</p> <hr>
        <p>Type: ${type}</p> 
    `
    pokeInfo.appendChild(pokeCard);
}

initPokemon();
