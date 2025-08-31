/* eslint-disable no-unused-vars */
import { IoSend } from "react-icons/io5";
import useInput from "../Hooks/useInput";
import { useRef } from "react";

const CommentMain = ({ addComment }) => {
  const [comment, setComment, handleComment] = useInput();
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!comment.trim()) return;
    addComment({ content: comment });
    setComment("");
    inputRef.current?.focus();
  };

  return (
    <form className="d-flex" onSubmit={handleSubmit} autoComplete="off">
      <input
        ref={inputRef}
        type="text"
        placeholder="Write your comment ..."
        value={comment}
        onChange={handleComment}
        className="w-100 me-3"
        aria-label="Write your comment"
      />
      <button
        type="submit"
        className="btn btn-primary"
        disabled={!comment.trim()}
        aria-label="Send comment"
      >
        <IoSend />
      </button>
    </form>
  );
};

export default CommentMain;
