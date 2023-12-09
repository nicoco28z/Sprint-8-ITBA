import { Card, CardHeader, CardBody, CardFooter, Text, Button, Divider, Stack} from '@chakra-ui/react'

function CardAccount({cuenta}){
    return(
        <Card key={cuenta.id} variant="outline" align="space-betwen" colorScheme='gray' w="100%">
            <CardHeader>
                <Stack flexDir="row" justify="space-between">
                    <Text fontSize='2xl'>{cuenta.cliente.name}</Text>
                </Stack>
                </CardHeader>
            <Divider colorScheme="blackAlpha"/>
            <CardBody>
                <Stack flexDir="row" justify="space-between">
                    <Text fontSize='3xl' color="gray" align="match-parent">Saldo</Text>
                    <Text fontSize='3xl' color="gray" align="match-parent">${cuenta.saldo}</Text>
                </Stack>
                <Stack flexDir="row" justify="space-between">
                    <Text fontSize='2x1' color="gray">Nro De Cuenta:</Text>
                    <Text fontSize='2x1' color="gray">{cuenta.nro_cuenta}</Text>
                </Stack>
            </CardBody>
            <CardFooter justify="end">
                <Button bg='#349f77' variant='outline'>Transferir</Button>
            </CardFooter>
        </Card>
    )
}

/*
function deleteAccount(numberAccount, cuentas, setCuentas, setActualizador){
    let filtroCuentas = cuentas.filter(c => c.numberAccount !== numberAccount)
    setCuentas(filtroCuentas)
    setActualizador(true)
}
*/

export default CardAccount