import {
  Card,
  CardHeader,
  CardBody,
  Heading,
  Table,
  Tbody,
  Thead,
  Tr,
  Th,
  Td
} from "@chakra-ui/react";
import getSucursales from "../api/sucursales";
import { useEffect, useState } from "react";

export default function Sucursales() {
  //Esta página por el momento se encuentra hardcodeada
  //Está pensada para que los usuarios válidos puedan ver su información y editarla si asi lo quisiesen.
  const [data, setData] = useState()
  useEffect(() =>{
    const obtenerSucursales = async () => setData(await getSucursales())
    obtenerSucursales()
  },[])
  
  return (
    <Card maxWidth="800px" m="auto" mt="5%" shadow>
      <CardHeader>
        <Heading size="lg" textAlign="center">
          Nuestras Sucursales
        </Heading>
      </CardHeader>
      <CardBody marginTop="10px">
        <Table variant="striped" colorScheme="green" size="sm">
          <Thead>
            <Tr>
              <Th>Sucursal</Th>
              <Th>Provincia</Th>
              <Th>Ciudad</Th>
              <Th>Dirección</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data?.map((sucursal) => (
              <Tr key={sucursal.id_sucursal}>
                <Td>{sucursal.id_sucursal}</Td>
                <Td>{sucursal.provincia}</Td>
                <Td>{sucursal.ciudad}</Td>
                <Td>{sucursal.direccion}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </CardBody>
    </Card>
  );
}
