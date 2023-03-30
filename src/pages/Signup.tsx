import { Link } from "react-router-dom";
import { ROUTES } from "../constants/routes";

const SignupPage = () => {
  return (
    <div className="container">
      <div className="row align-items-center justify-content-center min-vh-100 gx-0">
        <div className="col-12 col-md-5 col-lg-4">
          <div className="card card-shadow border-0">
            <div className="card-body">
              <div className="row g-6">
                <div className="col-12">
                  <div className="text-center">
                    <h3 className="fw-bold mb-2">Sign Up</h3>
                    <p>Follow the easy steps</p>
                  </div>
                </div>

                <div className="col-12">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="signup-name"
                      placeholder="Name"
                    />
                    <label htmlFor="signup-name">Name</label>
                  </div>
                </div>

                <div className="col-12">
                  <div className="form-floating">
                    <input
                      type="email"
                      className="form-control"
                      id="signup-email"
                      placeholder="Email"
                    />
                    <label htmlFor="signup-email">Email</label>
                  </div>
                </div>

                <div className="col-12">
                  <div className="form-floating">
                    <input
                      type="password"
                      className="form-control"
                      id="signup-password"
                      placeholder="Password"
                    />
                    <label htmlFor="signup-password">Password</label>
                  </div>
                </div>

                <div className="col-12">
                  <button
                    className="btn btn-block btn-lg btn-primary w-100"
                    type="submit"
                  >
                    Create Account
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <p>
              Already have an account? <Link to={ROUTES.login}>Sign in</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
