import React from 'react';
import PropTypes from 'prop-types';
import { emojify } from 'react-emojione';

const Pokemon = ({ data, onFavoriteClick, isAdded }) => (
    <div className="pokemon-container">
        <div className="description">
            <span className="name">{`${data.Name} - ${data.ID}`}</span>
        </div>
        <button onClick={() => onFavoriteClick(data)}>
            { isAdded ? emojify(':heart:') : emojify(':black_heart:') }
        </button>
    </div>
);

Pokemon.propTypes = {
    data: PropTypes.shape({
        ID: PropTypes.string,
        Name: PropTypes.string.isRequired,
    }).isRequired,
    onFavoriteClick: PropTypes.func.isRequired,
    isAdded: PropTypes.bool.isRequired,
}

export default Pokemon;