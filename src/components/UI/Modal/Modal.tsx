import ReactDOM from "react-dom";
import styles from "./Modal.module.css";
import { ReactNode } from "react";
import { useAppSelector } from "../../../app/hooks";

interface ModalProps {
  children: ReactNode;
}

const Backdrop = () => {
  return <div className={styles.backdrop} />;
};

const Content = ({ children }: ModalProps) => {
  return (
    <div
      className="modal fade show"
      tabIndex={-1}
      aria-labelledby="modal-profile"
      aria-modal="true"
      role="dialog"
      style={{ display: "block" }}
    >
      <div className="modal-dialog modal-dialog-centered modal-fullscreen-xl-down">
        <div className="modal-content">
          <div className="modal-body py-0">{children}</div>
        </div>
      </div>
    </div>
  );
};

const Modal = ({ children }: ModalProps) => {
  const isDisplayed = useAppSelector((state) => state.modal.isDisplayed);

  return (
    <>
      {isDisplayed && ReactDOM.createPortal(<Backdrop />, document.body)}
      {isDisplayed &&
        ReactDOM.createPortal(<Content>{children}</Content>, document.body)}
    </>
  );
};

export default Modal;
