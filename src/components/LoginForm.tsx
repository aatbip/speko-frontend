import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// type LoginProps = {

//   visibility: boolean,

//   toggleVisiblity: Function,
//   credentials: { username: string, password: string },
// };

function LoginForm() {
  const navigate = useNavigate();
  const [visibility, setVisibilty] = useState(false);
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const toggleVisibilty = () => {
    setVisibilty(!visibility);
  };

  return (
    <div className="login-background">
      <div className="loginform">
        <div className="form-title">Log In</div>
        <input
          type="text"
          name="username"
          id=""
          className="form-username"
          placeholder="Enter username"
          value={credentials.username}
          onChange={(ev) =>
            setCredentials({
              ...credentials,
              username: ev.target.value,
            })
          }
        />
        <div className="password-container">
          <input
            type={visibility ? "text" : "password"}
            name="password"
            placeholder="Enter Password"
            className="form-password"
            value={credentials.password}
            onChange={(ev) =>
              setCredentials({
                ...credentials,
                password: ev.target.value,
              })
            }
          />
          <img
            onClick={() => toggleVisibilty()}
            src={visibility ? "/images/eye.png" : "/images/eye-off.png"}
            alt="Visible Password"
          ></img>
        </div>
        <a href="/account-recovery" className="forgot-pass">
          Forgot password?
        </a>
        <button className="login-button">Log In</button>
        <div className="signup-link">
          Don't have an account?{" "}
          <div
            style={{ textDecorationLine: "underline", cursor: "pointer" }}
            onClick={() => {
              navigate("/signup");
            }}
          >
            Signup here
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
