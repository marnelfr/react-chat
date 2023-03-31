import React, { MouseEventHandler, ReactNode, useCallback } from "react";

import BullBgSvg from "../UI/Svg/BullBg";
import { useAppDispatch } from "../../../../app/hooks";
import { modalActions } from "../../../../redux/slices/modal";
import Modal from "../../../../components/UI/Modal/Modal";
import image from "../../../../assets/img/logo.png";

const ModalProfile = () => {
  const dispatch = useAppDispatch();

  const CloseHandler: MouseEventHandler = useCallback(
    (event) => {
      event.preventDefault();
      dispatch(modalActions.hide());
    },
    [dispatch]
  );

  return (
    <Modal>
      {/* Header */}
      <div className="profile modal-gx-n">
        <div className="profile-img text-primary rounded-top-xl">
          <BullBgSvg />

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
          <div className="avatar avatar-xl">
            <img className="avatar-img" src={image} alt="#" />
          </div>

          <h4 className="mb-1">Marnel GNACADJA</h4>
          <p>gmlginolias@gmail.com</p>
        </div>
      </div>
      {/* Header */}

      <hr className="hr-bold modal-gx-n my-0" />

      {/* List */}
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <div className="row align-items-center gx-6">
            <div className="col">
              <h5>Location</h5>
              <p>USA, Houston</p>
            </div>

            <div className="col-auto">
              <div className="btn btn-sm btn-icon btn-dark">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-globe"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="2" y1="12" x2="22" y2="12"></line>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                </svg>
              </div>
            </div>
          </div>
        </li>

        <li className="list-group-item">
          <div className="row align-items-center gx-6">
            <div className="col">
              <h5>E-mail</h5>
              <p>william@studio.com</p>
            </div>

            <div className="col-auto">
              <div className="btn btn-sm btn-icon btn-dark">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-mail"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
            </div>
          </div>
        </li>

        <li className="list-group-item">
          <div className="row align-items-center gx-6">
            <div className="col">
              <h5>Phone</h5>
              <p>1-800-275-2273</p>
            </div>

            <div className="col-auto">
              <div className="btn btn-sm btn-icon btn-dark">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-phone-call"
                >
                  <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
            </div>
          </div>
        </li>
      </ul>
      {/* List  */}

      <hr className="hr-bold modal-gx-n my-0" />

      {/* List */}
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <div className="row align-items-center gx-6">
            <div className="col">
              <h5>Active status</h5>
              <p>Show when you're active.</p>
            </div>

            <div className="col-auto">
              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="profile-status"
                />
                <label
                  className="form-check-label"
                  htmlFor="profile-status"
                ></label>
              </div>
            </div>
          </div>
        </li>
      </ul>
      {/* List */}

      <hr className="hr-bold modal-gx-n my-0" />

      {/* List */}
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <a href="#" className="text-danger">
            Logout
          </a>
        </li>
      </ul>
      {/* List */}
    </Modal>
  );
};

export default ModalProfile;
