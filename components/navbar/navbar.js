import { ReactNode } from 'react';
import {
  Image,
  Tooltip,
  Box,
  Flex,
  Avatar,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

import { motion } from 'framer-motion';

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'#'}
  >
    {children}
  </Link>
);

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        bg={useColorModeValue('white', 'gray.70')}
        m={{ base: '4', sm: '2', md: '6' }}
      >
        <Flex h={20} alignItems={'center'} justifyContent={'left'}>
          <Flex>
            <Stack
              direction={'row'}
              spacing={{ base: '100', sm: '1000', md: '980' }}
            >
              <Tooltip label="Modo noturno" rounded="full">
                <motion.button
                  whileHover={{
                    scale: 1.2,
                    transition: { duration: 1 },
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Button onClick={toggleColorMode} rounded="full" size={'lg'}>
                    {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                  </Button>
                </motion.button>
              </Tooltip>
              <Flex h={20} alignItems={'center'} justifyContent={'right'}>
                    <motion.button
                        whileHover={{
                          scale: 1.2,
                          transition: { duration: 1 },
                        }}
                        whileTap={{ scale: 0.9 }}
                      >
                      <Link href='404'>
                        <Button  rounded="full" size={'lg'} bg={useColorModeValue('teal', 'gray.70')}>
                        Happy hour ????
                        </Button>
                      </Link>
                    </motion.button>
                </Flex>
            </Stack>
          </Flex>
        </Flex>



      </Box>

    </>
  );
}
