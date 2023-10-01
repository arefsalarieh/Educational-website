import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header.jsx"
import Footer from "../components/Footer/Footer.jsx"

function App() {
  const isLoggedIn = true;
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
