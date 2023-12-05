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
  
  import { useState } from "react";
  import { useAuth } from "../../hooks/useAuth";
  
  
  import { useNavigate } from "react-router-dom";
  
  // Login box/space
  export default function SolicitarPrestamo() {
    return (
      <Flex
        minHeight="100vh"
        width="full"
        align="Center"
        justifyContent="center"
        bg="#ebecf0"
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
          <PrestamoHeader />
          <PrestamoForm />
        </Box>
      </Flex>
    );
  }
  
  
  // Encabezado
  function PrestamoHeader() {
    return (
      <Box textAlign="center">
        <Heading>Formulario de Solicitud</Heading>
      </Box>
    );
  }
  
  // Formulario de Login
  function PrestamoForm() {
    const [dni, setDni] = useState("");
    const [cantidadPrestamo, setcantidadPrestamo] = useState("");
    const [tipoCliente, settipoCliente] = useState("");
  
    const handleRegister = (e) => {
      e.preventDefault();
    };
  
    return (
      <Box my={8} textAlign="left">
        <form onSubmit={handleRegister}>
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
            <FormLabel>Cantidad</FormLabel>
            <Input
              type="cantidadPrestamo"
              placeholder="Escribi tu nombre de Cantidad"
              value={cantidadPrestamo}
              onChange={(e) => setcantidadPrestamo(e.target.value)}
            ></Input>
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Tipo Cliente</FormLabel>
            <Input
              type="tipoCliente"
              placeholder="Escribi tu Tipo Cliente"
              value={tipoCliente}
              onChange={(e) => settipoCliente(e.target.value)}
            ></Input>
          </FormControl>
  
          <HStack justifyContent="space-between" mt={4}>
          </HStack>
          <Button bg="#d4af37" width="full" mt="4" type="submit">
            Solicitar
          </Button>
        </form>
      </Box>
    );
  }
  