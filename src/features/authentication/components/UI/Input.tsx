interface InputProps {
  label: string;
  type?: string;
  id: string;
  className?: string;
  placeholder: string;
}

const Input = ({ label, className, ...rest }: InputProps) => {
  return (
    <div className="col-12 mb-6">
      <div className="form-floating">
        <input className={`form-control ${className}`} {...rest} />
        <label htmlFor={rest.id}>{label}</label>
      </div>
    </div>
  );
};

export default Input;
