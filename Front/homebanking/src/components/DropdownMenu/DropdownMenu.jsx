import React from "react";
import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons"; // Importa ChevronDownIcon desde @chakra-ui/icons
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

const DropdownMenu = () => {
  // eslint-disable-next-line no-unused-vars
  const { isLogged, signOut } = useAuth();
  const user = sessionStorage.getItem("usuario");
  const usuario = user ? JSON.parse(user) : {};
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        Menu
      </MenuButton>
      <MenuList>
        <Link to="/home">
          <MenuItem>Inicio</MenuItem>
        </Link>
        {!usuario.is_staff ? (
          <>
            <Link to="/perfil">
              <MenuItem>Mi perfil</MenuItem>
            </Link>
            <Link to="/cuentas">
              <MenuItem>Cuentas</MenuItem>
            </Link>
            <Link to="/prestamos">
              <MenuItem>Prestamos</MenuItem>
            </Link>
            <Link to="/sucursales">
              <MenuItem>Sucursales</MenuItem>
            </Link>
            <Link to="/herramientas">
              <MenuItem>Herramientas</MenuItem>
            </Link>
          </>
        ) : null}

        {usuario ? (
          <Link to="/home" onClick={() => signOut()}>
            <MenuItem>Cerrar sesión</MenuItem>
          </Link>
        ) : null}
      </MenuList>
    </Menu>
  );
};

export default DropdownMenu;
