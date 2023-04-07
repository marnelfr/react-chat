import React, { ReactNode } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = (props: ButtonProps) => {
  const properties = { ...props };
  delete properties.children;
  return (
    <div className="col-12">
      <button
        className="btn btn-block btn-lg btn-primary w-100"
        {...properties}
      >
        {props.children}
      </button>
    </div>
  );
};

export default Button;
