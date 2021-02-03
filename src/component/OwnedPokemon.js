import { css } from "@emotion/css";
import { useHistory } from "react-router-dom";
import { usePokemon } from "../context/PokemonContext";
import { releaseAction } from "../context/PokemonReducer";

const OwnedPokemon = ({ pokemonData }) => {
  const { dispatch } = usePokemon();
  const history = useHistory();

  const goToPokemon = () => {
    history.push(`/${pokemonData.name}`);
  };

  return (
    <div className={styles.component}>
      <div className={styles.imgParent} onClick={goToPokemon}>
        <img
          src={pokemonData.sprites.front_default}
          className={styles.img}
          alt={pokemonData.name + " image"}
        />
      </div>
      <div className={styles.pokemonNameParent} onClick={goToPokemon}>
        <h3 className={styles.pokemonNickname}>{pokemonData.nickname}</h3>
        <p className={styles.pokemonName}>{pokemonData.name}</p>
      </div>
      <button
        className={styles.release}
        onClick={() => dispatch(releaseAction(pokemonData.id))}
      >
        Release
      </button>
    </div>
  );
};

const styles = {
  component: css`
    display: flex;
    background-color: white;
    border-radius: 25px;
    margin-bottom: 1rem;
  `,
  imgParent: css`
    width: 96px;
    height: 96px;
  `,
  img: css`
    width: 100%;
  `,
  pokemonNameParent: css`
    margin: auto 0;
    flex: 1;
    padding: 1rem 0;
  `,
  pokemonNickname: css`
    margin: 0;
  `,
  pokemonName: css`
    margin: 0;
  `,
  release: css`
    margin: auto 1rem auto 0;
    padding: 0.4rem 0.75rem;
    justify-content: center;
    border-radius: 25px;
    background-color: #fd4c61;
    color: white;
    font-weight: 700;
  `,
};

export default OwnedPokemon;
