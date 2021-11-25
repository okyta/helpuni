import React from 'react';
import { Stack, Text, Button } from '@chakra-ui/react';
import { FcLock } from 'react-icons/fc';

export default function SimpleCookiePreference() {
  return (
    <Stack p="4" boxShadow="lg" m="4" borderRadius="sm">
      <Stack direction="row" alignItems="center">
        <Text fontWeight="semibold">Your Privacy</Text>
        <FcLock />
      </Stack>

      <Stack
        direction={{ base: 'column', md: 'row' }}
        justifyContent="space-between"
      >
        <Text fontSize={{ base: 'sm' }} textAlign={'left'} maxW={'4xl'}>
          Utilizamos cookies e tecnologias semelhantes para ajudar a
          personalizar o conteúdo, personalizar e medir anúncios, e proporcionar
          uma melhor experiência. Ao clicar em OK ou ligando uma opção em
          Preferências de Biscoitos, concorda com isto, como delineado na nossa
          Política de Cookie. Para alterar preferências ou retirar
          consentimento, por favor actualize as suas Preferências de Cookie.
        </Text>
        <Stack direction={{ base: 'column', md: 'row' }}>
          <Button variant="outline" colorScheme="green">
            Preferências de Cookie
          </Button>
          <Button colorScheme="green">OK</Button>
        </Stack>
      </Stack>
    </Stack>
  );
}
