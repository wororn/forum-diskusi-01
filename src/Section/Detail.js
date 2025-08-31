/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { asyncReceiveMemoDetail } from "../Action/MemoDetail/action";
import { asyncAddComment } from "../Action/MemoComment/action";
import MemoDetail from "../Component/MemoDetail";
import CommentList from "../Component/CommentList";

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { detailThread, authUser } = useSelector((states) => states);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    dispatch(asyncReceiveMemoDetail(id))
      .catch((err) => setError("Failed to load thread detail."))
      .finally(() => setLoading(false));
  }, [id, dispatch]);

  const onAddComment = async ({ content }) => {
    try {
      await dispatch(asyncAddComment({ content }));
      await dispatch(asyncReceiveMemoDetail(id));
    } catch {
      setError("Failed to add comment.");
    }
  };

  if (loading) {
    return <div className="container mt-3">Loading...</div>;
  }

  if (error) {
    return <div className="container mt-3 text-danger">{error}</div>;
  }

  if (!detailThread) {
    return <div className="container mt-3">Line not found.</div>;
  }

  return (
    <div className="container mt-3">
      <MemoDetail {...detailThread} authUser={authUser ? authUser.id : null} />
      <CommentList
        addComment={onAddComment}
        comments={detailThread.comments}
        threadId={detailThread.id}
        authUser={authUser ? authUser.id : null}
      />
    </div>
  );
};

export default Detail;
