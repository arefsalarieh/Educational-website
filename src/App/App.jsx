import Layout from "../components/Layout/Layout.jsx";
import InputEmail from "../components/common/uiKit/inputEmail.jsx";
import SerachCourses from "../components/common/search/serachCourses.jsx";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
  },
]);


function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
