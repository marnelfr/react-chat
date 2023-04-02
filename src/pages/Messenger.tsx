import Navigation from "../features/messenger/components/Navigation/Navigation";
import Sidebar from "../features/messenger/components/Sidebar/Sidebar";
import Conversation from "../features/messenger/components/Conversation/Conversation";
import React, { useContext, useEffect } from "react";
import AuthContext from "../features/authentication/context/AuthContext";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../constants/routes";

const MessengerPage = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useContext(AuthContext);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate(ROUTES.login);
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="layout overflow-hidden">
      <Navigation />
      <Sidebar />
      <Conversation />
    </div>
  );
};

export default MessengerPage;
