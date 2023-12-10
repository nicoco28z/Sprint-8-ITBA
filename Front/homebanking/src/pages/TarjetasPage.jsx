import { useState, useEffect } from "react";
import DisplayTarjeta from "../components/Tarjeta/TarjetaDisplay";
import { Stack, Text } from "@chakra-ui/react";
import getTarjetas from "../api/tarjetas";

export default function TarjetasPage() {
  const user = sessionStorage.getItem("usuario")
  const usuario = user ? JSON.parse(user) : {};
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      setData(await getTarjetas(usuario.id));
    };

    fetchData();
  }, [usuario.id]);
  let cards = <Text>No hay tarjetas que mostrar</Text>;
  if (!data.lenght)
    cards = data?.map((c) => <DisplayTarjeta key={c.id} card={c} />);

  return (
    <Stack display="flex" justify="center" align="center">
      {cards}
    </Stack>
  );
}
