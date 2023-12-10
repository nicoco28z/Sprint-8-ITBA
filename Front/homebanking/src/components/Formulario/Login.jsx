import {
  Flex,
  Box,
  Heading,
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

import { Link } from "react-router-dom";

import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";

import { useNavigate } from "react-router-dom";

// Login box/space
function LoginArea() {
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
        <LoginHeader />
        <LoginForm />
      </Box>
    </Flex>
  );
}

export default LoginArea;

// Encabezado
function LoginHeader() {
  return (
    <Box textAlign="center">
      <Heading>Inicia sesión en tu cuenta</Heading>
    </Box>
  );
}

// Formulario de Login
function LoginForm() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState(false)
  const navigate = useNavigate();
  const { signIn } = useAuth();

  const url = `http://localhost:8000/api/login/`;

  const isLoged = async (user, psw) => {
    let usuario;
    let apiError;
    const datos = JSON.stringify({
      "username": user,
      "password": psw
    })
    try {
      const response = await fetch(url, {
        method: 'POST',
        body: datos,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        }
      });
      if (!response.ok) {
        throw new Error("Error al iniciar sesion");
      }
      const jsonusuario = await response.json();
      usuario = jsonusuario;
    } catch (e) {
      console.log(e);
      apiError = e;
    }
    return { usuario, apiError };
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const { usuario, apiError } = await isLoged(user, password);

    if (apiError || !usuario) {
      return (
        <Alert status="error">
          <AlertIcon />
          <AlertTitle>Ocurrio un error inesperado</AlertTitle>
        </Alert>
      );
    }

    signIn(usuario);

    if (usuario.is_staff === true) {
      navigate("/empleado");
    } else {
      navigate("/home");
    }
  };

  return (
    <Box my={8} textAlign="left">
      <form onSubmit={handleLogin}>
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

        <HStack justifyContent="space-between" mt={4}>
          <Box>
            <Checkbox defaultChecked bg="#d6f2e6">
              Recuerdame
            </Checkbox>
          </Box>
          <Box>
            <Link bg="#349f77">Olvidaste tu contraseña?</Link>
          </Box>
        </HStack>
        <br />
        <Button bg="#349f77" width="full" mt="4" type="submit">
          Iniciar Sesión
        </Button>
        <br />
        <br />
        <Button bg="#349f77" width="full" mt="4">
          <Link to="/register" bg="#349f77" fontWeight="bold">
            Crea una cuenta
          </Link>
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
