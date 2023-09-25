import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import Banner from "./Banner";
import Navbar from "./Navbar";
import "./Header.css";

const Header = ({ handleSubmit }) => {
  const { pathname } = useLocation();
  // console.log(pathname);
  return (
    <header className="w-full h-fit">
      {pathname === "/" ? (
        <div id="header">
          <Navbar></Navbar>
          <Banner handleSubmit={handleSubmit}></Banner>
        </div>
      ) : (
        <div>
          <Navbar></Navbar>
        </div>
      )}
    </header>
  );
};

Header.propTypes = {
  handleSubmit: PropTypes.func,
};

export default Header;
