import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App/App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./screens/Login/Login.jsx";
import RouteError from "./screens/Errors/RouteError.jsx";
import UnauthenticatedApp from "./App/UnauthenticatedApp/UnauthenticatedApp.jsx";
import { NewsArticle } from "./screens/NewsArticle/NewsArticle.jsx";
import { DetailArticle } from "./screens/DetailArticle/DetailArticle.jsx";
import { InsertComment } from "./screens/DetailArticle/InsertComment.jsx";
import { SingleArticleDetail } from "./screens/DetailArticle/SingleArticleDetail.jsx";
import { Comments } from "./screens/DetailArticle/Comments.jsx";
import { MenuDetail } from "./screens/DetailArticle/MenuDetail.jsx";


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
        path: "/NewsArticle",
        element: <NewsArticle/>,
        errorElement: <RouteError />,
      },
      {
        path: "/DetailArticle",
        element: <DetailArticle/>,
        errorElement: <RouteError />,
      },
      {
        path: "/InsertComment",
        element: <InsertComment/>,
        errorElement: <RouteError />,
      },  
      {
        path: "/Comments",
        element: <Comments/>,
        errorElement: <RouteError />,
      }, 
      {
        path: "/MenuDetail",
        element: <MenuDetail/>,
        errorElement: <RouteError />,
      },
      {
        path: "*",
        element: <RouteError />,
      }
    ],
    errorElement: <RouteError />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.Fragment>
    <App />
  </React.Fragment>
);
