import React from 'react'
import { useNavigate } from "react-router-dom";
import { Button, HStack, Image, Text } from "@chakra-ui/react";

//Esta es una página creada por una cuestión de buenas practicas, para que en caso de que el usuario llegase a querer ingresar una url inválida
//se muestre una alternativa amigable, a la par de una imágen representativa, para volver a donde estaba o ir al inicio de la aplicación.

export default function ErrorPage() {

  const navigate = useNavigate();

  return (
    <>
      <Text textAlign="center" fontSize="xl">
        Página no encontrada.
      </Text>
      <Image
        src="./error_page_img.jpg"
        objectFit="cover"
        objectPosition="50% 50%"
        boxSize="60vh"
        alt="Error 404, página no encontrada"
        margin="auto"
      />
      <HStack justify="center">
        <Button onClick={() => navigate(-1)}>Retroceder</Button>
        <Button onClick={() => navigate("/home")}>Volver al inicio</Button>
      </HStack>
    </>
  );
}
