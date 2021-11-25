import { ReactNode } from 'react';
import {
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
      <Box bg={useColorModeValue('white', 'gray.900')} px={2}>
        <Flex h={20} alignItems={'center'} justifyContent={'center'}>
          <Flex alignItems={'center'}>
            <Stack
              direction={'row'}
              spacing={{ base: '20', sm: '100', md: '1030' }}
            >
              <Tooltip label="Modo noturno" rounded="full">
                <Button onClick={toggleColorMode} rounded="full" size={'lg'}>
                  {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                </Button>
              </Tooltip>
              <Menu>
                <Tooltip
                  label="Bora tomar uma ? 🍺"
                  rounded="full"
                  isOpen
                  bg="teal"
                  placement="bottom"
                >
                  <MenuButton
                    as={Button}
                    rounded={'full'}
                    variant={'link'}
                    cursor={'pointer'}
                    minW={1}
                  >
                    <Avatar
                      size={'lg'}
                      src={
                        'https://avatars.dicebear.com/api/adventurer/your-custom-seed.svg'
                      }
                    />
                  </MenuButton>
                </Tooltip>
                <MenuList alignItems={'center'}>
                  <br />
                  <Center>
                    <Avatar
                      size={'2xl'}
                      src={
                        'https://avatars.dicebear.com/api/adventurer/your-custom-seed.svg'
                      }
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>Adm</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem>UNEMAT</MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
