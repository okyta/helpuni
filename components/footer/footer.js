import {
  Image,
  Center,
  Box,
  chakra,
  Container,
  Link,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from '@chakra-ui/react';

import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { ReactNode } from 'react';

const Logo = (props) => {
  return (
    <div>
      <Image
        src="https://img.buymeacoffee.com/api/?name=helpune&size=250&bg-image=bmc&background=5F7FFF"
        w="70px"
      />
    </div>
  );
};

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function SmallCentered() {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
    >
      <Container
        as={Stack}
        maxW={'6xl'}
        py={10}
        spacing={4}
        justify={'center'}
        align={'center'}
      >
        <Logo />
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.700')}
      >
        <Container
          as={Stack}
          maxW={'2xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}
        >
          <Text>© 2022 Cooperativa iCredi. Todos os direitos reservados</Text>

          <Stack direction={'row'} spacing={6}>
            <SocialButton label={'Twitter'} href={'#'}>
              <FaTwitter />
            </SocialButton>

            <SocialButton
              label={'Instagram'}
              href={'https://www.instagram.com/unematsinopoficial/'}
            >
              <FaInstagram />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
