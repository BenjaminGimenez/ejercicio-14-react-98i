import { createBrowserRouter } from "react-router-dom";
import RootView from "../views/RootView";
import { element } from "prop-types";
import { Children } from "react";

//2 tipos de rutas: publicas y privadas
export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootView />,
    children: [
      //RUTAS PUBLICAS
      {
        path: "",
        element: <PublicView />,
        children: [
          {
            path: "",
            element: <p>Home</p>,
          },
          {
            path: "login",
            element: <p>Login</p>,
          },
          {
            path: "register",
            element: <p>Register</p>,
          },
          {
            path: 'detail/:id',
            element: <p>Detalle</p>,
          },
        ],
      },
      //RUTAS PRIVADAS
      {
        path: "",
        element: <PrivateView />,
        children: [
          {
            path: "admin",
            element: <p>Admin</p>,
          },
        ],
      },
    ],
  },
]);
