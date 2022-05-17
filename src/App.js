import { Heading, VStack, Flex, IconButton, Spacer, useColorMode } from '@chakra-ui/react';
import React from 'react';
import {FaSun, FaMoon, FaGithub, FaLinkedin } from  'react-icons/fa';
import Header from './components/Header'
import Profile from './components/Profile'
import Social from './components/Social'

function App() {

  const { colorMode, toggleColorMode} = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <VStack p={5}>
      <Flex w="100%">
        <Heading
          ml="8" size = "md" fontWeight="semibold" color="orange.400">Moe Ghanem</Heading>
      <Spacer/>
      <IconButton ml = {2} icon={<FaGithub/>} isRound = "true" onClick={toggleColorMode}></IconButton>
      <IconButton ml = {2} icon={<FaLinkedin/>} isRound = "true" onClick={toggleColorMode}></IconButton>
      <IconButton ml = {8} icon={isDark ? <FaMoon/> :<FaSun/>} isRound = "true" onClick={toggleColorMode}></IconButton>
      </Flex>
      <Header/>
      <Social/>
      <Profile/>
    </VStack>
  );
}

export default App;
