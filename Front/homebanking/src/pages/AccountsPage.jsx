import {
  Flex,
  Stack,
  Box,
  Icon,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Spinner,
  Button,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import CardAccount from "../components/Accounts/AccountCard";
//import AddAccount from "../components/Accounts/AddAccount";
//import { useEffect, useState } from "react";
import { getCuentasCliente, newCuenta } from "../api/cuentas";

export default function Account() {
  /*
  let [cuentas, setCuentas] = useState([]);
  let [actualizador, setActualizador] = useState(false);
  let [componenteCuentas, setComponenteCuentas] = useState([]);
  */

  const cliente = sessionStorage.getItem('usuario')
  
  const { data, isLoading, error } = getCuentasCliente(cliente.id);

  /*
  --UN CLIENTE NO DEBERIA PODER BORRAR UNA CUENTA--
  useEffect(() => {
    let nuevComp = renderAccounts(cuentas);
    setComponenteCuentas(nuevComp);
    setActualizador(false);
  }, [actualizador]);
  */

  return (
    <Stack align="center" width="90%" margin="1" border="0.5px">
      <Button onClick={() => console.log(data)}>Mostrar cuentas</Button>
      <Accordion allowToggle width="95%">
        <AccordionItem>
          <AccordionButton
            bg="gray"
            _expanded={{ bg: "gray.100" }}
            padding="15px"
            borderRadius="3px"
          >
            <Box as="span" flex="1" textAlign="left" />
            <Icon as={AddIcon} />
          </AccordionButton>
          <AccordionPanel>
          <Button bg='#349f77' onClick={() => newCuenta(cliente.id)}>Agregar Cuenta</Button>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
      <Flex wrap="wrap" gap="15px" justify="center" width="100%">
        {isLoading ? (
          <Spinner
            thickness="4px"
            speed="0.5s"
            emptyColor="gray.200"
            color="blue.500"
            size="lg"
          />
        ) : (
          renderAccounts(data? data : [])
        )}
      </Flex>
    </Stack>
  );
}

function renderAccounts(cuentas) {
  if (cuentas.length === 0)
    return <Text textAlign="center">No hay cuentas disponibles.</Text>;
  return cuentas.map((c) => <CardAccount key={c.id} cuenta={c} />);
}
