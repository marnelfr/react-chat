import React, { ChangeEvent, ChangeEventHandler, useCallback } from "react";
import LoupeSvg from "../UI/Svg/Loupe";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { searchActions, selectSearchKey } from "../../slices/search";

const Search = () => {
  const searchKey = useAppSelector(selectSearchKey);
  const dispatch = useAppDispatch();

  const handleChange: ChangeEventHandler = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      dispatch(searchActions.set(event.target.value));
    },
    [dispatch]
  );

  return (
    <div className="mb-6">
      <form>
        <div className="input-group">
          <div className="input-group-text input-group-text-custom">
            <div className="icon icon-lg">
              <LoupeSvg />
            </div>
          </div>

          <input
            type="text"
            className="form-control form-control-lg ps-0 form-control-custom"
            placeholder="Search in charts"
            aria-label="Search in charts"
            value={searchKey}
            onChange={handleChange}
          />
        </div>
      </form>
    </div>
  );
};

export default Search;
