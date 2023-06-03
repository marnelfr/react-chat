import Modal from "../../../../components/UI/Modal/Modal";
import React, {
  FormEvent,
  MouseEventHandler,
  useCallback,
  useRef,
  useState,
} from "react";
import { modalActions } from "../../../../redux/slices/modal";
import { useAppDispatch } from "../../../../app/hooks";
import Spinner from "../../../../components/UI/Spinner";
import usePrivateAxios from "../../../auth/hooks/usePrivateAxios";

const ModalImpression = () => {
  const modalId = "modal-impression";
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const axios = usePrivateAxios();
  const ref = useRef<HTMLTextAreaElement>(null);

  const CloseHandler: MouseEventHandler = useCallback(
    (event) => {
      event.preventDefault();
      dispatch(modalActions.hide(modalId));
    },
    [dispatch]
  );

  const handleSubmit = useCallback(async (event: FormEvent) => {
    event.preventDefault();
    setIsLoading(true);
    await axios.post("feedback", {
      message: ref.current!.value,
    });
    setIsLoading(false);
    setFormSubmitted(true);
  }, []);

  return (
    <Modal id={modalId}>
      {/* Header */}
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
          <h2 className="mb-1 mt-5">Impression</h2>
        </div>
      </div>
      {/* Header */}

      <hr className="hr-bold modal-gx-n my-0" />

      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <div className="row align-items-center gx-6">
            <p className="text-center mb-6">
              {formSubmitted
                ? "Thank you for you feedback!"
                : "Please, let us know about your impression so far"}
            </p>
            {!formSubmitted && (
              <form onSubmit={handleSubmit}>
                <textarea
                  ref={ref}
                  autoFocus
                  className="form-control"
                ></textarea>
                <div className="text-center">
                  <button
                    type="submit"
                    className="btn-primary py-2 mt-6 w-25 rounded"
                  >
                    {isLoading ? <Spinner /> : "Send"}
                  </button>
                </div>
              </form>
            )}
            {formSubmitted && (
              <div className="text-center">
                <button
                  onClick={CloseHandler}
                  className="btn-primary py-2 mt-6 w-25 rounded"
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </li>
      </ul>
    </Modal>
  );
};

export default ModalImpression;
