import React from 'react';
import './App.css';
import './assets/css/dark.css'
import './assets/css/style.css'


function App() {
  return (
    <div className="layout overflow-hidden">
      {/* Navigation */}
      <nav className="navigation d-flex flex-column text-center navbar navbar-light hide-scrollbar">
        {/* Brand */}
        <a href="#" title="Messenger" className="d-none d-xl-block mb-6">
          <svg version="1.1" width="46px" height="46px" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                x="0px" y="0px" viewBox="0 0 46 46"
               enable-background="new 0 0 46 46">
                <polygon opacity="0.7" points="45,11 36,11 35.5,1 "></polygon>
            <polygon points="35.5,1 25.4,14.1 39,21 "></polygon>
            <polygon opacity="0.4" points="17,9.8 39,21 17,26 "></polygon>
            <polygon opacity="0.7" points="2,12 17,26 17,9.8 "></polygon>
            <polygon opacity="0.7" points="17,26 39,21 28,36 "></polygon>
            <polygon points="28,36 4.5,44 17,26 "></polygon>
            <polygon points="17,26 1,26 10.8,20.1 "></polygon>
            </svg>
        </a>

        {/* Nav items */}
        <ul
          className="d-flex nav navbar-nav flex-row flex-xl-column flex-grow-1 justify-content-between justify-content-xl-center align-items-center w-100 py-4 py-lg-2 px-lg-3"
          role="tablist">
          {/* Invisible item to center nav vertically */}
          <li className="nav-item d-none d-xl-block invisible flex-xl-grow-1">
            <a className="nav-link py-0 py-lg-8" href="chat-group.html" title="">
              <div className="icon icon-xl">
                {/*times icon*/}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                     className="feather feather-x">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </div>
            </a>
          </li>

          {/* New chat */}
          <li className="nav-item">
            <a className="nav-link py-0 py-lg-8" id="tab-create-chat" href="#" title="Create chat" data-bs-toggle="tab"
               role="tab">
              <div className="icon icon-xl">
                {/*pen icon*/}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                     className="feather feather-edit-3">
                  <path d="M12 20h9"></path>
                  <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                </svg>
              </div>
            </a>
          </li>

          {/* Chats */}
          <li className="nav-item">
            <a className="nav-link active py-0 py-lg-8" id="tab-chats" href="#" title="Chats" data-bs-toggle="tab"
               role="tab">
              <div className="icon icon-xl icon-badged">
                {/*message icon*/}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                     className="feather feather-message-square">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
                <div className="badge badge-circle bg-primary">
                  <span>4</span>
                </div>
              </div>
            </a>
          </li>

          {/* Notification */}
          <li className="nav-item d-xl-block flex-xl-grow-1">
            <a className="nav-link py-0 py-lg-8" id="tab-support" href="#" title="Support" data-bs-toggle="tab"
               role="tab">
              <div className="icon icon-xl icon-badged">
                {/* Notification icon */}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                     className="feather feather-bell">
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                  <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                </svg>
                <div className="badge badge-circle bg-warning">
                  <span>4</span>
                </div>
              </div>
            </a>
          </li>

          {/* Settings */}
          <li className="nav-item">
            <a className="nav-link py-0 py-lg-8" id="tab-settings" href="#" title="Settings" data-bs-toggle="tab"
               role="tab">
              <div className="icon icon-xl">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                     className="feather feather-settings">
                  <circle cx="12" cy="12" r="3"></circle>
                  <path
                    d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                </svg>
              </div>
            </a>
          </li>

          {/* Profile */}
          <li className="nav-item d-none d-xl-block">
            <a href="chat-group.html" className="nav-link p-0 mt-lg-2" data-bs-toggle="modal"
               data-bs-target="#modal-profile">
              <div className="avatar avatar-online mx-auto">
                <img className="avatar-img" src="assets/img/1.jpg" alt="" />
              </div>
            </a>
          </li>
        </ul>
      </nav>

      {/* Navigation */}

      {/* Sidebar */}
      <aside className="sidebar bg-light">
        <div className="tab-content h-100" role="tablist">
          {/* Charts */}
          <div className="tab-pane fade h-100 show active" id="tab-content-support" role="tabpanel">
            <div className="d-flex flex-column h-100">
              <div className="hide-scrollbar">
                <div className="container py-8">

                  {/* Title */}
                  <div className="mb-8">
                    <h2 className="fw-bold m-0">Chats</h2>
                  </div>

                  {/* Search */}
                  <div className="mb-6">
                    <form action="chat-group.html">
                      <div className="input-group">
                        <div className="input-group-text input-group-text-custom">
                          <div className="icon icon-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                 viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                 stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                 className="feather feather-search">
                              <circle cx="11" cy="11" r="8"></circle>
                              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                            </svg>
                          </div>
                        </div>

                        <input type="text" className="form-control form-control-lg ps-0 form-control-custom" placeholder="Search in charts" aria-label="Search in charts" />
                      </div>
                    </form>
                  </div>

                  {/*Current chart / Active chart*/}
                  <div className="card border-0">
                    <div className="card-body">
                      <div className="row align-items-center gx-5">
                        <div className="col-auto text-primary">
                          <svg version="1.1" width="46px" height="46px" fill="currentColor"
                               xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                               viewBox="0 0 46 46" enable-background="new 0 0 46 46">
                            <polygon opacity="0.7" points="45,11 36,11 35.5,1 "></polygon>
                            <polygon points="35.5,1 25.4,14.1 39,21 "></polygon>
                            <polygon opacity="0.4" points="17,9.8 39,21 17,26 "></polygon>
                            <polygon opacity="0.7" points="2,12 17,26 17,9.8 "></polygon>
                            <polygon opacity="0.7" points="17,26 39,21 28,36 "></polygon>
                            <polygon points="28,36 4.5,44 17,26 "></polygon>
                            <polygon points="17,26 1,26 10.8,20.1 "></polygon>
                          </svg>

                        </div>

                        <div className="col">
                          <h4 className="mb-1">Documentation</h4>
                          <p>Setup and build tools</p>
                        </div>

                        <div className="col-auto">
                          <a href="#"
                             className="btn btn-sm btn-icon btn-primary rounded-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                 viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                 stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                 className="feather feather-chevron-right">
                              <polyline points="9 18 15 12 9 6"></polyline>
                            </svg>
                          </a>
                        </div>
                      </div>

                    </div>
                  </div>
                  {/*Current chart / Active chart*/}

                  {/* List of old charts of the current user*/}
                  <div className="card-list mt-8">
                    <div className="card border-0">
                      <div className="card-body">
                        <div className="row align-items-center gx-0">
                          <div className="col">
                            <h4 className="mb-1">Sign In</h4>
                            <p>Sign in Page</p>
                          </div>
                          <div className="col-auto">
                            <a href="#"
                               className="btn btn-sm btn-icon btn-primary rounded-circle">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                   viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                   stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                   className="feather feather-chevron-right">
                                <polyline points="9 18 15 12 9 6"></polyline>
                              </svg>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="card border-0">
                      <div className="card-body">
                        <div className="row align-items-center gx-0">
                          <div className="col">
                            <h4 className="mb-1">Sign Up</h4>
                            <p>Sign Up Page</p>
                          </div>
                          <div className="col-auto">
                            <a href="#"
                               className="btn btn-sm btn-icon btn-primary rounded-circle">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                   viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                   stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                   className="feather feather-chevron-right">
                                <polyline points="9 18 15 12 9 6"></polyline>
                              </svg>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="card border-0">
                      <div className="card-body">
                        <div className="row align-items-center gx-0">
                          <div className="col">
                            <h4 className="mb-1">Password Reset</h4>
                            <p>Password Reset Page</p>
                          </div>
                          <div className="col-auto">
                            <a href="#" className="btn btn-sm btn-icon btn-primary rounded-circle">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                   viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                   stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                   className="feather feather-chevron-right">
                                <polyline points="9 18 15 12 9 6"></polyline>
                              </svg>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="card border-0">
                      <div className="card-body">
                        <div className="row align-items-center gx-0">
                          <div className="col">
                            <h4 className="mb-1">Lock screen</h4>
                            <p>Lock screen Page</p>
                          </div>
                          <div className="col-auto">
                            <a href="#" className="btn btn-sm btn-icon btn-primary rounded-circle">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                   viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                   stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                   className="feather feather-chevron-right">
                                <polyline points="9 18 15 12 9 6"></polyline>
                              </svg>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* List of old charts of the current user*/}
                </div>
              </div>
            </div>
          </div>

          {/* Notifications - Notices */}
          <div className="tab-pane fade h-100" id="tab-content-notifications" role="tabpanel">
            <div className="d-flex flex-column h-100">
              <div className="hide-scrollbar">
                <div className="container py-8">

                  {/* Title */}
                  <div className="mb-8">
                    <h2 className="fw-bold m-0">Notifications</h2>
                  </div>

                  {/* Search */}
                  <div className="mb-6">
                    <form action="chat-group.html">
                      <div className="input-group">
                        <div className="input-group-text">
                          <div className="icon icon-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                 viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                 stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                 className="feather feather-search">
                              <circle cx="11" cy="11" r="8"></circle>
                              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                            </svg>
                          </div>
                        </div>

                        <input type="text" className="form-control form-control-lg ps-0"
                               placeholder="Search messages or users"
                               aria-label="Search for messages or users..." />
                      </div>
                    </form>
                  </div>

                  {/* Today */}
                  <div className="card-list">
                    {/* Title */}
                    <div className="d-flex align-items-center my-4 px-6">
                      <small className="text-muted me-auto">Today</small>

                      <a href="chat-group.html" className="text-muted small">Clear all</a>
                    </div>
                    {/* Title */}

                    {/* Card */}
                    <div className="card border-0 mb-5">
                      <div className="card-body">

                        <div className="row gx-5">
                          <div className="col-auto">
                            {/* Avatar */}
                            <a href="chat-group.html" className="avatar">
                              <img className="avatar-img" src="assets/img/11.jpg" alt="" />

                                <div
                                  className="badge badge-circle bg-primary border-outline position-absolute bottom-0 end-0">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                       viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                       stroke-width="2" stroke-linecap="round"
                                       stroke-linejoin="round" className="feather feather-user">
                                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                    <circle cx="12" cy="7" r="4"></circle>
                                  </svg>
                                </div>
                            </a>
                          </div>

                          <div className="col">
                            <div className="d-flex align-items-center mb-2">
                              <h5 className="me-auto mb-0">
                                <a href="chat-group.html">Mila White</a>
                              </h5>
                              <span className="extra-small text-muted ms-2">08:45 PM</span>
                            </div>

                            <div className="d-flex">
                              <div className="me-auto">Send you a friend request.</div>

                              <div className="dropdown ms-5">
                                <a className="icon text-muted" href="chat-group.html"
                                   role="button" data-bs-toggle="dropdown"
                                   aria-expanded="false">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                       height="24" viewBox="0 0 24 24" fill="none"
                                       stroke="currentColor" stroke-width="2"
                                       stroke-linecap="round" stroke-linejoin="round"
                                       className="feather feather-more-horizontal">
                                    <circle cx="12" cy="12" r="1"></circle>
                                    <circle cx="19" cy="12" r="1"></circle>
                                    <circle cx="5" cy="12" r="1"></circle>
                                  </svg>
                                </a>
                                <ul className="dropdown-menu">
                                  <li><a className="dropdown-item" href="chat-group.html">Show
                                    less often</a></li>
                                  <li><a className="dropdown-item" href="chat-group.html">Hide</a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="card-footer">
                        <div className="row gx-4">
                          <div className="col">
                            <a href="chat-group.html" className="btn btn-sm btn-soft-primary w-100">Hide</a>
                          </div>
                          <div className="col">
                            <a href="chat-group.html" className="btn btn-sm btn-primary w-100">Confirm</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Card */}

                    {/* Card */}
                    <div className="card border-0 mb-5">
                      <div className="card-body">

                        <div className="row gx-5">
                          <div className="col-auto">
                            {/* Avatar */}
                            <a href="chat-group.html" className="avatar">
                              <span className="avatar-text bg-warning">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                       height="24" viewBox="0 0 24 24" fill="none"
                                       stroke="currentColor" stroke-width="2"
                                       stroke-linecap="round" stroke-linejoin="round"
                                       className="feather feather-star"><polygon
                                    points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                              </span>

                              <div
                                className="badge badge-circle bg-warning border-outline position-absolute bottom-0 end-0">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                     viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                     stroke-width="2" stroke-linecap="round"
                                     stroke-linejoin="round" className="feather feather-gift">
                                  <polyline points="20 12 20 22 4 22 4 12"></polyline>
                                  <rect x="2" y="7" width="20" height="5"></rect>
                                  <line x1="12" y1="22" x2="12" y2="7"></line>
                                  <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path>
                                  <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path>
                                </svg>
                              </div>
                            </a>
                          </div>

                          <div className="col">
                            <div className="d-flex align-items-center mb-2">
                              <h5 className="me-auto mb-0">
                                <a href="chat-group.html">Congratulations!</a>
                              </h5>
                              <span className="extra-small text-muted ms-2">08:45 PM</span>
                            </div>

                            <div className="d-flex">
                              <div className="me-auto">You win 5GB free disk space.</div>

                              <div className="dropdown ms-5">
                                <a className="icon text-muted" href="chat-group.html"
                                   role="button" data-bs-toggle="dropdown"
                                   aria-expanded="false">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                       height="24" viewBox="0 0 24 24" fill="none"
                                       stroke="currentColor" stroke-width="2"
                                       stroke-linecap="round" stroke-linejoin="round"
                                       className="feather feather-more-horizontal">
                                    <circle cx="12" cy="12" r="1"></circle>
                                    <circle cx="19" cy="12" r="1"></circle>
                                    <circle cx="5" cy="12" r="1"></circle>
                                  </svg>
                                </a>
                                <ul className="dropdown-menu">
                                  <li><a className="dropdown-item" href="chat-group.html">Show
                                    less often</a></li>
                                  <li><a className="dropdown-item" href="chat-group.html">Hide</a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Card */}
                  </div>
                  {/* Today */}

                  {/* Yesterday */}
                  <div className="card-list mt-8">
                    {/* Title */}
                    <div className="d-flex align-items-center my-4 px-6">
                      <small className="text-muted me-auto">Yesterday</small>

                      <a href="chat-group.html" className="text-muted small">Clear all</a>
                    </div>
                    {/* Title */}

                    {/* Card */}
                    <div className="card border-0 mb-5">
                      <div className="card-body">

                        <div className="row gx-5">
                          <div className="col-auto">
                            {/* Avatar */}
                            <div className="avatar">
                          <span className="avatar-text bg-success">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                   height="24" viewBox="0 0 24 24" fill="none"
                                   stroke="currentColor" stroke-width="2"
                                   stroke-linecap="round" stroke-linejoin="round"
                                   className="feather feather-lock">
                                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                              </svg>
                          </span>

                              <div
                                className="badge badge-circle bg-success border-outline position-absolute bottom-0 end-0">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                     viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                     stroke-width="2" stroke-linecap="round"
                                     stroke-linejoin="round"
                                     className="feather feather-refresh-ccw">
                                  <polyline points="1 4 1 10 7 10"></polyline>
                                  <polyline points="23 20 23 14 17 14"></polyline>
                                  <path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"></path>
                                </svg>
                              </div>
                            </div>
                          </div>

                          <div className="col">
                            <div className="d-flex align-items-center mb-2">
                              <h5 className="me-auto mb-0">Password Changed</h5>
                              <span className="extra-small text-muted ms-2">08:45 PM</span>
                            </div>

                            <div className="d-flex">
                              <div className="me-auto">
                                Your password has been <br/>
                                updated successfully.
                              </div>

                              <div className="dropdown ms-5">
                                <a className="icon text-muted" href="chat-group.html"
                                   role="button" data-bs-toggle="dropdown"
                                   aria-expanded="false">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                       height="24" viewBox="0 0 24 24" fill="none"
                                       stroke="currentColor" stroke-width="2"
                                       stroke-linecap="round" stroke-linejoin="round"
                                       className="feather feather-more-horizontal">
                                    <circle cx="12" cy="12" r="1"></circle>
                                    <circle cx="19" cy="12" r="1"></circle>
                                    <circle cx="5" cy="12" r="1"></circle>
                                  </svg>
                                </a>
                                <ul className="dropdown-menu">
                                  <li><a className="dropdown-item" href="chat-group.html">Show
                                    less often</a></li>
                                  <li><a className="dropdown-item" href="chat-group.html">Hide</a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>

                      </div>
                    </div>
                    {/* Card */}
                  </div>
                  {/* Yesterday */}

                  {/* Previous */}
                  <div className="card-list mt-8">

                    {/* Title */}
                    <div className="d-flex align-items-center my-4 px-6">
                      <small className="text-muted me-auto">Previous</small>

                      <a href="chat-group.html" className="text-muted small">Clear all</a>
                    </div>
                    {/* Title */}

                    {/* Card */}
                    <div className="card border-0">
                      <div className="card-body">

                        <div className="row gx-5">
                          <div className="col-auto">
                            {/* Avatar */}
                            <a href="chat-group.html" className="avatar">
                              <img className="avatar-img" src="assets/img/7.jpg" alt=""/>

                                <div
                                  className="badge badge-circle bg-primary border-outline position-absolute bottom-0 end-0">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                       viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                       stroke-width="2" stroke-linecap="round"
                                       stroke-linejoin="round" className="feather feather-image">
                                    <rect x="3" y="3" width="18" height="18" rx="2"
                                          ry="2"></rect>
                                    <circle cx="8.5" cy="8.5" r="1.5"></circle>
                                    <polyline points="21 15 16 10 5 21"></polyline>
                                  </svg>
                                </div>
                            </a>
                          </div>

                          <div className="col">
                            <div className="d-flex align-items-center mb-2">
                              <h5 className="me-auto mb-0">
                                <a href="chat-group.html">William Wright</a>
                              </h5>
                              <span className="extra-small text-muted ms-2">08:45 PM</span>
                            </div>

                            <div className="d-flex">
                              <div className="me-auto">Updated profile picture.</div>

                              <div className="dropdown ms-5">
                                <a className="icon text-muted" href="chat-group.html"
                                   role="button" data-bs-toggle="dropdown"
                                   aria-expanded="false">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                       height="24" viewBox="0 0 24 24" fill="none"
                                       stroke="currentColor" stroke-width="2"
                                       stroke-linecap="round" stroke-linejoin="round"
                                       className="feather feather-more-horizontal">
                                    <circle cx="12" cy="12" r="1"></circle>
                                    <circle cx="19" cy="12" r="1"></circle>
                                    <circle cx="5" cy="12" r="1"></circle>
                                  </svg>
                                </a>
                                <ul className="dropdown-menu">
                                  <li><a className="dropdown-item" href="chat-group.html">Show
                                    less often</a></li>
                                  <li><a className="dropdown-item" href="chat-group.html">Hide</a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>

                      </div>
                    </div>
                    {/* Card */}

                    {/* Card */}
                    <div className="card border-0">
                      <div className="card-body">

                        <div className="row gx-5">
                          <div className="col-auto">
                            {/* Avatar */}
                            <a href="chat-group.html" className="avatar">
                              <img className="avatar-img" src="assets/img/9.jpg" alt=""/>

                                <div
                                  className="badge badge-circle bg-primary border-outline position-absolute bottom-0 end-0">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                       viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                       stroke-width="2" stroke-linecap="round"
                                       stroke-linejoin="round"
                                       className="feather feather-message-circle">
                                    <path
                                      d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                                  </svg>
                                </div>
                            </a>
                          </div>

                          <div className="col">
                            <div className="d-flex align-items-center mb-2">
                              <h5 className="me-auto mb-0">
                                <a href="chat-group.html">Don Knight</a>
                              </h5>
                              <span className="extra-small text-muted ms-2">08:45 PM</span>
                            </div>

                            <div className="d-flex">
                              {/* <div class="me-auto">Removed you from the chat <a href="#" class="text-reset">Bootstrap Community</a>.</div> */}
                              <div className="me-auto">Send you a private message.</div>

                              <div className="dropdown ms-5">
                                <a className="icon text-muted" href="chat-group.html"
                                   role="button" data-bs-toggle="dropdown"
                                   aria-expanded="false">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                       height="24" viewBox="0 0 24 24" fill="none"
                                       stroke="currentColor" stroke-width="2"
                                       stroke-linecap="round" stroke-linejoin="round"
                                       className="feather feather-more-horizontal">
                                    <circle cx="12" cy="12" r="1"></circle>
                                    <circle cx="19" cy="12" r="1"></circle>
                                    <circle cx="5" cy="12" r="1"></circle>
                                  </svg>
                                </a>
                                <ul className="dropdown-menu">
                                  <li><a className="dropdown-item" href="chat-group.html">Show
                                    less often</a></li>
                                  <li><a className="dropdown-item" href="chat-group.html">Hide</a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>

                      </div>
                    </div>
                    {/* Card */}

                    {/* Card */}
                    <div className="card border-0">
                      <div className="card-body">

                        <div className="row gx-5">
                          <div className="col-auto">
                            {/* Avatar */}
                            <a href="#" className="avatar avatar-badged" data-theme-toggle="tab">
                                                            <span className="avatar-text bg-danger">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                                                     height="24" viewBox="0 0 24 24" fill="none"
                                                                     stroke="currentColor" stroke-width="2"
                                                                     stroke-linecap="round" stroke-linejoin="round"
                                                                     className="feather feather-bell"><path
                                                                  d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path
                                                                  d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
                                                            </span>

                              <div
                                className="badge badge-circle bg-danger border-outline position-absolute bottom-0 end-0">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                     viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                     stroke-width="2" stroke-linecap="round"
                                     stroke-linejoin="round" className="feather feather-power">
                                  <path d="M18.36 6.64a9 9 0 1 1-12.73 0"></path>
                                  <line x1="12" y1="2" x2="12" y2="12"></line>
                                </svg>
                              </div>
                            </a>
                          </div>

                          <div className="col">
                            <div className="d-flex align-items-center mb-2">
                              <h5 className="me-auto mb-0">
                                <a href="#" data-theme-toggle="tab">
                                  Notifications
                                </a>
                              </h5>
                              <span className="extra-small text-muted ms-2">08:45 PM</span>
                            </div>

                            <div className="d-flex">
                              <div className="me-auto">Please turn on notifications.</div>

                              <div className="dropdown ms-5">
                                <a className="icon text-muted" href="chat-group.html"
                                   role="button" data-bs-toggle="dropdown"
                                   aria-expanded="false">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                       height="24" viewBox="0 0 24 24" fill="none"
                                       stroke="currentColor" stroke-width="2"
                                       stroke-linecap="round" stroke-linejoin="round"
                                       className="feather feather-more-horizontal">
                                    <circle cx="12" cy="12" r="1"></circle>
                                    <circle cx="19" cy="12" r="1"></circle>
                                    <circle cx="5" cy="12" r="1"></circle>
                                  </svg>
                                </a>
                                <ul className="dropdown-menu">
                                  <li><a className="dropdown-item" href="chat-group.html">Show
                                    less often</a></li>
                                  <li><a className="dropdown-item" href="chat-group.html">Hide</a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                  {/* Card */}
                </div>
              </div>
            </div>
          </div>

          {/* Settings */}
          <div className="tab-pane fade h-100" id="tab-content-settings" role="tabpanel">
            <div className="d-flex flex-column h-100">
              <div className="hide-scrollbar">
                <div className="container py-8">

                  {/* Title */}
                  <div className="mb-8">
                    <h2 className="fw-bold m-0">Settings</h2>
                  </div>

                  {/* Search */}
                  <div className="mb-6">
                    <form action="chat-group.html">
                      <div className="input-group">
                        <div className="input-group-text">
                          <div className="icon icon-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                 viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                 stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                 className="feather feather-search">
                              <circle cx="11" cy="11" r="8"></circle>
                              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                            </svg>
                          </div>
                        </div>

                        <input type="text" className="form-control form-control-lg ps-0"
                               placeholder="Search messages or users nel3"
                               aria-label="Search for messages or users..." />
                      </div>
                    </form>
                  </div>

                  {/* Profile */}
                  <div className="card border-0">
                    <div className="card-body">
                      <div className="row align-items-center gx-5">
                        <div className="col-auto">
                          <div className="avatar">
                            <img src="assets/img/1.jpg" alt="#" className="avatar-img"/>

                              <div
                                className="badge badge-circle bg-secondary border-outline position-absolute bottom-0 end-0">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                     viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                     stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                     className="feather feather-image">
                                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                                  <circle cx="8.5" cy="8.5" r="1.5"></circle>
                                  <polyline points="21 15 16 10 5 21"></polyline>
                                </svg>
                              </div>
                              <input id="upload-profile-photo" className="d-none" type="file" />
                            <label className="stretched-label mb-0" htmlFor="upload-profile-photo"></label>
                          </div>
                        </div>
                        <div className="col">
                          <h5>William Pearson</h5>
                          <p>wright@studio.com</p>
                        </div>
                        <div className="col-auto">
                          <a href="chat-group.html" className="text-muted">
                            <div className="icon">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                   viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                   stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                   className="feather feather-log-out">
                                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                                <polyline points="16 17 21 12 16 7"></polyline>
                                <line x1="21" y1="12" x2="9" y2="12"></line>
                              </svg>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Profile */}

                  {/* Account */}
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
                              <a href="chat-group.html"
                                 className="accordion-button text-reset collapsed"
                                 data-bs-toggle="collapse"
                                 data-bs-target="#accordion-profile-body-1" aria-expanded="false"
                                 aria-controls="accordion-profile-body-1">
                                <div>
                                  <h5>Profile settings</h5>
                                  <p>Change your profile settings</p>
                                </div>
                              </a>
                            </div>

                            <div id="accordion-profile-body-1" className="accordion-collapse collapse"
                                 aria-labelledby="accordion-profile-1"
                                 data-parent="#accordion-profile">
                              <div className="accordion-body">
                                <div className="form-floating mb-6">
                                  <input type="text" className="form-control" id="profile-name" placeholder="Name" />
                                    <label htmlFor="profile-name">Name</label>
                                </div>

                                <div className="form-floating mb-6">
                                  <input type="email" className="form-control" id="profile-email" placeholder="Email address" />
                                    <label htmlFor="profile-email">Email</label>
                                </div>

                                <div className="form-floating mb-6">
                                  <input type="text" className="form-control" id="profile-phone" placeholder="Phone" />
                                    <label htmlFor="profile-phone">Phone</label>
                                </div>

                                <div className="form-floating mb-6">
                                  <textarea
                                    className="form-control" placeholder="Bio" id="profile-bio" data-autosize="true"
                                    style={{minHeight: '120px', overflow: 'hidden', overflowWrap: 'break-word', resize: 'none'}}
                                  ></textarea>
                                  <label htmlFor="profile-bio">Bio</label>
                                </div>

                                <button type="button"
                                        className="btn btn-block btn-lg btn-primary w-100">Save
                                </button>
                              </div>
                            </div>
                          </div>

                          <div className="accordion-item">
                            <div className="accordion-header" id="accordion-profile-2">
                              <a href="chat-group.html"
                                 className="accordion-button text-reset collapsed"
                                 data-bs-toggle="collapse"
                                 data-bs-target="#accordion-profile-body-2" aria-expanded="false"
                                 aria-controls="accordion-profile-body-2">
                                <div>
                                  <h5>Connected accounts</h5>
                                  <p>Connect with your accounts</p>
                                </div>
                              </a>
                            </div>

                            <div id="accordion-profile-body-2" className="accordion-collapse collapse"
                                 aria-labelledby="accordion-profile-2"
                                 data-parent="#accordion-profile">
                              <div className="accordion-body">
                                <div className="form-floating mb-6">
                                  <input type="text" className="form-control" id="profile-twitter"
                                         placeholder="Twitter" />
                                    <label htmlFor="profile-twitter">Twitter</label>
                                </div>

                                <div className="form-floating mb-6">
                                  <input type="text" className="form-control"
                                         id="profile-facebook" placeholder="Facebook" />
                                    <label htmlFor="profile-facebook">Facebook</label>
                                </div>

                                <div className="form-floating mb-6">
                                  <input type="text" className="form-control"
                                         id="profile-instagram" placeholder="Instagram" />
                                    <label htmlFor="profile-instagram">Instagram</label>
                                </div>

                                <button type="button"
                                        className="btn btn-block btn-lg btn-primary w-100">Save
                                </button>
                              </div>
                            </div>
                          </div>

                          {/* Switch */}
                          <div className="accordion-item">
                            <div className="accordion-header">
                              <div className="row align-items-center">
                                <div className="col">
                                  <h5>Appearance</h5>
                                  <p>Choose light or dark theme</p>
                                </div>
                                <div className="col-auto">
                                  <a className="switcher-btn text-reset" href="#" title="Themes">
                                    <div className="switcher-icon switcher-icon-dark icon icon-lg d-none"
                                         data-theme-mode="dark">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                           height="24" viewBox="0 0 24 24" fill="none"
                                           stroke="currentColor" stroke-width="2"
                                           stroke-linecap="round" stroke-linejoin="round"
                                           className="feather feather-moon">
                                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                                      </svg>
                                    </div>
                                    <div className="switcher-icon switcher-icon-light icon icon-lg"
                                         data-theme-mode="light">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                           height="24" viewBox="0 0 24 24" fill="none"
                                           stroke="currentColor" stroke-width="2"
                                           stroke-linecap="round" stroke-linejoin="round"
                                           className="feather feather-sun">
                                        <circle cx="12" cy="12" r="5"></circle>
                                        <line x1="12" y1="1" x2="12" y2="3"></line>
                                        <line x1="12" y1="21" x2="12" y2="23"></line>
                                        <line x1="4.22" y1="4.22" x2="5.64"
                                              y2="5.64"></line>
                                        <line x1="18.36" y1="18.36" x2="19.78"
                                              y2="19.78"></line>
                                        <line x1="1" y1="12" x2="3" y2="12"></line>
                                        <line x1="21" y1="12" x2="23" y2="12"></line>
                                        <line x1="4.22" y1="19.78" x2="5.64"
                                              y2="18.36"></line>
                                        <line x1="18.36" y1="5.64" x2="19.78"
                                              y2="4.22"></line>
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
                  {/* Account */}

                  {/* Security */}
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
                              <a href="chat-group.html"
                                 className="accordion-button text-reset collapsed"
                                 data-bs-toggle="collapse"
                                 data-bs-target="#accordion-security-body-1" aria-expanded="false"
                                 aria-controls="accordion-security-body-1">
                                <div>
                                  <h5>Password</h5>
                                  <p>Change your password</p>
                                </div>
                              </a>
                            </div>

                            <div id="accordion-security-body-1" className="accordion-collapse collapse"
                                 aria-labelledby="accordion-security-1"
                                 data-parent="#accordion-security">
                              <div className="accordion-body">
                                <form action="chat-group.html" autoComplete="on">
                                  <div className="form-floating mb-6">
                                    <input type="password" className="form-control"
                                           id="profile-current-password"
                                           placeholder="Current Password" autoComplete="" />
                                      <label htmlFor="profile-current-password">Current
                                        Password</label>
                                  </div>

                                  <div className="form-floating mb-6">
                                    <input type="password" className="form-control"
                                           id="profile-new-password"
                                           placeholder="New password" autoComplete="" />
                                      <label htmlFor="profile-new-password">New password</label>
                                  </div>

                                  <div className="form-floating mb-6">
                                    <input type="password" className="form-control"
                                           id="profile-verify-password"
                                           placeholder="Verify Password" autoComplete="" />
                                      <label htmlFor="profile-verify-password">Verify
                                        Password</label>
                                  </div>
                                </form>
                                <button type="button"
                                        className="btn btn-block btn-lg btn-primary w-100">Save
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
                                    <input className="form-check-input" type="checkbox"
                                           id="accordion-security-check-1" />
                                      <label className="form-check-label"
                                             htmlFor="accordion-security-check-1"></label>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Security */}

                  {/* Storage */}
                  <div className="mt-8">
                    <div className="d-flex align-items-center my-4 px-6">
                      <small className="text-muted me-auto">Storage</small>

                      <div className="flex align-items-center text-muted">
                        <a href="chat-group.html" className="text-muted small">Clear storage</a>

                        <div className="icon icon-xs">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                               viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                               stroke-linecap="round" stroke-linejoin="round"
                               className="feather feather-bar-chart-2">
                            <line x1="18" y1="20" x2="18" y2="10"></line>
                            <line x1="12" y1="20" x2="12" y2="4"></line>
                            <line x1="6" y1="20" x2="6" y2="14"></line>
                          </svg>
                        </div>
                      </div>
                    </div>

                    <div className="card border-0">
                      <div className="card-body py-2">
                        {/* Accordion */}
                        <div className="accordion accordion-flush" id="accordion-storage">
                          <div className="accordion-item">
                            <div className="accordion-header" id="accordion-storage-1">
                              <a href="chat-group.html"
                                 className="accordion-button text-reset collapsed"
                                 data-bs-toggle="collapse"
                                 data-bs-target="#accordion-storage-body-1" aria-expanded="false"
                                 aria-controls="accordion-storage-body-1">
                                <div>
                                  <h5>Cache</h5>
                                  <p>Maximum cache size</p>
                                </div>
                              </a>
                            </div>

                            <div id="accordion-storage-body-1" className="accordion-collapse collapse"
                                 aria-labelledby="accordion-storage-1"
                                 data-parent="#accordion-storage">
                              <div className="accordion-body">
                                <div className="row justify-content-between mb-4">
                                  <div className="col-auto">
                                    <small>2 GB</small>
                                  </div>
                                  <div className="col-auto">
                                    <small>4 GB</small>
                                  </div>
                                  <div className="col-auto">
                                    <small>6 GB</small>
                                  </div>
                                  <div className="col-auto">
                                    <small>8 GB</small>
                                  </div>
                                </div>
                                <input type="range" className="form-range" min="1" max="4" step="1"
                                       id="custom-range-1" />
                              </div>
                            </div>
                          </div>

                          <div className="accordion-item">
                            <div className="accordion-header">
                              <div className="row align-items-center">
                                <div className="col">
                                  <h5>Keep media</h5>
                                  <p>Photos, videos and other files</p>
                                </div>
                                <div className="col-auto">
                                  <div className="form-check form-switch">
                                    <input className="form-check-input" type="checkbox"
                                           id="accordion-storage-check-1" />
                                      <label className="form-check-label"
                                             htmlFor="accordion-storage-check-1"></label>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Storage */}

                  {/* Notifications */}
                  <div className="mt-8">
                    <div className="d-flex align-items-center my-4 px-6">
                      <small className="text-muted me-auto">Notifications</small>
                    </div>

                    {/* Accordion */}
                    <div className="card border-0">
                      <div className="card-body py-2">
                        <div className="accordion accordion-flush" id="accordion-notifications">
                          <div className="accordion-item">
                            <div className="accordion-header" id="accordion-notifications-1">
                              <a href="chat-group.html"
                                 className="accordion-button text-reset collapsed"
                                 data-bs-toggle="collapse"
                                 data-bs-target="#accordion-notifications-body-1"
                                 aria-expanded="false"
                                 aria-controls="accordion-notifications-body-1">
                                <div>
                                  <h5>Message</h5>
                                  <p>Set custom notifications for users</p>
                                </div>
                              </a>
                            </div>

                            <div id="accordion-notifications-body-1"
                                 className="accordion-collapse collapse"
                                 aria-labelledby="accordion-notifications-1"
                                 data-parent="#accordion-notifications">
                              <div className="accordion-body">
                                <div className="row align-items-center">
                                  <div className="col">
                                    <h5>Text</h5>
                                    <p>Show text in notifications</p>
                                  </div>

                                  <div className="col-auto">
                                    <div className="form-check form-switch">
                                      <input className="form-check-input" type="checkbox"
                                             id="accordion-notifications-check-1" />
                                        <label className="form-check-label"
                                               htmlFor="accordion-notifications-check-1"></label>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="accordion-item">
                            <div className="accordion-header">
                              <div className="row align-items-center">
                                <div className="col">
                                  <h5>Sound</h5>
                                  <p>Enable sound notifications</p>
                                </div>
                                <div className="col-auto">
                                  <div className="form-check form-switch">
                                    <input className="form-check-input" type="checkbox"
                                           id="accordion-notifications-check-3" />
                                      <label className="form-check-label"
                                             htmlFor="accordion-notifications-check-3"></label>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="accordion-item">
                            <div className="accordion-header">
                              <div className="row align-items-center">
                                <div className="col">
                                  <h5>Browser notifications</h5>
                                  <p>Enable browser notifications</p>
                                </div>
                                <div className="col-auto">
                                  <div className="form-check form-switch">
                                    <input className="form-check-input" type="checkbox"
                                           id="accordion-notifications-check-2" checked />
                                      <label className="form-check-label"
                                             htmlFor="accordion-notifications-check-2"></label>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Notifications */}

                  {/* Devices */}
                  <div className="mt-8">
                    <div className="d-flex align-items-center my-4 px-6">
                      <small className="text-muted me-auto">Devices</small>

                      <div className="flex align-items-center text-muted">
                        <a href="chat-group.html" className="text-muted small">End all sessions</a>

                        <div className="icon icon-xs">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                               viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                               stroke-linecap="round" stroke-linejoin="round"
                               className="feather feather-log-out">
                            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                            <polyline points="16 17 21 12 16 7"></polyline>
                            <line x1="21" y1="12" x2="9" y2="12"></line>
                          </svg>
                        </div>
                      </div>
                    </div>

                    <div className="card border-0">
                      <div className="card-body py-3">

                        <ul className="list-group list-group-flush">
                          <li className="list-group-item">
                            <div className="row align-items-center">
                              <div className="col">
                                <h5>Windows ⋅ USA, Houston</h5>
                                <p>Today at 2:48 pm ⋅ Browser: Chrome</p>
                              </div>
                              <div className="col-auto">
                                <span className="text-primary extra-small">active</span>
                              </div>
                            </div>
                          </li>

                          <li className="list-group-item">
                            <div className="row align-items-center">
                              <div className="col">
                                <h5>iPhone ⋅ USA, Houston</h5>
                                <p>Yesterday at 2:48 pm ⋅ Browser: Chrome</p>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* Devices */}

                </div>
              </div>
            </div>
          </div>
        </div>
      </aside>
      {/* Sidebar */}

      {/* Chat */}
      <main className="main is-visible" data-dropzone-area="">
        <div className="container h-100">

          <div className="d-flex flex-column h-100 position-relative">
            {/* Chat: Header */}
            <div className="chat-header border-bottom py-4 py-lg-7">
              <div className="row align-items-center">

                {/* Mobile: show chat list */}
                <div className="col-2 d-xl-none">
                  <a className="icon icon-lg text-muted" href="#" data-toggle-chat="">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                         stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                         className="feather feather-chevron-left">
                      <polyline points="15 18 9 12 15 6"></polyline>
                    </svg>
                  </a>
                </div>
                {/* Mobile: show chat list */}

                {/* Content */}
                <div className="col-8 col-xl-12">
                  <div className="row align-items-center text-center text-xl-start">
                    {/* Toolbar */}
                    <div className="col-xl-6 d-none d-xl-block">
                      <div className="row align-items-center justify-content-end gx-6">
                        <div className="col-auto">
                          <a href="chat-group.html" className="icon icon-lg text-muted">
                            {/*todo: change by a refresher icon*/}
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                 viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                 stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                 className="feather feather-more-horizontal">
                              <circle cx="12" cy="12" r="1"></circle>
                              <circle cx="19" cy="12" r="1"></circle>
                              <circle cx="5" cy="12" r="1"></circle>
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* Toolbar */}
                  </div>
                </div>
                {/* Content */}

                {/* Mobile: refresher */}
                <div className="col-2 d-xl-none text-end">
                  <div className="dropdown">
                    <a className="text-muted" href="#" role="button" aria-expanded="false">
                      <div className="icon icon-lg">
                        {/*todo: change by a refresher icon*/}
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                             viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                             stroke-linecap="round" stroke-linejoin="round"
                             className="feather feather-more-vertical">
                          <circle cx="12" cy="12" r="1"></circle>
                          <circle cx="12" cy="5" r="1"></circle>
                          <circle cx="12" cy="19" r="1"></circle>
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
                {/* Mobile: refresher */}

              </div>
            </div>
            {/* Chat: Header */}

            {/* Chat: Content */}
            <div className="chat-body hide-scrollbar flex-1 h-100">
              <div className="chat-body-inner" style={{paddingBottom: '87px'}}>
                <div className="py-6 py-lg-12">

                  {/* Message */}
                  <div className="message">
                    <a href="chat-group.html" data-bs-toggle="modal"
                       data-bs-target="#modal-user-profile" className="avatar avatar-responsive">
                      <img className="avatar-img" src="assets/img/11.jpg" alt="" />
                    </a>

                    <div className="message-inner">
                      <div className="message-body">
                        <div className="message-content">
                          <div className="message-text">
                            <p>Hey, Marshall! How are you? Can you please change the color theme of
                              the website to pink and purple?</p>
                          </div>

                          {/* Dropdown */}
                          <div className="message-action">
                            <div className="dropdown">
                              <a className="icon text-muted" href="chat-group.html"
                                 role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                     viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                     stroke-width="2" stroke-linecap="round"
                                     stroke-linejoin="round"
                                     className="feather feather-more-vertical">
                                  <circle cx="12" cy="12" r="1"></circle>
                                  <circle cx="12" cy="5" r="1"></circle>
                                  <circle cx="12" cy="19" r="1"></circle>
                                </svg>
                              </a>

                              <ul className="dropdown-menu">
                                <li>
                                  <a className="dropdown-item d-flex align-items-center"
                                     href="chat-group.html">
                                    <span className="me-auto">Edit</span>
                                    <div className="icon">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                           height="24" viewBox="0 0 24 24" fill="none"
                                           stroke="currentColor" stroke-width="2"
                                           stroke-linecap="round" stroke-linejoin="round"
                                           className="feather feather-edit-3">
                                        <path d="M12 20h9"></path>
                                        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                                      </svg>
                                    </div>
                                  </a>
                                </li>
                                <li>
                                  <a className="dropdown-item d-flex align-items-center"
                                     href="chat-group.html">
                                    <span className="me-auto">Reply</span>
                                    <div className="icon">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                           height="24" viewBox="0 0 24 24" fill="none"
                                           stroke="currentColor" stroke-width="2"
                                           stroke-linecap="round" stroke-linejoin="round"
                                           className="feather feather-corner-up-left">
                                        <polyline points="9 14 4 9 9 4"></polyline>
                                        <path d="M20 20v-7a4 4 0 0 0-4-4H4"></path>
                                      </svg>
                                    </div>
                                  </a>
                                </li>
                                <li>
                                  <hr className="dropdown-divider" />
                                </li>
                                <li>
                                  <a className="dropdown-item d-flex align-items-center text-danger"
                                     href="chat-group.html">
                                    <span className="me-auto">Delete</span>
                                    <div className="icon">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                           height="24" viewBox="0 0 24 24" fill="none"
                                           stroke="currentColor" stroke-width="2"
                                           stroke-linecap="round" stroke-linejoin="round"
                                           className="feather feather-trash-2">
                                        <polyline points="3 6 5 6 21 6"></polyline>
                                        <path
                                          d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                        <line x1="10" y1="11" x2="10" y2="17"></line>
                                        <line x1="14" y1="11" x2="14" y2="17"></line>
                                      </svg>
                                    </div>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>

                        <div className="message-content">
                          <div className="message-text">
                            <p>Send me the files please.</p>
                          </div>

                          {/* Dropdown */}
                          <div className="message-action">
                            <div className="dropdown">
                              <a className="icon text-muted" href="chat-group.html"
                                 role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                     viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                     stroke-width="2" stroke-linecap="round"
                                     stroke-linejoin="round"
                                     className="feather feather-more-vertical">
                                  <circle cx="12" cy="12" r="1"></circle>
                                  <circle cx="12" cy="5" r="1"></circle>
                                  <circle cx="12" cy="19" r="1"></circle>
                                </svg>
                              </a>

                              <ul className="dropdown-menu">
                                <li>
                                  <a className="dropdown-item d-flex align-items-center"
                                     href="chat-group.html">
                                    <span className="me-auto">Edit</span>
                                    <div className="icon">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                           height="24" viewBox="0 0 24 24" fill="none"
                                           stroke="currentColor" stroke-width="2"
                                           stroke-linecap="round" stroke-linejoin="round"
                                           className="feather feather-edit-3">
                                        <path d="M12 20h9"></path>
                                        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                                      </svg>
                                    </div>
                                  </a>
                                </li>
                                <li>
                                  <a className="dropdown-item d-flex align-items-center"
                                     href="chat-group.html">
                                    <span className="me-auto">Reply</span>
                                    <div className="icon">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                           height="24" viewBox="0 0 24 24" fill="none"
                                           stroke="currentColor" stroke-width="2"
                                           stroke-linecap="round" stroke-linejoin="round"
                                           className="feather feather-corner-up-left">
                                        <polyline points="9 14 4 9 9 4"></polyline>
                                        <path d="M20 20v-7a4 4 0 0 0-4-4H4"></path>
                                      </svg>
                                    </div>
                                  </a>
                                </li>
                                <li>
                                  <hr className="dropdown-divider" />
                                </li>
                                <li>
                                  <a className="dropdown-item d-flex align-items-center text-danger"
                                     href="chat-group.html">
                                    <span className="me-auto">Delete</span>
                                    <div className="icon">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                           height="24" viewBox="0 0 24 24" fill="none"
                                           stroke="currentColor" stroke-width="2"
                                           stroke-linecap="round" stroke-linejoin="round"
                                           className="feather feather-trash-2">
                                        <polyline points="3 6 5 6 21 6"></polyline>
                                        <path
                                          d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                        <line x1="10" y1="11" x2="10" y2="17"></line>
                                        <line x1="14" y1="11" x2="14" y2="17"></line>
                                      </svg>
                                    </div>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="message-footer">
                        <span className="extra-small text-muted">08:45 PM</span>
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="message message-out">
                    <a href="chat-group.html" data-bs-toggle="modal" data-bs-target="#modal-profile"
                       className="avatar avatar-responsive">
                      <img className="avatar-img" src="assets/img/1.jpg" alt="" />
                    </a>

                    <div className="message-inner">
                      <div className="message-body">
                        <div className="message-content">
                          <div className="message-text">
                            <blockquote className="blockquote overflow-hidden">
                              <h6 className="text-reset text-truncate">William Wright</h6>
                              <p className="small text-truncate">Hey, Marshall! How are you? Can you
                                please change the color theme of the website to pink and
                                purple?</p>
                            </blockquote>
                            <p>Hey, Marshall! How are you? Can you please change the color theme of
                              the website to pink and purple?</p>
                          </div>

                          {/* Dropdown */}
                          <div className="message-action">
                            <div className="dropdown">
                              <a className="icon text-muted" href="chat-group.html"
                                 role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                     viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                     stroke-width="2" stroke-linecap="round"
                                     stroke-linejoin="round"
                                     className="feather feather-more-vertical">
                                  <circle cx="12" cy="12" r="1"></circle>
                                  <circle cx="12" cy="5" r="1"></circle>
                                  <circle cx="12" cy="19" r="1"></circle>
                                </svg>
                              </a>

                              <ul className="dropdown-menu">
                                <li>
                                  <a className="dropdown-item d-flex align-items-center"
                                     href="chat-group.html">
                                    <span className="me-auto">Edit</span>
                                    <div className="icon">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                           height="24" viewBox="0 0 24 24" fill="none"
                                           stroke="currentColor" stroke-width="2"
                                           stroke-linecap="round" stroke-linejoin="round"
                                           className="feather feather-edit-3">
                                        <path d="M12 20h9"></path>
                                        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                                      </svg>
                                    </div>
                                  </a>
                                </li>
                                <li>
                                  <a className="dropdown-item d-flex align-items-center"
                                     href="chat-group.html">
                                    <span className="me-auto">Reply</span>
                                    <div className="icon">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                           height="24" viewBox="0 0 24 24" fill="none"
                                           stroke="currentColor" stroke-width="2"
                                           stroke-linecap="round" stroke-linejoin="round"
                                           className="feather feather-corner-up-left">
                                        <polyline points="9 14 4 9 9 4"></polyline>
                                        <path d="M20 20v-7a4 4 0 0 0-4-4H4"></path>
                                      </svg>
                                    </div>
                                  </a>
                                </li>
                                <li>
                                  <hr className="dropdown-divider" />
                                </li>
                                <li>
                                  <a className="dropdown-item d-flex align-items-center text-danger"
                                     href="chat-group.html">
                                    <span className="me-auto">Delete</span>
                                    <div className="icon">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                           height="24" viewBox="0 0 24 24" fill="none"
                                           stroke="currentColor" stroke-width="2"
                                           stroke-linecap="round" stroke-linejoin="round"
                                           className="feather feather-trash-2">
                                        <polyline points="3 6 5 6 21 6"></polyline>
                                        <path
                                          d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                        <line x1="10" y1="11" x2="10" y2="17"></line>
                                        <line x1="14" y1="11" x2="14" y2="17"></line>
                                      </svg>
                                    </div>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>

                        <div className="message-content">
                          <div className="message-text">

                            <div className="row align-items-center gx-4">
                              <div className="col-auto">
                                <a href="chat-group.html" className="avatar avatar-sm">
                                  <div className="avatar-text bg-white text-primary">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                         height="24" viewBox="0 0 24 24" fill="none"
                                         stroke="currentColor" stroke-width="2"
                                         stroke-linecap="round" stroke-linejoin="round"
                                         className="feather feather-arrow-down">
                                      <line x1="12" y1="5" x2="12" y2="19"></line>
                                      <polyline points="19 12 12 19 5 12"></polyline>
                                    </svg>
                                  </div>
                                </a>
                              </div>
                              <div className="col overflow-hidden">
                                <h6 className="text-truncate text-reset">
                                  <a href="chat-group.html" className="text-reset">filename.json</a>
                                </h6>
                                <ul className="list-inline text-uppercase extra-small opacity-75 mb-0">
                                  <li className="list-inline-item">79.2 KB</li>
                                </ul>
                              </div>
                            </div>

                          </div>

                          {/* Dropdown */}
                          <div className="message-action">
                            <div className="dropdown">
                              <a className="icon text-muted" href="chat-group.html"
                                 role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                     viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                     stroke-width="2" stroke-linecap="round"
                                     stroke-linejoin="round"
                                     className="feather feather-more-vertical">
                                  <circle cx="12" cy="12" r="1"></circle>
                                  <circle cx="12" cy="5" r="1"></circle>
                                  <circle cx="12" cy="19" r="1"></circle>
                                </svg>
                              </a>

                              <ul className="dropdown-menu">
                                <li>
                                  <a className="dropdown-item d-flex align-items-center"
                                     href="chat-group.html">
                                    <span className="me-auto">Edit</span>
                                    <div className="icon">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                           height="24" viewBox="0 0 24 24" fill="none"
                                           stroke="currentColor" stroke-width="2"
                                           stroke-linecap="round" stroke-linejoin="round"
                                           className="feather feather-edit-3">
                                        <path d="M12 20h9"></path>
                                        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                                      </svg>
                                    </div>
                                  </a>
                                </li>
                                <li>
                                  <a className="dropdown-item d-flex align-items-center"
                                     href="chat-group.html">
                                    <span className="me-auto">Reply</span>
                                    <div className="icon">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                           height="24" viewBox="0 0 24 24" fill="none"
                                           stroke="currentColor" stroke-width="2"
                                           stroke-linecap="round" stroke-linejoin="round"
                                           className="feather feather-corner-up-left">
                                        <polyline points="9 14 4 9 9 4"></polyline>
                                        <path d="M20 20v-7a4 4 0 0 0-4-4H4"></path>
                                      </svg>
                                    </div>
                                  </a>
                                </li>
                                <li>
                                  <hr className="dropdown-divider" />
                                </li>
                                <li>
                                  <a className="dropdown-item d-flex align-items-center text-danger"
                                     href="chat-group.html">
                                    <span className="me-auto">Delete</span>
                                    <div className="icon">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                           height="24" viewBox="0 0 24 24" fill="none"
                                           stroke="currentColor" stroke-width="2"
                                           stroke-linecap="round" stroke-linejoin="round"
                                           className="feather feather-trash-2">
                                        <polyline points="3 6 5 6 21 6"></polyline>
                                        <path
                                          d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                        <line x1="10" y1="11" x2="10" y2="17"></line>
                                        <line x1="14" y1="11" x2="14" y2="17"></line>
                                      </svg>
                                    </div>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="message-footer">
                        <span className="extra-small text-muted">08:45 PM</span>
                      </div>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="message-divider">
                    <small className="text-muted">Monday, Sep 16</small>
                  </div>

                  {/* Message */}
                  <div className="message">
                    <a href="chat-group.html" data-bs-toggle="modal"
                       data-bs-target="#modal-user-profile" className="avatar avatar-responsive">
                      <img className="avatar-img" src="assets/img/6.jpg" alt="" />
                    </a>

                    <div className="message-inner">
                      <div className="message-body">
                        <div className="message-content">
                          <div className="message-text">
                            <p>Hey, Marshall! How are you? Can you please change the color theme of
                              the website to pink and purple?</p>
                          </div>

                          {/* Dropdown */}
                          <div className="message-action">
                            <div className="dropdown">
                              <a className="icon text-muted" href="chat-group.html"
                                 role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                     viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                     stroke-width="2" stroke-linecap="round"
                                     stroke-linejoin="round"
                                     className="feather feather-more-vertical">
                                  <circle cx="12" cy="12" r="1"></circle>
                                  <circle cx="12" cy="5" r="1"></circle>
                                  <circle cx="12" cy="19" r="1"></circle>
                                </svg>
                              </a>

                              <ul className="dropdown-menu">
                                <li>
                                  <a className="dropdown-item d-flex align-items-center"
                                     href="chat-group.html">
                                    <span className="me-auto">Edit</span>
                                    <div className="icon">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                           height="24" viewBox="0 0 24 24" fill="none"
                                           stroke="currentColor" stroke-width="2"
                                           stroke-linecap="round" stroke-linejoin="round"
                                           className="feather feather-edit-3">
                                        <path d="M12 20h9"></path>
                                        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                                      </svg>
                                    </div>
                                  </a>
                                </li>
                                <li>
                                  <a className="dropdown-item d-flex align-items-center"
                                     href="chat-group.html">
                                    <span className="me-auto">Reply</span>
                                    <div className="icon">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                           height="24" viewBox="0 0 24 24" fill="none"
                                           stroke="currentColor" stroke-width="2"
                                           stroke-linecap="round" stroke-linejoin="round"
                                           className="feather feather-corner-up-left">
                                        <polyline points="9 14 4 9 9 4"></polyline>
                                        <path d="M20 20v-7a4 4 0 0 0-4-4H4"></path>
                                      </svg>
                                    </div>
                                  </a>
                                </li>
                                <li>
                                  <hr className="dropdown-divider" />
                                </li>
                                <li>
                                  <a className="dropdown-item d-flex align-items-center text-danger"
                                     href="chat-group.html">
                                    <span className="me-auto">Delete</span>
                                    <div className="icon">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                           height="24" viewBox="0 0 24 24" fill="none"
                                           stroke="currentColor" stroke-width="2"
                                           stroke-linecap="round" stroke-linejoin="round"
                                           className="feather feather-trash-2">
                                        <polyline points="3 6 5 6 21 6"></polyline>
                                        <path
                                          d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                        <line x1="10" y1="11" x2="10" y2="17"></line>
                                        <line x1="14" y1="11" x2="14" y2="17"></line>
                                      </svg>
                                    </div>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="message-footer">
                        <span className="extra-small text-muted">08:45 PM</span>
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="message message-out">
                    <a href="chat-group.html" data-bs-toggle="modal" data-bs-target="#modal-profile"
                       className="avatar avatar-responsive">
                      <img className="avatar-img" src="assets/img/1.jpg" alt="" />
                    </a>

                    <div className="message-inner">
                      <div className="message-body">
                        <div className="message-content">
                          <div className="message-gallery">
                            <div className="row gx-3">
                              <div className="col">
                                <img className="img-fluid rounded" src="assets/img/1(1).jpg"
                                     data-action="zoom" alt="" />
                              </div>
                              <div className="col">
                                <img className="img-fluid rounded" src="assets/img/2.jpg"
                                     data-action="zoom" alt="" />
                              </div>
                              <div className="col">
                                <img className="img-fluid rounded" src="assets/img/3.jpg"
                                     data-action="zoom" alt="" />
                              </div>
                            </div>
                          </div>

                          {/* Dropdown */}
                          <div className="message-action">
                            <div className="dropdown">
                              <a className="icon text-muted" href="chat-group.html"
                                 role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                     viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                     stroke-width="2" stroke-linecap="round"
                                     stroke-linejoin="round"
                                     className="feather feather-more-vertical">
                                  <circle cx="12" cy="12" r="1"></circle>
                                  <circle cx="12" cy="5" r="1"></circle>
                                  <circle cx="12" cy="19" r="1"></circle>
                                </svg>
                              </a>

                              <ul className="dropdown-menu">
                                <li>
                                  <a className="dropdown-item d-flex align-items-center"
                                     href="chat-group.html">
                                    <span className="me-auto">Edit</span>
                                    <div className="icon">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                           height="24" viewBox="0 0 24 24" fill="none"
                                           stroke="currentColor" stroke-width="2"
                                           stroke-linecap="round" stroke-linejoin="round"
                                           className="feather feather-edit-3">
                                        <path d="M12 20h9"></path>
                                        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                                      </svg>
                                    </div>
                                  </a>
                                </li>
                                <li>
                                  <a className="dropdown-item d-flex align-items-center"
                                     href="chat-group.html">
                                    <span className="me-auto">Reply</span>
                                    <div className="icon">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                           height="24" viewBox="0 0 24 24" fill="none"
                                           stroke="currentColor" stroke-width="2"
                                           stroke-linecap="round" stroke-linejoin="round"
                                           className="feather feather-corner-up-left">
                                        <polyline points="9 14 4 9 9 4"></polyline>
                                        <path d="M20 20v-7a4 4 0 0 0-4-4H4"></path>
                                      </svg>
                                    </div>
                                  </a>
                                </li>
                                <li>
                                  <hr className="dropdown-divider" />
                                </li>
                                <li>
                                  <a className="dropdown-item d-flex align-items-center text-danger"
                                     href="chat-group.html">
                                    <span className="me-auto">Delete</span>
                                    <div className="icon">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                           height="24" viewBox="0 0 24 24" fill="none"
                                           stroke="currentColor" stroke-width="2"
                                           stroke-linecap="round" stroke-linejoin="round"
                                           className="feather feather-trash-2">
                                        <polyline points="3 6 5 6 21 6"></polyline>
                                        <path
                                          d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                        <line x1="10" y1="11" x2="10" y2="17"></line>
                                        <line x1="14" y1="11" x2="14" y2="17"></line>
                                      </svg>
                                    </div>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="message-footer">
                        <span className="extra-small text-muted">08:45 PM</span>
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="message">
                    <a href="chat-group.html" data-bs-toggle="modal"
                       data-bs-target="#modal-user-profile" className="avatar avatar-responsive">
                      <img className="avatar-img" src="assets/img/11.jpg" alt="" />
                    </a>

                    <div className="message-inner">
                      <div className="message-body">
                        <div className="message-content">
                          <div className="message-text">
                            <p>Hey, Marshall! How are you? Can you please change the color theme of
                              the website to pink and purple?</p>
                          </div>

                          {/* Dropdown */}
                          <div className="message-action">
                            <div className="dropdown">
                              <a className="icon text-muted" href="chat-group.html"
                                 role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                     viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                     stroke-width="2" stroke-linecap="round"
                                     stroke-linejoin="round"
                                     className="feather feather-more-vertical">
                                  <circle cx="12" cy="12" r="1"></circle>
                                  <circle cx="12" cy="5" r="1"></circle>
                                  <circle cx="12" cy="19" r="1"></circle>
                                </svg>
                              </a>

                              <ul className="dropdown-menu">
                                <li>
                                  <a className="dropdown-item d-flex align-items-center"
                                     href="chat-group.html">
                                    <span className="me-auto">Edit</span>
                                    <div className="icon">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                           height="24" viewBox="0 0 24 24" fill="none"
                                           stroke="currentColor" stroke-width="2"
                                           stroke-linecap="round" stroke-linejoin="round"
                                           className="feather feather-edit-3">
                                        <path d="M12 20h9"></path>
                                        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                                      </svg>
                                    </div>
                                  </a>
                                </li>
                                <li>
                                  <a className="dropdown-item d-flex align-items-center"
                                     href="chat-group.html">
                                    <span className="me-auto">Reply</span>
                                    <div className="icon">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                           height="24" viewBox="0 0 24 24" fill="none"
                                           stroke="currentColor" stroke-width="2"
                                           stroke-linecap="round" stroke-linejoin="round"
                                           className="feather feather-corner-up-left">
                                        <polyline points="9 14 4 9 9 4"></polyline>
                                        <path d="M20 20v-7a4 4 0 0 0-4-4H4"></path>
                                      </svg>
                                    </div>
                                  </a>
                                </li>
                                <li>
                                  <hr className="dropdown-divider" />
                                </li>
                                <li>
                                  <a className="dropdown-item d-flex align-items-center text-danger"
                                     href="chat-group.html">
                                    <span className="me-auto">Delete</span>
                                    <div className="icon">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                           height="24" viewBox="0 0 24 24" fill="none"
                                           stroke="currentColor" stroke-width="2"
                                           stroke-linecap="round" stroke-linejoin="round"
                                           className="feather feather-trash-2">
                                        <polyline points="3 6 5 6 21 6"></polyline>
                                        <path
                                          d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                        <line x1="10" y1="11" x2="10" y2="17"></line>
                                        <line x1="14" y1="11" x2="14" y2="17"></line>
                                      </svg>
                                    </div>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="message-footer">
                        <span className="extra-small text-muted">08:45 PM</span>
                      </div>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="message-divider">
                    <small className="text-muted">Friday, Sep 20</small>
                  </div>

                  {/* Message */}
                  <div className="message message-out">
                    <a href="chat-group.html" data-bs-toggle="modal" data-bs-target="#modal-profile"
                       className="avatar avatar-responsive">
                      <img className="avatar-img" src="assets/img/1.jpg" alt=""/>
                    </a>

                    <div className="message-inner">
                      <div className="message-body">
                        <div className="message-content">
                          <div className="message-text">
                            <p>Hey, Marshall! How are you? Can you please change the color theme of
                              the website to pink and purple?</p>
                          </div>

                          {/* Dropdown */}
                          <div className="message-action">
                            <div className="dropdown">
                              <a className="icon text-muted" href="chat-group.html"
                                 role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                     viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                     stroke-width="2" stroke-linecap="round"
                                     stroke-linejoin="round"
                                     className="feather feather-more-vertical">
                                  <circle cx="12" cy="12" r="1"></circle>
                                  <circle cx="12" cy="5" r="1"></circle>
                                  <circle cx="12" cy="19" r="1"></circle>
                                </svg>
                              </a>

                              <ul className="dropdown-menu">
                                <li>
                                  <a className="dropdown-item d-flex align-items-center"
                                     href="chat-group.html">
                                    <span className="me-auto">Edit</span>
                                    <div className="icon">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                           height="24" viewBox="0 0 24 24" fill="none"
                                           stroke="currentColor" stroke-width="2"
                                           stroke-linecap="round" stroke-linejoin="round"
                                           className="feather feather-edit-3">
                                        <path d="M12 20h9"></path>
                                        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                                      </svg>
                                    </div>
                                  </a>
                                </li>
                                <li>
                                  <a className="dropdown-item d-flex align-items-center"
                                     href="chat-group.html">
                                    <span className="me-auto">Reply</span>
                                    <div className="icon">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                           height="24" viewBox="0 0 24 24" fill="none"
                                           stroke="currentColor" stroke-width="2"
                                           stroke-linecap="round" stroke-linejoin="round"
                                           className="feather feather-corner-up-left">
                                        <polyline points="9 14 4 9 9 4"></polyline>
                                        <path d="M20 20v-7a4 4 0 0 0-4-4H4"></path>
                                      </svg>
                                    </div>
                                  </a>
                                </li>
                                <li>
                                  <hr className="dropdown-divider"/>
                                </li>
                                <li>
                                  <a className="dropdown-item d-flex align-items-center text-danger"
                                     href="chat-group.html">
                                    <span className="me-auto">Delete</span>
                                    <div className="icon">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                           height="24" viewBox="0 0 24 24" fill="none"
                                           stroke="currentColor" stroke-width="2"
                                           stroke-linecap="round" stroke-linejoin="round"
                                           className="feather feather-trash-2">
                                        <polyline points="3 6 5 6 21 6"></polyline>
                                        <path
                                          d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                        <line x1="10" y1="11" x2="10" y2="17"></line>
                                        <line x1="14" y1="11" x2="14" y2="17"></line>
                                      </svg>
                                    </div>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="message-footer">
                        <span className="extra-small text-muted">08:45 PM</span>
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="message">
                    <a href="chat-group.html" data-bs-toggle="modal"
                       data-bs-target="#modal-user-profile" className="avatar avatar-online avatar-responsive">
                      <img className="avatar-img" src="assets/img/7.jpg" alt=""/>
                    </a>

                    <div className="message-inner">
                      <div className="message-body">
                        <div className="message-content">
                          <div className="message-text">
                            <p>Hey, Marshall! How are you? Can you please change the color theme of
                              the website to pink and purple?</p>
                          </div>

                          {/* Dropdown */}
                          <div className="message-action">
                            <div className="dropdown">
                              <a className="icon text-muted" href="chat-group.html"
                                 role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                     viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                     stroke-width="2" stroke-linecap="round"
                                     stroke-linejoin="round"
                                     className="feather feather-more-vertical">
                                  <circle cx="12" cy="12" r="1"></circle>
                                  <circle cx="12" cy="5" r="1"></circle>
                                  <circle cx="12" cy="19" r="1"></circle>
                                </svg>
                              </a>

                              <ul className="dropdown-menu">
                                <li>
                                  <a className="dropdown-item d-flex align-items-center"
                                     href="chat-group.html">
                                    <span className="me-auto">Edit</span>
                                    <div className="icon">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                           height="24" viewBox="0 0 24 24" fill="none"
                                           stroke="currentColor" stroke-width="2"
                                           stroke-linecap="round" stroke-linejoin="round"
                                           className="feather feather-edit-3">
                                        <path d="M12 20h9"></path>
                                        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                                      </svg>
                                    </div>
                                  </a>
                                </li>
                                <li>
                                  <a className="dropdown-item d-flex align-items-center"
                                     href="chat-group.html">
                                    <span className="me-auto">Reply</span>
                                    <div className="icon">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                           height="24" viewBox="0 0 24 24" fill="none"
                                           stroke="currentColor" stroke-width="2"
                                           stroke-linecap="round" stroke-linejoin="round"
                                           className="feather feather-corner-up-left">
                                        <polyline points="9 14 4 9 9 4"></polyline>
                                        <path d="M20 20v-7a4 4 0 0 0-4-4H4"></path>
                                      </svg>
                                    </div>
                                  </a>
                                </li>
                                <li>
                                  <hr className="dropdown-divider"/>
                                </li>
                                <li>
                                  <a className="dropdown-item d-flex align-items-center text-danger"
                                     href="chat-group.html">
                                    <span className="me-auto">Delete</span>
                                    <div className="icon">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                           height="24" viewBox="0 0 24 24" fill="none"
                                           stroke="currentColor" stroke-width="2"
                                           stroke-linecap="round" stroke-linejoin="round"
                                           className="feather feather-trash-2">
                                        <polyline points="3 6 5 6 21 6"></polyline>
                                        <path
                                          d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                        <line x1="10" y1="11" x2="10" y2="17"></line>
                                        <line x1="14" y1="11" x2="14" y2="17"></line>
                                      </svg>
                                    </div>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="message-content">
                          <div className="message-text">
                            <p>Send me the files please</p>
                          </div>

                          {/* Dropdown */}
                          <div className="message-action">
                            <div className="dropdown">
                              <a className="icon text-muted" href="chat-group.html"
                                 role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                     viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                     stroke-width="2" stroke-linecap="round"
                                     stroke-linejoin="round"
                                     className="feather feather-more-vertical">
                                  <circle cx="12" cy="12" r="1"></circle>
                                  <circle cx="12" cy="5" r="1"></circle>
                                  <circle cx="12" cy="19" r="1"></circle>
                                </svg>
                              </a>

                              <ul className="dropdown-menu">
                                <li>
                                  <a className="dropdown-item d-flex align-items-center"
                                     href="chat-group.html">
                                    <span className="me-auto">Edit</span>
                                    <div className="icon">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                           height="24" viewBox="0 0 24 24" fill="none"
                                           stroke="currentColor" stroke-width="2"
                                           stroke-linecap="round" stroke-linejoin="round"
                                           className="feather feather-edit-3">
                                        <path d="M12 20h9"></path>
                                        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                                      </svg>
                                    </div>
                                  </a>
                                </li>
                                <li>
                                  <a className="dropdown-item d-flex align-items-center"
                                     href="chat-group.html">
                                    <span className="me-auto">Reply</span>
                                    <div className="icon">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                           height="24" viewBox="0 0 24 24" fill="none"
                                           stroke="currentColor" stroke-width="2"
                                           stroke-linecap="round" stroke-linejoin="round"
                                           className="feather feather-corner-up-left">
                                        <polyline points="9 14 4 9 9 4"></polyline>
                                        <path d="M20 20v-7a4 4 0 0 0-4-4H4"></path>
                                      </svg>
                                    </div>
                                  </a>
                                </li>
                                <li>
                                  <hr className="dropdown-divider"/>
                                </li>
                                <li>
                                  <a className="dropdown-item d-flex align-items-center text-danger"
                                     href="chat-group.html">
                                    <span className="me-auto">Delete</span>
                                    <div className="icon">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                           height="24" viewBox="0 0 24 24" fill="none"
                                           stroke="currentColor" stroke-width="2"
                                           stroke-linecap="round" stroke-linejoin="round"
                                           className="feather feather-trash-2">
                                        <polyline points="3 6 5 6 21 6"></polyline>
                                        <path
                                          d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                        <line x1="10" y1="11" x2="10" y2="17"></line>
                                        <line x1="14" y1="11" x2="14" y2="17"></line>
                                      </svg>
                                    </div>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="message-footer">
                        <span className="extra-small text-muted">08:45 PM</span>
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="message message-out">
                    <a href="chat-group.html" data-bs-toggle="modal" data-bs-target="#modal-profile"
                       className="avatar avatar-responsive">
                      <img className="avatar-img" src="assets/img/1.jpg" alt=""/>
                    </a>

                    <div className="message-inner">
                      <div className="message-body">
                        <div className="message-content">
                          <div className="message-text">
                            <p>Hey, Marshall! How are you? Can you please change the color theme of
                              the website to pink and purple?</p>
                          </div>

                          {/* Dropdown */}
                          <div className="message-action">
                            <div className="dropdown">
                              <a className="icon text-muted" href="chat-group.html"
                                 role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                     viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                     stroke-width="2" stroke-linecap="round"
                                     stroke-linejoin="round"
                                     className="feather feather-more-vertical">
                                  <circle cx="12" cy="12" r="1"></circle>
                                  <circle cx="12" cy="5" r="1"></circle>
                                  <circle cx="12" cy="19" r="1"></circle>
                                </svg>
                              </a>

                              <ul className="dropdown-menu">
                                <li>
                                  <a className="dropdown-item d-flex align-items-center"
                                     href="chat-group.html">
                                    <span className="me-auto">Edit</span>
                                    <div className="icon">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                           height="24" viewBox="0 0 24 24" fill="none"
                                           stroke="currentColor" stroke-width="2"
                                           stroke-linecap="round" stroke-linejoin="round"
                                           className="feather feather-edit-3">
                                        <path d="M12 20h9"></path>
                                        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                                      </svg>
                                    </div>
                                  </a>
                                </li>
                                <li>
                                  <a className="dropdown-item d-flex align-items-center"
                                     href="chat-group.html">
                                    <span className="me-auto">Reply</span>
                                    <div className="icon">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                           height="24" viewBox="0 0 24 24" fill="none"
                                           stroke="currentColor" stroke-width="2"
                                           stroke-linecap="round" stroke-linejoin="round"
                                           className="feather feather-corner-up-left">
                                        <polyline points="9 14 4 9 9 4"></polyline>
                                        <path d="M20 20v-7a4 4 0 0 0-4-4H4"></path>
                                      </svg>
                                    </div>
                                  </a>
                                </li>
                                <li>
                                  <hr className="dropdown-divider"/>
                                </li>
                                <li>
                                  <a className="dropdown-item d-flex align-items-center text-danger"
                                     href="chat-group.html">
                                    <span className="me-auto">Delete</span>
                                    <div className="icon">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                           height="24" viewBox="0 0 24 24" fill="none"
                                           stroke="currentColor" stroke-width="2"
                                           stroke-linecap="round" stroke-linejoin="round"
                                           className="feather feather-trash-2">
                                        <polyline points="3 6 5 6 21 6"></polyline>
                                        <path
                                          d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                        <line x1="10" y1="11" x2="10" y2="17"></line>
                                        <line x1="14" y1="11" x2="14" y2="17"></line>
                                      </svg>
                                    </div>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="message-footer">
                        <span className="extra-small text-muted">08:45 PM</span>
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="message">
                    <a href="chat-group.html" data-bs-toggle="modal"
                       data-bs-target="#modal-user-profile" className="avatar avatar-responsive">
                      <img className="avatar-img" src="assets/img/11.jpg" alt=""/>
                    </a>

                    <div className="message-inner">
                      <div className="message-body">
                        <div className="message-content">
                          <div className="message-text">
                            <p>Hey, Marshall! How are you? Can you please change the color theme of
                              the website to pink and purple?</p>
                          </div>

                          {/* Dropdown */}
                          <div className="message-action">
                            <div className="dropdown">
                              <a className="icon text-muted" href="chat-group.html"
                                 role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                     viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                     stroke-width="2" stroke-linecap="round"
                                     stroke-linejoin="round"
                                     className="feather feather-more-vertical">
                                  <circle cx="12" cy="12" r="1"></circle>
                                  <circle cx="12" cy="5" r="1"></circle>
                                  <circle cx="12" cy="19" r="1"></circle>
                                </svg>
                              </a>

                              <ul className="dropdown-menu">
                                <li>
                                  <a className="dropdown-item d-flex align-items-center"
                                     href="chat-group.html">
                                    <span className="me-auto">Edit</span>
                                    <div className="icon">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                           height="24" viewBox="0 0 24 24" fill="none"
                                           stroke="currentColor" stroke-width="2"
                                           stroke-linecap="round" stroke-linejoin="round"
                                           className="feather feather-edit-3">
                                        <path d="M12 20h9"></path>
                                        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                                      </svg>
                                    </div>
                                  </a>
                                </li>
                                <li>
                                  <a className="dropdown-item d-flex align-items-center"
                                     href="chat-group.html">
                                    <span className="me-auto">Reply</span>
                                    <div className="icon">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                           height="24" viewBox="0 0 24 24" fill="none"
                                           stroke="currentColor" stroke-width="2"
                                           stroke-linecap="round" stroke-linejoin="round"
                                           className="feather feather-corner-up-left">
                                        <polyline points="9 14 4 9 9 4"></polyline>
                                        <path d="M20 20v-7a4 4 0 0 0-4-4H4"></path>
                                      </svg>
                                    </div>
                                  </a>
                                </li>
                                <li>
                                  <hr className="dropdown-divider"/>
                                </li>
                                <li>
                                  <a className="dropdown-item d-flex align-items-center text-danger"
                                     href="chat-group.html">
                                    <span className="me-auto">Delete</span>
                                    <div className="icon">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                           height="24" viewBox="0 0 24 24" fill="none"
                                           stroke="currentColor" stroke-width="2"
                                           stroke-linecap="round" stroke-linejoin="round"
                                           className="feather feather-trash-2">
                                        <polyline points="3 6 5 6 21 6"></polyline>
                                        <path
                                          d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                        <line x1="10" y1="11" x2="10" y2="17"></line>
                                        <line x1="14" y1="11" x2="14" y2="17"></line>
                                      </svg>
                                    </div>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="message-footer">
                        <span className="extra-small text-muted">08:45 PM</span>
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="message message-out">
                    <a href="chat-group.html" data-bs-toggle="modal" data-bs-target="#modal-profile"
                       className="avatar avatar-responsive">
                      <img className="avatar-img" src="assets/img/1.jpg" alt=""/>
                    </a>

                    <div className="message-inner">
                      <div className="message-body">
                        <div className="message-content">
                          <div className="message-text">
                            <p>Hey, Marshall! How are you? Can you please change the color theme of
                              the website to pink and purple? 😂</p>
                          </div>

                          {/* Dropdown */}
                          <div className="message-action">
                            <div className="dropdown">
                              <a className="icon text-muted" href="chat-group.html"
                                 role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                     viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                     stroke-width="2" stroke-linecap="round"
                                     stroke-linejoin="round"
                                     className="feather feather-more-vertical">
                                  <circle cx="12" cy="12" r="1"></circle>
                                  <circle cx="12" cy="5" r="1"></circle>
                                  <circle cx="12" cy="19" r="1"></circle>
                                </svg>
                              </a>

                              <ul className="dropdown-menu">
                                <li>
                                  <a className="dropdown-item d-flex align-items-center"
                                     href="chat-group.html">
                                    <span className="me-auto">Edit</span>
                                    <div className="icon">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                           height="24" viewBox="0 0 24 24" fill="none"
                                           stroke="currentColor" stroke-width="2"
                                           stroke-linecap="round" stroke-linejoin="round"
                                           className="feather feather-edit-3">
                                        <path d="M12 20h9"></path>
                                        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                                      </svg>
                                    </div>
                                  </a>
                                </li>
                                <li>
                                  <a className="dropdown-item d-flex align-items-center"
                                     href="chat-group.html">
                                    <span className="me-auto">Reply</span>
                                    <div className="icon">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                           height="24" viewBox="0 0 24 24" fill="none"
                                           stroke="currentColor" stroke-width="2"
                                           stroke-linecap="round" stroke-linejoin="round"
                                           className="feather feather-corner-up-left">
                                        <polyline points="9 14 4 9 9 4"></polyline>
                                        <path d="M20 20v-7a4 4 0 0 0-4-4H4"></path>
                                      </svg>
                                    </div>
                                  </a>
                                </li>
                                <li>
                                  <hr className="dropdown-divider"/>
                                </li>
                                <li>
                                  <a className="dropdown-item d-flex align-items-center text-danger"
                                     href="chat-group.html">
                                    <span className="me-auto">Delete</span>
                                    <div className="icon">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                           height="24" viewBox="0 0 24 24" fill="none"
                                           stroke="currentColor" stroke-width="2"
                                           stroke-linecap="round" stroke-linejoin="round"
                                           className="feather feather-trash-2">
                                        <polyline points="3 6 5 6 21 6"></polyline>
                                        <path
                                          d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                        <line x1="10" y1="11" x2="10" y2="17"></line>
                                        <line x1="14" y1="11" x2="14" y2="17"></line>
                                      </svg>
                                    </div>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="message-footer">
                        <span className="extra-small text-muted">08:45 PM</span>
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="message">
                    <a href="chat-group.html" data-bs-toggle="modal"
                       data-bs-target="#modal-user-profile" className="avatar avatar-online avatar-responsive">
                      <img className="avatar-img" src="assets/img/7.jpg" alt=""/>
                    </a>

                    <div className="message-inner">
                      <div className="message-body">
                        <div className="message-content">
                          <div className="message-text">
                            <p>William is typing<span
                              className="typing-dots"><span>.</span><span>.</span><span>.</span></span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
            {/* Chat: Content */}

            {/* Chat: Footer */}
            <div className="chat-footer pb-3 pb-lg-7 position-absolute bottom-0 start-0">
              {/* Chat: Files */}
              <div className="dz-preview bg-dark" id="dz-preview-row" data-horizontal-scroll="">
              </div>
              {/* Chat: Files */}

              {/* Chat: Form */}
              <form className="chat-form rounded-pill bg-dark" data-emoji-form="">
                <div className="row align-items-center gx-0">
                  <div className="col-auto">
                    <a href="chat-group.html"
                       className="btn btn-icon btn-link text-body rounded-circle dz-clickable" id="dz-btn">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                           fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                           stroke-linejoin="round" className="feather feather-paperclip">
                        <path
                          d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>
                      </svg>
                    </a>
                  </div>

                  <div className="col">
                    <div className="input-group">
                      <textarea
                        className="form-control px-0" placeholder="Type your message..." rows={1}
                        data-emoji-input="" data-autosize="true"
                        style={{overflow: 'hidden', overflowWrap: 'break-word', resize: 'none', height: '47px'}}
                      ></textarea>

                      <a href="chat-group.html" className="input-group-text text-body pe-0" data-emoji-btn="">
                        <span className="icon icon-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                 viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                 stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                 className="feather feather-smile"><circle cx="12" cy="12"
                                                                           r="10"></circle><path
                              d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9"
                                                                       x2="9.01"
                                                                       y2="9"></line><line
                              x1="15" y1="9" x2="15.01" y2="9"></line></svg>
                        </span>
                      </a>
                    </div>
                  </div>

                  <div className="col-auto">
                    <button className="btn btn-icon btn-primary rounded-circle ms-5">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                           fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                           stroke-linejoin="round" className="feather feather-send">
                        <line x1="22" y1="2" x2="11" y2="13"></line>
                        <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                      </svg>
                    </button>
                  </div>
                </div>
              </form>
              {/* Chat: Form */}
            </div>
            {/* Chat: Footer */}
          </div>

        </div>
      </main>
      {/* Chat */}

      {/* Chat */}
      <main className="main d-none">
        <div className="container h-100">
          <div className="d-flex flex-column h-100 justify-content-center text-center">
            <div className="mb-6">
                    <span className="icon icon-xl text-muted">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                             className="feather feather-message-square"><path
                          d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                    </span>
            </div>
            <p className="text-muted">Pick a person from left menu, <br/> and start your conversation.</p>
          </div>
        </div>
      </main>
      {/* Chat */}
    </div>
  );
}

export default App;
