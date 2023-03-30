import React from "react";

const SettingsAccount = () => {
  return (
    <div className="mt-8">
      <div className="d-flex align-items-center mb-4 px-6">
        <small className="text-muted me-auto">Account</small>
      </div>

      <div className="card border-0">
        <div className="card-body py-2">
          {/* Accordion */}
          <div className="accordion accordion-flush" id="accordion-profile">
            <div className="accordion-item">
              <div className="accordion-header" id="accordion-profile-1">
                <a
                  href="chat-group.html"
                  className="accordion-button text-reset collapsed"
                  data-bs-toggle="collapse"
                  data-bs-target="#accordion-profile-body-1"
                  aria-expanded="false"
                  aria-controls="accordion-profile-body-1"
                >
                  <div>
                    <h5>Profile settings</h5>
                    <p>Change your profile settings</p>
                  </div>
                </a>
              </div>

              <div
                id="accordion-profile-body-1"
                className="accordion-collapse collapse"
                aria-labelledby="accordion-profile-1"
                data-parent="#accordion-profile"
              >
                <div className="accordion-body">
                  <div className="form-floating mb-6">
                    <input
                      type="text"
                      className="form-control"
                      id="profile-name"
                      placeholder="Name"
                    />
                    <label htmlFor="profile-name">Name</label>
                  </div>

                  <div className="form-floating mb-6">
                    <input
                      type="email"
                      className="form-control"
                      id="profile-email"
                      placeholder="Email address"
                    />
                    <label htmlFor="profile-email">Email</label>
                  </div>

                  <div className="form-floating mb-6">
                    <input
                      type="text"
                      className="form-control"
                      id="profile-phone"
                      placeholder="Phone"
                    />
                    <label htmlFor="profile-phone">Phone</label>
                  </div>

                  <div className="form-floating mb-6">
                    <textarea
                      className="form-control"
                      placeholder="Bio"
                      id="profile-bio"
                      data-autosize="true"
                      style={{
                        minHeight: "120px",
                        overflow: "hidden",
                        overflowWrap: "break-word",
                        resize: "none",
                      }}
                    ></textarea>
                    <label htmlFor="profile-bio">Bio</label>
                  </div>

                  <button
                    type="button"
                    className="btn btn-block btn-lg btn-primary w-100"
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <div className="accordion-header">
                <div className="row align-items-center">
                  <div className="col">
                    <h5>Appearance</h5>
                    <p>Choose light or dark theme</p>
                  </div>
                  <div className="col-auto">
                    <a
                      className="switcher-btn text-reset"
                      href="#"
                      title="Themes"
                    >
                      <div
                        className="switcher-icon switcher-icon-dark icon icon-lg d-none"
                        data-theme-mode="dark"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="feather feather-moon"
                        >
                          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                        </svg>
                      </div>
                      <div
                        className="switcher-icon switcher-icon-light icon icon-lg"
                        data-theme-mode="light"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="feather feather-sun"
                        >
                          <circle cx="12" cy="12" r="5"></circle>
                          <line x1="12" y1="1" x2="12" y2="3"></line>
                          <line x1="12" y1="21" x2="12" y2="23"></line>
                          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                          <line
                            x1="18.36"
                            y1="18.36"
                            x2="19.78"
                            y2="19.78"
                          ></line>
                          <line x1="1" y1="12" x2="3" y2="12"></line>
                          <line x1="21" y1="12" x2="23" y2="12"></line>
                          <line
                            x1="4.22"
                            y1="19.78"
                            x2="5.64"
                            y2="18.36"
                          ></line>
                          <line
                            x1="18.36"
                            y1="5.64"
                            x2="19.78"
                            y2="4.22"
                          ></line>
                        </svg>
                      </div>
                    </a>
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

export default SettingsAccount;
