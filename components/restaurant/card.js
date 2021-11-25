import {
  Flex,
  Box,
  Center,
  Text,
  Stack,
  List,
  ListItem,
  ListIcon,
  Button,
  useColorModeValue,
} from '@chakra-ui/react';

import { CheckIcon } from '@chakra-ui/icons';

export default function blogPostWithImage() {
  return (
    <Center>
      <Box
        id="res"
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'sm'}
        overflow={'hidden'}
      >
        <Stack
          textAlign={'center'}
          color={useColorModeValue('gray.800', 'white')}
          align={'center'}
          pb={6}
        >
          <Text
            bg={useColorModeValue('red.300', 'green.400')}
            p={2}
            rounded={'md'}
          >
            🌈
          </Text>
        </Stack>

        <Box bg={useColorModeValue('gray.50', 'gray.900')} px={6} py={6}>
          <List spacing={3}>
            <ListItem>
              <ListIcon as={CheckIcon} color="green.400" />
              Restaurante popular de Sinop
            </ListItem>
            <Stack direction={'row'} align={'center'} justify={'center'}>
              <Text fontSize={'3xl'}>R$</Text>
              <Text fontSize={'6xl'} fontWeight={800}>
                5,15
              </Text>
              <Text color={'gray.500'}>/bandeja</Text>
            </Stack>

            <ListItem>
              <ListIcon as={CheckIcon} color="green.400" />
              Valor médio - Marmita
            </ListItem>
            <Stack direction={'row'} align={'center'} justify={'center'}>
              <Text fontSize={'3xl'}>R$</Text>
              <Text fontSize={'6xl'} fontWeight={800}>
                14,00
              </Text>
              <Text color={'gray.500'}></Text>
            </Stack>

            <ListItem>
              <ListIcon as={CheckIcon} color="green.400" />
              Valor médio - Aluguel - 2 Quartos
            </ListItem>
            <Stack direction={'row'} align={'center'} justify={'center'}>
              <Text fontSize={'3xl'}>R$</Text>
              <Text fontSize={'6xl'} fontWeight={800}>
                725,00
              </Text>
              <Text color={'gray.500'}></Text>
            </Stack>
          </List>
        </Box>
      </Box>
    </Center>
  );
}
