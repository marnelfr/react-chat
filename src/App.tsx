import LoginPage from "./pages/Login";
import { Route, Routes } from "react-router-dom";
import RootLayout from "./pages/Layout/Root";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route path="login" element={<LoginPage />} />
      </Route>
    </Routes>
  );
};

export default App;
