import Navigation from "../features/messenger/components/Navigation/Navigation";
import Sidebar from "../features/messenger/components/Sidebar/Sidebar";
import Conversation from "../features/messenger/components/Conversation/Conversation";
import React, { useEffect, useState } from "react";
import { useAuth } from "../features/authentication/context/AuthContext";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../constants/routes";

const MessengerPage = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate(ROUTES.login);
    } else {
      setChecked(true);
    }
  }, [isAuthenticated, navigate]);

  if (isAuthenticated === null || !checked) {
    return <p>Loading...</p>;
  }

  return (
    <div className="layout overflow-hidden">
      <Navigation />
      <Sidebar />
      <Conversation />
    </div>
  );
};

export default MessengerPage;
