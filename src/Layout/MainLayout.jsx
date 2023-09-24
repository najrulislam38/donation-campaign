import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";

const MainLayout = () => {
  return (
    <div>
      <Header></Header>
      <main className="max-w-[1500px] mx-auto px-5 md:px-12 lg:px-24">
        <Outlet></Outlet>
      </main>
    </div>
  );
};

export default MainLayout;
