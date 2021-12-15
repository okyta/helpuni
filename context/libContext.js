import React, { createContext, useState } from 'react';
import { useBreakpointValue } from '@chakra-ui/react';

export const LibContext = createContext();

const LibProvider = ({ children }) => {
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

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  //

  const top = { base: '90%', md: '40%' };
  const side = { base: '30%', md: '30px' };

  return (
    <LibContext.Provider value={{ settings, top, side }}>
      {children}
    </LibContext.Provider>
  );
};

export default LibProvider;
