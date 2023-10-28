import { QueryClient, QueryClientProvider } from "react-query";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Layout from "../components/Layout/Layout.jsx";
import Landing from "../screens/Landing/Landing.jsx";
import RouteError from "../screens/Errors/ErrorPage.jsx";
import LoginPage from "../screens/Login/LoginPage.jsx";
import ForgotPassword from "../screens/ForgotPassword/ForgotPassword.jsx";
import ResetPassword from "../screens/ResetPassword/ResetPassword.jsx";
import StudentPanel from "../screens/StudentPanel"
import {MenuDetail} from "../screens/DetailArticle/MenuDetail"
import RegisterPage from "../screens/Register/RegisterPage.jsx";
import NewsArticle from "../screens/NewsArticle/NewsArticle.jsx";

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
        path: "/menudetail",
        element: <MenuDetail />,
        errorElement: <RouteError />,
      },
      {
        path: "/NewsArticle",
        element: <NewsArticle/>,
        errorElement: <RouteError />,
      }
      ,
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
  const client = new QueryClient({defaultOptions: {queries: {refetchOnWindowFocus: false, staleTime: 1000*6*5}, mutations:{}}})
  return (
    <QueryClientProvider client={client}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
