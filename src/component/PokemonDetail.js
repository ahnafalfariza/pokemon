import { css } from "@emotion/css";
import { useState } from "react";
import { usePokemon } from "../context/PokemonContext";
import { catchAction } from "../context/PokemonReducer";
import Card from "./Card";
import FailCatchModal from "./FailCatchModal";
import SuccessCatchModal from "./SuccessCatchModal";

const PokemonDetail = ({ pokemonData }) => {
  const { myPokemon, dispatch } = usePokemon();
  const [showModal, setShowModal] = useState(null);

  const ability = pokemonData.abilities
    .map(({ ability }) => ability.name)
    .join(", ");
  const type = pokemonData.types.map(({ type }) => type.name).join(", ");
  const move = pokemonData.moves
    .map(({ move }) => move.name)
    .slice(0, 10)
    .join(", ");

  const pokemonCount = myPokemon.filter(
    (pokemon) => pokemon.name === pokemonData.name
  ).length;

  const catchPokemon = () => {
    const success = Math.round(Math.random());
    success ? setShowModal("success") : setShowModal("fail");
  };

  const dismissModal = () => {
    setShowModal(null);
  };

  const saveToCollection = (nickname) => {
    const catchedPokemon = {
      name: pokemonData.name,
      sprites: pokemonData.sprites,
      nickname: nickname,
    };
    dispatch(catchAction(catchedPokemon));
    dismissModal();
  };

  return (
    <div>
      <PokemonDetailCard
        pokemonData={pokemonData}
        pokemonCount={pokemonCount}
        catchPokemon={catchPokemon}
      />
      <Card title={"Ability"} desc={ability} />
      <Card title={"Type"} desc={type} />
      <Card title={"Move"} desc={move} />
      <FailCatchModal isShow={showModal === "fail"} onClick={dismissModal} />
      <SuccessCatchModal
        pokemonName={pokemonData.name}
        isShow={showModal === "success"}
        onClick={saveToCollection}
      />
    </div>
  );
};

const PokemonDetailCard = ({ pokemonData, pokemonCount, catchPokemon }) => {
  return (
    <div className={styles.card}>
      <img
        src={pokemonData.sprites.front_default}
        alt={pokemonData.name}
        className={styles.pokemonImg}
      />
      {pokemonCount !== 0 && (
        <p className={styles.pokemontCount}>x{pokemonCount}</p>
      )}
      <h1 className={styles.pokemonName}>{pokemonData.name}</h1>
      <button className={styles.button} onClick={catchPokemon}>
        Catch
      </button>
    </div>
  );
};

const styles = {
  button: css`
    margin: auto;
    padding: 0.7rem 3rem;
    font-size: 1em;
    font-weight: 700;
    justify-content: center;
    border-radius: 25px;
    background-color: #ffcb05;
  `,
  card: css`
    background-color: white;
    padding: 1rem;
    border-radius: 10px;
    text-align: center;
    margin-bottom: 1rem;
    position: relative;
  `,
  pokemonName: css`
    margin: 1rem;
    margin-top: 0;
    text-transform: capitalize;
  `,
  pokemonImg: css`
    width: 18rem;
    height: 18rem;
  `,
  pokemontCount: css`
    position: absolute;
    font-weight: 800;
    padding: 1rem 1.5rem;
    border-radius: 100px;
    background-color: #ffcb05;
    font-size: 1.25rem;
    right: 0;
    top: 0;
    margin: 1rem;
  `,
};

export default PokemonDetail;
