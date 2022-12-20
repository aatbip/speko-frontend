import React from "react";
import { ILayout } from "../Layout";
import AppPageHeader from "./AppPageHeader";
import LoginPageHeader from "./LoginPageHeader";

const Header: React.FC<ILayout> = ({ type }) => {
  return <>{type === "APP" ? <AppPageHeader /> : <LoginPageHeader />}</>;
};

export default Header;
