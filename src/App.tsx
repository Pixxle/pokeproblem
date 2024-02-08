import { list_pokemons, get_pokemon } from "./api/pokemons";

function App() {
  const pokemons = list_pokemons();
  const bulba = get_pokemon(1);
  return (
    <>
      <h1 className="text-3xl">PokeProblem</h1>
      <ul>
        {pokemons.map((pokemon) => (
          <li key={pokemon.id}>name: {pokemon.name}</li>
        ))}
      </ul>
      <br />
      {bulba?.name}
    </>
  );
}

export default App;
