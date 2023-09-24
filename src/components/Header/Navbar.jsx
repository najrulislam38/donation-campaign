import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="max-w-[1500px] mx-auto px-5 md:px-12 lg:px-24 py-6">
      <div className=" flex flex-col md:flex-row gap-10 justify-between items-center">
        <div>
          <img src="assets/Logo.png" alt="logo" />
        </div>
        <ul className="flex gap-6 lg:gap-10 justify-between items-center">
          <li className="text-lg font-semibold">
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-[#FF444A] underline"
                  : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li className="text-lg font-semibold">
            <NavLink
              to="/donation"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-[#FF444A] underline"
                  : ""
              }
            >
              Donation
            </NavLink>
          </li>
          <li className="text-lg font-semibold">
            <NavLink
              to="/statistics"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-[#FF444A] underline"
                  : ""
              }
            >
              Statistics
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
