import {
  Flex,
  Box,
  Heading,
  Text,
  Link,
  FormControl,
  FormLabel,
  Input,
  Button,
  Checkbox,
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  HStack,
} from "@chakra-ui/react";
import DropdownMenu from "./DropdownSucursales";

import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";


import { useNavigate } from "react-router-dom";

// Login box/space
function RegisterArea() {
  return (
    <Flex
      minHeight="100vh"
      width="full"
      align="Center"
      justifyContent="center"
      bg="#d6f2e6"
    >
      <Box
        borderWidth={1}
        px={4}
        width="full"
        maxWidth="500px"
        borderRadius={4}
        textAlign="center"
        bg="gray.200 "
        boxShadow="dark-lg"
      >
        <RegisterHeader />
        <RegisterForm />
      </Box>
    </Flex>
  );
}

export default RegisterArea;

// Encabezado
function RegisterHeader() {
  return (
    <Box textAlign="center">
      <Heading>Registra tu nueva cuenta</Heading>
    </Box>
  );
}

// Formulario de Login
function RegisterForm() {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [dni, setDni] = useState("");
  const [correo, setCorreo] = useState("");
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
  };

  return (
    <Box my={8} textAlign="left">
      <form onSubmit={handleRegister}>
        <FormControl isRequired>
          <FormLabel>Nombre</FormLabel>
          <Input
            type="nombre"
            placeholder="Escribe tu Nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          ></Input>
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Apellido</FormLabel>
          <Input
            type="apellido"
            placeholder="Escribe tu Apellido"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
          ></Input>
        </FormControl>
        <FormControl isRequired>
          <FormLabel>DNI</FormLabel>
          <Input
            type="dni"
            placeholder="Escribe tu DNI"
            value={dni}
            onChange={(e) => setDni(e.target.value)}
          ></Input>
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Correo</FormLabel>
          <Input
            type="correo"
            placeholder="Escribe tu Correo"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
          ></Input>
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Usuario</FormLabel>
          <Input
            type="user"
            placeholder="Escribi tu nombre de Usuario"
            value={user}
            onChange={(e) => setUser(e.target.value)}
          ></Input>
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Contraseña</FormLabel>
          <Input
            type="password"
            placeholder="Escribi tu Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Input>
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Sucursal</FormLabel>
          <DropdownMenu />
        </FormControl>

        <HStack justifyContent="space-between" mt={4}>
        </HStack>
        <Button bg="#349f77" width="full" mt="4" type="submit">
          Registrarme
        </Button>
        {error && (
          <Alert status="error">
            <AlertIcon />
            <AlertTitle>¡Datos incorrectos!</AlertTitle>
            <AlertDescription>
              El Usuario y/o Contraseña es incorrecto
            </AlertDescription>
          </Alert>
        )}
      </form>
    </Box>
  );
}
