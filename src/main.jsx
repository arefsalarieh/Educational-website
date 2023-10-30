import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App/App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./screens/Login/Login.jsx";
import RouteError from "./screens/Errors/RouteError.jsx";
import UnauthenticatedApp from "./App/UnauthenticatedApp/UnauthenticatedApp.jsx";
import Landing from "./screens/Landing/Landing.jsx";
import Courses from "./screens/Courses/Courses.jsx";
import CoursesDetail from "./screens/CoursesDetail/CoursesDetail.jsx";
import NewsDetail from "./screens/NewsDetail/NewsDetail.jsx";


const route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Landing />,
        errorElement: <RouteError />,
      },
      {
        path: "/Courses",
        element: <Courses />,
        errorElement: <RouteError />,
      },
      {
        path: "/CoursesDetail",
        element: <CoursesDetail />,
        errorElement: <RouteError />,
      },  
      {
        path: "/NewsDetail",
        element: <NewsDetail />,
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
