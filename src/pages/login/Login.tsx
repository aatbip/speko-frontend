import React from "react";
import "./login.css";

import LoginForm from "../../components/LoginForm";
import SignupForm from "../../components/SignupForm";
interface ILogin {
  signUp: boolean;
}

const Login: React.FC<ILogin> = ({ signUp }) => {
  return (
    <>
      {/* <div>This is login and signup page!</div> */}
      {/* {signUp ? <p>Render signup form </p> : <p>Render login form </p>}  */}

      {signUp ? <SignupForm /> : <LoginForm />}
    </>
  );
};

export default Login;
