import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  HStack,
  Heading,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";
import PagosCard from "../components/PagosCard/PagosCard";

export default function PagosPage() {

  return (
    <>
      <Heading textAlign="center" mt="10px">
        Pagos
      </Heading>

      <Box textAlign="center" mt="15px" mb="25px">
        <Button bg="#d4af37" >Nuevo Pago</Button>
      </Box>

      <Box>
        <VStack pr='25%' pt="10px" pb='20px' alignContent="center" mt="45px" justify="center">
            <Heading size="md">Pagos por vencer</Heading>
            <Button bg="#d4af37">Agregar un servicio</Button>
        </VStack>
          <VStack>
            <HStack
              border="1px"
              borderColor="gray.300"
              borderRadius="10px"
              flexWrap="wrap"
              justifyContent="right"
              spacing={6}>

            <PagosCard name="Factura de Luz" price={1750} />
            <PagosCard name="Factura del Agua" price={2000} />
            <PagosCard name="Club Sanfer" price={2500} />
            </HStack>
          </VStack>
      </Box>
    </>
  );
}
