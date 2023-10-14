import Layout from "../components/Layout/Layout.jsx";
import Landing from "../screens/Landing/Landing.jsx";
import RouteError from "../screens/Errors/ErrorPage.jsx";
import Login from "../screens/Login/Login.jsx";
import ForgotPassword from "../screens/ForgotPassword/ForgotPassword.jsx";
import ResetPassword from "../screens/ResetPassword/ResetPassword.jsx";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

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
        element: <Login />,
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
