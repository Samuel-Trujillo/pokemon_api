import React, { useState } from 'react';

import './App.css';


function App() {

  const [pokemons, setPokemons] = useState([]);

  const showPokemon =() =>{
    fetch('https://pokeapi.co/api/v2/pokemon')
      .then(response =>{
        return response.json();
      })
      .then(response =>{
        setPokemons(response.results)
      })
  }


  return (
    <div className="App">
      <button onClick= {showPokemon}>Show Pokemon</button>
      {pokemons.map((pokemon, i) => {
          return <p key={i}>{pokemon.name}</p>
        })
      }
    </div>
  );
}

export default App;
