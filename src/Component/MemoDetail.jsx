/* eslint-disable no-unused-vars */

import PropTypes from "prop-types";
import { AiTwotoneDislike, AiTwotoneLike } from "react-icons/ai";
import { postedAt } from "../Utils";
import { useDispatch } from "react-redux";
import { asyncUpVoteThread } from "../Action/Stream/action.js";
import MemoItem from "./MemoItem";

const MemoDetail = ({
  id,
  title,
  body,
  category = "",
  createdAt,
  owner,
  upVotesBy,
  downVotesBy,
  authUser,
}) => {
  const dispatch = useDispatch();
  const isUpVote = upVotesBy.includes(authUser);
  const isDownVote = downVotesBy.includes(authUser);

  const handleUpVote = (e) => {
    e.stopPropagation();
    dispatch(asyncUpVoteThread(id));
  };

  // Placeholder for downvote logic (implement asyncDownVoteThread if needed)
  const handleDownVote = (e) => {
    e.stopPropagation();
    // dispatch(asyncDownVoteThread(id));
  };

  return (
    <div className="card border-0">
      <div className="d-flex flex-row align-items-center gap-2">
        <img src={owner.avatar} alt="avatar" className="rounded-circle" />
        <h4>{owner.name}</h4>
        <span>▫ {postedAt(createdAt)}</span>
      </div>
      <h3 className="fw-bold my-3">{title}</h3>
      <p>{body}</p>
      <div className="my-3">
        <MemoItem text={category} />
      </div>
      <div className="d-flex gap-2">
        <button
          className={`btn btn-primary${isUpVote ? " blueLike" : ""}`}
          onClick={handleUpVote}
          aria-label="Like"
          type="button"
        >
          <AiTwotoneLike /> {upVotesBy.length}
        </button>
        <button
          className={`btn btn-primary${isDownVote ? " redLike" : ""}`}
          onClick={handleDownVote}
          aria-label="Dislike"
          type="button"
        >
          <AiTwotoneDislike /> {downVotesBy.length}
        </button>
      </div>
    </div>
  );
};
MemoDetail.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  category: PropTypes.string,
  createdAt: PropTypes.string.isRequired,
  owner: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string,
  }).isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  authUser: PropTypes.string.isRequired,
};

export default MemoDetail;
