import { Card, Stack, Image } from "@chakra-ui/react";
import RegisterArea from "../components/Formulario/Register";
import SolicitarPrestamo from "../components/Prestamos/SolicitarPrestamo";

export default function Prestamos() {
    return (
        <>
            <Card
                direction={{ base: 'column', sm: 'row' }}
                overflow='hidden'
                variant='outline'
                justifyContent="center"
                align="center"
                bg="teal"
                >

        <Stack>
          <SolicitarPrestamo />
        </Stack>
      </Card>
    </>
  );
}
