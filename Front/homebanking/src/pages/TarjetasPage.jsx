import { useState } from "react"
import DisplayTarjeta from "../components/Tarjeta/TarjetaDisplay"
import { Stack, Text } from "@chakra-ui/react"
import getTarjetas from "../api/tarjetas";

export default function TarjetasPage(){
  
  const [data, setData] = useState([])
  useEffect(() => {
      const fetchData = async () => {
          const result = await getTarjetas();
          setData(result);
      };

      fetchData();
  }, []);
  
  let cards = <Text>No hay tarjetas que mostrar</Text>
  if(!data.lenght) cards = data.map(c => <DisplayTarjeta key={c.id} card={c}/>)

  

  return(
      <Layout>
          <Stack display="flex" justify="center" align="center">
              {cards}
          </Stack>
      </Layout>
  )
}