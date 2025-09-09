
import PropTypes from "prop-types";
function FlagItem({ text }) {
  return (
    <span className="badge bg-primary me-1 align-self-center">#{text}</span>
  );
}

FlagItem.propTypes = {
  text: PropTypes.string.isRequired,
};

export default FlagItem;
