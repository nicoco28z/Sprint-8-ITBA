import { SimpleGrid, Stack, Stat, StatHelpText } from '@chakra-ui/react'

import Tarjeta from './Tarjeta'

export default function DisplayTarjeta({card}) {

  return (
    <Stack bgColor="gray.100" boxShadow='xl' margin="10px" width="90%" position="relative" borderRadius="10px">
      <SimpleGrid columns={[1, 2]} spacing="3" 
      alignItems="center" justifyContent="space-around">
        <Stack margin="5">
          <Tarjeta card={card}/>
        </Stack>
        <Stack aling={"center"} justify={"center"} margin="5">
          <Stat>
            <StatHelpText fontSize="6xs">Expira: {card.fecha_vencimiento}</StatHelpText>
          </Stat>
        </Stack>
      </SimpleGrid>
    </Stack>
  )
}