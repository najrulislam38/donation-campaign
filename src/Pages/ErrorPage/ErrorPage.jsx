import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <section className="w-full h-screen flex justify-center items-center text-center">
      <div className="">
        <h1 className="text-3xl text-gray-700 font-semibold mb-8">
          Oops! Your destination is wrong......
        </h1>
        <Link to={"/"}>
          <button className="btn btn-primary">Go Home</button>
        </Link>
      </div>
    </section>
  );
};

export default ErrorPage;
