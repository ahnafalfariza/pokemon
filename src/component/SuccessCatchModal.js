import { css } from "@emotion/css";
import { useState } from "react";
import Modal from "./Modal";
import PokeBall from "../asset/pokeball.png";

const SuccessCatchModal = ({ isShow, onClick, pokemonName }) => {
  const [nickname, setNickname] = useState("");

  const savePokemon = () => {
    onClick(nickname);
    setNickname("");
  };

  return (
    <Modal show={isShow}>
      <form className={styles.container} onSubmit={savePokemon}>
        <p className={styles.title}>{pokemonName} Caught</p>

        <img src={PokeBall} className={styles.logo} alt="pokeball" />
        <input
          type="text"
          value={nickname}
          className={styles.input}
          required
          placeholder="Nickname"
          onChange={(e) => setNickname(e.target.value)}
        />
        <button type="submit" className={styles.button}>
          Okay
        </button>
      </form>
    </Modal>
  );
};

const styles = {
  container: css`
    background-color: white;
    padding: 1rem;
    border-radius: 1rem;
  `,
  title: css`
    padding: 1rem;
    margin: 0;
    text-align: center;
    font-weight: 700;
    text-transform: capitalize;
  `,
  logo: css`
    width: 12rem;
    display: flex;
    margin: auto;
    margin-bottom: 1rem;
  `,
  button: css`
    padding: 0.5rem;
    margin: 0;
    text-align: center;
    border-radius: 100px;
    background-color: #ffcb05;
    display: block;
    width: 100%;
  `,
  input: css`
    width: 14rem;
    display: block;
    margin-bottom: 1rem;
    font-size: 1rem;
    text-align: center;
    padding: 0.5rem;
    border-style: solid;
  `,
};

export default SuccessCatchModal;
