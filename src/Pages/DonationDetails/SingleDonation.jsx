import PropTypes from "prop-types";

const SingleDonation = ({ singleDonation }) => {
  const { id, thumbnail, title, text_color, description, price } =
    singleDonation;
  //   console.log(singleDonation);

  return (
    <div>
      <div className="w-full mb-5 relative before:content[''] before:h-32 before:w-full before:bg-black before:absolute before:bottom-0 before:left-0 before:opacity-50  before:rounded-bl-xl before:rounded-br-xl ">
        <img src={thumbnail} alt="" className="w-full rounded-xl" />
        <button
          style={{
            backgroundColor: `${text_color}`,
            color: "#fff",
            fontSize: "20px",
            fontWeight: "600",
            padding: "16px 26px",
            borderRadius: "8px",
            position: "absolute",
            left: "35px",
            bottom: "35px",
          }}
        >
          Donation ${price}
        </button>
      </div>
      <h2 className="text-4xl font-bold my-8">{title}</h2>
      <p className="text-[#545454]">{description}</p>
    </div>
  );
};

SingleDonation.propTypes = {
  singleDonation: PropTypes.object,
};

export default SingleDonation;
