import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component{
  render() {
    const pokedex = this.props.data;
    return (
      <div className="pokedex">
        {pokedex.map(pokemon => <Pokemon key={pokemon.id} pokemon={pokemon} />)}
      </div>
    );
  }
}

export default Pokedex;
