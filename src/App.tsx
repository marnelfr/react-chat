import { Route, Routes } from "react-router-dom";

import RootLayout from "./pages/Layout/Root";
import AuthLayout from "./pages/Layout/Auth";
import PersistAuthLayout from "./pages/Layout/PersistAuth";

import LoginPage from "./pages/Login";
import SignupPage from "./pages/Signup";
import ResetPasswordPage from "./pages/ResetPassword";
import MessengerPage from "./pages/Messenger";

import { ROUTES } from "./constants/routes";

import "./App.css";
import "./assets/css/dark.css";
import "./assets/css/style.css";

const App = () => {
  return (
    <Routes>
      <Route path={ROUTES.root} element={<RootLayout />}>
        <Route path={ROUTES.login} element={<LoginPage />} />
        <Route path={ROUTES.register} element={<SignupPage />} />
        <Route path={ROUTES.resetPassword} element={<ResetPasswordPage />} />

        <Route element={<PersistAuthLayout />}>
          <Route element={<AuthLayout />}>
            <Route path={ROUTES.root} element={<MessengerPage />} />
          </Route>
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
