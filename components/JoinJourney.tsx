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
    <Box color="white"  m='auto' mb='24' className={styles.text2}>
    <Box>
      <Box  m="auto">
        <Text
          fontSize={"54px"}
          
          color={"#fff"}
          textAlign="center"
          className={styles.heading}
        >
          Join Us on Our Journey
        </Text>
        <Card bgColor={'rgb(30,28,56)'} maxWidth={'900px'} m='auto' borderRadius='12px' mt='10'>

<CardBody  >
 
  <Text color={'white'}p='46px' fontSize={{base:'16px', md:'26px'}} maxWidth={'680px'} m='auto' textAlign={'center'}>Join us on our journey, explore our products, and be a part of the innovation-driven, people-centric revolution in technology. Together, we can build a brighter, more accessible, and equitable future for all.</Text>
</CardBody>
  </Card>
      </Box>
      </Box>
    </Box>
  );
}

export default JoinJourney;
