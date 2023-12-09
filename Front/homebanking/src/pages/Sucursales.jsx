import {
  Card,
  CardHeader,
  CardBody,
  Heading,
  Stack,
  StackDivider,
  Box,
  Text,
} from "@chakra-ui/react";
import useSucursales from '../api/sucursales'


export default function Sucursales() {

  //Esta página por el momento se encuentra hardcodeada
  //Está pensada para que los usuarios válidos puedan ver su información y editarla si asi lo quisiesen.

  const {data} = useSucursales()
  console.log(data)

  return (
    <Card maxWidth="400px" m="auto" height="70%" mt="5%" shadow="dark-lg">
      <CardHeader>
        <Heading size="lg" textAlign="center">
          Nuestras Sucursales
        </Heading>
      </CardHeader>
      <CardBody marginTop="28px">
        <Stack divider={<StackDivider />} spacing="2.5" marginTop="-2rem">
          <Box>
            <Heading size="xs">Sucursal N°023</Heading>
            <Text fontSize="sm">
              Direccion: 
            </Text>
          </Box>
          <Box>
            <Heading size="xs">Sucursal N°231</Heading>
            <Text fontSize="sm">
              Direccion: 
            </Text>
          </Box>
          <Box>
            <Heading size="xs">Sucursal N°765</Heading>
            <Text fontSize="sm">
              Direccion: 
            </Text>
          </Box>
          <Box>
            <Heading size="xs">Sucursal N°007</Heading>
            <Text fontSize="sm">
              Direccion: 
            </Text>
          </Box>
          <Box>
            <Heading size="xs">Sucursal N°123</Heading>
            <Text fontSize="sm">
              Direccion: 
            </Text>
          </Box>
          <Box>
            <Heading size="xs">Sucursal N°468</Heading>
            <Text fontSize="sm">
              Direccion: 
            </Text>
          </Box>
        </Stack>
      </CardBody>
    </Card>
  );
}