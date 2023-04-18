import ReactDOM from "react-dom";
import { MouseEventHandler, ReactNode, useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { modalActions } from "../../../redux/slices/modal";

interface ModalProps {
  children: ReactNode;
  staticBackdrop?: boolean;
}

const Content = ({ children, staticBackdrop }: ModalProps) => {
  const dispatch = useAppDispatch();

  const HideHandler: MouseEventHandler = useCallback(
    (event) => {
      event.preventDefault();
      if (staticBackdrop) return;
      dispatch(modalActions.hide());
    },
    [dispatch]
  );

  const PrevHideHandler: MouseEventHandler = useCallback(
    (event) => event.stopPropagation(),
    []
  );

  return (
    <div
      onClick={HideHandler}
      className="modal fade show"
      aria-labelledby="modal-profile"
      aria-modal="true"
      tabIndex={-1}
      role="dialog"
      style={{
        display: "block",
        backgroundColor: "rgba(0,0,0,0.7)",
      }}
    >
      <div className="modal-dialog modal-dialog-centered modal-fullscreen-xl-down">
        <div onClick={PrevHideHandler} className="modal-content">
          <div className="modal-body py-0">{children}</div>
        </div>
      </div>
    </div>
  );
};

const Modal = ({ children, staticBackdrop }: ModalProps) => {
  const isDisplayed = useAppSelector((state) => state.modal.isDisplayed);

  return (
    <>
      {isDisplayed &&
        ReactDOM.createPortal(
          <Content staticBackdrop={staticBackdrop}>{children}</Content>,
          document.body
        )}
    </>
  );
};

export default Modal;
