import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    Button,
    Box
  } from '@chakra-ui/react'

import { editarPrestamo } from '../../api/prestamo'

export default function PrestamoPendiente({Prestamo}){
    return(
        <Accordion allowMultiple mt="3">
            <AccordionItem borderBottom="2px">
                <AccordionButton bg='#FFDA7D' >
                    <Box as="span" flex='1' textAlign='left' p="3">
                        <h2>{`${Prestamo.cliente.first_name} ${Prestamo.cliente.last_name}`}</h2>
                    </Box>
                    <Box as="span" flex='1' textAlign='rigth' p="3">
                        <h2>${Prestamo.monto}</h2>
                    </Box>
                    <Box as="span" flex='1' textAlign='rigth'>
                        <h2>{Prestamo.estado.toUpperCase()}</h2>
                    </Box>
                </AccordionButton>
                <AccordionPanel>
                    <Box textAlign='right'>
                        <Button bg="#349f77" mr="3" onClick={() => {editarPrestamo(Prestamo.id_prestamo, "aprobar")
                            window.location.reload(false)}}>Aprobar</Button>
                        <Button bg="#349f77" onClick={() => {editarPrestamo(Prestamo.id_prestamo, "desaprobar")
                            window.location.reload(false)}}>Desaprobar</Button>
                    </Box>
                </AccordionPanel>
            </AccordionItem>
            
        </Accordion>
    )
}