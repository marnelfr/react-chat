import React from "react";
import SidebarItem from "../SidebarItem";

type ChatsProps = {
  isActive?: boolean;
};

const Chats: React.FC<ChatsProps> = ({ isActive }) => {
  return (
    <SidebarItem title="Chats" id="tab-content-chats" isActive={isActive}>
      {/*Current chart / Active chart*/}
      <div className="card border-0">
        <div className="card-body">
          <div className="row align-items-center gx-5">
            <div className="col-auto text-primary">
              <svg
                version="1.1"
                width="46px"
                height="46px"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0 0 46 46"
                enable-background="new 0 0 46 46"
              >
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
              <a
                href="src/components/Sidebar/Chats/Charts#Chats.tsx"
                className="btn btn-sm btn-icon btn-primary rounded-circle"
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
                  className="feather feather-chevron-right"
                >
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
                <a
                  href="src/components/Sidebar/Chats/Charts#Chats.tsx"
                  className="btn btn-sm btn-icon btn-primary rounded-circle"
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
                    className="feather feather-chevron-right"
                  >
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
                <a
                  href="src/components/Sidebar/Chats/Charts#Chats.tsx"
                  className="btn btn-sm btn-icon btn-primary rounded-circle"
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
                    className="feather feather-chevron-right"
                  >
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
                <a
                  href="src/components/Sidebar/Chats/Charts#Chats.tsx"
                  className="btn btn-sm btn-icon btn-primary rounded-circle"
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
                    className="feather feather-chevron-right"
                  >
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
                <a
                  href="src/components/Sidebar/Chats/Charts#Chats.tsx"
                  className="btn btn-sm btn-icon btn-primary rounded-circle"
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
                    className="feather feather-chevron-right"
                  >
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* List of old charts of the current user*/}
    </SidebarItem>
  );
};

export default Chats;
