import { Link } from "react-router-dom";
import { postedAt } from "../Utils";
import FlagItem from "./FlagItem";
import "../Styles/MemoItem.css";

import PropTypes from "prop-types";

const MemoItem = ({
  id,
  title,
  body,
  category,
  createdAt,
  upVotesBy,
  downVotesBy,
  totalComments,
  user,
}) => {
  upVotesBy.reduce((val, total) => {
    return val + total;
  }, 0);
  downVotesBy.reduce((val, total) => {
    return val + total;
  }, 0);

  return (
    <div className="memo-item">
      <div className="memo-item__header">
        <img src={user.avatar} alt="avatar" className="rounded-circle" />
        <h4 className="card-title">{user.name}</h4>
        <span>▫ {postedAt(createdAt)}</span>
      </div>
      <div className="memo-item__body">
        <Link className="card-linked" to={`/threads/${id}`}>
          {title}
        </Link>
        <span>{body}</span>
      </div>
      <div className="memo-item__footer">
        <p className="memo-item__category">
          <FlagItem text={category} />
        </p>
        <div className="memo-item__action">
          <button type="button" className="btn btn-light">
            <i className="fa fa-thumbs-up" aria-hidden="true"></i>
            <span>{upVotesBy.length}</span>
          </button>
          <button type="button" className="btn btn-light">
            <i className="fa fa-thumbs-down" aria-hidden="true"></i>
            <span>{downVotesBy.length}</span>
          </button>
          <button type="button" className="btn btn-light">
            <i className="fa fa-comment" aria-hidden="true"></i>
            <span>{totalComments}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
MemoItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  upVotesBy: PropTypes.array.isRequired,
  downVotesBy: PropTypes.array.isRequired,
  totalComments: PropTypes.number.isRequired,
  user: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string,
  }).isRequired,
};

export default MemoItem;
