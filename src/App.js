// import logo from './logo.svg';
import "./App.css";

import Title from "./components/Title";
import Pokemon from "./components/Pokemon";

//const pokemons = require("./components/all_pokemons");

const pokemons = [
  {
    name: "Charizard",
    weight: 90,
    awesome: true,
    terrifying: false,
    abilities: ["Blaze", "Solar power", "Tough claws", "Drought"],
  },
  {
    name: "Bulbasaur",
    weight: 6.9,
    awesome: true,
    terrifying: false,
    abilities: ["Overgrow", "Chlorophyll"],
  },
  {
    name: "Mewtwo",
    weight: 122,
    awesome: true,
    terrifying: true,
    abilities: ["Pressure", "Unnerve", "Steadfast", "Insomnia"],
  },
  {
    name: "Mega beedrill",
    weight: 65,
    awesome: false,
    terrifying: true,
    abilities: ["Intimidate", "Unnerve"],
  },
];

//console.log(pokemons);

function App() {
  return (
    <div className="App">
      <main className="container my-5">
        <Title content="Jannes" />
        <div className="row">
          {pokemons.map((pokemon, index) => (
            <Pokemon
              key={index}
              name={pokemon.name}
              weight={pokemon.weight}
              awesome={pokemon.awesome}
              terrifying={pokemon.terrifying}
              abilities={pokemon.abilities}
            />
          ))}
        </div>
      </main>

      {/* <header className="App-header">
        <h1>Hello there brave world, are you ready to React?</h1>
        <p>Vet ouwe</p>
        <p>Even testen toch?</p>
      </header> */}
    </div>
  );
}

export default App;
