import React, { ReactNode } from "react";

type DividerProps = {
  children: ReactNode;
};

const Divider = ({ children }: DividerProps) => {
  return (
    <div className="message-divider">
      <small className="text-muted">{children}</small>
    </div>
  );
};

export default Divider;
