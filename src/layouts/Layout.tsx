import { Outlet } from "react-router-dom";
import Header from "./header/Header";

export interface ILayout {
  type: string;
}

const Layout: React.FC<ILayout> = ({ type }) => {
  return (
    <>
      <Header type={type} />
      <Outlet />
    </>
  );
};

export default Layout;
