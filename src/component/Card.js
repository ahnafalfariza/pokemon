import { css } from "@emotion/css";

const Card = ({ title, desc }) => {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.desc}>{desc}</p>
    </div>
  );
};

const styles = {
  card: css`
    background-color: white;
    padding: 1rem;
    border-radius: 10px;
    text-align: center;
    margin-bottom: 1rem;
  `,
  title: css`
    text-transform: capitalize;
    margin: 0;
    font-size: 1.5em;
  `,
  desc: css`
    text-transform: capitalize;
    margin: 0;
    margin-top: 1rem;
    font-size: 1em;
  `,
};

export default Card;
