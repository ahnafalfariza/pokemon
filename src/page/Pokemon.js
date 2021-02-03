import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";

import { GET_POKEMON } from "../graphql/query";
import PokemonDetail from "../component/PokemonDetail";
import { css } from "@emotion/css";

const Pokemon = () => {
  const { pokemon } = useParams();

  const { data, loading } = useQuery(GET_POKEMON, {
    variables: {
      name: pokemon,
    },
  });

  if (loading || data.pokemon.id === null)
    return <div className={styles.app} />;

  return (
    <div className={styles.app}>
      <PokemonDetail pokemonData={data.pokemon} />
    </div>
  );
};

const styles = {
  app: css`
    background-color: #3d7dca;
    padding: 1rem;
    min-height: 100vh;
  `,
};

export default Pokemon;
