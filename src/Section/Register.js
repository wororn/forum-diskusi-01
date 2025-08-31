import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import RegisterForm from "../Component/RegisterForm.js";
import { register } from "../Utils/api.js";

function Register() {
  const navigate = useNavigate();
  const [errorMsg, setErrorMsg] = useState("");

  async function onRegisterHandler(user) {
    setErrorMsg("");
    try {
      const { error, message } = await register(user);
      if (!error) {
        navigate("/");
      } else {
        setErrorMsg(message || "Registration is Fail. Try again, please.");
      }
    } catch (err) {
      setErrorMsg("has been failure. try again, please.");
    }
  }

  return (
    <section className="register-panel">
      <h2>You shouldn't have to be seriously ...</h2>
      {errorMsg && (
        <div className="alert alert-danger" role="alert">
          {errorMsg}
        </div>
      )}
      <RegisterForm register={onRegisterHandler} />
      <p>
        go to <Link to="/">Entry</Link>
      </p>
    </section>
  );
}

export default Register;
