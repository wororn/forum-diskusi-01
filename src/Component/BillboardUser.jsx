import PropTypes from "prop-types";


const DEFAULT_AVATAR = "https://ui-avatars.com/api/?name=User";

const BillboardUser = ({ user, score, num }) => {
  return (
    <section className="card my-2">
      <div className="card-body d-flex flex-row align-items-center">
        <span className="fs-5 me-3">{num}.</span>
        <img
          src={user.avatar || DEFAULT_AVATAR}
          alt={`Avatar of ${user.name}`}
          className="rounded-circle me-3"
          style={{ width: 48, height: 48, objectFit: "cover" }}
        />
        <h4 className="fw-bold flex-grow-1 mb-0">{user.name}</h4>
        <span className="fs-5 fw-bold">{score} XP</span>
      </div>
    </section>
  );
};

BillboardUser.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string,
  }).isRequired,
  score: PropTypes.number.isRequired,
  num: PropTypes.number.isRequired,
};

export default BillboardUser;
