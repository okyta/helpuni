import 'tailwindcss/tailwind.css';

import { ChakraProvider } from '@chakra-ui/react';
import { analytics } from '../utils/firebase.js';

import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
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

        <script
          data-name="BMC-Widget"
          data-cfasync="false"
          src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js"
          data-id="helpuni"
          data-description="Support me on Buy me a coffee!"
          data-message="Se lhe ajudou, faça uma doação : )"
          data-color="#38A169"
          data-position="Left"
          data-x_margin="18"
          data-y_margin="18"
        ></script>
      </Head>
    </ChakraProvider>
  );
}
export default MyApp;
