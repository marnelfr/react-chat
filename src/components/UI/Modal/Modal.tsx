import ReactDOM from "react-dom";
import { MouseEventHandler, PropsWithChildren, useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { modalActions, ModalStateType } from "../../../redux/slices/modal";

interface ModalProps extends PropsWithChildren {
  id: string;
  staticBackdrop?: boolean;
}

const Content = ({ id, children, staticBackdrop }: ModalProps) => {
  const dispatch = useAppDispatch();

  const HideHandler: MouseEventHandler = useCallback(
    (event) => {
      event.preventDefault();
      if (staticBackdrop) return;
      dispatch(modalActions.hide(id));
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

const Modal = ({ id, children, staticBackdrop }: ModalProps) => {
  const modal = useAppSelector((state) =>
    state.modal.modals.find((m: ModalStateType) => m.id === id)
  );

  if (!modal) {
    console.error("error modal");
    return <></>;
  }

  return (
    <>
      {modal.isDisplayed &&
        ReactDOM.createPortal(
          <Content id={id} staticBackdrop={staticBackdrop}>
            {children}
          </Content>,
          document.body
        )}
    </>
  );
};

export default Modal;
