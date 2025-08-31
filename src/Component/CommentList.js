import PropTypes from "prop-types";
import CommentPart from "./CommentPart";
import CommentMain from "./CommentMain";

const CommentList = ({ addComment, comments = [], authUser }) => {
  return (
    <section className="card my-3 border-0" aria-label="Comments Section">
      <CommentMain addComment={addComment} />
      <h4 className="text-center my-4">Comments ({comments.length})</h4>
      {comments.length > 0 ? (
        comments.map((comment) => (
          <CommentPart key={comment.id} authUser={authUser} {...comment} />
        ))
      ) : (
        <p className="text-center fs-5">There are no comments</p>
      )}
    </section>
  );
};

CommentList.propTypes = {
  addComment: PropTypes.func.isRequired,
  comments: PropTypes.array,
  authUser: PropTypes.string,
};

export default CommentList;
