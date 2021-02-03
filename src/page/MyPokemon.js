import { css } from "@emotion/css";
import OwnedPokemon from "../component/OwnedPokemon";
import { usePokemon } from "../context/PokemonContext";

const MyPokemon = () => {
  const { myPokemon } = usePokemon();

  return (
    <div className={styles.app}>
      <div>
        {myPokemon.map((pokemon) => (
          <OwnedPokemon pokemonData={pokemon} />
        ))}
      </div>
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

export default MyPokemon;
