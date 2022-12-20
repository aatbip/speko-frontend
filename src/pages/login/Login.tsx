import React from "react";

interface ILogin {
  signUp: boolean;
}
const Login: React.FC<ILogin> = ({ signUp }) => {
  return (
    <>
      <div>This is login and signup page!</div>
      {signUp ? <p>Render signup form </p> : <p>Render login form </p>}
    </>
  );
};

export default Login;
