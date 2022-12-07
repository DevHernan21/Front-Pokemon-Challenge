import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { PokemonSearchResult } from "./components/PokemonSearchResult";
import GlobalStyles from "./styles/GlobalStyles";

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/:pokemonName" exact>
          <PokemonSearchResult />
        </Route>
      </Switch>
      <GlobalStyles />
    </BrowserRouter>
  );
};

export default Routes;
