import { Card, Stack, Image } from "@chakra-ui/react";
import LoginArea from "../components/Formulario/Login";

function LoginPage() {
    return (
        <>
            <Card
                direction={{ base: 'column', sm: 'row' }}
                overflow='hidden'
                variant='outline'
                justifyContent="center"
                align="center"
                bg="teal"
                >
                <Image
                    objectFit='cover'
                    maxW={{ base: '100%', sm: '500px' }}
                    src="./techbank.jpg"
                    alt='BancPillier'
                />

        <Stack>
          <LoginArea />
        </Stack>
      </Card>
    </>
  );
}

export default LoginPage;
