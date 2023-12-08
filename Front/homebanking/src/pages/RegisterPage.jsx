import { Card, Stack, Image } from "@chakra-ui/react";
import RegisterArea from "../components/Formulario/Register";

function RegisterPage() {
    return (
        <>
            <Card
                direction={{ base: 'column', sm: 'row' }}
                overflow='hidden'
                variant='outline'
                justifyContent="center"
                align="center"
                bg="#d6f2e6"
                >
                <Image
                    objectFit='cover'
                    maxW={{ base: '100%', sm: '500px' }}
                    src="./techbank.jpg"
                    alt='BancPillier'
                />

        <Stack>
          <RegisterArea />
        </Stack>
      </Card>
    </>
  );
}

export default RegisterPage;
