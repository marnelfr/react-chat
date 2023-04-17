import LoginPage from "./pages/Login";
import { Route, Routes } from "react-router-dom";
import RootLayout from "./pages/Layout/Root";
import DashboardPage from "./pages/Dashboard";
import AuthLayout from "./pages/Layout/Auth";
import UsersPage from "./pages/Users";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route path="login" element={<LoginPage />} />
        <Route element={<AuthLayout />}>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/users" element={<UsersPage />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
