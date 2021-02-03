import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { PokemonProvider } from "./context/PokemonContext";

import MyPokemon from "./page/MyPokemon";
import PokemonDetail from "./page/Pokemon";
import PokemonList from "./page/PokemonList";
import Nav from "./component/Nav";

function PokemonRoute() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/mypokemon">
          <MyPokemon />
        </Route>
        <Route path="/:pokemon">
          <PokemonDetail />
        </Route>
        <Route path="/">
          <PokemonList />
        </Route>
      </Switch>
    </Router>
  );
}

function App() {
  return (
    <PokemonProvider value={[]}>
      <PokemonRoute />
    </PokemonProvider>
  );
}

export default App;
