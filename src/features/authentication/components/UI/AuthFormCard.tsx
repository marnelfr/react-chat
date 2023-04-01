import { ReactNode } from "react";

interface AuthFormCardProps {
  title: string;
  text: string;
  children: ReactNode;
}

const AuthFormCard = ({ title, text, children }: AuthFormCardProps) => {
  return (
    <div className="card card-shadow border-0">
      <div className="card-body">
        <div className="row g-6">
          <div className="col-12">
            <div className="text-center">
              <h3 className="fw-bold mb-2">{title}</h3>
              <p>{text}</p>
            </div>
          </div>

          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthFormCard;
