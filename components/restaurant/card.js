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
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
} from '@chakra-ui/react';

import { CheckIcon } from '@chakra-ui/icons';
import { motion } from 'framer-motion';

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

        <Table variant="simple" colorScheme="teal">
          <Tbody>
            <Tr>
              <Td>Restaurante Popular Sinop</Td>
              <Td>Bandeija</Td>
              <Td isNumeric>R$ 5.15</Td>
            </Tr>
            <Tr>
              <Td>Valor médio - Marmita</Td>
              <Td>Pequena</Td>
              <Td isNumeric>R$ 14.00</Td>
            </Tr>
            <Tr>
              <Td>Valor médio - Aluguel</Td>
              <Td>2 Quartos</Td>
              <Td isNumeric>R$ 725.00</Td>
            </Tr>
          </Tbody>
        </Table>
      </Box>
    </Center>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`http://ip.jsontest.com/`);
  const data = await res.json();
  console.log(data);

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {}, // will be passed to the page component as props
  };
}
