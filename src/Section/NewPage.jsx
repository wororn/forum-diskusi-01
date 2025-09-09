/* eslint-disable no-unused-vars */
import MemoForm from "../Component/MemoForm";
// If you use react-helmet, uncomment the next line:
import { Helmet } from "react-helmet";

const NewPage = () => {
  return (
    <main className="container" aria-label="Create new line section">
      {/* Uncomment below if using react-helmet */}
      {
        <Helmet>
          <title>Create New Line | Discussion Forum</title>
          <meta
            name="description"
            content="Create a new discussion line in the forum."
          />
        </Helmet>
      }
      <header>
        <h1 className="fw-bold my-5 text-center" tabIndex={0}>
          Create New Discussion | Discussion Forum
        </h1>
        <p className="text-center text-muted mb-4" aria-live="polite">
          Fill out the form below to start a new discussion.
        </p>
      </header>
      <section className="mb-5" aria-labelledby="form-title">
        <MemoForm />
      </section>
    </main>
  );
};

export default NewPage;
