import Head from 'next/head';

import {
  LinkOverlay,
  LinkBox,
  Spacer,
  Flex,
  MenuItem,
  MenuList,
  MenuButton,
  Menu,
  Link,
  Tooltip,
  Center,
  Image,
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  Icon,
  useColorModeValue,
  createIcon,
} from '@chakra-ui/react';

import { ChevronDownIcon, ExternalLinkIcon, EmailIcon } from '@chakra-ui/icons';
import { BsGithub } from 'react-icons/bs';

export default function CallToActionWithAnnotation() {
  return (
    <>
      <Flex>
        <Stack
          as={Box}
          textAlign={{ base: 'center', sm: 'left' }}
          spacing={{ base: 8, md: 24 }}
          py={{ base: 18, md: 24 }}
        >
          <Heading
            pt="30px"
            fontWeight={180}
            fontSize={{ base: '6xl', sm: '2xl', md: '7xl' }}
            lineHeight={'90%'}
          >
            Bem vindo calouro {}
            <br />
            <Text
              as={'span'}
              color={'green.400'}
              fontSize={{ base: '2xl', sm: '2xl', md: '5xl' }}
            >
              Veja opções e contatos para lhe ajudar nessa aventura.
              <br />
              Conheça-nós e{' '}
              <Text color={'red.500'} as="u">
                <Link href="#atl">participe</Link>
              </Text>{' '}
              🙈
            </Text>
          </Heading>

          <Stack
            direction={'column'}
            spacing={3}
            align={'center'}
            alignSelf={'center'}
            position={'relative'}
          >
            <Menu>
              <MenuButton
                colorScheme={'green'}
                as={Button}
                rightIcon={<ChevronDownIcon />}
                bg="green.500"
                rounded="full"
                _hover={{ bg: 'green.500' }}
              >
                Começar
              </MenuButton>
              <MenuList rounded="md" colorScheme={'green'}>
                <Link href="#org" color="whatsapp.700">
                  <MenuItem>
                    Organizações Estudantis{' '}
                    <ExternalLinkIcon mx="1px" margin="1" />{' '}
                  </MenuItem>
                </Link>

                <Link href="#empre" color="whatsapp.700">
                  <MenuItem>
                    Empresas Júniors
                    <ExternalLinkIcon mx="1px" margin="1" />
                  </MenuItem>
                </Link>

                <Link href="#empre" color="whatsapp.700">
                  <MenuItem>
                    Estágios
                    <ExternalLinkIcon mx="1px" margin="1" />
                  </MenuItem>
                </Link>

                <Link href="#atl" isInternal color="whatsapp.700">
                  <MenuItem>
                    Atléticas
                    <ExternalLinkIcon mx="1px" margin="1" />
                  </MenuItem>
                </Link>

                <Link href="#res" isInternal color="whatsapp.700">
                  <MenuItem>
                    Preço Restaurantes <ExternalLinkIcon mx="1px" margin="1" />{' '}
                  </MenuItem>
                </Link>

                <Link href="#org" isInternal color="whatsapp.700">
                  <MenuItem>
                    Repúblicas Masculinas{' '}
                    <ExternalLinkIcon mx="1px" margin="1" />
                  </MenuItem>
                </Link>

                <Link href="#org" isInternal color="whatsapp.700">
                  <MenuItem>
                    Repúblicas Femininas
                    <ExternalLinkIcon mx="1px" margin="1" />
                  </MenuItem>
                </Link>

                <Link href="#org" isInternal color="whatsapp.700">
                  <MenuItem>
                    Serviços <ExternalLinkIcon mx="1px" margin="1" />{' '}
                  </MenuItem>
                </Link>
              </MenuList>
            </Menu>

            <Button variant={'link'} colorScheme={'pink'} size={'sm'}>
              <Link href="https://icredi.me" isExternal>
                Conheça-nós <ExternalLinkIcon />
              </Link>
            </Button>
            <Box>
              <Icon
                as={Arrow}
                color={useColorModeValue('gray.800', 'gray.300')}
                w={71}
                position={'absolute'}
                right={-71}
                top={'10px'}
              />
              <Text
                fontSize={'lg'}
                fontFamily={'Caveat'}
                position={'absolute'}
                right={'-125px'}
                top={'-15px'}
                transform={'rotate(10deg)'}
              >
                Clique aqui :)
              </Text>
            </Box>

            <LinkBox id="infoDevs" pt={4}>
              <Tooltip
                label="Participe e ajude a melhorar o trabalho. 😉"
                placement="top"
                rounded="md"
                hasArrow
              >
                <LinkOverlay
                  href="https://github.com/anakix/helpuni.git"
                  isExternal
                >
                  <Button
                    rounded={'full'}
                    colorScheme={'green'}
                    align={'center'}
                    rightIcon={<BsGithub />}
                  >
                    Github
                  </Button>
                </LinkOverlay>
              </Tooltip>
            </LinkBox>
            <LinkBox>
              <Tooltip
                label="😉"
                placement="right-end"
                rounded="md"
                isOpen
                hasArrow
              >
                <LinkOverlay href="mailto:me@icredi.me">
                  <Button rounded={'full'} colorScheme={'green'}>
                    {' '}
                    <EmailIcon />
                  </Button>
                </LinkOverlay>
              </Tooltip>
            </LinkBox>
          </Stack>
        </Stack>
      </Flex>
    </>
  );
}

const Arrow = createIcon({
  displayName: 'Arrow',
  viewBox: '0 0 72 24',
  path: (
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0.600904 7.08166C0.764293 6.8879 1.01492 6.79004 1.26654 6.82177C2.83216 7.01918 5.20326 7.24581 7.54543 7.23964C9.92491 7.23338 12.1351 6.98464 13.4704 6.32142C13.84 6.13785 14.2885 6.28805 14.4722 6.65692C14.6559 7.02578 14.5052 7.47362 14.1356 7.6572C12.4625 8.48822 9.94063 8.72541 7.54852 8.7317C5.67514 8.73663 3.79547 8.5985 2.29921 8.44247C2.80955 9.59638 3.50943 10.6396 4.24665 11.7384C4.39435 11.9585 4.54354 12.1809 4.69301 12.4068C5.79543 14.0733 6.88128 15.8995 7.1179 18.2636C7.15893 18.6735 6.85928 19.0393 6.4486 19.0805C6.03792 19.1217 5.67174 18.8227 5.6307 18.4128C5.43271 16.4346 4.52957 14.868 3.4457 13.2296C3.3058 13.0181 3.16221 12.8046 3.01684 12.5885C2.05899 11.1646 1.02372 9.62564 0.457909 7.78069C0.383671 7.53862 0.437515 7.27541 0.600904 7.08166ZM5.52039 10.2248C5.77662 9.90161 6.24663 9.84687 6.57018 10.1025C16.4834 17.9344 29.9158 22.4064 42.0781 21.4773C54.1988 20.5514 65.0339 14.2748 69.9746 0.584299C70.1145 0.196597 70.5427 -0.0046455 70.931 0.134813C71.3193 0.274276 71.5206 0.70162 71.3807 1.08932C66.2105 15.4159 54.8056 22.0014 42.1913 22.965C29.6185 23.9254 15.8207 19.3142 5.64226 11.2727C5.31871 11.0171 5.26415 10.5479 5.52039 10.2248Z"
      fill="currentColor"
    />
  ),
});
