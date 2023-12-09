import {
    Accordion,
    AccordionItem,
    AccordionButton,
    Box
  } from '@chakra-ui/react'

export default function PrestamoAprobado({Prestamo}){
    return(
        <Accordion allowMultiple mt="3">
            <AccordionItem borderBottom="2px" bg='#87E687'>
                <AccordionButton>
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
            </AccordionItem>
            
        </Accordion>
    )
}