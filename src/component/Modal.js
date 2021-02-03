import { css } from "@emotion/css";

const Modal = ({ show, children }) => {
  if (!show) return null;

  return <div className={modalStyles}>{children}</div>;
};

const modalStyles = css`
  position: fixed;
  background: rgba(0, 0, 0, 0.4);
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  z-index: 10;
  display: flex;
`;

export default Modal;
