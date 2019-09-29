import React from "react";
import PropTypes from "prop-types";
import Pokemon from "Pokemon.jsx";

const Favorites = ({ pokemon }) => (
  <div className="favorites-container">
    <div className="grid">
      {pokemon.map(pokemonData => (
        <Pokemon
          key={pokemonData.ID}
          data={pokemonData}
          isAdded
          onFavoriteClick={() => undefined}
        />
      ))}
    </div>
  </div>
);

Favorites.defaultProps = {
  pokemon: []
};

Favorites.propTypes = {
  pokemon: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Favorites;