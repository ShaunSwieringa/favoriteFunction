import React, { Component } from "react";
import Favorites from "modules/favorites/favorites.jsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const pokemonAlreadyExist = (pokemonId, favorites) => !!favorites.find((pokemon) => pokemon.ID === pokemonId);

class fav extends Component {
  state = {
    favorites: []
  };

  addFavoriteHandler = pokemon => {
    const { favorites } = this.state;
    if(pokemonAlreadyExist(pokemon.ID, favorites)){
      this.setState(prevState => ({
        favorites: prevState.favorites.filter(element => element.ID !== pokemon.pokemonID)
      }));
    }
    else {
      this.setState(prevState => ({
        favorites: [...prevState.favorites, pokemon]
      }));
    }
  };

  render = () => (
    <div>
      <Router>
        <Switch>
          <Route
            path="/favorites"
            render={props => <Favorites pokemon={this.state.favorites} />}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default fav;