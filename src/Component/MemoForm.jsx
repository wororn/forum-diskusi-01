import  { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { asyncAddThread } from "../Action/Stream/action";
import { useNavigate } from "react-router-dom";
import useInput from "../Hooks/useInput";

const MemoForm = () => {
  const [title, setTitle, handleTitle] = useInput();
  const [category, setCategory, handleCategory] = useInput();
  const [body, setBody] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const titleRef = useRef(null);

  async function addThread(e) {
    e.preventDefault();
    if (!title.trim() || !category.trim() || !body.trim()) {
      setError("All fields are required.");
      return;
    }
    setError("");
    setIsSubmitting(true);
    try {
      await dispatch(asyncAddThread({ title, body, category }));
      setTitle("");
      setCategory("");
      setBody("");
      if (titleRef.current) titleRef.current.focus();
      navigate("/");
    } catch (err) {
      setError("Failed to create thread. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  const isDisabled =
    isSubmitting || !title.trim() || !category.trim() || !body.trim();

  return (
    <form className="row row-cols-1" onSubmit={addThread} noValidate>
      <div className="col__form-group">
        <label htmlFor="memo-title" className="form-label">
          Title
        </label>
        <input
          ref={titleRef}
          id="memo-title"
          type="text"
          placeholder="Title"
          aria-label="Memo title"
          value={title}
          onChange={handleTitle}
          className="w-100 my-1 form-control"
          required
          autoFocus
        />
      </div>
      <div className="col">
        <label htmlFor="memo-category" className="form-label">
          Category
        </label>
        <input
          id="memo-category"
          type="text"
          placeholder="Category"
          aria-label="Memo category"
          value={category}
          onChange={handleCategory}
          className="w-100 my-1 form-control"
          required
        />
      </div>
      <div className="col">
        <label htmlFor="memo-body" className="form-label">
          Body
        </label>
        <textarea
          id="memo-body"
          className="w-100 my-1 border mb-5 form-control"
          placeholder="Body"
          aria-label="Memo body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          rows={5}
          required
        />
      </div>
      {error && (
        <div className="col">
          <div className="alert alert-danger py-2">{error}</div>
        </div>
      )}
      <div className="col my-4">
        <button type="submit" className="btn btn-primary" disabled={isDisabled}>
          {isSubmitting ? "Adding..." : "Add"}
        </button>
      </div>
    </form>
  );
};

export default MemoForm;
