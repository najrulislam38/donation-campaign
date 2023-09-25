import PropTypes from "prop-types";

const Banner = ({ handleSubmit }) => {
  return (
    <section className="max-w-[1500px] mx-auto lg:h-[80vh] px-5 md:px-12 lg:px-24 py-20">
      <div className=" w-full h-full flex justify-center items-center text-center">
        <div>
          <h1 className="text-5xl font-bold mb-10">
            I Grow By Helping People In Need
          </h1>
          <form
            onSubmit={handleSubmit}
            className="w-9/12 mx-auto relative rounded overflow-hidden border shadow-md"
          >
            <input
              type="text"
              name="name"
              id=""
              placeholder="Search here"
              className="p-4 w-full"
            />
            <input
              type="submit"
              value="Search"
              className="bg-[#FF444A] py-4 px-7 text-white text-base font-semibold absolute top-0 right-0"
            />
          </form>
        </div>
      </div>
    </section>
  );
};

Banner.propTypes = {
  handleSubmit: PropTypes.func,
};

export default Banner;
