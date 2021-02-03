import { css } from "@emotion/css";
import Modal from "./Modal";

const FailCatchModal = ({ isShow, onClick }) => {
  return (
    <Modal show={isShow}>
      <div className={styles.container}>
        <p className={styles.title}>Oopss pokemon run away</p>
        <button className={styles.button} onClick={onClick}>
          Okay
        </button>
      </div>
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
    margin-top: 0;
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
};

export default FailCatchModal;
