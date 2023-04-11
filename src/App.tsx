import React from "react";
import { Routes, Route } from "react-router-dom";

import { ROUTES } from "./constants/routes";
import MessengerPage from "./pages/Messenger";
import LoginPage from "./pages/Login";
import SignupPage from "./pages/Signup";
import ResetPasswordPage from "./pages/ResetPassword";
import RootLayout from "./pages/Layout/Root";

import "./App.css";
// const cssLink = localStorage.getItem('dark_mode') ? "./assets/css/dark.css" : "./assets/css/light.css"
import "./assets/css/dark.css";
import "./assets/css/style.css";

import AuthLayout from "./pages/Layout/Auth";

const App = () => {
  return (
    <Routes>
      <Route path={ROUTES.root} element={<RootLayout />}>
        <Route path={ROUTES.login} element={<LoginPage />} />
        <Route path={ROUTES.register} element={<SignupPage />} />
        <Route path={ROUTES.resetPassword} element={<ResetPasswordPage />} />

        <Route element={<AuthLayout />}>
          <Route path={ROUTES.root} element={<MessengerPage />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
