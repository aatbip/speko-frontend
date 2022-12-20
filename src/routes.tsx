import { useRoutes } from "react-router-dom";
import Layout from "./layouts/Layout";
import Dashboard from "./pages/dashboard/Dashboard";
import Login from "./pages/login/Login";

export default function Router() {
  return useRoutes([
    {
      path: "",
      element: <Layout type="APP" />,
      children: [
        {
          path: "",
          element: <Dashboard />,
        },
      ],
    },

    {
      path: "",
      element: <Layout type="NOT-APP" />,
      children: [
        {
          path: "/login",
          element: <Login signUp={false} />,
        },
        {
          path: "/signup",
          element: <Login signUp={true} />,
        },
      ],
    },
  ]);
}
