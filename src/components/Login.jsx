import React, { useContext, useState } from "react";
import { StoreContext } from "../context/ContextapiStore";
const Login = ({ isForm, setIsForm }) => {
  const { url, token, setToken } = useContext(StoreContext);
  const [status, setStatus] = useState("Login");

  return (
    <>
      {!isForm ? null : (
        <div className="login-rap">
          <div className="login-rap__container">
            <button onClick={() => setIsForm(false)} className="clossBtn">
              X
            </button>
            <form>
              <h3>{status} to your account</h3>
              <br />
              {status !== "Login" ? (
                <div>
                  <label>Username:</label>
                  <input type="text" name="username" required />
                </div>
              ) : null}

              <div>
                <label>Email:</label>
                <input type="email" name="email" required />
              </div>
              <div>
                <label>Password:</label>
                <input type="password" name="password" required />
              </div>
              <br />
              <button className="sub-btn" type="submit">
                {status}
              </button>
              {status === "Login" ? (
                <p>
                  Don't have an account{" "}
                  <span onClick={() => setStatus("Sign up")}>Sign up</span>
                </p>
              ) : (
                <p>
                  Already have an account{" "}
                  <span onClick={() => setStatus("Login")}>Login</span>
                </p>
              )}
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
