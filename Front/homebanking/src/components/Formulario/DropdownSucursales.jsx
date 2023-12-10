import React, { useState, useEffect } from "react";
import { Button, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import getSucursales from '../../api/sucursales'

const DropdownMenu = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [data, setData] = useState([])
  useEffect(() =>{
    const obtenerSucursales = async () => setData(await getSucursales())
    obtenerSucursales()
  },[])

  const handleSelectOption = (option) => {
    setSelectedOption(option);
  };

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        {selectedOption || "Seleccionar Sucursal"}
      </MenuButton>
      <MenuList>
        {data?.map(s => <MenuItem key={s.id_sucursal} onClick={() => handleSelectOption(s.id_sucursal)}>{s.id_sucursal} | {s.nombre}</MenuItem>)}
      </MenuList>
    </Menu>
  );
};

export default DropdownMenu;