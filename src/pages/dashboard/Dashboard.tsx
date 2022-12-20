import React from "react";
import { useSelector } from "react-redux";
import { print, selectAuth } from "../../redux/auth/authSlice";
import store from "../../redux/store";

const Dashboard = () => {
  const { user } = useSelector(selectAuth);
  console.log(user);
  const handleClick = () => {
    store.dispatch(print());
  };
  return (
    <>
      <div>This is Dashboard page!</div>
      <button type="button" onClick={handleClick}>
        redux setup demo
      </button>
    </>
  );
};

export default Dashboard;
