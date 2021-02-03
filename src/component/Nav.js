import { css } from "@emotion/css";
import PokemonLogo from "../asset/pokemonlogo.png";
import PokeBall from "../asset/pokeball.png";
import { usePokemon } from "../context/PokemonContext";
import { useHistory } from "react-router-dom";

const Nav = () => {
  const { myPokemon } = usePokemon();
  const history = useHistory();

  return (
    <div className={styles.navRoot}>
      <div className={styles.nav}>
        <div className={styles.navComponent}>
          <div className={styles.logoComponent}>
            <img
              onClick={() => history.push(`/`)}
              src={PokemonLogo}
              className={styles.logo}
              alt="logo"
            />
            <img
              onClick={() => history.push(`/mypokemon`)}
              src={PokeBall}
              className={styles.logo}
              alt="pokeball"
            />
          </div>
          {myPokemon.length > 0 && (
            <p className={styles.mypokemon}>{myPokemon.length}</p>
          )}
        </div>
      </div>
    </div>
  );
};

const styles = {
  navRoot: css`
    height: 4rem;
    max-width: 32rem;
  `,
  nav: css`
    height: 4rem;
    position: fixed;
    display: flex;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    overflow: hidden;
    z-index: 10;
  `,
  navComponent: css`
    width: 32rem;
    position: relative;
    margin: 0 auto;
    align-items: center;
    display: flex;
    background-color: #263238;
  `,
  logoComponent: css`
    display: flex;
    justify-content: space-between;
    width: 100%;
  `,
  logo: css`
    height: 3rem;
    margin: 0 1rem;
    margin-right: 1.5rem;
  `,
  mypokemon: css`
    position: absolute;
    right: 1rem;
    top: 0.5rem;
    margin: 0;
    padding: 0.2rem 0.5rem;
    border-radius: 100px;
    background-color: #ffcb05;
  `,
};

export default Nav;
