import { Link } from "react-router-dom";
import { ROUTES } from "../constants/routes";

const ResetPasswordPage = () => {
  return (
    <div className="container">
      <div className="row align-items-center justify-content-center min-vh-100 gx-0">
        <div className="col-12 col-md-5 col-lg-4">
          <div className="card card-shadow border-0">
            <div className="card-body">
              <div className="row g-6">
                <div className="col-12">
                  <div className="text-center">
                    <h3 className="fw-bold mb-2">Password Reset</h3>
                    <p>Enter your email to reset password</p>
                  </div>
                </div>

                <div className="col-12">
                  <div className="form-floating">
                    <input
                      type="email"
                      className="form-control"
                      id="resetpassword-email"
                      placeholder="Email"
                    />
                    <label htmlFor="resetpassword-email">Email</label>
                  </div>
                </div>

                <div className="col-12">
                  <button
                    className="btn btn-block btn-lg btn-primary w-100"
                    type="submit"
                  >
                    Send Reset Link
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <p>
              Remember your password? <Link to={ROUTES.login}>Sign in</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordPage;
