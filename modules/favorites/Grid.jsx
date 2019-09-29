import React from 'react';
import PropTypes from 'prop-types';
import Pokemon from 'Pokemon.jsx';

const isPokemonAdded = (pokemonID, favorites) => {
    return !!favorites.find((favorite) => favorite.ID === pokemonID);
};

const renderPokemon = (data, onFavoriteClick, favorites) => (data.map((element) => (
    <Pokemon 
        onFavoriteClick={onFavoriteClick}
        key={element.ID}
        data={element}
        isAdded={isPokemonAdded(element.ID, favorites)}/>)));

const Grid = ({ data, onFavoriteClick, favorites }) => (
    <div className="grid">
        {data.length > 0 ? renderPokemon(data, onFavoriteClick, favorites) : "No Pokemon here..."}
    </div>
);


Grid.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    onFavoriteClick: PropTypes.func.isRequired,
    favorites: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Grid;