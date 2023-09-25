import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const AddedDonationCard = ({ addedDonation }) => {
  const {
    id,
    picture,
    title,
    category,
    category_bg,
    card_bg,
    text_color,
    price,
  } = addedDonation || {};
  return (
    <div>
      <div
        style={{
          backgroundColor: `${card_bg}`,
        }}
        className={` shadow flex gap-5  rounded-xl`}
      >
        <figure>
          <img src={picture} alt={`${category} image`} />
        </figure>
        <div className="p-5">
          <p
            style={{
              backgroundColor: `${category_bg}`,
              color: `${text_color}`,
            }}
            className={`px-2 p-1 font-medium   rounded-md inline`}
          >
            {category}
          </p>
          <h2
            className={` text-xl font-semibold text-${text_color} py-2 mb-2 "`}
          >
            {title}
          </h2>
          <p
            style={{
              color: `${text_color}`,
            }}
            className={`text-lg font-medium rounded-md`}
          >
            $ {price}
          </p>
          <Link to={`/donations/${id}`}>
            <button
              style={{
                display: "block",
                color: "white",
                backgroundColor: `${text_color}`,
                fontSize: "18px",
                fontWeight: "600",
                padding: "8px 16px",
                borderRadius: "8px",
                marginTop: "8px",
              }}
            >
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

AddedDonationCard.propTypes = {
  addedDonation: PropTypes.object,
};

export default AddedDonationCard;
