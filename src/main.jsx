import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App/App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./screens/Login/Login.jsx";
import ErrorPage from "./screens/Errors/ErrorPage.jsx";
import UnauthenticatedApp from "./App/UnauthenticatedApp/UnauthenticatedApp.jsx";
import ResetPassword from "./screens/ResetPassword/ResetPassword.jsx";
import ForgotPassword from "./screens/ForgotPassword/ForgotPassword.jsx";

const route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <UnauthenticatedApp />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/login",
        element: <Login />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/forgotPassword",
        element: <ForgotPassword />,
        errorElement: <ErrorPage />,
      },
      {
        path: "resetPassword",
        element: <ResetPassword />,
        errorElement: <ErrorPage />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
    errorElement: <ErrorPage />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.Fragment>
    <RouterProvider router={route} />
  </React.Fragment>
);
