import Hero from '../components/hero/hero.js'
import Navbar from '../components/navbar/navbar.js'
import Footer from '../components/footer/footer.js'
import Cookie from '../components/cookie/cookie.js'
import Restaurant from '../components/restaurant/card.js'


import Prismic from "prismic-javascript";
import React, { useState, useEffect } from 'react';

import { Carousel } from 'react-responsive-carousel';
import { Client } from "../prismic-configuration";
import { RichText } from "prismic-reactjs";


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
} from '@chakra-ui/react';

import { ExternalLinkIcon, ChevronDownIcon } from '@chakra-ui/icons'



export default function Home({dce, atleticas, empresas}) {

  return (

    <div>
        
      {/* Navbar spec */}
      <Navbar/>

      <Center>

      {/* Hero spec */}
      <Hero/>


      </Center>


      <Restaurant/>
      
      <Center>
        <Heading id='org' 
          p={10}
          fontWeight={200}
          fontSize={{ base: '2xl', sm: '2xl', md: '5xl' }}
          lineHeight={'110%'} >
          Organizações estudantis <ChevronDownIcon/> 
        </Heading>
      </Center>
      
      <Center>

        <Grid templateColumns={{base: 'repeat(1, 1fr)', sm:'repeat(2, 1fr)', md: 'repeat(3, 1fr)'}} gap={{base: '1', sm:'1', md: '6'}}>
      
      {dce.results.map((dc, index) => (
        
          <div  key={dc.id}>
            
            <Box
              role={'group'}
              p="2"
              m={10}
              maxW={'350px'}
              w={'full'}
              bg={useColorModeValue('white', 'gray.800')}
              boxShadow={'2xl'}
              rounded={'lg'}
              pos={'relative'}
              zIndex={1}>
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
                  top: 5,
                  left: 0,
                  backgroundImage: `url(${dc.data.baner?.url})`,
                  filter: 'blur(15px)',
                  zIndex: -1,
                }}
                _groupHover={{
                  _after: {
                    filter: 'blur(20px)',
                  },
                }}>

                <Image
                  rounded={'lg'}
                  height={230}
                  width={282}
                  objectFit={'cover'}
                  src={dc.data.baner?.url}
                />
              </Box>
            
              <Stack pt={10} align={'left'}>
                
              </Stack>

              <Box as="article" maxW="sm" p="3" borderWidth="1px" rounded="md">
                <Box>
                  <Badge>
                    Presidente: {RichText.render(dc.data?.responsavel)}
                  </Badge>
                </Box>
                <Heading size="md" my="2">
                  
                    {RichText.render(dc.data?.titulo)}
                  
                </Heading>
                <Text mb="3">
                    {RichText.render(dc.data?.apresentacao)}
                </Text >
                <Link href={dc.data?.contato.url} isExternal color="whatsapp.700">
                    Whatsapp <ExternalLinkIcon mx="2px" />
                </Link>
                <br/>
                <Link href={dc.data?.link.url} isExternal color="blue.500">
                    Info <ExternalLinkIcon mx="2px" />
                </Link>
              </Box>
            </Box>
          </div>
        ))}
     </Grid>
    </Center>

    <Center>
        <Heading id="atl" p={10}>Atléticas</Heading>
    </Center>

    <Grid templateColumns={{base: 'repeat(1, 1fr)', sm:'repeat(1, 1fr)', md: 'repeat(3, 1fr)'}} gap={{base: '1', sm:'1', md: '6'}}>

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
              zIndex={1}>
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
                }}>

                <Image
                  rounded={'lg'}
                  height={230}
                  width={282}
                  objectFit={'cover'}
                  src={atletic.data.baner?.url}
                />
              </Box>
            
              <Stack pt={10} align={'left'}>
                
              </Stack>

              <Box as="article" maxW="sm" p="3" borderWidth="1px" rounded="md">
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
                </Text >
                <Link href={atletic.data?.contato.url} isExternal color="whatsapp.700">
                    Whatsapp <ExternalLinkIcon mx="2px" />
                </Link>
                <br/>
                <Link href={atletic.data?.link.url} isExternal color="blue.500">
                    Página Instagram <ExternalLinkIcon mx="2px" />
                </Link>
              </Box>
            </Box>
          </div>
        ))}
      </Grid>



      <Center>
        <Heading id="atl" p={10}>Empresas Júniors</Heading>
      </Center>

    <Grid templateColumns={{base: 'repeat(1, 1fr)', sm:'repeat(1, 1fr)', md: 'repeat(3, 1fr)'}} gap={{base: '1', sm:'1', md: '6'}}>

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
              zIndex={1}>
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
                }}>

                <Image
                  rounded={'lg'}
                  height={230}
                  width={282}
                  objectFit={'cover'}
                  src={empre.data.baner?.url}
                />
              </Box>
            
              <Stack pt={10} align={'left'}>
                
              </Stack>

              <Box as="article" maxW="sm" p="3" borderWidth="1px" rounded="md">
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
                </Text >
                <Link href={empre.data?.contato.url} isExternal color="whatsapp.700">
                    Whatsapp <ExternalLinkIcon mx="2px" />
                </Link>
                <br/>
                <Link href={empre.data?.link.url} isExternal color="blue.500">
                    Página Instagram <ExternalLinkIcon mx="2px" />
                </Link>
              </Box>
            </Box>
          </div>
        ))}
      </Grid>
   
    <Spacer/>        
    <Footer/>


  </div>
  )
}

// this function is called everytime a request/refresh is made

export async function getServerSideProps() {
  const dce = await Client().query(
    Prismic.Predicates.at("document.type", "anuncios")
  );
  const atleticas = await Client().query(
    Prismic.Predicates.at("document.type", "atleticas")
  );
  const empresas = await Client().query(
    Prismic.Predicates.at("document.type", "empresas")
  );

  return {
    props: {
      dce: dce,
      atleticas: atleticas,
      empresas: empresas,
    },
  };
}
