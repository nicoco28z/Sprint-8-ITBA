import {
  Flex,
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  HStack,
} from "@chakra-ui/react";
import DropdownMenu from "./DropdownSucursales";

import { useState } from "react";


import { useNavigate } from "react-router-dom";
import { nuevoUser } from "../../api/usuario";

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
  const [first_name, setNombre] = useState("");
  const [last_name, setApellido] = useState("");
  const [dni, setDni] = useState("");
  const [email, setCorreo] = useState("");
  const [username, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  
  const nav = useNavigate()

  const handleRegister = async (e) => {
    e.preventDefault();

    const {error} = await nuevoUser({first_name:first_name, last_name:last_name, dni:dni, email:email, username:username, password:password})

    if(error){
     setError(true)
    } else{
      nav('/login')
    }

  };

  return (
    <Box my={8} textAlign="left">
      <form onSubmit={handleRegister}>
        <FormControl isRequired>
          <FormLabel>Nombre</FormLabel>
          <Input
            type="nombre"
            placeholder="Escribe tu Nombre"
            value={first_name}
            onChange={(e) => setNombre(e.target.value)}
          ></Input>
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Apellido</FormLabel>
          <Input
            type="apellido"
            placeholder="Escribe tu Apellido"
            value={last_name}
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
            value={email}
            onChange={(e) => setCorreo(e.target.value)}
          ></Input>
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Usuario</FormLabel>
          <Input
            type="user"
            placeholder="Escribi tu nombre de Usuario"
            value={username}
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
