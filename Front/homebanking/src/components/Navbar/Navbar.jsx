import React from "react";
import { Box, Flex, Link, Spacer, Text, Image, Center } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import { Outlet } from "react-router-dom";
import logo from "./logo.png";

const Navbar = () => {
  return (
    <>
    <Box bg="#248c5f" p={4} >
      <Flex>
        <Box alignItems="center" display="flex">
          <Image src={logo} alt="Logo" w={{ base: 12, md: 16 }} h={{ base: 12, md: 16 }} mr={2} />
          <Link as={RouterLink} to="/home" fontSize={{ base: "xl", md: "2xl" }} fontWeight="bold" color="#ffffff">
              PillarBank
          </Link>
        </Box>
        <Spacer />
        <Box alignItems="center" display="flex">
          <DropdownMenu />
        </Box>
      </Flex>
    </Box>
      <Outlet />
    </>
  );
};

export default Navbar;
