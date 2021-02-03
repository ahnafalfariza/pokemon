export const pokemonReducer = (state, action) => {
  switch (action.type) {
    case "catch_pokemon": {
      return [...state, action.pokemon];
    }
    case "release_pokemon": {
      return state.filter((pokemon) => pokemon.id !== action.id);
    }
    default: {
      return state;
    }
  }
};

export const catchAction = (pokemon) => ({
  type: "catch_pokemon",
  pokemon,
});

export const releaseAction = (id) => ({
  type: "release_pokemon",
  id,
});
