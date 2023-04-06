import React, { ForwardedRef } from "react";

interface InputProps {
  label: string;
  type?: string;
  id: string;
  className?: string;
  placeholder?: string;
  value?: string;
  autoFocus?: boolean;
}
interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}
const Input = React.forwardRef(
  (
    { label, className, ...rest }: Props,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <div className="col-12 mb-6">
        <div className="form-floating">
          <input ref={ref} className={`form-control ${className}`} {...rest} />
          <label htmlFor={rest.id}>{label}</label>
        </div>
      </div>
    );
  }
);

export default Input;
