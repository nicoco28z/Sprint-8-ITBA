import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import HomePage from "./pages/HomePage";
import PerfilPage from "./pages/PerfilPage";
import Navbar from "./components/Navbar/Navbar";
import ErrorPage from "./pages/ErrorPage";
import Account from "./pages/AccountsPage";
import AdditionalTools from "./pages/AdditionalTools";
import { AuthProvider } from "./hooks/useAuth";

import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Sucursales from "./pages/Sucursales";
import Prestamos from "./pages/Prestamos";
import Empleado from "./pages/EmpleadoPage";
import TarjetasPage from "./pages/TarjetasPage";

//Rutas para la navegacion
const routes = [
  {
    path: "",
    element: <HomePage />,
  },
  {
    path: "/",
    element: <Navbar />,
    children: [
      {
        path: "home",
        element: <HomePage />,
      },
      {
        path: "cuentas",
        element: <Account />,
      },
      {
        path: "herramientas",
        element: <AdditionalTools />,
      },
      {
        path: "perfil",
        element: <PerfilPage />,
      },
      {
        path: "sucursales",
        element: <Sucursales />,
      },
      {
        path: "prestamos",
        element: <Prestamos />,
      },
      {
        path: "tarjetas",
        element: <TarjetasPage />
      },
      {
        path: "empleado",
        element: <Empleado/>
      }
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
];

const router = createBrowserRouter(routes);

export default function App() {
  return (
    <ChakraProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </ChakraProvider>
  );
}
