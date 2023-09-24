import { useLocation } from "react-router-dom";
import Banner from "./Banner";
import Navbar from "./Navbar";
import "./Header.css";

const Header = () => {
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <header className="w-full h-fit">
      {pathname === "/" ? (
        <div id="header">
          <Navbar></Navbar>
          <Banner></Banner>
        </div>
      ) : (
        <div>
          <Navbar></Navbar>
        </div>
      )}
    </header>
  );
};

export default Header;
