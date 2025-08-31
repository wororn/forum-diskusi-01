import React from "react";
import PropTypes from "prop-types";
import "../Styles/registerinput.css";

class RegisterForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      password: "",
      touched: {
        name: false,
        email: false,
        password: false,
      },
      submitted: false,
    };

    this.nameInputRef = React.createRef();

    this.onNameChange = this.onNameChange.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  componentDidMount() {
    if (this.nameInputRef.current) {
      this.nameInputRef.current.focus();
    }
  }

  onNameChange(event) {
    this.setState({ name: event.target.value });
  }

  onEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  onPasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  onBlur(event) {
    this.setState({
      touched: { ...this.state.touched, [event.target.name]: true },
    });
  }

  validate() {
    const { name, email, password } = this.state;
    return {
      name: name.trim().length === 0 ? "Nama wajib diisi." : "",
      email: !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email.trim())
        ? "Email tidak valid."
        : "",
      password: password.length < 6 ? "Password minimal 6 karakter." : "",
    };
  }

  onSubmitHandler(event) {
    event.preventDefault();
    const errors = this.validate();
    const isValid = !errors.name && !errors.email && !errors.password;
    this.setState({
      touched: { name: true, email: true, password: true },
      submitted: true,
    });

    if (isValid) {
      const { name, email, password } = this.state;
      this.props.register({
        name: name.trim(),
        email: email.trim(),
        password: password,
      });
      // Clear form after submit
      this.setState({
        name: "",
        email: "",
        password: "",
        touched: { name: false, email: false, password: false },
        submitted: false,
      });
      if (this.nameInputRef.current) {
        this.nameInputRef.current.focus();
      }
    }
  }

  render() {
    const { name, email, password, touched, submitted } = this.state;
    const errors = this.validate();
    const isDisabled =
      !!errors.name ||
      !!errors.email ||
      !!errors.password ||
      !name.trim() ||
      !email.trim() ||
      !password;

    return (
      <form
        onSubmit={this.onSubmitHandler}
        className="register-input"
        noValidate
      >
        <div>
          <label htmlFor="name">Nama</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Nama"
            value={name}
            onChange={this.onNameChange}
            onBlur={this.onBlur}
            autoComplete="name"
            className="register-input__field"
            ref={this.nameInputRef}
            aria-invalid={!!errors.name}
            aria-describedby="name-error"
          />
          {(touched.name || submitted) && errors.name && (
            <div id="name-error" className="register-input__error">
              {errors.name}
            </div>
          )}
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={this.onEmailChange}
            onBlur={this.onBlur}
            autoComplete="email"
            className="register-input__field"
            aria-invalid={!!errors.email}
            aria-describedby="email-error"
          />
          {(touched.email || submitted) && errors.email && (
            <div id="email-error" className="register-input__error">
              {errors.email}
            </div>
          )}
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            autoComplete="new-password"
            value={password}
            onChange={this.onPasswordChange}
            onBlur={this.onBlur}
            className="register-input__field"
            aria-invalid={!!errors.password}
            aria-describedby="password-error"
          />
          {(touched.password || submitted) && errors.password && (
            <div id="password-error" className="register-input__error">
              {errors.password}
            </div>
          )}
        </div>
        <button type="submit" disabled={isDisabled}>
          Register
        </button>
      </form>
    );
  }
}

RegisterForm.propTypes = {
  register: PropTypes.func.isRequired,
};

export default RegisterForm;
