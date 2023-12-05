import { Box, Button, HStack, Heading, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import TransferenciaCard from "../components/TransferenciaCard/transferenciaCard";

export default function TransferenciasPage() {
  return (
    <>
      <Heading textAlign="center" mt="10px">
        Transferencias
      </Heading>
      <Box display="grid" textAlign="center" mt="1rem" p="20px">
        <HStack justifyContent="center">
          <Button bg="#d4af37" >Transferir con Alias, CBU o CVU</Button>
          <Button bg="#d4af37" >Ingresar Dinero</Button>
        </HStack>
      </Box>
 
      <Box ml="5rem">
        <Heading size="md" textAlign="start" mt="25px">
          Transferir a contactos
        </Heading>

        <Button bg="#d4af37" mt="5px">Agregar Contacto + </Button>

        <SimpleGrid
          spacing={7}
          templateColumns="repeat(auto-fill, minmax(120px, 1fr))"
          mt='25px'>
          <TransferenciaCard name="Aldo Andres" />
          <TransferenciaCard name="Nicolas Colombo" />
          <TransferenciaCard name="Harold" />
          <TransferenciaCard name="Lorezo Forchieri" />
          <TransferenciaCard name="John Doe" />
        </SimpleGrid>
      </Box>
    </>
  );
}
