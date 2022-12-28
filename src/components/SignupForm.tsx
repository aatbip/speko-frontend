import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// type LoginProps = {

//   visibility: boolean,

//   toggleVisiblity: Function,
//   credentials: { username: string, password: string },
// };

function SignupForm() {
  const navigate = useNavigate();
  const [visibility, setVisibilty] = useState({
    pass: false,
    confirmPass: false,
  });
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    recoveryQuestion: "",
    recoveryAnswer: "",
  });

  const toggleVisibility = (place: string) => {
    place === "pass"
      ? setVisibilty({ ...visibility, pass: !visibility.pass })
      : setVisibilty({ ...visibility, confirmPass: !visibility.confirmPass });
  };
  return (
    <div className="login-background">
      <div className="loginform">
        <div className="form-title">Sign Up</div>
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
            type={visibility.pass ? "text" : "password"}
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
            onClick={() => toggleVisibility("pass")}
            src={visibility.pass ? "/images/eye.png" : "/images/eye-off.png"}
            alt="Visible Password"
          ></img>
        </div>
        <div className="password-container">
          <input
            type={visibility.confirmPass ? "text" : "password"}
            name="confirm-password"
            placeholder="Confirm Password"
            className="form-password"
            value={credentials.confirmPassword}
            onChange={(ev) =>
              setCredentials({
                ...credentials,
                confirmPassword: ev.target.value,
              })
            }
          />
          <img
            onClick={() => toggleVisibility("confirmPass")}
            src={
              visibility.confirmPass ? "/images/eye.png" : "/images/eye-off.png"
            }
            alt="Visible Password"
          ></img>
        </div>
        <div>Account Recovery Question</div>
        <input
          className="form-username"
          placeholder="Enter Question"
          value={credentials.recoveryQuestion}
          onChange={(ev) =>
            setCredentials({
              ...credentials,
              recoveryQuestion: ev.target.value,
            })
          }
        ></input>
        <input
          className="form-username"
          placeholder="Enter Answer"
          value={credentials.recoveryAnswer}
          onChange={(ev) =>
            setCredentials({
              ...credentials,
              recoveryAnswer: ev.target.value,
            })
          }
        ></input>

        <button className="login-button">Sign Up</button>
        <div className="signup-link">
          Already have an account?{" "}
          <div
            onClick={() => {
              navigate("/login");
            }}
            style={{ textDecorationLine: "underline", cursor: "pointer" }}
          >
            Login here
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupForm;
