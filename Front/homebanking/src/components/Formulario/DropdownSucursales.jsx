import React, { useState } from "react";
import { Button, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

const DropdownMenu = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectOption = (option) => {
    setSelectedOption(option);
  };

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        {selectedOption || "Seleccionar Sucursal"}
      </MenuButton>
      <MenuList>
        <MenuItem onClick={() => handleSelectOption("Sucursal N°023")}>
          Sucursal N°023
        </MenuItem>
        <MenuItem onClick={() => handleSelectOption("Sucursal N°231")}>
          Sucursal N°231
        </MenuItem>
        <MenuItem onClick={() => handleSelectOption("Sucursal N°765")}>
          Sucursal N°765
        </MenuItem>
        <MenuItem onClick={() => handleSelectOption("Sucursal N°007")}>
          Sucursal N°007
        </MenuItem>
        <MenuItem onClick={() => handleSelectOption("Sucursal N°123")}>
          Sucursal N°123
        </MenuItem>
        <MenuItem onClick={() => handleSelectOption("Sucursal N°468")}>
          Sucursal N°468
        </MenuItem>
      
      </MenuList>
    </Menu>
  );
};

export default DropdownMenu;
