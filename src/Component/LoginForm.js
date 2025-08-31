import React from "react";
import LoadingIndicator from "./LoadingIndicator.js";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };

    this.onEmailChangeHandler = this.onEmailChangeHandler.bind(this);
    this.onPasswordChangeHandler = this.onPasswordChangeHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onEmailChangeHandler(event) {
    this.setState({ email: event.target.value });
  }

  onPasswordChangeHandler(event) {
    this.setState({ password: event.target.value });
  }

  onSubmitHandler(event) {
    event.preventDefault();
    if (!this.props.loading) {
      this.props.login({
        email: this.state.email,
        password: this.state.password,
      });
    }
  }

  render() {
    const { loading, inputRef } = this.props;

    return (
      <form
        onSubmit={this.onSubmitHandler}
        className="login-input"
        style={{
          width: "18%",
          border: "1px solid black",
          padding: "10px",
          margin: "50px",
          textAlign: "center",
        }}
        aria-label="Login Form"
      >
        <div style={{ width: "100%", marginBottom: "8px" }}>
          <input
            type="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.onEmailChangeHandler}
            ref={inputRef}
            autoComplete="username"
            aria-label="Email"
            style={{
              border: "1px solid black",
              color: "hsla(24, 93%, 56%, 0.877)",
              width: "95%",
              padding: "6px",
            }}
            disabled={loading}
            required
          />
        </div>
        <div style={{ width: "100%", marginBottom: "8px" }}>
          <input
            type="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.onPasswordChangeHandler}
            autoComplete="current-password"
            aria-label="Password"
            style={{
              border: "1px solid black",
              color: "hsla(24, 93%, 56%, 0.877)",
              width: "95%",
              padding: "6px",
            }}
            disabled={loading}
            required
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          style={{ width: "100%", padding: "8px" }}
        >
          {loading ? <LoadingIndicator /> : "Masuk"}
        </button>
      </form>
    );
  }
}

export default LoginForm;
