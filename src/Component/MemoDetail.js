/* eslint-disable no-unused-vars */
import { useState } from "react";
import { AiTwotoneDislike, AiTwotoneLike } from "react-icons/ai";
import { postedAt } from "../Utils";
import { useDispatch } from "react-redux";
import { asyncUpVoteThread } from "../Action/Stream/action.js";
import MemoItem from "./MemoItem.js";

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

export default MemoDetail;
