import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import { useState } from "react";

const MainLayout = () => {
  const [searchInputValue, setSearchInputValue] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearchInputValue(event.target.name.value);
  };

  // console.log(searchInputValue);
  return (
    <div>
      <Header handleSubmit={handleSubmit}></Header>
      <main className="max-w-[1500px] mx-auto px-5 md:px-12 lg:px-24">
        <Outlet context={searchInputValue}></Outlet>
      </main>
    </div>
  );
};

export default MainLayout;
