import React from "react";

const SettingsSecurity = () => {
  return (
    <div className="mt-8">
      <div className="d-flex align-items-center my-4 px-6">
        <small className="text-muted me-auto">Security</small>
      </div>

      <div className="card border-0">
        <div className="card-body py-2">
          {/* Accordion */}
          <div className="accordion accordion-flush" id="accordion-security">
            <div className="accordion-item">
              <div className="accordion-header" id="accordion-security-1">
                <a
                  href="chat-group.html"
                  className="accordion-button text-reset collapsed"
                  data-bs-toggle="collapse"
                  data-bs-target="#accordion-security-body-1"
                  aria-expanded="false"
                  aria-controls="accordion-security-body-1"
                >
                  <div>
                    <h5>Password</h5>
                    <p>Change your password</p>
                  </div>
                </a>
              </div>

              <div
                id="accordion-security-body-1"
                className="accordion-collapse collapse"
                aria-labelledby="accordion-security-1"
                data-parent="#accordion-security"
              >
                <div className="accordion-body">
                  <form action="chat-group.html" autoComplete="on">
                    <div className="form-floating mb-6">
                      <input
                        type="password"
                        className="form-control"
                        id="profile-current-password"
                        placeholder="Current Password"
                        autoComplete=""
                      />
                      <label htmlFor="profile-current-password">
                        Current Password
                      </label>
                    </div>

                    <div className="form-floating mb-6">
                      <input
                        type="password"
                        className="form-control"
                        id="profile-new-password"
                        placeholder="New password"
                        autoComplete=""
                      />
                      <label htmlFor="profile-new-password">New password</label>
                    </div>

                    <div className="form-floating mb-6">
                      <input
                        type="password"
                        className="form-control"
                        id="profile-verify-password"
                        placeholder="Verify Password"
                        autoComplete=""
                      />
                      <label htmlFor="profile-verify-password">
                        Verify Password
                      </label>
                    </div>
                  </form>
                  <button
                    type="button"
                    className="btn btn-block btn-lg btn-primary w-100"
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>

            {/* Switch */}
            <div className="accordion-item">
              <div className="accordion-header">
                <div className="row align-items-center">
                  <div className="col">
                    <h5>Two-step verifications</h5>
                    <p>Enable two-step verifications</p>
                  </div>
                  <div className="col-auto">
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="accordion-security-check-1"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="accordion-security-check-1"
                      ></label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsSecurity;
