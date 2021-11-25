import Hero from '../components/hero/hero.js';
import Navbar from '../components/navbar/navbar.js';
import Footer from '../components/footer/footer.js';
import Cookie from '../components/cookie/cookie.js';
import Restaurant from '../components/restaurant/card.js';

import Prismic from 'prismic-javascript';
import React, { useState, useEffect } from 'react';

import { Carousel } from 'react-responsive-carousel';
import { Client } from '../prismic-configuration';
import { RichText } from 'prismic-reactjs';
import {
  Grid,
  Tooltip,
  Link,
  LinkBox,
  LinkOverlay,
  Badge,
  Tag,
  Spacer,
  Flex,
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  IconButton,
  useBreakpointValue,
  Container,
} from '@chakra-ui/react';

// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
// And react-slick as our Carousel Lib
import Slider from 'react-slick';

import {
  ExternalLinkIcon,
  ChevronDownIcon,
  WarningIcon,
  Icon,
} from '@chakra-ui/icons';

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 4000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function Home({ dce, atleticas, empresas, estagio }) {
  // As we have used custom buttons, we need a reference variable to
  // change the state

  const [slider, setSlider] = useState(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: '90%', md: '40%' });
  const side = useBreakpointValue({ base: '30%', md: '30px' });

  return (
    <>
      {/* Navbar spec */}
      <Navbar />

      <Center>
        {/* Hero spec */}
        <Hero />
      </Center>

      <Restaurant />

      <Center>
        <Heading
          id="org"
          p={10}
          fontWeight={200}
          fontSize={{ base: '2xl', sm: '2xl', md: '5xl' }}
          lineHeight={'110%'}
        >
          Organizações estudantis <ChevronDownIcon />
        </Heading>
      </Center>

      <Center>
        <Box
          alignItems="center"
          position={'relative'}
          height={{ base: '4xl', sm: '2xl', md: '4xl' }}
          width={'600px'}
          overflow={'hidden'}
        >
          {/* CSS files for react-slick */}
          <link
            rel="stylesheet"
            type="text/css"
            charSet="UTF-8"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
          />

          {/* Left Icon */}
          <IconButton
            aria-label="left-arrow"
            variant="ghost"
            position="absolute"
            left={side}
            top={top}
            transform={'translate(0%, -50%)'}
            zIndex={2}
            onClick={() => slider?.slickPrev()}
          >
            <BiLeftArrowAlt size="40px" />
          </IconButton>

          {/* Right Icon */}
          <IconButton
            aria-label="right-arrow"
            variant="ghost"
            position="absolute"
            right={side}
            top={top}
            transform={'translate(0%, -50%)'}
            zIndex={2}
            onClick={() => slider?.slickNext()}
          >
            <BiRightArrowAlt size="40px" />
          </IconButton>

          {/* Slider */}
          <Slider {...settings} ref={(slider) => setSlider(slider)}>
            {dce.results.map((dc, index) => (
              <div key={dc.id}>
                <Box
                  role={'group'}
                  p="1"
                  m={{ base: '10', md: '125' }}
                  maxW={'350px'}
                  w={'full'}
                  bg={useColorModeValue('white', 'gray.800')}
                  boxShadow={'2xl'}
                  rounded={'lg'}
                  pos={'relative'}
                  zIndex={1}
                >
                  <Box
                    rounded={'lg'}
                    mt={-12}
                    pos={'relative'}
                    height={'230px'}
                    _after={{
                      transition: 'all .3s ease',
                      content: '""',
                      w: 'full',
                      h: 'full',
                      pos: 'absolute',
                      top: 2,
                      left: 0,
                      backgroundImage: `url(${dc.data.baner?.url})`,
                      filter: 'blur(15px)',
                      zIndex: -1,
                    }}
                    _groupHover={{
                      _after: {
                        filter: 'blur(20px)',
                      },
                    }}
                  >
                    <Image
                      rounded={'lg'}
                      height={230}
                      width={282}
                      objectFit={'cover'}
                      src={dc.data.baner?.url}
                    />
                  </Box>

                  <Stack pt={10} align={'left'}></Stack>

                  <Box
                    as="article"
                    maxW="sm"
                    p="3"
                    borderWidth="1px"
                    rounded="md"
                  >
                    <Box>
                      <Badge>
                        Presidente: {RichText.render(dc.data?.responsavel)}
                      </Badge>
                    </Box>
                    <Heading size="md" my="2">
                      {RichText.render(dc.data?.titulo)}
                    </Heading>
                    <Text mb="3">{RichText.render(dc.data?.apresentacao)}</Text>
                    <Link
                      href={dc.data?.contato.url}
                      isExternal
                      color="whatsapp.700"
                    >
                      Whatsapp <ExternalLinkIcon mx="2px" />
                    </Link>
                    <br />
                    <Link href={dc.data?.link.url} isExternal color="blue.500">
                      Info <ExternalLinkIcon mx="2px" />
                    </Link>
                  </Box>
                </Box>
              </div>
            ))}
          </Slider>
        </Box>
      </Center>

      <Center>
        <Heading
          id="atl"
          p={10}
          fontWeight={200}
          fontSize={{ base: '2xl', sm: '2xl', md: '5xl' }}
          lineHeight={'110%'}
        >
          Atléticas <ChevronDownIcon />
        </Heading>
      </Center>

      <Center>
        <Grid
          templateColumns={{
            base: 'repeat(1, 1fr)',
            sm: 'repeat(1, 1fr)',
            md: 'repeat(3, 1fr)',
          }}
          gap={{ base: '1', sm: '1', md: '6' }}
        >
          {atleticas.results.map((atletic, index) => (
            <div key={atletic.id}>
              <Box
                role={'group'}
                p="2"
                m={10}
                maxW={'330px'}
                w={'full'}
                bg={useColorModeValue('white', 'gray.800')}
                boxShadow={'2xl'}
                rounded={'lg'}
                pos={'relative'}
                zIndex={1}
              >
                <Box
                  rounded={'lg'}
                  mt={-12}
                  pos={'relative'}
                  height={'200px'}
                  _after={{
                    transition: 'all .3s ease',
                    content: '""',
                    w: 'full',
                    h: 'full',
                    pos: 'absolute',
                    top: 5,
                    left: 0,
                    backgroundImage: `url(${atletic.data.baner?.url})`,
                    filter: 'blur(15px)',
                    zIndex: -1,
                  }}
                  _groupHover={{
                    _after: {
                      filter: 'blur(20px)',
                    },
                  }}
                >
                  <Image
                    rounded={'lg'}
                    height={230}
                    width={282}
                    objectFit={'cover'}
                    src={atletic.data.baner?.url}
                  />
                </Box>

                <Stack pt={10} align={'left'}></Stack>

                <Box
                  as="article"
                  maxW="sm"
                  p="3"
                  borderWidth="1px"
                  rounded="md"
                >
                  <Box>
                    <Badge>
                      Presidente: {RichText.render(atletic.data?.responsavel)}
                    </Badge>
                  </Box>
                  <Heading size="md" my="2">
                    {RichText.render(atletic.data?.titulo)}
                  </Heading>
                  <Text mb="3">
                    {RichText.render(atletic.data?.apresentacao)}
                  </Text>
                  <Link
                    href={atletic.data?.contato.url}
                    isExternal
                    color="whatsapp.700"
                  >
                    Whatsapp <ExternalLinkIcon mx="2px" />
                  </Link>
                  <br />
                  <Link
                    href={atletic.data?.link.url}
                    isExternal
                    color="blue.500"
                  >
                    Página Instagram <ExternalLinkIcon mx="2px" />
                  </Link>
                </Box>
              </Box>
            </div>
          ))}
        </Grid>
      </Center>

      <Center>
        <Tooltip
          hasArrow
          bg="green.500"
          label="Empresa juniors são empresas formadas por estudantes universitários com mentoria de professores. Atuando como empresa privada de prestação de serviços."
          placement="top"
          rounded="lg"
        >
          <Icon />
        </Tooltip>

        <Heading
          id="empre"
          p={10}
          fontWeight={200}
          fontSize={{ base: '2xl', sm: '2xl', md: '5xl' }}
          lineHeight={'110%'}
        >
          Empresas Júniors
          <ChevronDownIcon />
        </Heading>
      </Center>

      <Center>
        <Grid
          templateColumns={{
            base: 'repeat(1, 1fr)',
            sm: 'repeat(1, 1fr)',
            md: 'repeat(3, 1fr)',
          }}
          gap={{ base: '1', sm: '1', md: '6' }}
        >
          {empresas.results.map((empre, index) => (
            <div key={empre.id}>
              <Box
                role={'group'}
                p="2"
                m={10}
                maxW={'330px'}
                w={'full'}
                bg={useColorModeValue('white', 'gray.800')}
                boxShadow={'2xl'}
                rounded={'lg'}
                pos={'relative'}
                zIndex={1}
              >
                <Box
                  rounded={'lg'}
                  mt={-12}
                  pos={'relative'}
                  height={'200px'}
                  _after={{
                    transition: 'all .3s ease',
                    content: '""',
                    w: 'full',
                    h: 'full',
                    pos: 'absolute',
                    top: 5,
                    left: 0,
                    backgroundImage: `url(${empre.data.baner?.url})`,
                    filter: 'blur(15px)',
                    zIndex: -1,
                  }}
                  _groupHover={{
                    _after: {
                      filter: 'blur(20px)',
                    },
                  }}
                >
                  <Image
                    rounded={'lg'}
                    height={230}
                    width={282}
                    objectFit={'cover'}
                    src={empre.data.baner?.url}
                  />
                </Box>

                <Stack pt={10} align={'left'}></Stack>

                <Box
                  as="article"
                  maxW="sm"
                  p="3"
                  borderWidth="1px"
                  rounded="md"
                >
                  <Box>
                    <Badge>
                      Presidente: {RichText.render(empre.data?.responsavel)}
                    </Badge>
                  </Box>
                  <Heading size="md" my="2">
                    {RichText.render(empre.data?.titulo)}
                  </Heading>
                  <Text mb="3">
                    {RichText.render(empre.data?.apresentacao)}
                  </Text>
                  <Link
                    href={empre.data?.contato.url}
                    isExternal
                    color="whatsapp.700"
                  >
                    Whatsapp <ExternalLinkIcon mx="2px" />
                  </Link>
                  <br />
                  <Link href={empre.data?.link.url} isExternal color="blue.500">
                    Página Instagram <ExternalLinkIcon mx="2px" />
                  </Link>
                </Box>
              </Box>
            </div>
          ))}
        </Grid>
      </Center>

      <Center>
        <Tooltip
          hasArrow
          bg="green.500"
          label="Recomendamos que esteja acima do segundo semestre para concorrer a vagas de estágios."
          placement="top"
          rounded="lg"
        >
          <WarningIcon />
        </Tooltip>

        <Heading
          id="esta"
          p={10}
          fontWeight={200}
          fontSize={{ base: '2xl', sm: '2xl', md: '5xl' }}
          lineHeight={'110%'}
        >
          Estágios
          <ChevronDownIcon />
        </Heading>
      </Center>

      <Center>
        <Grid
          templateColumns={{
            base: 'repeat(1, 1fr)',
            sm: 'repeat(1, 1fr)',
            md: 'repeat(3, 1fr)',
          }}
          gap={{ base: '1', sm: '1', md: '6' }}
        >
          {estagio.results.map((esta, index) => (
            <div key={esta.id}>
              <Box
                role={'group'}
                p="2"
                m={10}
                maxW={'330px'}
                w={'full'}
                bg={useColorModeValue('white', 'gray.800')}
                boxShadow={'2xl'}
                rounded={'lg'}
                pos={'relative'}
                zIndex={1}
              >
                <Box
                  rounded={'lg'}
                  mt={-12}
                  pos={'relative'}
                  height={'200px'}
                  _after={{
                    transition: 'all .3s ease',
                    content: '""',
                    w: 'full',
                    h: 'full',
                    pos: 'absolute',
                    top: 5,
                    left: 0,
                    backgroundImage: `url(${esta.data.baner?.url})`,
                    filter: 'blur(15px)',
                    zIndex: -1,
                  }}
                  _groupHover={{
                    _after: {
                      filter: 'blur(20px)',
                    },
                  }}
                >
                  <Image
                    rounded={'lg'}
                    height={230}
                    width={282}
                    objectFit={'cover'}
                    src={esta.data.baner?.url}
                  />
                </Box>

                <Stack pt={10} align={'left'}></Stack>

                <Box
                  as="article"
                  maxW="sm"
                  p="3"
                  borderWidth="1px"
                  rounded="md"
                >
                  <Box>
                    <Badge>
                      Empresa: {RichText.render(esta.data?.responsavel)}
                    </Badge>
                  </Box>
                  <Heading size="md" my="2">
                    {RichText.render(esta.data?.titulo)}
                  </Heading>
                  <Text mb="3">{RichText.render(esta.data?.apresentacao)}</Text>
                  <Link
                    href={esta.data?.contato.url}
                    isExternal
                    color="whatsapp.700"
                  >
                    Whatsapp <ExternalLinkIcon mx="2px" />
                  </Link>
                  <br />
                  <Link href={esta.data?.link.url} isExternal color="blue.500">
                    Página Empresa <ExternalLinkIcon mx="2px" />
                  </Link>
                </Box>
              </Box>
            </div>
          ))}
        </Grid>
      </Center>

      <Spacer />

      <Footer />
    </>
  );
}

// this function is called everytime a request/refresh is made

export async function getServerSideProps() {
  const dce = await Client().query(
    Prismic.Predicates.at('document.type', 'anuncios')
  );
  const atleticas = await Client().query(
    Prismic.Predicates.at('document.type', 'atleticas')
  );
  const empresas = await Client().query(
    Prismic.Predicates.at('document.type', 'empresas')
  );

  const estagio = await Client().query(
    Prismic.Predicates.at('document.type', 'estagio')
  );

  return {
    props: {
      dce: dce,
      atleticas: atleticas,
      empresas: empresas,
      estagio: estagio,
    },
  };
}
