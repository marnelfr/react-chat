import Modal from "../../../../components/UI/Modal/Modal";
import React, { MouseEventHandler, useCallback } from "react";
import Spinner from "../../../../components/UI/Spinner";
import { modalActions } from "../../../../redux/slices/modal";
import { useAppDispatch } from "../../../../app/hooks";

/*
Until we add payment method to the app,
This modal will just show a message saying to the user that we're still working on the app, that we'll let
him know (sent him a mail) once we're done.
*/
const ModalSubscription = () => {
  const modalId = "modal-subscription";
  const dispatch = useAppDispatch();
  const CloseHandler: MouseEventHandler = useCallback(
    (event) => {
      event.preventDefault();
      dispatch(modalActions.hide(modalId));
    },
    [dispatch]
  );

  return (
    <Modal id={modalId}>
      <div className="profile modal-gx-n">
        <div className="profile-img text-primary rounded-top-xl">
          <div className="position-absolute top-0 start-0 py-6 px-5">
            <button
              onClick={CloseHandler}
              type="button"
              className="btn-close btn-close-white btn-close-arrow opacity-100"
              aria-label="Close"
            ></button>
          </div>
        </div>

        <div className="profile-body">
          <h2 className="mb-1 mt-5">Thank you</h2>
        </div>
      </div>
      {/* Header */}

      <hr className="hr-bold modal-gx-n my-0" />

      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <div className="row align-items-center gx-6">
            <h4 className="text-center mb-6">Thanks for testing our app</h4>
            <p className="text-center">
              We are currently working on it and will notify you by email once
              it's completed. Your patience is appreciated.
            </p>
            <div className="text-center">
              <button
                onClick={CloseHandler}
                className="btn-primary py-2 mt-6 w-25 rounded"
              >
                Close
              </button>
            </div>
          </div>
        </li>
      </ul>
    </Modal>
  );
};

export default ModalSubscription;
