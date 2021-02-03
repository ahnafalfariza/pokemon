import { css } from "@emotion/css";
import { useHistory } from "react-router-dom";
import { usePokemon } from "../context/PokemonContext";

const WildPokemon = ({ pokemonData }) => {
  const { myPokemon } = usePokemon();
  const history = useHistory();
  const pokemonCount = myPokemon.filter(
    (pokemon) => pokemon.name === pokemonData.name
  ).length;

  const goToPokemon = () => {
    history.push(`/${pokemonData.name}`);
  };

  return (
    <div className={styles.component} onClick={goToPokemon}>
      <div className={styles.imgContainer}>
        <img
          src={pokemonData.image}
          className={styles.img}
          alt={pokemonData.name + " image"}
        />
      </div>
      <h3 className={styles.pokemonName}>{pokemonData.name}</h3>
      {pokemonCount !== 0 && (
        <p className={styles.pokemontCount}>x{pokemonCount}</p>
      )}
    </div>
  );
};

const styles = {
  component: css`
    width: auto;
    max-width: 30%;
    margin: 0 auto;
    position: relative;
    padding: 0.5rem;
    cursor: pointer;
  `,
  imgContainer: css`
    height: 96px;
    width: 96px;
    background-color: white;
    border-radius: 50%;
  `,
  img: css`
    height: 96px;
    width: 96px;
  `,
  pokemonName: css`
    margin: 0;
    text-align: center;
    color: white;
    font-size: 0.75rem;
  `,
  pokemontCount: css`
    position: absolute;
    font-weight: 800;
    padding: 0.2rem 1rem;
    border-radius: 100px;
    background-color: #ffcb05;
    font-size: 1.25rem;
    right: 0;
    top: 0;
    margin: 0;
  `,
};

export default WildPokemon;
