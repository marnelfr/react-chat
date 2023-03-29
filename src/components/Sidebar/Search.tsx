import React from "react";
import LoupeSvg from "../UI/Svg/Loupe";

const Search = () => {
  return (
    <div className="mb-6">
      <form action="#">
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
          />
        </div>
      </form>
    </div>
  );
};

export default Search;
