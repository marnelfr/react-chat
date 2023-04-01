import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  type: "button" | "submit";
}

const Button = (props: ButtonProps) => {
  return (
    <div className="col-12">
      <button
        className="btn btn-block btn-lg btn-primary w-100"
        type={props.type}
      >
        {props.children}
      </button>
    </div>
  );
};

export default Button;
