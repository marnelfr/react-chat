import React from "react";

const Spinner = ({ xl }: { xl?: boolean }) => {
  let classes = "spinner-border";
  classes += xl ? "" : " spinner-border-sm";

  return (
    <div className={classes} role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  );
};

export default Spinner;
