import { Card, Stack, Image } from "@chakra-ui/react";
import RegisterArea from "../components/Formulario/Register";
import SolicitarPrestamo from "../components/Prestamos/SolicitarPrestamo";

export default function Prestamos() {
    return (
        <>
          <Stack>
            <SolicitarPrestamo />
          </Stack> 
        </>
  );
}
