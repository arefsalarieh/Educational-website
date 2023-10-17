import Layout from "../components/Layout/Layout.jsx";
import Landing from "../screens/Landing/Landing.jsx";
import RouteError from "../screens/Errors/ErrorPage.jsx";
import LoginPage from "../screens/Login/LoginPage.jsx";
import ForgotPassword from "../screens/ForgotPassword/ForgotPassword.jsx";
import ResetPassword from "../screens/ResetPassword/ResetPassword.jsx";
import StudentPanel from "../screens/StudentPanel"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import RegisterPage from "../screens/Register/RegisterPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Landing />,
        errorElement: <RouteError />,
      },
      {
        path: "/login",
        element: <LoginPage />,
        errorElement: <RouteError />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
        errorElement: <RouteError />,
      },
      {
        path: "/forgotPassword",
        element: <ForgotPassword />,
        errorElement: <RouteError />,
      },
      {
        path: "/resetPassword",
        element: <ResetPassword />,
        errorElement: <RouteError />,
      },
      {
        path: "/studentPanel",
        element: <StudentPanel />,
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


function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
