import React from "react";
import "./login.css";
import { useState } from "react";
import eyeOffLogo from "./images/eye-off.png";
import eyeLogo from "./images/eye.png";
interface ILogin {
  signUp: boolean;
}

type LoginProps = {
  eyeLogo: String;
  visibility: boolean;
  eyeOffLogo: String;
  toggleVisiblity: Function;
  credentials: { username: string; password: string };
};
const Login: React.FC<ILogin> = ({ signUp }) => {
  const [visibility, setVisibilty] = useState(false);
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const toggleVisibilty = () => {
    setVisibilty(!visibility);
  };

  // const handleChange = (value: string, dataType: string) => {
  //   if (dataType === "username") {
  //     setCredentials({
  //       ...credentials,
  //       username: value,
  //     });
  //   }
  // };
  return (
    <>
      <LoginForm
        eyeLogo={eyeLogo}
        eyeOffLogo={eyeOffLogo}
        toggleVisiblity={toggleVisibilty}
        visibility={visibility}
        credentials={credentials}
      />
      {/* <div>This is login and signup page!</div>
      {signUp ? <p>Render signup form </p> : <p>Render login form </p>} */}
    </>
  );

  function LoginForm(props: LoginProps) {
    return (
      <>
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
              src={visibility ? eyeLogo : eyeOffLogo}
              alt="Visible Password"
            ></img>
          </div>
          <a href="#" className="forgot-pass">
            Forgot password?
          </a>
          <button className="login-button">Log In</button>
          <div className="signup-link">
            Don't have an account? <a href="/signup">Signup here</a>
          </div>
        </div>
      </>
    );
  }
};

export default Login;
