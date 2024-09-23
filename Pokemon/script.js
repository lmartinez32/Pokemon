document.getElementById('search-btn').addEventListener('click', async () => {
    const pokemonName = document.getElementById('pokemon-input').value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Pokémon no encontrado');
        const data = await response.json();

        const pokemonContainer = document.getElementById('pokemon-container');
        const pokemonCard = document.createElement('div');
        pokemonCard.classList.add('pokemon-card');

        pokemonCard.innerHTML = `
            <h2>${data.name}</h2>
            <img src="${data.sprites.front_default}" alt="${data.name}">
            <p>Altura: ${data.height / 10} m</p>
            <p>Peso: ${data.weight / 10} kg</p>
        `;

        pokemonContainer.appendChild(pokemonCard);
        document.getElementById('pokemon-input').value = ''; // Limpiar el input
    } catch (error) {
        alert(error.message);
    }
});