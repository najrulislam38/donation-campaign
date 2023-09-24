const Banner = () => {
  return (
    <section className="max-w-[1500px] mx-auto h-[80vh] px-5 md:px-12 lg:px-24">
      <div className=" w-full h-full flex justify-center items-center text-center">
        <div>
          <h1 className="text-5xl font-bold mb-10">
            I Grow By Helping People In Need
          </h1>
          <form className="w-9/12 mx-auto relative rounded-md overflow-hidden border shadow-md">
            <input
              type="text"
              name="donation-name"
              id=""
              placeholder="Search here"
              className="p-4 w-full outline-none"
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

export default Banner;
