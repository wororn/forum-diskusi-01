/* eslint-disable no-unused-vars */

import PropTypes from "prop-types";
import { postedAt } from "../Utils";
import { AiOutlineDislike, AiTwotoneLike } from "react-icons/ai";

const DEFAULT_AVATAR = "https://ui-avatars.com/api/?name=User"; // fallback avatar

const CommentPart = ({
  owner,
  content,
  createdAt,
  upVotesBy = [],
  downVotesBy = [],
}) => {
  return (
    <article className="mb-4">
      <header className="d-flex align-items-center gap-2 mb-1">
        <img
          src={owner.avatar || DEFAULT_AVATAR}
          alt={`Avatar of ${owner.name}`}
          className="rounded-circle"
          width={36}
          height={36}
        />
        <h4 className="mb-0">{owner.name}</h4>
        <span className="font-normal text-slate-400 text-xs">
          ▫ {postedAt(createdAt)}
        </span>
      </header>
      <section className="mt-2">
        <p className="mb-2">{content}</p>
      </section>
      <footer className="d-flex gap-2">
        <button
          className="btn btn-primary"
          aria-label={`Like comment by ${owner.name}`}
          type="button"
        >
          <AiTwotoneLike /> {upVotesBy.length}
        </button>
        <button
          className="btn btn-primary"
          aria-label={`Dislike comment by ${owner.name}`}
          type="button"
        >
          <AiOutlineDislike /> {downVotesBy.length}
        </button>
      </footer>
    </article>
  );
};

CommentPart.propTypes = {
  owner: PropTypes.shape({
    avatar: PropTypes.string,
    name: PropTypes.string.isRequired,
  }).isRequired,
  content: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  upVotesBy: PropTypes.array,
  downVotesBy: PropTypes.array,
};

export default CommentPart;
