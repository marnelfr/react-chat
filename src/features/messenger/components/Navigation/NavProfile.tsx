import React, { MouseEventHandler, useCallback } from "react";
import { useAppDispatch } from "../../../../app/hooks";
import { modalActions } from "../../../../redux/slices/modal";

const NavProfile = () => {
  const dispatch = useAppDispatch();

  const ShowProfileHandler: MouseEventHandler = useCallback(
    (event) => {
      event.preventDefault();
      dispatch(modalActions.show());
    },
    [dispatch]
  );

  return (
    <li
      onClick={ShowProfileHandler}
      role="button"
      className="nav-item d-none d-xl-block"
    >
      <span className="nav-link p-0 mt-lg-2">
        <div className="avatar avatar-online mx-auto">
          <img
            className="avatar-img"
            src="https://eu.ui-avatars.com/api/?name=IA&rounded=true"
            alt="avatar"
          />
        </div>
      </span>
    </li>
  );
};

export default NavProfile;
