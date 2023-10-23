import React from "react";
import {
  Box,
  Flex,
  Text,
  Heading,
  Button,
  IconButton,
  List,
  ListItem,
  ListIcon,
  Card,
  CardHeader,
  SimpleGrid,
  CardBody,
  CardFooter,
} from "@chakra-ui/react";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import Bg from "../public/assets/JoinBg2.svg";
import ListIcon2 from "../public/assets/listIcon.svg";
import { Icon, createIcon } from '@chakra-ui/react'
function JoinJourney() {
  return (
    <Box color="white"  m='auto' className={styles.text2}>
      <Box  m="auto">
        <Card bgColor={'rgb(30,28,56)'} borderRadius='12px' mt='10'>

<CardBody  maxWidth={'1000px'} textAlign={'center'}>
<Box gap={'1'} textAlign={'center'}  color={"#fff"}  className={styles.text}>
    {/* <Text width='10px' height='10px' textAlign={'center'}  borderRadius={'100%'} bgColor={'rgba(59, 130, 246, 1)'}></Text> */}
  <Text fontSize={{base:'12px', md:'16px'}} textAlign={'center'}><Icon viewBox='0 0 200 200' color='rgba(59, 130, 246, 1)'>
  <path
    fill='currentColor'
    d='M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0'
  />
</Icon> Our Core Values: The Foundation of Everything We Do</Text> 
    </Box>
  <Text color={'white'}p='26px' fontSize={{base:'16px', md:'18px'}} maxWidth={'800px'} textAlign={'center'}>We aim to set the standard for cross-board solutions, and adapt and excel in an ever-evolving tech landscape.</Text>
</CardBody>
  </Card>
      </Box>
    </Box>
  );
}

export default JoinJourney; 
