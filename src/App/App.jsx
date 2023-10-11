import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header.jsx"
import Footer from "../components/Footer/Footer.jsx"
import InputEmail from "../components/common/uiKit/inputEmail.jsx";
import SerachCourses from "../components/common/search/serachCourses.jsx";

function App() {
  const isLoggedIn = true;
  return (
    <>
<SerachCourses/>
    </>
  );
}

export default App;
