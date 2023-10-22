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
function JoinJourney() {
  return (
    <Box color="white"  m='auto' className={styles.text2}>
      <Box  m="auto">
        <Text
          fontSize={"4xl"}
          fontWeight={"bold"}
          color={"#fff"}
          textAlign="center"
          className={styles.heading}
        >
          Join Us on Our Journey
        </Text>
        <Card bgColor={'rgb(30,28,56)'} borderRadius='12px' mt='10'>

<CardBody  maxWidth={'1000px'} >
 
  <Text color={'white'}p='46px' fontSize={{base:'16px', md:'18px'}} maxWidth={'700px'} textAlign={'center'}>Join us on our journey, explore our products, and be a part of the innovation-driven, people-centric revolution in technology. Together, we can build a brighter, more accessible, and equitable future for all.</Text>
</CardBody>
  </Card>
      </Box>
    </Box>
  );
}

export default JoinJourney;
