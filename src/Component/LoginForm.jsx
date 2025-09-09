import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import useInput from "../Hooks/useInput";
import "../Styles/form.css";


function LoginForm({ onLogin }) {
  const [email, handleEmailChange] = useInput("");
  const [password, handlePasswordChange] = useInput("");

  function handleSubmit(e) {
    e.preventDefault();
    onLogin({ email, password });
  }

  return (
    <>
      <form onSubmit={handleSubmit} autoComplete="on">
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="Your email..."
            onChange={handleEmailChange}
            value={email}
            id="email"
            className="form-control"
            autoComplete="email"
            required
            aria-label="Email"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            placeholder="Your password..."
            onChange={handlePasswordChange}
            value={password}
            id="password"
            className="form-control"
            autoComplete="current-password"
            required
            aria-label="Password"
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Login
        </button>
      </form>
      <p className="text-center text-body-secondary mt-2">
        Don&apos;t have an account?
        <Link to="/register"> Register</Link>
      </p>
    </>
  );
}
LoginForm.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

export default LoginForm;
