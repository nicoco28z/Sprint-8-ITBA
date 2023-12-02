import {Accordion, AccordionItem, AccordionButton, AccordionIcon, Flex, Box} from "@chakra-ui/react";

import PanelConvertion from "../components/AdditionalTools/PanelConvertion";
import PanelCalculator from "../components/AdditionalTools/PanelCalculator"

function AdditionalTools(){    
    return(
        <Flex justify="center">
            <Accordion width="90%" allowMultiple>
                <AccordionItem>
                    <AccordionButton _expanded={{ bg: 'gray', color: 'white' }}>
                        <Box as="span" flex='1' textAlign='left'>Conversion de Monedas</Box>
                        <AccordionIcon/>
                    </AccordionButton>
                    <PanelConvertion/>
                </AccordionItem>
                <AccordionItem>
                    <AccordionButton _expanded={{ bg: 'gray', color: 'white' }}>
                        <Box as="span" flex='1' textAlign='left'>Calculadora de Prestamos</Box>
                        <AccordionIcon/>
                    </AccordionButton>
                    <PanelCalculator/>
                </AccordionItem>
            </Accordion>
        </Flex>
    )
}



export default AdditionalTools