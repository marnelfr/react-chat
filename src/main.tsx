import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthProvider } from "./features/auth/context/AuthProvider";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./app/store";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  // <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <AuthProvider>
          <Routes>
            <Route path="/*" element={<App />} />
          </Routes>
        </AuthProvider>
      </Provider>
    </BrowserRouter>
  // </React.StrictMode>
);
