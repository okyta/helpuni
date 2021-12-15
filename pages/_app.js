import 'tailwindcss/tailwind.css';

import { ChakraProvider } from '@chakra-ui/react';
import { analytics } from '../utils/firebase.js';
import { motion } from 'framer-motion';

import LibProvider from '../context/libContext';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <motion.div
      animate={{ rotate: [10, 0, 2, 0] }}
      transition={{ type: 'spring', damping: 300 }}
    >
      <LibProvider>
        <ChakraProvider>
          <Component {...pageProps} />

          <Head>
            <title>HelpUni</title>
            <meta charset="utf-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
            />
            <meta
              name="description"
              content="Hey 👋 Feito para fazer a diferença!"
            />
            <meta property="og:title" content="HelpUni" />
            <meta
              name="og:description"
              content="Hey 👋 Feito para fazer a diferença!"
            />
            <meta property="og:site_name" content="HelpUni" />
            <meta
              property="og:image"
              content="https://img.buymeacoffee.com/api/?url=aHR0cHM6Ly9pbWcuYnV5bWVhY29mZmVlLmNvbS9hcGkvP25hbWU9aGVscHVuaSZzaXplPTMwMCZiZy1pbWFnZT1ibWMmYmFja2dyb3VuZD03OUQ2QjU=&creator=helpuni&is_creating=Acessibilidade&design_code=1&design_color=%2379D6B5&slug=helpuni"
            />
            <link
              rel="icon"
              type="image/png"
              sizes="96x96"
              href="https://img.buymeacoffee.com/api/?name=helpune&size=250&bg-image=bmc&background=5F7FFF"
            />
            <link
              href="https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap"
              rel="stylesheet"
            />
          </Head>
        </ChakraProvider>
      </LibProvider>
    </motion.div>
  );
}
export default MyApp;
