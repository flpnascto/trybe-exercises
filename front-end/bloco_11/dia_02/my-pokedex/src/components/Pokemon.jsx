import React from 'react';

class Pokemon extends React.Component {
  render() {
    const { name, type, averageWeight, image} = this.props.pokemon;
    return (
      <div className="pokemon-card">
        <section className="card-section">
          <div className="poke-name">{name}</div>
          <div className="poke-type">{type}</div>
          <div className="poke-weight">
            {`Average weight ${averageWeight.value} ${averageWeight.measurementUnit}`}
          </div>
        </section>
        <asside className='card-asside'>
          <img className="poke-img" alt="" src={image} />
        </asside>
      </div>
    );
  }
}

export default Pokemon;
