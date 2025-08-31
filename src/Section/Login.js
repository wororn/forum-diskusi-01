import React, { useState, useRef, useEffect } from "react";
import LoginForm from "../Component/LoginForm";
import { Link } from "react-router-dom";
import { login } from "../Utils/api.js";

function Login({ loginSuccess }) {
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  async function onLogin({ email, password }) {
    setErrorMsg("");
    setLoading(true);
    try {
      const { error, data, message } = await login({ email, password });
      if (!error) {
        loginSuccess(data);
      } else {
        setErrorMsg(message || "Login is Fail. Try again, please.");
      }
    } catch (err) {
      setErrorMsg("has been failure. Try again, please.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="login-panel" aria-label="Login Section">
      <header>
        <h1>Discussion Forum</h1>
        <p>Let's discuss our problem, topic, etc</p>
      </header>
      <main>
        <h2>Entry For Continuing, Please..</h2>
        {errorMsg && (
          <div
            className="alert alert-danger"
            role="alert"
            aria-live="assertive"
            tabIndex={-1}
          >
            {errorMsg}
          </div>
        )}
        <LoginForm login={onLogin} loading={loading} inputRef={inputRef} />
        <p>
          Don&apos;t have an account?&nbsp;
          <Link to="/register">Register Here.</Link>
        </p>
      </main>
    </section>
  );
}

export default Login;
