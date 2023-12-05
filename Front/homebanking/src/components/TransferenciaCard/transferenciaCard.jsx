import React from "react";
import {
  Button,
  Avatar,
  Card,
  CardHeader,
  Text,
  CardFooter,
} from "@chakra-ui/react";

export default function TransferenciaCard({name}) {
  return (
    <>
      <Card maxH="180px" boxShadow="dark-lg">
        <CardHeader textAlign="center">
          <Avatar name={name} />
        </CardHeader>
        <Text textAlign="center">{name}</Text>
        <CardFooter>
          <Button bg="#d4af37">Transferir</Button>
        </CardFooter>
      </Card>
    </>
  );
}
