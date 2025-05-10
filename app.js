const pokemonList = document.getElementById('pokemon-list');

async function fetchPokemon() {
    for (let i = 1; i <= 150; i++) {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
        const data = await response.json();
        displayPokemon(data);
    }
}

function displayPokemon(pokemon) {
    const div = document.createElement('div');
    div.classList.add('pokemon-item');
    div.innerHTML = `
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png" alt="${pokemon.name}">
        <h3>${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h3>
        <span>#${pokemon.id}</span>
    `;
    pokemonList.appendChild(div);
}

function searchPokemon() {
    const query = document.getElementById('search').value.toLowerCase();
    const items = document.querySelectorAll('.pokemon-item');

    items.forEach(item => {
        const name = item.querySelector('h3').textContent.toLowerCase();
        item.style.display = name.includes(query) ? 'block' : 'none';
    });
}

fetchPokemon();
