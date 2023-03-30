import { createBrowserRouter } from "react-router-dom";
import MessengerPage from "./pages/Messenger";
import LoginPage from "./pages/Login";
import SignupPage from "./pages/Signup";
import { ROUTES } from "./constants/routes";
import ResetPasswordPage from "./pages/ResetPassword";

export const router = createBrowserRouter([
  { path: ROUTES.login, element: <LoginPage /> },
  { path: ROUTES.register, element: <SignupPage /> },
  { path: ROUTES.resetPassword, element: <ResetPasswordPage /> },

  { path: ROUTES.dashboard, element: <MessengerPage /> },
]);
