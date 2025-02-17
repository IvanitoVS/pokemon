export const getPokemons = async (limit: any) => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });
    const data = await res.json();

    const respuestaData = await Promise.all(

        data.results.map(async (pokemon: { name: any; }) => {
            const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
            const estadisticas = await respuesta.json();
            return estadisticas; 
        })
    );

    return respuestaData; 
};

