import PropTypes from "prop-types";

const Rating = ({ valutazione, colore }) => {
  const starStamp = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <i
          key={i}
          className={`bi bi-star${i < valutazione ? "-fill" : ""}`}
        ></i>
      );
    }
    return stars;
  };

  return <span className={colore}>{starStamp()}</span>;
};

Rating.propTypes = {
  vote: PropTypes.number.isRequired,
};

export default Rating;
