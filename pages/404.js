import {
  Link,
  Image,
  Box,
  Heading,
  Text,
  Button,
  Center,
  Tooltip,
} from '@chakra-ui/react';

export default function NotFound() {
  return (
    <Box textAlign="center" py={250} px={6}>
      <Heading
        display="inline-block"
        as="h2"
        size="2xl"
        bgGradient="linear(to-r, teal.400, teal.600)"
        backgroundClip="text"
      >
        404
      </Heading>
      <Text fontSize="18px" mt={3} mb={2}>
        Ops! Parece que a página não foi encontrada.
      </Text>

      <Center>
        <Image
          boxSize="100000px"
          objectFit="fill"
          rounded="full"
          src="https://cdn.buymeacoffee.com/uploads/profile_pictures/2020/10/61a02a6a61422f1718b2dfc60db93592.png@300w_0e.webp"
          rel="stylesheet"
          alt="buycoffe"
          boxSize="100px"
        />
      </Center>
      <Text color={'gray.500'} mb={6} pt={10}>
        Fique tranquilo. A Equipe da HelpUni está verificando o ocorrido.
      </Text>

      <Button
        colorScheme="teal"
        bgGradient="linear(to-r, teal.400, teal.500, teal.600)"
        color="white"
        variant="solid"
      >
        <Link href="/">Voltar</Link>
      </Button>
    </Box>
  );
}
