/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { css } from "@emotion/css";

import { GET_POKEMONS } from "../graphql/query";
import WildPokemon from "../component/WildPokemon";
import InfiniteScroll from "react-infinite-scroll-component";

const LIMIT = 32;

function PokemonList() {
  const [offset, setOffset] = useState(0);
  const [pokemonData, setPokemonData] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  const { data } = useQuery(GET_POKEMONS, {
    variables: {
      limit: LIMIT,
      offset: offset,
    },
  });

  useEffect(() => {
    if (data) {
      setPokemonData([...pokemonData, ...data.pokemons.results]);
      if (data.pokemons.results.length === 0) {
        setHasMore(false);
      }
    }
  }, [data]);

  return (
    <div className={styles.app}>
      <InfiniteScroll
        dataLength={pokemonData.length}
        next={() => setOffset(offset + LIMIT)}
        hasMore={hasMore}
        loader={<h4 className={styles.loader}>Loading...</h4>}
      >
        <div className={styles.parentPokemon}>
          {pokemonData.map((pokemon) => (
            <WildPokemon key={pokemon.id} pokemonData={pokemon} />
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
}

const styles = {
  app: css`
    background-color: #3d7dca;
    padding: 1rem;
    min-height: 100vh;
  `,
  parentPokemon: css`
    display: flex;
    flex-wrap: wrap;
  `,
  loader: css`
    color: white;
    margin: 0;
    margin-top: 1rem;
    text-align: center;
  `,
};

export default PokemonList;
