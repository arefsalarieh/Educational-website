import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App/App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./screens/Login/Login.jsx";
import RouteError from "./screens/Errors/RouteError.jsx";
import UnauthenticatedApp from "./App/UnauthenticatedApp/UnauthenticatedApp.jsx";

const route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <UnauthenticatedApp />,
        errorElement: <RouteError />,
      },
      {
        path: "/login",
        element: <Login />,
        errorElement: <RouteError />,
      },
      {
        path: "*",
        element: <RouteError />,
      },
    ],
    errorElement: <RouteError />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.Fragment>
    <RouterProvider router={route} />
  </React.Fragment>
);
