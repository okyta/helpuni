import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
} from '@chakra-ui/react';
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdFacebook,
  MdOutlineEmail,
} from 'react-icons/md';
import { BsGithub, BsDiscord, BsPerson } from 'react-icons/bs';

export default function contact() {
  return (
    <Flex>
      <Box
        margin={{ base: 20, sm: 3, md: 5, lg: 20 }}
        bg="#02054B"
        color="white"
        borderRadius="lg"
      >
        <Box p={4}>
          <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
            <WrapItem>
              <Box>
                <Heading>Oferecimento</Heading>
                <Text color="gray.500">Parceria que para</Text>
                <Box>
                  <VStack pl={0} alignItems="flex-start">
                    <Button
                      size="md"
                      height="48px"
                      width="200px"
                      variant="ghost"
                      color="#DCE2FF"
                      _hover={{ border: '2px solid #1C6FEB' }}
                      leftIcon={<MdPhone color="#1970F1" size="20px" />}
                    >
                      +91-988888888
                    </Button>
                    <Button
                      size="md"
                      height="48px"
                      width="200px"
                      variant="ghost"
                      color="#DCE2FF"
                      _hover={{ border: '2px solid #1C6FEB' }}
                      leftIcon={<MdEmail color="#1970F1" size="20px" />}
                    >
                      me@icredi.me
                    </Button>
                  </VStack>
                </Box>
              </Box>
            </WrapItem>
          </Wrap>
        </Box>
      </Box>
    </Flex>
  );
}
