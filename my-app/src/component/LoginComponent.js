import React, { useEffect, useState } from "react";
import "./logincomponent.css";
import { postMappingLogin } from "./Config";

const LoginComponent = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  useEffect(() => {
    if (
      localStorage.getItem("accessToken") != null &&
      localStorage.getItem("accessToken") != undefined
    ) {
      window.location.href = "/user-management";
    }
  }, [localStorage.getItem("accessToken")]);
  async function handleSubmit(e) {
    e.preventDefault();
    let detail = await postMappingLogin({
      url: "login-admin",
      body: { email, password },
    });
  }

  return (
    <div className="aline-div">
      <div className="container">
        <div className="second-div vh-100">
          <h1>Login Page</h1>
          <form className="login-form">
            <div className="mb-3">
              <label className="form-label">Email:</label>
              <input
                className="form-control"
                type="email"
                name="email"
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Password:</label>
              <input
                className="form-control"
                type="password"
                name="password"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
            <button
              onClick={handleSubmit}
              type="submit"
              className="btn btn-primary"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default LoginComponent;
