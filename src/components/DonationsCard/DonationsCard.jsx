import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const DonationsCard = ({ donation }) => {
  const { id, thumbnail, title, category, category_bg, card_bg, text_color } =
    donation;

  //   console.log(card_bg);

  return (
    <div>
      <Link to={`/donations/${id}`}>
        <div
          style={{
            backgroundColor: `${card_bg}`,
          }}
          className={`card shadow`}
        >
          <figure>
            <img src={thumbnail} alt={`${category} image`} className="w-full" />
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
              style={{
                color: `${text_color}`,
              }}
              className={` text-xl font-semibold text-${text_color} py-3  "`}
            >
              {title}
            </h2>
          </div>
        </div>
      </Link>
    </div>
  );
};

DonationsCard.propTypes = {
  donation: PropTypes.object,
};

export default DonationsCard;
